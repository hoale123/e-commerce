require 'pry'
class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  enable :sessions
  # Add your routes here
  get "/products" do
    products = Product.all
    products.to_json
    #show all products
  end

  get '/products/:id' do
    product = Product.find(params[:id])
    product.to_json
  end
  
  get "/orders" do
    user_id = session[:user_id]
    orders = Order.where(user_id: user_id).all
    orders.to_json(include: :products)
  end
  
  get "/users" do
    users = User.all
    users.to_json
  end

  get "/categories" do
    categories = Category.all 
    categories.to_json
  end

  
  post "/products_orders" do 
    order = Order.find_or_create_by(user_id: products_orders_params["user_id"])
    order.products.create(product_ids: products_orders_params["product_id"])
    order.to_json
  end
  
  delete "/orders/:id" do
    # binding.pry
    order = Order.find(params[:id])
    order.delete
  end
  
  
  
  patch "/products/:id" do
    product = Product.find(params[:id])
    product.update(likes: params[:likes])
    product.to_json
    # {message: likes added}
  end
  
  post '/create_order' do
    puts products_orders_params["product_id"]
    order = Order.create(user_id: products_orders_params["user_id"])
    products_orders = OrdersProducts.create(product_id: products_orders_params["product_id"], order_id: order.id)

    order.to_json

  end
  
  private 
  
  def products_orders_params
    allowed_params = %w( user_id product_id)
    params.select {|param,value| allowed_params.include?(param)}
  end

  def create_order_params
    allowed_params = %w( user_id product_ids)
    params.select {|param,value| allowed_params.include?(param)}
  end


end
