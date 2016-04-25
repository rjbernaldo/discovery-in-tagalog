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

    describe ".filter_by_title" do
        before(:each) do
            @product1 = FactoryGirl.create(:product, title: "AAA1")
            @product2 = FactoryGirl.create(:product, title: "AAA2")
            @product3 = FactoryGirl.create(:product, title: "BBB3")
            @product4 = FactoryGirl.create(:product, title: "BBB4")
        end

        context "when a filter is set" do
            it "only returns the matching products" do
                expect(Product.filter_by_title("AAA").count).to eq(2)
                expect(Product.filter_by_title("AAA").sort).to match_array([@product1, @product2])
            end
        end
    end

    describe ".recent" do
        before(:each) do
            @product1 = FactoryGirl.create(:product, title: "AAA1")
            @product2 = FactoryGirl.create(:product, title: "AAA2")
            @product3 = FactoryGirl.create(:product, title: "BBB3")
            @product4 = FactoryGirl.create(:product, title: "BBB4")

            @product2.touch
            @product3.touch
        end

        it "only returns the matching products" do
            expect(Product.recent).to match_array([@product3, @product2, @product4, @product1])
        end
    end

    describe ".search" do
        before(:each) do
            @product1 = FactoryGirl.create(:product, title: "AAA1", price: 4)
            @product2 = FactoryGirl.create(:product, title: "AAA2", price: 3)
            @product3 = FactoryGirl.create(:product, title: "BBB3", price: 2)
            @product4 = FactoryGirl.create(:product, title: "BBB4", price: 1)
        end

        context "when title is 'CCC'" do
            it "returns an empty array" do
                search_hash = { keyword: 'CCC' }
                expect(Product.search(search_hash).count).to eq(0)
            end
        end

        context "when title 'BBB'" do
            it "returns product4" do
                search_hash = { keyword: 'BBB' }
                expect(Product.search(search_hash)).to eq([@product3, @product4])
            end
        end

        context "when an empty hash is sent" do
            it "returns all products" do
                expect(Product.search()).to eq([@product1, @product2, @product3, @product4])
            end
        end

        context "when product_ids field is present" do
            it "returns the relevant products" do
                search_hash = { product_ids: [@product1.id, @product2.id]}
                expect(Product.search(search_hash)).to eq([@product1, @product2])
            end
        end
    end
end
