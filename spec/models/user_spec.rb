require 'rails_helper'

RSpec.describe User, type: :model do
  before do
      @user = FactoryGirl.build(:user)
  end

  it "should be valid" do
    expect(@user).to respond_to(:email)
    expect(@user).to respond_to(:password)
    expect(@user).to respond_to(:password_confirmation)
    expect(@user).to be_valid

    expect(@user).to respond_to(:auth_token)
    # TODO: Add shoulda matchers
  end

  it "should not be valid when email is not present" do
    @user.email = ""
    expect(@user).to_not be_valid
  end

  describe "#generate_authentication_token!" do
    it "generates a unique token" do
      allow(Devise).to receive(:friendly_token) { "auniquetoken123" }
      @user.generate_authentication_token!
      expect(@user.auth_token).to eq("auniquetoken123")
    end

    it "generates another token when one already has been taken" do
      existing_user = FactoryGirl.create(:user, auth_token: "auniquetoken123")
      @user.generate_authentication_token!
      expect(@user.auth_token).not_to eq(existing_user.auth_token)
    end
  end
end
