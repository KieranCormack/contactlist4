class Changephonenumbers < ActiveRecord::Migration
  def change
    remove_column :contacts, :phonenumbers
    add_column :contacts, :phonenumber, :string
  end
end
