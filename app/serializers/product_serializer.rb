class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :price, :description, :published, :user
end
