class MessageController < ApplicationController

    def add
        @message = Message.create(
            body: params[:payload][1],
            user_id: 1,
            room_id: 1
        )
            # Find params for user/room id
            # user_id: User.find_by(name: params[:currentUser][:name]).id,
            # room_id: Room.find_by(title: params[:room]).id
        render json: @message
    end

end
