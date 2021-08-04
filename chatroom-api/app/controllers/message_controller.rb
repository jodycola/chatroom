class MessageController < ApplicationController

    def add
        @message = Message.create(
            body: params[:message],
            user_id: User.find_by(name: params[:currentUser][:name]).id,
            room_id: Room.find_by(title: params[:room]).id
        )
        render json: @message
    end

end
