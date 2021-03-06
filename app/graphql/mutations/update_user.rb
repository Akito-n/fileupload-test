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
class Mutations::UpdateUser < Mutations::BaseMutation
  null true

  argument :user_id, ID, required: true
  argument :avatar, Types::Scalars::File, required: false
  argument :example, String, required: false

  field :user, Types::Objects::UserType, null: true

  def authorized?(user_id:, **args)
    @user = User.find(user_id)
    context[:user_signed_in]
  end

  def resolve(user_id:, **args)
    #binding.pry

    @user.update(image: args[:avatar].first)
    { user: @user }
  end
end
