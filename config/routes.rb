Rails.application.routes.draw do
  root to: 'static_pages#index'
  get 'google', to: 'static_pages#google', as: 'google'
  get 'twitch', to: 'static_pages#twitch', as: 'twitch'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
