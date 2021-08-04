class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.text :body, unique: false
      t.belongs_to :user
      t.belongs_to :room

      t.timestamps
    end
  end
end
