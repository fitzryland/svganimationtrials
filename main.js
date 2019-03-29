window.requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
    window.setTimeout(callback, 1000 / 60);
  };
})();
var easing = {
  // t: current time, b: begInnIng value, c: change In value, d: duration
  def: 'easeOutQuad',
  easeInQuad: function (t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutQuad: function (t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuad: function (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInCubic: function (t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeOutCubic: function (t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInOutCubic: function (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  easeInQuart: function (t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutQuart: function (t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInOutQuart: function (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeInQuint: function (t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  easeOutQuint: function (t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInOutQuint: function (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  easeInSine: function (t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInOutSine: function (t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  },
  easeInExpo: function (t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function (t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInOutCirc: function (t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  },
  easeInElastic: function (t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOutElastic: function (t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  easeInBack: function (t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutBack: function (t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOutBack: function (t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  easeInBounce: function (t, b, c, d) {
    return c - jQuery.easing.easeOutBounce (d-t, 0, c, d) + b;
  },
  easeOutBounce: function (t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  easeInOutBounce: function (t, b, c, d) {
    if (t < d/2) return jQuery.easing.easeInBounce (t*2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce (t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
};

var burger = {
  colors: {
    red: '#d20956',
    pink: 'hotpink',
    purple: '#5f1eb9'
  },
  svg: '',
  firstLine: '',
  secondLine: '',
  thirdLine: '',
  open: function() {
    var that = this;
    that.svg.root.node.classList.remove('is-closed');
    that.firstLine.animate(
      {
        fill: that.colors.red
      },
      1000,
      function() {
        console.log('DONE');
      }
    );
  },
  close: function() {
    var that = this;
    that.svg.root.node.classList.add('is-closed');
  },
  toggle: function() {
    var that = burger;
    if ( that.svg.root.node.classList.contains('is-closed') ) {
      // that.open();
    } else {
      // that.close();
    }
  },
  init: function() {
    var that = this;
    that.svg = Snap('#js-burger');
    that.firstLine = Snap('#js-burger__first');
    that.secondLine = Snap('#js-burger__second');
    that.thirdLine = Snap('#js-burger__third');
    that.svg.root.node.addEventListener('click', that.toggle, false);
  }
};
// burger.init();

var svgTest = {
  svg: document.getElementById('js-test_svg'),
  triangle: document.getElementById('js-test_svg--triangle'),
  position: {
    top: 50,
    bottom: 150,
    curStep: 0,
    duration: 78,
    pattern: 'M2,2 L102,102 Q50,%% 2,102 Z',
  },
  curStep: 0,
  run: function(direction) {
    // t is current time
    // b is start value
    // c is change in value
    // d is duration
    var that = this;
    that.position.curStep++;
    var t = that.position.curStep,
        b,
        c,
        d = that.position.duration;
    if ( direction == 'up' ) {
      b = that.position.bottom;
      c = that.position.top - that.position.bottom;
    } else {
      b = that.position.top;
      c = that.position.bottom - that.position.top;
    }
    var easedCurStep = easing.easeOutBounce(t, b, c, d),
        curD = that.position.pattern.replace('%%', easedCurStep);
    that.triangle.setAttribute('d', curD);
    if ( that.position.curStep < that.position.duration ) {
      requestAnimFrame(function() {
        that.run(direction)
      });
    } else {
      that.position.curStep = 0;
    }
  },
  setUp: function() {
    var that = this;
    that.run('up');
    that.triangle.classList.remove('is-down');
  },
  setDown: function() {
    var that = this;
    that.run('down');
    that.triangle.classList.add('is-down');
  },
  toggle: function() {
    var that = this;
    if ( that.triangle.classList.contains('is-down') ) {
      that.setUp();
    } else {
      that.setDown();
    }
  },
  init: function() {
    var that = this;
    that.svg.addEventListener("click", function() {
      svgTest.toggle();
    }, false);
  }
};
svgTest.init();

var easingTrial = {
  svg: document.getElementById('js-simple_svg'),
  line: document.getElementById('js-simple_svg--line'),
  position: {
    start: 0,
    end: 100,
    cur: 0,
    pattern: 'M0,0 L0,0 L%%,100'
  },
  go: function() {
    var that = this,
        curD,
        t,
        b = that.position.start,
        d = that.position.end,
        c = d - b;
    that.position.cur++;
    t = that.position.cur;
    var curVal = easing.easeOutBounce(t, b, c, d);
    curD = that.position.pattern.replace('%%', curVal);
    that.line.setAttribute('d', curD);
    if ( that.position.cur <= that.position.end ) {
      requestAnimFrame(function() {
        that.go();
      });
    } else {
      return;
    }
  },
  init: function() {
    var that = this;
    that.svg.addEventListener('click', function() {
      that.go();
    }, false);
  }
};
easingTrial.init();

var menu = {
  $toggle: document.getElementById('js-menu_toggle'),
  $wrap: document.getElementById('js-menu'),
  $bg: document.getElementById('js-menu_bg'),
  $pixels: document.getElementsByClassName('menu_bg_pixel'),
  openingFrame: 0,
  closingFrame: 0,
  $filledPixels: '',
  filledPixelsLength: 0,
  pixelAnimationUnfill: function() {
    var that = this;
    if ( that.closingFrame == 0 ) {
      that.closingFrame = that.$bg.getElementsByClassName('is-filled').length - 1;
      that.$filledPixels = that.$bg.getElementsByClassName('is-filled');
    }
    that.$filledPixels[that.closingFrame].classList.remove('is-filled');
    that.closingFrame--;
    if ( that.closingFrame > 0 ) {
      requestAnimFrame(function() {
        that.pixelAnimationUnfill();
      });
    } else {
      that.closingFrame = 0;
    }
  },
  pixelAnimationFill: function() {
    var that = this;
    that.openingFrame++;
    var curPixPointer = that.openingFrame * 7;
    that.$pixels[curPixPointer].classList.add('is-filled');
    if ( curPixPointer % 2 == 0 ) {
      var oddPointer = curPixPointer - 3;
      that.$pixels[oddPointer].classList.add('is-filled');
    }
    var pastPointers = [ 10, 17, 21, 24, 27, 30, 40, 42, 43, 44, 47 ],
        pastPointersLength = pastPointers.length;
    for ( var i = 0; i < pastPointersLength; i++ ) {
      if ( curPixPointer > pastPointers[i] ) {
        var pastPointer = curPixPointer - pastPointers[i];
        that.$pixels[pastPointer].classList.add('is-filled');
      }
    }
    if ( that.openingFrame < 35 ) {
      requestAnimFrame(function() {
        that.pixelAnimationFill();
      });
    } else {
      that.openingFrame = 0;
    }
  },
  open: function() {
    var that = this;
    that.$wrap.classList.remove('is-closed');
    that.pixelAnimationFill();
  },
  close: function() {
    var that = this;
    that.$wrap.classList.add('is-closed');
    that.pixelAnimationUnfill();
  },
  toggle: function() {
    var that = this;
    if ( that.$wrap.classList.contains('is-closed') ) {
      that.open();
    } else {
      that.close();
    }
  },
  init: function() {
    var that = this;
    that.$toggle.addEventListener('click', function() {
      that.toggle();
    }, false);
  }
};
menu.init();
