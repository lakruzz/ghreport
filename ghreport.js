function sortreport(sender,colno) {
  var new_div = document.getElementById('reportbody').cloneNode(false);
  var reportbody = document.getElementById('reportbody');
  var list = [];
  for( var i = reportbody.childNodes.length; i--;){
    list.push(reportbody.childNodes[i]);
  };
  list.sort(
    function(a,b){
      var compare =
        a.getElementsByTagName('div')[colno-1].innerText.localeCompare(
        b.getElementsByTagName('div')[colno-1].innerText, 'en'
      )
      return compare;
    }
  )
  for(var i = 0; i < list.length; i++){
    new_div.appendChild(list[i]);
  }
  reportbody.parentNode.replaceChild(new_div, reportbody);
}

function debug(obj){
  var out = '';
  for (var p in obj) {
    out += p + ': ' + obj[p] + '\n';
  }
  alert(out);
}
