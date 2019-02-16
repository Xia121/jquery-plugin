class Dialog {
    constructor(options){
        this.options = options
        this.init()
    }
    init () {
        let {title, content, buttons, cha} = this.options
        let $button = buttons.map((buttonOption) => {
            let $b = $('<button></button>')
            $b.text(buttonOption.text)
            $b.on('click', buttonOption.action)
            return $b
        })
        let $cha = () => {
            console.log(cha)
            let $a = $('<div class="frankDialog-cha">X</div>')
            $a.on('click',cha.action)
            return $a
        }
        var template = `
           <div class="frankDialog">
           <div class="frankDialog-wrapper">
                 <header class="frankDialog-header">${title}</header>
                 <main class="frankDialog-main">${content}</main>
                 <footer class="frankDialog-footer"></footer>     
            </div>         
           </div>
       `
        var $dialog = $(template)
        $dialog.find('footer').append($button)
        $dialog.find('.frankDialog-wrapper').prepend($cha)
        $dialog.addClass(this.options.className)
        this.$dialog = $dialog
    }
    open () {
        this.$dialog.appendTo('body')
    }
    close () {
        this.$dialog.detach()
    }
}


x.onclick = function () {
    var dialog = new Dialog({
        title: '标题',
        content: '<b>欢迎</b>',
        className: 'username',
        cha: {
            text: 'X', action: function () {
                dialog.close()
            }
        },
        buttons: [
            {
                text: '确定', action: function () {
                setTimeout(() => {
                    dialog.close()
                }, 3000)
            }
            },
            {
                text: '取消', action: function () {
                dialog.close()
            }
            }
        ]
    })
    dialog.open()
}