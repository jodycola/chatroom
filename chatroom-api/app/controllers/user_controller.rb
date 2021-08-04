class UserController < ApplicationController
    before_action :authenticate, only: [:auth]

    def auth
        render json: @current_user
    end

    def login
        user = User.find_by(name: params[:name])
        if user && user.authenticate(params[:password])
            token = JWT.encode({ user_id: user.id }, '$3cr3t', 'HS256')
            render json: { user: UserSerializer.new(user), token: token }
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def signup
        user = User.create(name: params[:name], password: params[:password])
        if user.valid?
            user && user.authenticate(params[:password])
            token = JWT.encode({ user_id: user.id }, '$3cr3t', 'HS256')
            render json: { user: UserSerializer.new(user), token: token }
        else
            render json: { errors: users.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def index
        @users = User.all
        render json: @users
    end

end
