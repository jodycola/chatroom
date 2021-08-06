class RoomSerializer < ActiveModel::Serializer
  attributes :id, :title, :messages

  def messages
    object.messages.map do |message|
      ::MessageSerializer.new(message).attributes
    end
  end

end
