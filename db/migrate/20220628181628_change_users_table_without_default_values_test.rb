class ChangeUsersTableWithoutDefaultValuesTest < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :first_name, :string
    change_column :users, :last_name, :string
    change_column :users, :city, :string
    change_column :users, :about, :string
    change_column :users, :website, :string
    change_column :users, :instagram, :string
    change_column :users, :facebook, :string
    change_column :users, :twitter, :string
    change_column :users, :country, :string
  end
end
