class ChangeUsersTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :county, :string
    add_column :users, :country, :string
  end
end
