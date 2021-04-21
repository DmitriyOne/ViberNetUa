import LazyLinePainter from 'lazy-line-painter';


// let el = document.querySelector('#svg-text-top');
// let myAnimation = new LazyLinePainter(el, { 
//   strokeWidth : 6, 
//   strokeColor:'#fff', 
//   strokeCap: 'round', 
//   strokeJoin: 'round', 
//   drawSequentially: true
// });
// myAnimation.paint();


// let el = document.querySelector('#svgg'); 
// let myAnimation = new LazyLinePainter(el, {
//   strokeColor: '#cc2d8a',
//   strokeWidth: 6,
//   ease: 'easeInOutSine',
//   drawSequential: true
// });
// el.addEventListener('click', paint, false);

// function paint() { 
//   myAnimation.paint();
// }

// paint();


(function() {

  document.onreadystatechange = () => {

    if (document.readyState === 'complete') {

      /**
       * Setup your Lazy Line element.
       * see README file for more settings
       */

      let el = document.querySelector('#Viber_рассылки_для_вашего_бизнеса_от_0_28_грн');
      let myAnimation = new LazyLinePainter(el, {
        'ease': 'easeLinear',
        'strokeWidth': 6.1,
        'strokeOpacity': 1,
        'strokeColor': '#fff',
        'strokeCap': 'round',
        'duration': 0
      });
      myAnimation.paint();


      let el1 = document.querySelector('#Viber_рассылки_для_вашего_бизнеса_от_0_28_грн1');
      let myAnimation1 = new LazyLinePainter(el1, {
        'ease':'easeLinear',
        'strokeWidth':6,
        'strokeOpacity':1,
        'strokeColor':'#FBE75E',
        'strokeCap':'round',
        'delay': 1500
      }); 
      myAnimation1.paint(); 

    }
  };

})();
