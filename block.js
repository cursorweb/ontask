chrome.storage.sync.get(['site'], function(items) {
  var g;
  console.log('Settings retrieved', items);
  g = items;
  console.log(g);
});
