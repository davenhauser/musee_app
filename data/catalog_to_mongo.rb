require 'yaml'
require 'mongoid'
require 'pry'

Mongoid.load! 'mongoid.yml', :development

class Artwork
  include Mongoid::Document

  field :author,    type: String
  field :borndied,  type: String
  field :title,     type: String
  field :date,      type: String
  field :technique, type: String
  field :location,  type: String
  field :image_url, type: String
  field :form,      type: String
  field :type,      type: String
  field :school,    type: String
  field :timeframe, type: String
end

def transform_url(url)
  url.sub /(.*)html(.*)html/, '\1detail\2jpg'
end

puts "Loading catalog.yml"

catalog = YAML.load_file 'catalog.yml'

# binding.pry

puts "Transforming image URLs…"

catalog.each do |artwork|
  artwork[:image_url] = transform_url(artwork[:url])
end

puts "Persisting Artwork instances in MongoDB…"

catalog.each do |artwork, i|
  Artwork.create artwork.except(:url)
  puts "  ... #{artwork[:title]} (#{i})"
end
