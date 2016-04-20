require 'rails_helper'

RSpec.describe User, type: :model do
  before { @user = FactoryGirl.build(:user) }

  it 'should be valid' do
    expect(@user).to respond_to(:email)
    expect(@user).to respond_to(:password)
    expect(@user).to respond_to(:password_confirmation)
    expect(@user).to be_valid
  end

  it 'should not be valid when email is not present' do
    @user.email = ''
    expect(@user).to_not be_valid
  end
end
