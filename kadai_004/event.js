//  $(function() {
//     $(window).on('load',(e) => {
//          if(e.type === 'load'){
//              console.log('loadイベントが発生しました');
//          }
//     });
  
//     $(window).on('scroll',(e) => {
//          if(e.type === 'scroll'){
//              console.log('スクロールされました！');
//          }
//     });
//  });


$(window).on('load',function(){
     console.log('loadイベントが発生しました');
    });
 
$(window).on('scroll',function(){
     console.log('scrollイベントが発生しました');
    });