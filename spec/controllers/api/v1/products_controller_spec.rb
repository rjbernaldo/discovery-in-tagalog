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
        end

        context "when product_ids parameter is not sent" do
            before(:each) do
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

        context "when product_ids parameter is sent" do
            before(:each) do
                @user = FactoryGirl.create(:user)
                3.times { FactoryGirl.create(:product, user: @user) }
                get :index, product_ids: @user.product_ids
            end

            it "only returns the products that belong to the user" do
                products_response = json_response[:products]
                products_response.each do |product_response|
                    expect(product_response[:user][:email]).to eq(@user.email)
                end
            end
        end
    end

    describe "POST #create" do
      context "when it is successfully created" do
        before(:each) do
          user = FactoryGirl.create(:user)
          @product_attributes = FactoryGirl.attributes_for(:product)
          api_authorization_header user.auth_token
          post :create, { user_id: user.id, product: @product_attributes }
        end

        it "renders the json representation for the product just created" do
          product_response = json_response[:product]
          expect(product_response[:title]).to eq(@product_attributes[:title])
        end
      end

      context "when it is not created" do
        before(:each) do
          user = FactoryGirl.create(:user)
          @invalid_product_attributes = { title: "Smart TV", price: "Fifteen Dollars" }
          api_authorization_header user.auth_token
          post :create, { user_id: user.id, product: @invalid_product_attributes }
        end

        it "renders errors" do
          product_response = json_response
          expect(product_response).to have_key(:errors)
        end
      end
    end

    describe "PUT/PATCH #update" do
      before(:each) do
        @user = FactoryGirl.create(:user)
        @product = FactoryGirl.create(:product, user: @user)
        api_authorization_header @user.auth_token
      end

      context "when it is updated" do
        before(:each) do
          patch :update, { user_id: @user.id, id: @product.id, product: { title: "Test" }}
        end

        it "renders the json representation for the updated product" do
          product_response = json_response[:product]
          expect(product_response[:title]).to eq("Test")
        end
      end

      context "when it is not updated" do
        before(:each) do
          patch :update, { user_id: @user.id, id: @product.id, product: { price: "Test" }}
        end

        it "renders errors" do
          product_response = json_response
          expect(product_response).to have_key(:errors)
        end
      end
    end
end
