class Createcontacts < ActiveRecord::Migration
  
  def change
    create_table :contacts do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :address
      t.string :phonenumbers
      t.timestamps
    end
  end

end
