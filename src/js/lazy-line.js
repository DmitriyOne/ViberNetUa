import LazyLinePainter from 'lazy-line-painter';




// (function() {

//   document.onreadystatechange = () => {

//     if (document.readyState === 'complete') {





//       let el = document.querySelector('#firstScreentitle1');
//       let myAnimation = new LazyLinePainter(el, {
//         'ease': 'easeLinear',
//         'strokeWidth': 6.1,
//         'strokeOpacity': 1,
//         'strokeColor': '#fff',
//         'strokeCap': 'round'
//       });
//       myAnimation.paint();
//     }

//     let el = document.querySelector('#firstScreentitle2');
//     let myAnimation = new LazyLinePainter(el, {
//       'ease':'easeLinear',
//       'strokeWidth':6,
//       'strokeOpacity':1,
//       'strokeColor':'#FBE75E',
//       'strokeCap':'round'
//     }); 
//     myAnimation.paint(); 



//   };

// })();



(function() {

  document.onreadystatechange = () => {

    if (document.readyState === 'complete') {

      /**
       * Setup your Lazy Line element.
       * see README file for more settings
       */

      let el = document.querySelector('#firstsvg-title1');
      let myAnimation = new LazyLinePainter(el, {
        'ease': 'easeLinear',
        'strokeWidth': 6.1,
        'strokeOpacity': 1,
        'strokeColor': '#fff',
        'strokeCap': 'round'
      });
      myAnimation.paint();

      let el1 = document.querySelector('#firstsvg-title2');
      let myAnimation1 = new LazyLinePainter(el1, {
        'ease':'easeLinear',
        'strokeWidth':6,
        'strokeOpacity':1,
        'strokeColor':'#FBE75E',
        'strokeCap':'round',
        'delay': 1100
      }); 
      myAnimation1.paint(); 

    }
  };

})();
