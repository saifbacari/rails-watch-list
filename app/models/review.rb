class Review < ApplicationRecord
  belongs_to :list
  validates :comment, length: {minimum: 6}
end
