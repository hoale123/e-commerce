puts "🌱 Seeding spices..."
Product.destroy_all
User.destroy_all
Order.destroy_all
Category.destroy_all

puts "Creating Category..."
Category.create(name: 'High')
Category.create(name: 'Low')

# Seed your database here
puts "Creating Products..."

Product.create(name:"the DISCERNING mala",category_id: 2, description:"activate the inner eye (aka the third eye chakra), trust your inner knowing, refine your purpose, trust intuition", price:69,status:"available", image:"https://i.etsystatic.com/23287327/r/il/a9c28c/3038921847/il_fullxfull.3038921847_8v7a.jpg", likes: 40)

Product.create(name:"the EARTH MAGIC mala",category_id: 2, description: "the healing energies", price:79,status:"available", image:"https://i.etsystatic.com/23287327/r/il/61b3c0/3171674619/il_fullxfull.3171674619_b04a.jpg", likes: 55)
Product.create(name:"the I AM LOVE mala",category_id: 2, description:"amethyst", price:149,status:"available", image:"https://i.etsystatic.com/23287327/r/il/8a8779/3170410591/il_fullxfull.3170410591_2hpd.jpg", likes: 24)
Product.create(name:"the I AM RELAXED mala",category_id: 2, description:"calm your mind and clear the energy", price:79,status:"available", image:"https://i.etsystatic.com/23287327/r/il/3a56d0/2940710947/il_fullxfull.2940710947_9bn1.jpg", likes: 0)
Product.create(name:"the I AM PROTECTED mala",category_id: 2, description:"powerful and protective black onyx", price:59,status:"available", image:"https://i.etsystatic.com/23287327/r/il/f38159/3151090529/il_fullxfull.3151090529_cm3z.jpg", likes: 2)
Product.create(name:"the I AM RESILIENT mala",category_id: 2, description:"channel your personal power and courage ", price:109,status:"available", image:"https://i.etsystatic.com/23287327/r/il/e8cb50/2983870840/il_fullxfull.2983870840_ivus.jpg", likes: 1)
Product.create(name:"the LAID BACK mala",category_id: 1, description:"relax with smoky quartz", price:109,status:"available", image:"https://i.etsystatic.com/23287327/r/il/c7c23c/2788627180/il_fullxfull.2788627180_p64m.jpg", likes: 1)
Product.create(name:"the ONENESS mala",category_id: 1, description:"balance crown chakra", price:119,status:"available", image:"https://i.etsystatic.com/23287327/r/il/d65612/2940695901/il_fullxfull.2940695901_3jdt.jpg", likes: 0)
Product.create(name:"the POSITIVELY MAGIC mala",category_id: 1, description:"labradorite + rose + clear quartz", price:89,status:"available", image:"https://i.etsystatic.com/23287327/r/il/96c99d/2968089190/il_fullxfull.2968089190_bsbc.jpg", likes: 0)
Product.create(name:"the ROOT CHAKRA mala",category_id: 1, description: "aids in grounding and feeling steady", price:89,status:"available", image:"https://i.etsystatic.com/23287327/r/il/a50ad8/3031593527/il_fullxfull.3031593527_h6d1.jpg", likes: 0)
Product.create(name:"the SPIRITUAL WARRIOR mala",category_id: 1, description:"amplify your naturally sunny vibes", price:129,status:"available", image:"https://i.etsystatic.com/23287327/r/il/67463e/3015811861/il_fullxfull.3015811861_31fn.jpg", likes: 0)
Product.create(name:"the TRANSFORMATION mala",category_id: 1, description:"bring balance, clarity", price:79,status:"available", image:"https://i.etsystatic.com/23287327/r/il/d79893/2940701543/il_fullxfull.2940701543_jqow.jpg", likes: 0)


puts "Creating Users..."

User.create(name: 'Richard', email: 'rich@123.com', password: '123', avatar: "https://media.istockphoto.com/vectors/cute-white-robot-character-vector-vector-id1187576166")
User.create(name: 'Adam', email: 'lmao@123.com', password: '123', avatar: 'https://media.istockphoto.com/photos/-picture-id486445651?s=612x612')

puts "Creating Orders..."

# Order.create(user_id: 1, product_ids: [2])
puts "✅ Done seeding!"
