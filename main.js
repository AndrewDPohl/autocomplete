
var getList = function() {
  var items = [];
  var currentStr = $("input").val();
  var re = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/\s\w?]*$/;
  $('.list-item').remove();
  $.getJSON( "./data.json", function( data ) {
    for(i = 0; i < data.products.length; i++) {
      var place = i;
      var product = data.products[i].name;
      var url = data.products[i].url;
      var type = data.products[i].type;
      if ( product.match(currentStr.match(re)) && currentStr !== "" ) {
        items.push("<li id='" + place + "'>" + product + "</li>");
        $('#my-new-list').append("<li class='list-item' id='" + place + "'>" + product + "</li>");
        items = [];
      } 
    }
    $(".list-item").click(function() {
      var id = this.id;
      $('#result').append("<li class='item-name'>Name: " + data.products[id].name + "</li>");
      $('#result').append("<li>Website: <a href='" + data.products[id].url + "' class='item-url'>" + data.products[id].url + "</a></li>");
      $('#result').append("<li class='item-type'>Product Type: " + data.products[id].type + "</li>");
    });
  });
};

$(document).ready(function(){
    $("input").keyup(function(){
      getList();
    });
});

