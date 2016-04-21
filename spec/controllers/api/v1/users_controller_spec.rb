require 'rails_helper'

RSpec.describe API::V1::UsersController, type: :controller do
    before(:each) { request.headers["Accept"] = "application/vnd.marketplace.v1" }

    describe "GET user" do
        before(:each) do
            @user = FactoryGirl.create(:user)
            get :show, id: @user.id, format: :json
        end

        it "returns the information about a reporter on a hash" do
            user_response = JSON.parse(response.body, symbolize_names: true)
            expect(user_response[:email]).to eq(@user.email)
            expect(response.response_code).to eq(200)
        end
    end

    describe "CREATE user" do
        context "when it is successfully created" do
            before(:each) do
                @user_attributes = FactoryGirl.attributes_for(:user)
                post :create, { user: @user_attributes }, format: :json
            end

            it "renders the json representation for the user record just created" do
                user_response = JSON.parse(response.body, symbolize_names: true)
                expect(user_response[:email]).to eq(@user_attributes[:email])
                expect(response.response_code).to eq(201)
            end
        end

        context "when it is not created" do
            before(:each) do
                @invalid_user_attributes = {
                    password: '12345678',
                    password_confirmation: '12345678'
                }
                post :create, { user: @invalid_user_attributes }, format: :json
            end

            it "renders errors in json" do
                user_response = JSON.parse(response.body, symbolize_names: true)
                expect(user_response).to have_key(:errors)
            end

            it "renders the errors on why the user could not be created" do
                user_response = JSON.parse(response.body, symbolize_names: true)
                expect(user_response[:errors][:email]).to include "can't be blank"
                expect(response.response_code).to eq(422)
            end
        end
    end

    describe "UPDATE user" do
        context "when it is successfully updated" do
            before(:each) do
                @user = FactoryGirl.create(:user)
                patch :update, { id: @user.id, user: { email: "newmail@example.com " } }, format: :json
            end

            it "renders the json representation for the updated user" do
                user_response = JSON.parse(response.body, symbolize_names: true)
                expect(user_response[:email]).to eq("newmail@example.com")
                expect(response.response_code).to eq(200)
            end
        end

        context "when it is not updated" do
            before(:each) do
                @user = FactoryGirl.create(:user)
                patch :update, { id: @user.id, user: { email: "bademail.com" } }, format: :json
            end

            it "renders errors in json" do
                user_response = JSON.parse(response.body, symbolize_names: true)
                expect(user_response).to have_key(:errors)
            end

            it "renders the errors on why the user could not be created" do
                user_response = JSON.parse(response.body, symbolize_names: true)
                expect(user_response[:errors][:email]).to include "is invalid"
                expect(response.response_code).to eq(422)
            end
        end
    end

    describe "DELETE user" do
        before(:each) do
            @user = FactoryGirl.create(:user)
            delete :destroy, { id: @user.id }, format: :json
        end

        it "should respond appropriately" do
            expect(response.response_code).to eq(204)
        end
    end
end
