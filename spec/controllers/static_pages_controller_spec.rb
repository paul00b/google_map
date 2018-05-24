require 'rails_helper'

RSpec.describe StaticPagesController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #google" do
    it "returns http success" do
      get :google
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET #twitch" do
    it "returns http success" do
      get :twitch
      expect(response).to have_http_status(:success)
    end
  end

end
