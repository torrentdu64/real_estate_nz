Rails.application.routes.draw do
  get 'houses/new'
  get 'houses/create'
  get 'houses/index'
  get 'houses/show'
  get 'houses/edit'
  get 'houses/update'
  get 'houses/destroy'
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
