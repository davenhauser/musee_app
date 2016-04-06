require 'csv'
require 'json'
# require 'yaml'

artworks = []
i = 0

CSV.foreach('art_catalog.csv', :headers => true, :header_converters => :symbol) do |artwork|
  artwork = artwork.to_hash
  artworks.push artwork

  puts "Added line #{i} of 40122: #{artwork[:title]} #{artwork[:author]}…"
  i+=1
end

# File.open('catalog.yml', 'w+') do |yaml_file|
#   puts "Loading yaml file…"
#   yaml_file.puts artworks.to_yaml
# end

File.open('catalog.json', 'w+') do |json_file|
  puts "Loading json file…"
  json_file.puts artworks.to_json
end
