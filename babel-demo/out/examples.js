"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var utils = require("./utils.js");

var mockItems = [{
  name: 'item1',
  cost: 728,
  category: 'dreamcatcher'
}, {
  name: 'item2',
  cost: 413,
  category: 'fairylights'
}, {
  name: 'item3',
  cost: 392,
  category: 'dreamcatcher'
}, {
  name: 'item4',
  cost: 519,
  category: 'dreamcatcher'
}, {
  name: 'item5',
  cost: 96,
  category: 'dreamcatcher'
}, {
  name: 'item6',
  cost: 470,
  category: 'fairylights'
}, {
  name: 'item7',
  cost: 506,
  category: 'fairylights'
}, {
  name: 'item8',
  cost: 352,
  category: 'fairylights'
}, {
  name: 'item9',
  cost: 948,
  category: 'dreamcatcher'
}, {
  name: 'item10',
  cost: 62,
  category: 'fairylights'
}, {
  name: 'item11',
  cost: 55,
  category: 'dreamcatcher'
}, {
  name: 'item12',
  cost: 825,
  category: 'dreamcatcher'
}, {
  name: 'item13',
  cost: 155,
  category: 'fairylights'
}, {
  name: 'item14',
  cost: 388,
  category: 'fairylights'
}, {
  name: 'item15',
  cost: 728,
  category: 'fairylights'
}, {
  name: 'item16',
  cost: 533,
  category: 'fairylights'
}, {
  name: 'item17',
  cost: 970,
  category: 'dreamcatcher'
}, {
  name: 'item18',
  cost: 826,
  category: 'fairylights'
}, {
  name: 'item19',
  cost: 266,
  category: 'dreamcatcher'
}, {
  name: 'item20',
  cost: 362,
  category: 'dreamcatcher'
}];
/**
 * Task 1
 */

var sumOfCost = function sumOfCost(items) {
  var costSum = 0;
  items.forEach(function (element) {
    costSum += element.cost;
  });
  return costSum;
};

utils.test(sumOfCost(mockItems), 9594);
/**
 * Task 2
 */

var getDreamcatchers = function getDreamcatchers(items) {
  var dreamcatchers = [];
  items.forEach(function (element) {
    if (element.category == "dreamcatcher") {
      dreamcatchers.push(element);
    }
  });
  return dreamcatchers;
};

utils.test(getDreamcatchers(mockItems).slice(-1)[0].name, "item19");
utils.test(getDreamcatchers(mockItems).length, 9);
/**
 * Task 3
 *
 * 1. implement "addToCart" method
 * 2. implement "getCart" method
 *
 * Look tests below for more information
 */

var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);

    this.items = [];
  }

  _createClass(User, [{
    key: "addToCart",
    value: function addToCart(item) {
      this.items.push(item);
    }
  }, {
    key: "getCart",
    value: function getCart() {
      return this.items;
    }
  }]);

  return User;
}();

var user1 = new User();

try {
  user1.addToCart(mockItems[1]);
  user1.addToCart(mockItems[4]);
  var cart = user1.getCart();
  utils.test(cart.length, 2);
  utils.test(sumOfCost(cart), 509);
  utils.test(getDreamcatchers(cart)[0].name, "item5");
} catch (e) {
  console.log("FAIL");
}