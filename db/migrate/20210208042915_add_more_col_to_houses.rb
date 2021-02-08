class AddMoreColToHouses < ActiveRecord::Migration[6.1]
  def change
    add_column :houses, :image_url, :string
    add_column :houses, :address, :string
    add_column :houses, :latitude, :float
    add_column :houses, :longitude, :float
    add_column :houses, :price, :string
  end
end
