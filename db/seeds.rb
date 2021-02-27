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

var_json_string = "[{'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg'},
{'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg'},
{'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg'},
{'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat4.jpg'},
{'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat5.jpg'},
{'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat6.jpg'}]"


 var_json_string = { src: ["https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
                           "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat2.jpg",
                            "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg",
                            "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat4.jpg",
                            "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat5.jpg",
                            "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat6.jpg",
                         ]
                    }


valid_json = var_json_string


House.create!(
    name: 'Trendy Apt in Buttes Montmartre',
    rating: 5 ,
    image_urls: valid_json,
    address: '2a/188 Quay Street, Auckland Central, Auckland 1010',
     user_id: 1,
     price: '200'
)

House.create!(
    name: 'Super 60m2 in trendy neighborhood!',
    rating: 5 ,
    image_urls: valid_json,
    address: '2a Williamson Avenue, Grey Lynn, Auckland 1011',
     user_id: 1,
     price: '170'
)


House.create!(
    name: 'Splendide terrasse vue imprenable',
    rating: 5 ,
    image_urls: valid_json,
    address: '17 Park Road, Grafton, Auckland 1023',
     user_id: 1,
     price: '150'
)

House.create!(
    name: 'Superbe vue à 2 min du Sacré Coeur',
    rating: 5 ,
    image_urls: valid_json,
    address: '305 Parnell Road, Parnell, Auckland 1052',
     user_id: 1,
     price: '99'
)

  House.create!(
    name: 'Castel du Sacré Coeur',
    rating: 5 ,
    image_urls: valid_json,
    address: '22 Viaduct Harbour Avenue, Westhaven, Auckland 1010',
     user_id: 1,
     price: '150'
)

  House.create!(
    name: 'cabane au fond du jardin',
    rating: 5 ,
    image_urls: valid_json,
    address: '5/66 Mount Eden Road, Mount Eden, Auckland 1024',
     user_id: 1,
     price: '120'
)

  House.create!(
    name: 'La maison blue',
    rating: 5 ,
    image_urls: valid_json,
    address: '170 Queen Street, Auckland Central, Auckland 1010',
     user_id: 1,
     price: '143'
)

   House.create!(
    name: 'Appart cosy',
    rating: 5 ,
    image_urls: valid_json,
    address: '1B Essex Road, Mount Eden, Auckland 1024',
     user_id: 1,
     price: '230'
)


 House.create!(
    name: 'Bonheur au beau soleil',
    rating: 5 ,
    image_urls: valid_json,
    address: '10 Remuera Road, Newmarket, Auckland 1050',
     user_id: 1,
     price: '321'
)

 House.create!(
    name: 'Bohemian and Chic in Paris',
    rating: 5 ,
    image_urls: valid_json,
    address: '277 Broadway, Newmarket, Auckland 1023',
     user_id: 1,
     price: '222'
)

puts "Finished!"

