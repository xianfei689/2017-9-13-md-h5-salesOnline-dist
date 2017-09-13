'use strict';
//过jsLint  编译

var $ = window.$;
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
    //购物车收藏  删除按钮事件
    $('.col-goods').click(function () {
        var self = this;
        if ($(self).hasClass('dealImg-off')) {
            new $.Dialog({
                //弹出框类型必须传
                type: 'alert',
                //弹出标题
                title: '确认收藏',
                //弹出内容
                content: '商品：【海飞丝】去屑洗发露750ml.. 已经成功收藏！',
                confirm: function confirm() {
                    // alert("click event  callBack 11111!");
                    $(self).removeClass('dealImg-off').addClass('dealImg-on');
                }
            });
        } else {
            var dialog2 = new $.Dialog({
                //弹出框类型必须传
                type: 'alert',
                //弹出标题
                title: '取消收藏',
                //弹出内容
                content: '商品：【海飞丝】去屑洗发露750ml.. 已经取消收藏！',
                confirm: function confirm() {
                    // alert("click event  callBack 2222!");
                    $(self).removeClass('dealImg-on').addClass('dealImg-off');
                }
            });
        }
    });
    $('.dealImg2').click(function () {
        var self = this;
        var dialog3 = new $.Dialog({
            //弹出类型   默认alert
            type: 'confirm',
            //弹出标题 必填
            title: '确认删除',
            //弹出内容  必填
            content: '您确认删除此产品吗？',
            //点击确认回调函数 可不填
            confirm: function confirm() {
                // alert("click confirm  event  callBack !");

                new $.Dialog({
                    //弹出框类型必须传
                    type: 'alert',
                    //弹出标题
                    title: '删除成功',
                    timeout: 2000,
                    //弹出内容
                    content: '产品删除成功！',
                    confirm: function confirm() {
                        // alert("click event  callBack 2222!");
                        $(self).parent().parent().remove();
                    }
                });
            },
            //点击取消回调   可不填
            cancel: function cancel() {
                // alert("click cancel event callback ! ");
            }

        });
    });

    $('#checkAll').click(function () {

        /**
         *$(xxx).is(':checked')
         *
         *$(xxx).get(0).checked
         *
         *$(xxx).attr('checked')
         *
         */
        if ($(this).is(':checked')) {
            $('.goods-content').find('.checkOne').prop('checked', 'checked');
        } else {
            $('.goods-content').find('.checkOne').prop('checked', false);
        }
    });
};

myAnimate.purchase.normalChange();
//# sourceMappingURL=shoppingcar.js.map
