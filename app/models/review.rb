class Review < ApplicationRecord
  AUTHORIZED_RATINGS = (1..5)
  belongs_to :list
  validates :comment, length: {minimum: 6}
  validates :rating, inclusion: {in: AUTHORIZED_RATINGS}
end
