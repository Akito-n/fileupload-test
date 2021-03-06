class GraphqlController < ApplicationController
  # If accessing from outside this domain, nullify the session
  # This allows for outside API access while preventing CSRF attacks,
  # but you'll have to authenticate your user separately
  # protect_from_forgery with: :null_session

  def execute
    if params[:operations].present?
      operations = ensure_hash(params[:operations])
      operation_name = operations["operationName"]
      files = ensure_hash(params[:map]).map { |k, _| params[k] }

      #binding.pry
      parameter = { "input" => operations["variables"]["input"].merge({ "avatar" => files }) }
      variables = ActionController::Parameters.new(parameter)
      query = operations["query"]
      #binding.pry
    else
      variables = ensure_hash(params[:variables])
      query = params[:query]
      operation_name = params[:operationName]
      #binding.pry
    end
    context = {
      user_signed_in: user_signed_in?,
      current_user: current_user,
    }
    #binding.pry
    result = AppSchema.execute(query, variables: variables, context: context, operation_name: operation_name)
    render json: result
  rescue => e
    raise e unless Rails.env.development?
    handle_error_in_development e
  end

  private

  # Handle form data, JSON body, or a blank value
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end

  def handle_error_in_development(e)
    logger.error e.message
    logger.error e.backtrace.join("\n")

    render json: { errors: [{ message: e.message, backtrace: e.backtrace }], data: {} }, status: 500
  end
end
