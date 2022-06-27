class AddToUsersTable < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :city, :string
    add_column :users, :county, :string
    add_column :users, :about, :text
    add_column :users, :website, :string
    add_column :users, :instagram, :string
    add_column :users, :facebook, :string
    add_column :users, :twitter, :string
  end
end
