class CreateFollows < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.integer :follower_id, null: false
      t.integer :followee_id, null: false
      # follower => person creating the follow
      # followee => person gaining the follower
      t.timestamps
    end
    add_index :follows, [:follower_id, :followee_id], unique: true
  end
end
