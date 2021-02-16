class AddJsonImageUrlToHouses < ActiveRecord::Migration[6.1]
  def change
    add_column :houses, :image_urls, :json
  end
end
