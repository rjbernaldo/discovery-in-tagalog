require 'rails_helper'

RSpec.describe Product, type: :model do
    before do
        @product = FactoryGirl.build(:product)
    end

    it "should be valid" do
        expect(@product).to respond_to(:title)
        expect(@product).to respond_to(:description)
        expect(@product).to respond_to(:price)
        expect(@product).to respond_to(:published)
        expect(@product).to respond_to(:user_id)

        expect(@product.published).to be_falsey

        # TODO: Add shoulda matchers
        # expect(@product).to belongs_to(:user)
    end
end
