class CreateOrders < ActiveRecord::Migration[6.1]
  def change
    create_table :orders do |t|
      t.integer :user_id
      # t.references :product_id
      # t.string :status
      # t.integer :quantity
      t.float :total_price
      t.timestamps
    end
  end
end
