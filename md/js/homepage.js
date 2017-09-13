'use strict';
//过jsLint  编译
// var $ = window.$;

var mui = window.mui;
var myAnimate = myAnimate || {};
/**
 * [namespace description]
 * ##############################################
 *
 * @Author                                                                             Copyright    xianfei
 * @Title                                         ######
 * @DateTime                                               2016-11-09T17:15:13+0800
 * @description          模块化处理  对象 myAnimate
 *
 * ##############################################
 * @param       {[type]} ns_string  [description]
 * @return      {[type]}            [description]
 */
// myAnimate.namespace = function(string) {

myAnimate.namespace = function (string) {
    var parts = string.split('.'),
        parent = myAnimate;
    if (parts[0] === 'myAnimate') {
        parts = parts.slice(1);
    }

    for (var i = 0; i < parts.length; i++) {
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};
myAnimate.namespace('myAnimate.purchase');

/**
 * [sortChange description]
 * ##############################################
 *
 * @Author                                                                   Copyright    xianfei
 * @Title                               ######
 * @DateTime                                     2016-11-02T15:59:01+0800
 * @description          一般的效果
 *
 * ##############################################
 * @return      {[type]} [description]
 */
myAnimate.purchase.normalChange = function () {
    //首页滑动效果
    mui.init({
        swipeBack: true //启用右滑关闭功能
    });
    var slider = mui('#slider');
    slider.slider({
        interval: 1500
    });
};

myAnimate.purchase.normalChange();
//# sourceMappingURL=homepage.js.map
