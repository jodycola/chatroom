class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token

    def authenticate
        auth_header = request.headers["Authorization"]
        token = auth_header.split.last
        payload = JWT.decode(token, '$3cr3t', true, { algorithm: 'HS256' })[0]
        @current_user = User.find_by(id: payload["user_id"])
      rescue
        render json: { errors: ["unauthorized!"] }, status: :unauthorized
    end
    
end
