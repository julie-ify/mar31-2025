# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
#   

puts "Starting to seed data ..."

5.times do
  team = Team.create(
    name: Faker::Sports::Basketball.team, 
    coach: Faker::Sports::Basketball.coach
  )

  7.times do
    Player.create(
      name: Faker::Sports::Basketball.player,
      position: Faker::Sports::Basketball.position,
      team_id: team.id
    )
  end
end


puts "Finished running seed...."
