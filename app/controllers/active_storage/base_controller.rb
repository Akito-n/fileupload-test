class ActiveStorage::BaseController < ActionController::Base
  include ActiveStorage::SetCurrent

  protect_from_forgery with: :exception

  def authenticate_for_files
    ## 認証処理
  end
end
