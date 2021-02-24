class House < ApplicationRecord

  belongs_to :user

  include AlgoliaSearch

  algoliasearch do
    attributes :name, :address
  end

end
