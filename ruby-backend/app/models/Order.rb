class Order < ActiveRecord::Base
    belongs_to :cart
    belongs_to :users

    has_and_belongs_to_many :products

    # def total_price
    #     total_price = self.drinks.all.sum(:price)
    #     self.update(total_price: total_price)
    #     total_price
    # end
end 