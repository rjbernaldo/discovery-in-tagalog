class Product < ActiveRecord::Base
    validates :title, :user_id, presence: true
    validates :price, numericality: { greater_than_or_equal_to: 0 }, presence: true

    belongs_to :user

    scope :filter_by_title, -> (keyword) { where("lower(title) LIKE ?", "%#{keyword.downcase}%") }
    scope :recent, -> { order(:updated_at) }

    def self.search(params = {})
        products = params[:product_ids].present? ? Product.find(params[:product_ids]) : Product.all
        products = products.filter_by_title(params[:keyword]) if params[:keyword]
        products = products.recent(params[:recent]) if params[:recent].present?

        products
    end
end
