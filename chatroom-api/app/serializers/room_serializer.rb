class RoomSerializer < ActiveModel::Serializer
  attributes :id, :title, :messages
end
