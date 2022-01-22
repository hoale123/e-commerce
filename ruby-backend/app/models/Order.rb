
class Order < ActiveRecord::Base
    belongs_to :user
    belongs_to :cart

    has_and_belongs_to_many :products 

    def total_price
        total_price = self.products.all.sum(:price)
        self.update(total_price: total_price)
        total_price
    end
end 