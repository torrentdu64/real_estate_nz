json.array! @houses do |house|
  json.extract! house, :id, :name, :price, :address, :image_url, :latitude, :longitude
end
