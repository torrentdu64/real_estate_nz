class Api::V1::HousesController < Api::V1::BaseController
  def index
    @houses = policy_scope(House)
  end
end
