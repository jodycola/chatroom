class RoomChannel < ApplicationCable::Channel
  def subscribed
    @room = Room.find_by(title: params[:title])
    stream_for @room
  end

  def showing
    connection_info
    @room = Room.find_by(title: params[:title])
    stream_for @room
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
