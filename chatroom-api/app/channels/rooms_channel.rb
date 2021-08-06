class RoomsChannel < ApplicationCable::Channel

    def subscribed
        @room = Room.find_by(title: params[:title])
        stream_for @room
    end

    def received(data)
        RoomsChannel.broadcast_to(@room, {
            room: @room,
            user: @room.user,
            message: @room.message
        })
    end

    def unsubscribed
        # any cleanup needed when channel is unsubscribed
    end

end