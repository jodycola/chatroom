class RoomController < ApplicationController

    def index
        @rooms = Room.all
        render json: @rooms
    end

    def show
        @room = Room.find_by(name: params[:name])
        render json: @room
    end
    
end
