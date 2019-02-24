chrome.storage.sync.get(['site'], function(items) {
  console.log('Settings retrieved', items);
    g = items;
});
