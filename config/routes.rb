Rails.application.routes.draw do
  resources :lists, only: [:new, :create, :index, :show, :destroy] do
    resources :bookmarks, only: [:new, :create, :index, :destroy]
    resources :reviews, only: [:new, :create]
  end
  resources :bookmarks, only: [:show, :destroy]
end
