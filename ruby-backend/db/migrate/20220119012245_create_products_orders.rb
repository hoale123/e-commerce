class CreateProductsOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :products_orders do |t|
      t.integer :order_id 
      t.integer :product_id
    end
  end
end
