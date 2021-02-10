# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# House.create!(name: 'Grafton', rating: 5 , user_id: 1)
# House.create!(name: 'Saint Jhon', rating: 5 , user_id: 1)
puts "Cleaning database..."
House.destroy_all

puts "Created house"


House.create!(
    name: 'Trendy Apt in Buttes Montmartre',
    rating: 5 ,
    image_url: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
    address: '2-8 Rue du Cardinal Guibert 75018 Paris France',
     user_id: 1,
     price: '200',
     latitude: 48.885707,
     longitude: 2.343543
)

House.create!(
    name: 'Super 60m2 in trendy neighborhood!',
    rating: 5 ,
    image_url: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg",
    address: 'Boulevard de Clichy 75018 Paris France',
     user_id: 1,
     price: '170',
     latitude: 48.885312,
     longitude: 2.341225
)


House.create!(
    name: 'Splendide terrasse vue imprenable',
    rating: 5 ,
    image_url: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat4.jpg",
    address: 'Rue Damrémont 75018 Paris France',
     user_id: 1,
     price: '150',
     latitude: 48.88184,
     longitude: 2.343371
)

House.create!(
    name: 'Superbe vue à 2 min du Sacré Coeur',
    rating: 5 ,
    image_url: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat5.jpg",
    address: 'Rue doumont 75018 Paris France',
     user_id: 1,
     price: '120',
     latitude: 48.888839,
     longitude: 2.339208
)

  House.create!(
    name: 'Castel du Sacré Coeur',
    rating: 5 ,
    image_url: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat6.jpg",
    address: 'Versaille 75018 Paris France',
     user_id: 1,
     price: '120',
     latitude: 48.327865,
     longitude: 2.450774
)

  House.create!(
    name: 'cabane au fond du jardin',
    rating: 5 ,
    image_url: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
    address: 'Marée 75018 Paris France',
     user_id: 1,
     price: '120',
     latitude: 48.327155,
     longitude: 2.450774
)

  House.create!(
    name: 'La maison blue',
    rating: 5 ,
    image_url: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
    address: 'Aglo couleur 75018 Paris France',
     user_id: 1,
     price: '120',
     latitude: 48.327855,
     longitude: 2.450774
)

   House.create!(
    name: 'Appart cosy',
    rating: 5 ,
    image_url: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
    address: '8 rue rosier 75018 Paris France',
     user_id: 1,
     price: '120',
     latitude: 48.847855,
     longitude: 2.380774
)


 House.create!(
    name: 'Bonheur au beau soleil',
    rating: 5 ,
    image_url: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg",
    address: '3 soleil street 75018 Paris France',
     user_id: 1,
     price: '120',
     latitude: 48.842855,
     longitude: 2.380374
)

 House.create!(
    name: 'Bohemian and Chic in Paris',
    rating: 5 ,
    image_url: "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat4.jpg",
    address: '2 route de la caravane 75018 Paris France',
     user_id: 1,
     price: '120',
     latitude: 48.927855,
     longitude: 2.350774
)

puts "Finished!"

