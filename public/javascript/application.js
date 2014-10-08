
function deleteContact(id, e) {
  var deleteElement = e.parentElement.parentElement;
  deleteElement.remove(); 
  $.post("contacts/"+ id);
};

$(function() {

$("#add-div").on('click', function(){
  $("#new-contact").fadeToggle("fast", "linear");
  $(this).hide();
});
$("#add_contact").on('click', function(){
  $("#add-div").fadeToggle("fast", "linear");
  $('#new-contact').hide();
});

contactTable();
addContact();
searchContact();

function contactTable(){
  $('#table').empty();
  $.getJSON('/contacts', function(result) {
    $.each(result, function(index, contact) {
      var row = $('<tr>').appendTo('#table');
      $('<td>').text(contact.firstname).appendTo(row);
      $('<td>').text(contact.lastname).appendTo(row);
      $('<td>').text(contact.email).appendTo(row);
      $('<td>').text(contact.phonenumber).appendTo(row);
      $('<td>').text(contact.address).appendTo(row);
      $("<td><button onClick='deleteContact(" + contact.id + ", this)'>delete</button>").appendTo(row);
    });
  });
};

function addContact(){
  $('#new-contact').on('click', '#add_contact', function(add) {
    add.preventDefault();
    $.post('/contacts', $(this).serialize(), function(){
      contactTable();
      $("#new-contact").trigger("reset");
    });
  });
};

function searchContact(){
  
  $('#search-contact').on('submit', function(search){
    search.preventDefault();
    $('#table').empty();
    console.log(search);
    var id = $("#id").val();
    $.getJSON('/contacts/find/' + id, function(contact) {
      console.log(contact);
        var row = $('<tr>').appendTo('#table');
        $('<td>').text(contact.firstname).appendTo(row);
        $('<td>').text(contact.lastname).appendTo(row);
        $('<td>').text(contact.email).appendTo(row);
        $('<td>').text(contact.phonenumber).appendTo(row);
        $('<td>').text(contact.address).appendTo(row);


    });
  
  });

};


});
