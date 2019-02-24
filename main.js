var sites = [];
var db = openDatabase('mydb', '1.0', 'my first database', 2 * 50 * 50);
db.transaction(function (tx) {
   tx.executeSql('CREATE TABLE IF NOT EXISTS web (text)');
   tx.executeSql('INSERT INTO web (text) VALUES ("example")');
   //tx.executeSql('delete from web (text) VALUES ("example")');
   tx.executeSql('SELECT * FROM web', [], function (tx, results) {
      var len = results.rows.length, i;
      sites = [];
      for (i = 0; i < len; i++) {
        sites.push(results.rows.item(i).text);
      }
       chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
       chrome.browserAction.setBadgeText({text: (sites.length).toString()});
   });
});
