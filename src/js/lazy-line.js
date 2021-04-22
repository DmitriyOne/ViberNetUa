import LazyLinePainter from 'lazy-line-painter';




(function() {

  document.onreadystatechange = () => {

    if (document.readyState === 'complete') {


      let el = document.querySelector('#firstScreentitle1');
      let myAnimation = new LazyLinePainter(el, {
        'ease': 'easeLinear',
        'strokeWidth': 6.1,
        'strokeOpacity': 1,
        'strokeColor': '#fff',
        'strokeCap': 'round'
      });
      myAnimation.paint();
    }

    let el = document.querySelector('#firstScreentitle2');
    let myAnimation = new LazyLinePainter(el, {
      'ease':'easeLinear',
      'strokeWidth':6,
      'strokeOpacity':1,
      'strokeColor':'#FBE75E',
      'strokeCap':'round'
    }); 
    myAnimation.paint(); 

  };

})();
