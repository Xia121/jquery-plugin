/*
var suggestiion = new Suggestion({
    input:'#x',
    search: function (text, callbck) {
        callbck(['a', 'aa', 'aaa', 'aaaa'])
    },
    emptyTemplate: '<b>没有结果</b>',
    loadingTemplate: '<b>正在加载中</b>',

})*/

class suggestion {
    constructor (options) {
        this.options = options
        this.$input = $(options.input)
        this.$input.wrap('<div class="frankSuggestion"></div>')
        this.$wrapper = this.$input.parent()

        this.$ol = $('<ol class="frankSuggestion-list"></ol>')
        this.$input.after(this.$ol)

        this.$loading = $('<div class="frankSuggestion-loading"></div>')
        this.$loading.html(this.options.loadingTemplate)

        this.$empty = $('<div class="frankSuggestion-empty"></div>')
        this.$empty.html(this.options.emptyTemplate)

        this.$input.after(this.$loading)

        this.$input.after(this.$empty)

        this.bindEvents()
    }
    bindEvents () {
        var timeId
        this.$input.on('input', (e) => {
            if (timeId) {
                window.clearInterval(timeId)
            }
            timeId = setTimeout(() => {
                this.search(e.currentTarget.value)
                timeId = undefined
            }, 1000)
        })

        this.$ol.on('click', 'li', (e) => {
            this.$input.val($(e.currentTarget).text())
        })
    }
    search (keyword) {
        this.$wrapper.addClass('loading')
        this.$wrapper.removeClass('empty')
        this.options.search(keyword, (array) => {
            this.$ol.empty()
            this.$wrapper.removeClass('loading empty')

            if (!array || array.length === 0) {
                this.$wrapper.addClass('empty')
                return
            }

            array.forEach((text) => {
                this.$ol.append($('<li></li>').text(text))
            })
        })
    }
}


////////////////////////

var s = new suggestion ({
    input:'input',
    search: function (text, callback) {
        console.log(text)
        if (text === '0') {
            return setTimeout(() => callback([]), 1000)
        }
        let array = []
        for (let i=0; i<5; i++) {
            let n = parseInt(Math.random()*100,10)
            array.push(text+n)
        }
        setTimeout(() => callback(array), 1000)
    },
    loadingTemplate:'加载中......',
    emptyTemplate:'找不到啊'
})