require 'rails_helper'

RSpec.describe API::V1::UsersController, type: :controller do
    before(:each) { request.headers["Accept"] = "application/vnd.marketplace.v1" }

    describe "GET #show" do
        before(:each) do
            @user = FactoryGirl.create :user
            get :show, id: @user.id, format: :json
        end

        it "returns the information about a reporter on a hash" do
            user_response = JSON.parse(response.body, symbolize_names: true)
            expect(user_response[:email]).to eq(@user.email)
            expect(response.response_code).to eq(200)
        end
    end
end
