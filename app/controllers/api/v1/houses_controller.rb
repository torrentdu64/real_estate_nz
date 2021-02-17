class Api::V1::HousesController < Api::V1::BaseController
  def index
    @pagy, @houses = pagy(policy_scope(House))
  end
end
