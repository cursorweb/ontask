chrome.runtime.onStartup.addListener(function(){
    var sites = [];
    function _refresh(){
        chrome.storage.sync.set({'site': sites}, function() {
          console.log('Settings saved');
        });
    }
    function _reset(){
        chrome.storage.sync.set({'site': sites}, function() {
          console.log('Settings saved');
        });
    }
    var db = openDatabase('mydb', '1.0', 'my first database', 2 * 50 * 50);
    db.transaction(function (tx) {
       tx.executeSql('create table if not exists web (text);');
       tx.executeSql('select * from web', [], function (tx, results) {
          var len = results.rows.length, i;
          sites = [];
          for (i = 0; i < len; i++) {
            sites.push(results.rows.item(i).text);
          }
          if(sites.length > 0){_refresh();}
          else{_reset();}
          if(sites.length > 0){chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });chrome.browserAction.setBadgeText({text: (sites.length).toString()});}
          else{chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 0] });chrome.browserAction.setBadgeText({text: ""});}

       });
    }); 
});
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {

    var sites = [];
    function _refresh(){
        chrome.storage.sync.set({'site': sites}, function() {
          console.log('Settings saved');
        });
    }
    function _reset(){
        chrome.storage.sync.set({'site': sites}, function() {
          console.log('Settings saved');
        });
    }
    var db = openDatabase('mydb', '1.0', 'my first database', 2 * 50 * 50);
    db.transaction(function (tx) {
       tx.executeSql('create table if not exists web (text);');
       tx.executeSql('select * from web', [], function (tx, results) {
          var len = results.rows.length, i;
          sites = [];
          for (i = 0; i < len; i++) {
            sites.push(results.rows.item(i).text);
          }
          if(sites.length > 0){_refresh();}
          else{_reset();}
          if(sites.length > 0){chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });chrome.browserAction.setBadgeText({text: (sites.length).toString()});}
          else{chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 0] });chrome.browserAction.setBadgeText({text: ""});}

       });
    }); 

  }
});
