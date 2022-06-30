class AddParentIdToComments < ActiveRecord::Migration[5.2]
  def change
    add_column :comments, :parent_id, :integer
    add_foreign_key :comments, :comments, column: :parent_id
  end
end
