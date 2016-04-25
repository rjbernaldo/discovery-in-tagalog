require 'rails_helper'

RSpec.describe Api::V1::ProductsController, type: :controller do
    describe "GET show" do
        before(:each) do
            @product = FactoryGirl.create(:product)
            get :show, id: @product.id
        end

        it "returns the information about a reporter on a hash" do
            product_response = json_response[:product]
            expect(product_response[:title]).to eq(@product.title)
            expect(response.response_code).to eq(200)
        end

        it "has the user as an embeded object" do
          product_response = json_response[:product]
          expect(product_response[:user][:email]).to eq(@product.user.email)
        end
    end

    describe "GET index" do
        before(:each) do
            4.times { FactoryGirl.create(:product) }
            get :index
        end

        it "returns 4 records from the database" do
            products_response = json_response[:products]
            expect(products_response.count).to eq(4)
            expect(response.response_code).to eq(200)
        end

        it "returns the user object into each product" do
          products_response = json_response[:products]
          products_response.each do |product_response|
            expect(product_response[:user]).to be_truthy
          end
        end
    end
end
