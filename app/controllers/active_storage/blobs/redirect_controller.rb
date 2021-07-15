class ActiveStorage::Blobs::RedirectController < ActiveStorage::BaseController
  before_action :test
  include ActiveStorage::SetBlob

  def show
    expires_in 10.seconds
    redirect_to @blob.service_url(disposition: params[:disposition])
  end

  private

  def test
    true
  end
end
