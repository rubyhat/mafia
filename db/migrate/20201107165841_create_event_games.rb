class CreateEventGames < ActiveRecord::Migration[6.0]
  def change
    create_table :event_games do |t|
      t.integer :user_id
      t.integer :event_id

      t.timestamps
    end
  end
end
