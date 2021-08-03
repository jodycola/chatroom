class CreateRooms < ActiveRecord::Migration[6.1]
  def change
    create_table :rooms do |t|
      t.string :name
      t.string :members, array: true, default: []

      t.timestamps
    end
  end
end
