class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.integer :product_id 
      t.integer :user_id
    end
  end
end
