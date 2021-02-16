class RemoveImageUrlFromHouses < ActiveRecord::Migration[6.1]
  def change
    remove_column :houses, :image_url, :string
  end
end
