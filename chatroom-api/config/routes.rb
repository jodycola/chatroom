Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # User routes
  get '/auth', to: 'user#auth'
  post '/login', to: 'user#login'
  post '/signup', to: 'user#signup'
  get '/users', to: 'user#index'
  get '/user/:id', to: 'user#show'

  # Room routes
  get '/rooms', to: 'room#index'
  get '/room/:title', to: 'room#show'
  get '/room/:title/message', to: 'room#get_message'

  # Message routes
  post '/add', to: 'message#add'

  # Action Cable routes
  mount ActionCable.server => '/cable'

end
