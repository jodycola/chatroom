class MessageController < ApplicationController

    def index
        @messages = Message.all
        render json: @messages
    end

    def add
        @message = Message.create(
            body: params[:message],
            user_id: params[:currentUser][:id],
            room_id: params[:currentRoom][:id]
        )
        if @message.save
            RoomsChannel.broadcast_to(@message.room, {
                room: @message.room,
                user: @message.user,
                message: @message.body
            })
        end
        render json: @message
    end

end
