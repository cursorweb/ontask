var sites = [];
function _refresh(){
    $(".p-li").empty();
    sites.forEach(function(i){
        $(".p-li").append(
          $("<li>").html(i)
        );
    });
    //window.localStorage.setItem('ontaskextension3e4ddc3f9a776e81ff817cad34f42091data', JSON.stringify(sites));
    chrome.storage.sync.set({'site': sites}, function() {
      console.log('Settings saved');
    });
}
function _reset(){
    $(".p-li").empty();
    $(".p-li").html("<li>None yet!</li>");
    //window.localStorage.setItem('ontaskextension3e4ddc3f9a776e81ff817cad34f42091data', JSON.stringify(sites));
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
$(".p-c").click(function(){
   db.transaction(function (tx) {
      tx.executeSql('create table if not exists web (text)');
      tx.executeSql('delete from web;');
      tx.executeSql('select * from web', [], function (tx, results) {
         var len = results.rows.length, i;
         sites = [];
         for (i = 0; i < len; i++) {
            sites.push(results.rows.item(i).text);
         }
         _refresh();
         _reset();
         if(sites.length > 0){chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });chrome.browserAction.setBadgeText({text: (sites.length).toString()});}
         else{chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 0] });chrome.browserAction.setBadgeText({text: ""});}
      });
   });
});
$(".p-a").click(function(){
   db.transaction(function (tx) {
      tx.executeSql('create table if not exists web (text)');
      var val = $(".p-input").val();
      tx.executeSql("insert into web values (?)", [val]);
      tx.executeSql('select * from web', [], function (tx, results) {
         var len = results.rows.length, i;
         sites = [];
         for (i = 0; i < len; i++) {
            sites.push(results.rows.item(i).text);
         }
         _refresh();
         if(sites.length > 0){chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });chrome.browserAction.setBadgeText({text: (sites.length).toString()});}
         else{chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 0] });chrome.browserAction.setBadgeText({text: ""});}
      });
   });
});
$(".p-input").keydown(function(e){
    if(e.keyCode == 13){
        db.transaction(function (tx) {
          tx.executeSql('create table if not exists web (text)');
          var val = $(".p-input").val();
          tx.executeSql("insert into web values (?)", [val]);
          tx.executeSql('select * from web', [], function (tx, results) {
             var len = results.rows.length, i;
             sites = [];
             for (i = 0; i < len; i++) {
                sites.push(results.rows.item(i).text);
             }
             _refresh();
             if(sites.length > 0){chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });chrome.browserAction.setBadgeText({text: (sites.length).toString()});}
             else{chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 0] });chrome.browserAction.setBadgeText({text: ""});}
          });
       });
    }
});
