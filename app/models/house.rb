class House < ApplicationRecord
  belongs_to :user
  include AlgoliaSearch
end
