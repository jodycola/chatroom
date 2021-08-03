class RoomSerializer < ActiveModel::Serializer
  attributes :id, :name, :members, :users
end
