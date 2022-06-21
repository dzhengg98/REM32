class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :uploader_id, null: false

      t.timestamps
    end

    add_index :images, [:title, :uploader_id], unique: true
  end
end
