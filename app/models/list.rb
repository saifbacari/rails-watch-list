class List < ApplicationRecord
  has_many :bookmarks, dependent: :destroy
  has_many :reviews
  has_many :movies, through: :bookmarks
  validates :name, uniqueness: true, presence: true
end
