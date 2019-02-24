var orghtml = document.body.innerHTML;
var orghead = document.head.innerHTML;
chrome.storage.sync.get(['site'], function(items) {
  var g;
  console.log('Settings retrieved', items);
  g = items.site;
  if(g.length > 0){
    for(var i = 0; i < g.length; i ++){
        if(((window.location.href.split('?')[0]).indexOf(g[i]) > -1) == true){
            document.body.innerHTML = orghtml;
            document.head.innerHTML = orghead;
            break;
        }else{
            document.body.innerHTML = "<img src = 'https://cdn.glitch.com/94bcb56f-a1ba-4f01-a73b-5935b3f7dfba%2FWorld_s_Most_Powerful_Neclear_Bomb_Tsar_Bomba_HD.gif?1551031711026' style = 'width:100%;'>";
            document.head.innerHTML = "";
        }
    }
  }
});
