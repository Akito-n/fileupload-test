# == Schema Information
#
# Table name: users
#
#  id                     :uuid             not null, primary key
#  avatar                 :string
#  confirmation_sent_at   :datetime
#  confirmation_token     :string
#  confirmed_at           :datetime
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :inet
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :inet
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  sign_in_count          :integer          default(0), not null
#  unconfirmed_email      :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#
# Indexes
#
#  index_users_on_confirmation_token    (confirmation_token) UNIQUE
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#
class Types::Objects::UserType < Types::BaseObject
  def self.authorized?(object, context)
    # only show it to users with the secret_feature enabled
    super and context[:user_signed_in] and context[:current_user].id == object.id
  end

  field :id, ID, null: false
  field :email, String, null: true
  field :avatar, Types::Scalars::File, null: true
  field :created_at, Types::Scalars::DateTime, null: false
  field :image, Types::Scalars::File, null: true
  field :image_url, String, null: true

  def image_url
    object.get_image
  end
end
