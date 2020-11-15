Rails.application.routes.draw do
  # devise_for :users
  devise_for :users, controllers: { registrations: 'registrations' }
  get '/users' => 'users#users_sign_up'
  resources :users, only: [:show]
  resources :events
  resources :event_games
  root to: 'events#index'

end
