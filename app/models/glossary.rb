class Glossary < ActiveRecord::Base
  validates_presence_of :term, :definition
end
