class House < ApplicationRecord

  belongs_to :user

  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?

  include AlgoliaSearch

  algoliasearch do
    attributes :name, :address, :image_urls, :latitude, :longitude
  end

end
