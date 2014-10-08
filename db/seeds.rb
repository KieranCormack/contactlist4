FactoryGirl.define do 
  factory :contact do
    sequence(:firstname) {Faker::Name.first_name}
    sequence(:lastname) {Faker::Name.last_name}
    sequence(:email) {Faker::Internet.email}
    sequence(:phonenumber) {Faker::PhoneNumber.phone_number}
    sequence(:address) {Faker::Address.street_address}  
  end
end

50.times{FactoryGirl.create(:contact)} 
