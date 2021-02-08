json.array! @houses do |house|
  json.extract! house, :id, :name, :address, :image_url, :latitude, :longitude
end
