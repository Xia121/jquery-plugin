class Slide{
    constructor(options) {
        this.options = options
        this.$element = $(this.options.element)
        this.timer = undefined
        this.$element.addClass('frankSlides')

        this.initHml()
        this.bindEvent()

        this.go(0)
        if(this.options.autoPlay) {
            this.play()
        }

    }
    initHml () {
        this.w = this.$element.children('ol').children('li').width()
        this.$element.width(this.w)
        this.$prev = $('<button class="frankSlides-prev">上一张</button>')
        this.$element.append(this.$prev)
        this.$next = $('<button class="frankSlides-next">下一张</button>')
        this.$element.append(this.$next)
    }

    bindEvent() {
        this.$prev.on('click',()=>{this.prev()})
        this.$next.on('click',()=>{this.next()})
        this.$element.on('mouseenter', ()=>{
            this.stop()
        })
        this.$element.on('mouseleave', ()=>{
            this.play()
        })
    }

    go (index) {
        let $ol = this.$element.children('ol')
        let $item = $ol.children('li')
        if (index >= $item.length) {
            index = 0
        } else if (index < 0) {
            index = $item.length - 1
        }
        $ol.css({
            transform: `translateX(${-index*this.w}px)`
        })
        this.current = index
        console.log(`${index}index的值`)
        console.log(this.current)
    }

    next () {
        console.log(this.current)
        this.go(this.current + 1)
    }

    prev () {
        this.go(this.current - 1)
    }

    play () {
        this.timer = setInterval(()=>{
            this.go(this.current + 1)
        }, 2000)
    }

    stop() {
        window.clearInterval(this.timer)
    }
}

var slide = new Slide({
    element: '.slides',
    autoPlay: true,//是否翻页
    controls: false,//是否有小圆点
    pager: false    //是否有分页器
})

