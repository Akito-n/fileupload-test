module Types
  class MutationType < Types::BaseObject
    field :edit_user, mutation: Mutations::EditUser
    field :update_user, mutation: Mutations::UpdateUser
    field :say, mutation: Mutations::Say
  end
end
