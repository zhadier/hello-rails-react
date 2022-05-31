Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'static#index'
  namespace :v1, defaults: { format: 'json' } do
    get 'messages', to: 'messages#index'
  end

  get '*page', to: 'static#index', constraints: lambda { |req|
    !req.xhr? && req.format.html?
  }

  # Defines the root path route ("/")
  # root "articles#index"
end
