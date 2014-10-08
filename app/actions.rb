get '/' do
  redirect 'index.html'
end



get '/contacts' do
  content_type :json
  contacts_json = Contact.all.to_json
end

get '/contacts/find/:id' do 
  content_type :json
  contacts_json = Contact.find(params[:id]).to_json
end



post '/contacts' do
  contact = Contact.new(
    firstname: params[:firstname],
    lastname: params[:lastname],
    email: params[:email],
    phonenumber: params[:phonenumber],
    address: params[:address],
  )
  if contact.save
    contact.to_json
  end
end

post '/contacts/:id' do 
  contact = Contact.find(params[:id])
  contact.destroy
end




