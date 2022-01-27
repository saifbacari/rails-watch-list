class List < ApplicationRecord
  has_many :bookmarks, dependent: :destroy
  has_many :reviews
  has_many :movies, through: :bookmarks
  has_one_attached :avatar
  validates :name, uniqueness: true, presence: true
end
