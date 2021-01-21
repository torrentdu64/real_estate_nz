class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    @houses = House.all
  end

  def test
    @data = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  end
end
