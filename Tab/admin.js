// $(".tabs").each(function (index, element) {
//     $(element).children('.tabs-bar').children('li').eq(0).addClass('active')
//     $(element).children('.tabs-content').children('li').eq(0).addClass('active')
// })
//
// $(".tabs").on('click','.tabs-bar > li', function (e) {
//     var $li = $(e.currentTarget)
//     $li.addClass('active').siblings().removeClass('active')
//     var index = $li.index()
//     var $content = $li.closest('.tabs').find('.tabs-content>li').eq(index)
//     $content.addClass('active').siblings().removeClass('active')
// })

// 原型链实现
/*function Tabs (selector) {
    this.elements = $(selector)
    this.init()
    this.bindEvent()
}

Tabs.prototype.init = function () {
    this.elements.each(function (index, element) {
        $(element).children('.tabs-bar').children('li').eq(0).addClass('active')
        $(element).children('.tabs-content').children('li').eq(0).addClass('active')
    })
}

Tabs.prototype.bindEvent = function () {
    this.elements.on('click','.tabs-bar > li', function (e) {
        var $li = $(e.currentTarget)
        $li.addClass('active').siblings().removeClass('active')
        var index = $li.index()
        var $content = $li.closest('.tabs').find('.tabs-content>li').eq(index)
        $content.addClass('active').siblings().removeClass('active')
    })
}*/

// 用Class实现
class Tabs{
    constructor(selector){
        this.elements = $(selector)
        this.init()
        this.bindEvent()
    }

    init () {
        this.elements.each(function (index, element) {
            $(element).children('.tabs-bar').children('li').eq(0).addClass('active')
            $(element).children('.tabs-content').children('li').eq(0).addClass('active')
        })
    }
    bindEvent () {
        this.elements.on('click','.tabs-bar > li', function (e) {
            var $li = $(e.currentTarget)
            $li.addClass('active').siblings().removeClass('active')
            var index = $li.index()
            var $content = $li.closest('.tabs').find('.tabs-content>li').eq(index)
            $content.addClass('active').siblings().removeClass('active')
        })
    }
}

var tabs = new Tabs(".lizi")