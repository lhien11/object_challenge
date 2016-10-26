var locations = []; // this array will hold your objects

// object constructor
function State(st, rev, local){
  this.state = st;
  this.revenue = rev;
  this.locationCount = local;
  this.averageRevenue = function(){
    var aveRev = rev / local;
    return "$" + Math.round(aveRev);
  }
}
// object instances
var IL = new State ("IL", 5000, 12);
var MN = new State ("MN", 300, 3);
var NV = new State ("NV", 25000, 1);

// push object instances to locations array
locations.push(IL);
locations.push(MN);
locations.push(NV);

// DO NOT MODIFY THIS CODE
$(document).ready(function () {
  locations.forEach(function (element, index) {
    var $li = $('<li></li>');
    $li.append('<span>' +  element.state + '</span>');
    $li.append('<span>' +  element.revenue + '</span>');
    $li.append('<span>' +  element.locationCount + '</span>');
    $li.append('<span>' +  element.averageRevenue() + '</span>');
    $('ol').append($li);
  });
});
