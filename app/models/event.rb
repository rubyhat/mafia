class Event < ApplicationRecord
  validates :name, :date, presence: true
  #validates_uniqueness_of :user_id, scope: :user_id # Валидация на то, чтобы в одном ивенте не было одинаковых игроков
  has_many :event_games, dependent: :destroy
  has_many :users, through: :event_games
end
