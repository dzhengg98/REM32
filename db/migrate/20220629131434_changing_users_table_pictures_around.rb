class ChangingUsersTablePicturesAround < ActiveRecord::Migration[5.2]
  def change
    rename_column :users, :profile_pic, :profilepic
    rename_column :users, :cover_pic, :coverpic
    #Ex:- rename_column("admin_users", "pasword","hashed_pasword")
  end
end
