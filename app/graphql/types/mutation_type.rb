module Types
  class MutationType < Types::BaseObject
    field :edit_user, mutation: Mutations::EditUser
    field :update_user, mutation: Mutations::UpdateUser
    field :update_user_only_name, mutation: Mutations::UpdateUserOnlyName
    field :say, mutation: Mutations::Say
  end
end
