class MessageSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :room_id, :created_at, :date, :user
  belongs_to :room

  def date
    object.created_at.strftime("%F%T")
  end
end
