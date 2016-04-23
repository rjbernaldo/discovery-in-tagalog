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
    # expect(@user).to have_many(:products)
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

  describe "products association" do
      before do
          @user.save
          3.times { FactoryGirl.create(:product, user: @user) }
      end

      it "destroys the associated products on self destruct" do
          products = @user.products
          @user.destroy
          products.each do |product|
              expect(Product.find(product)).to raise_error(ActiveRecord::RecordNotFound)
          end
      end
  end
end
