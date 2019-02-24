chrome.storage.sync.get(['site'], function(items) {
  var g;
  console.log('Settings retrieved', items);
  g = items.site;
  if(g.length > 0){g.forEach(function(i){
      if(window.location.href.indexOf(i) !== -1){}
      else{
          alert("bad site!");
      }
  });}
});
