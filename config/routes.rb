Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show, :index]
    resources :images, only: [:create, :index, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :comments, only: [:create, :show, :index, :update, :destroy]
    resources :likes, only: [:create, :show, :index, :destroy]
  end

  root 'static_pages#root'
end
