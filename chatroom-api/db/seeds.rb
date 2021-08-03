# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
User.reset_pk_sequence
Room.destroy_all
Room.reset_pk_sequence

general = Room.create(name: "General");
meme = Room.create(name: "Memes");

kody = User.create(name: 'Kody', password: 'aaa', room_id: general.id);


print "seeded database";