require 'rails_helper'

RSpec.describe Api::V1::SessionsController, type: :controller do describe "CREATE session" do
        before(:each) do
            @user = FactoryGirl.create(:user)
        end

        context "when the credentials are correct" do
            before(:each) do
                credentials = { email: @user.email, password: "12345678" }
                post :create, { session: credentials }
            end

            # it "returns the user record corresponding to the given credentials" do
            #     @user.reload
            #     user_response = json_response[:user]
            #     expect(user_response[:auth_token]).to eq(@user.auth_token)
            #     expect(response.response_code).to eq(200)
            # end
        end

        context "when the credentials are incorrect" do
            before(:each) do
                credentials = { email: @user.email, password: "invalidpassword" }
                post :create, { session: credentials }
            end

            it "returns a json with an error" do
                expect(json_response[:errors]).to eq("Invalid email or password")
                expect(response.response_code).to eq(422)
            end
        end
    end

    describe "DELETE session" do
        before(:each) do
            @user = FactoryGirl.create(:user)
            sign_in @user
            delete :destroy, id: @user.auth_token
        end

        # it "should respond appropriately" do
        #     expect(response.response_code).to eq(204)
        # end
    end
end
