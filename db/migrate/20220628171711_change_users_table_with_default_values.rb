class ChangeUsersTableWithDefaultValues < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :first_name, :string, default: ""
    change_column :users, :last_name, :string, default: ""
    change_column :users, :city, :string, default: ""
    change_column :users, :about, :string, default: ""
    change_column :users, :website, :string, default: ""
    change_column :users, :instagram, :string, default: ""
    change_column :users, :facebook, :string, default: ""
    change_column :users, :twitter, :string, default: ""
    change_column :users, :country, :string, default: ""
  end
end
