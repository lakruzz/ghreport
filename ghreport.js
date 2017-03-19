function sort_col(sender,colno) {


  alert(debug($("#reportbody").children(".row").get(15)));



//  var alphabeticallyOrderedDivs = $('.row').sort(function(a, b) {
//  			return String.prototype.localeCompare.call($(a).children(".cell").get(2).toLowerCase(), $(b).children(".cell").get(2).toLowerCase());
//  		});

//  var new_ul = ul.cloneNode(false);
//  var new_div = document.getElementByID('reportbody').cloneNode(false);

  // // Add all lis to an array
  // var lis = [];
  // for(var i = ul.childNodes.length; i--;){
  //   if(ul.childNodes[i].nodeName === 'LI')
  //       lis.push(ul.childNodes[i]);
  // }
  //
  // // Sort the lis in descending order
  // lis.sort(function(a, b){
  //  return parseInt(b.childNodes[0].data , 10) -
  //         parseInt(a.childNodes[0].data , 10);
  // });
  //
  // // Add them into the ul in order
  // for(var i = 0; i < lis.length; i++){
  //   new_ul.appendChild(lis[i]);
  // }
  // ul.parentNode.replaceChild(new_ul, ul);

}

function debug(obj){
  var out = '';
  for (var p in obj) {
    out += p + ': ' + obj[p] + '\n';
  }
  alert(out);
}
