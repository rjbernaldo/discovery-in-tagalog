require 'api_constraints'

Rails.application.routes.draw do
  #resources :cors
  #namespace :api, defaults: { format: :json }, constraints: { subdomain: 'api' }, path: '/' do
  namespace :api, defaults: { format: :json }, path: '/' do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
      resources :users, :only => [:show, :create, :update, :destroy]
      resources :sessions, :only => [:create, :destroy]
      resources :products, :only => [:index, :show]
    end
  end

  #devise_for :users
end
