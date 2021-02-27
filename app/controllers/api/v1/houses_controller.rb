class Api::V1::HousesController < Api::V1::BaseController

  #after_action { pagy_headers_merge(@pagy) if @pagy }


  def index
    @pagy, @houses = pagy(policy_scope(House), items: 6, overflow: :empty_page)
    p @center = Geocoder::Calculations.geographic_center(@houses)
  end

end
