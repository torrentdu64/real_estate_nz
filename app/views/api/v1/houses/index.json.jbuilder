json.array! @houses do |house|
  json.extract! house, :id, :name, :address
end
