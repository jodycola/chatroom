class RoomController < ApplicationController

    def index
        @rooms = Room.all
        render json: @rooms
    end

    def show
        byebug
        @room = Room.find_by(title: params[:title])
        render json: @room
    end
    
end
