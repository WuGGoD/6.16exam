import '../fonts/iconfont.css'
import '../scss/index.scss'
import { $, $A } from './basicFn'
import axios from 'axios'
import BScroll from '@better-scroll/core'

new BScroll('.wrapper', {
    scrollY: true
})

async function render() {
    const res = await axios.get('https://zyxcl.xyz/exam_api/zh')
    const data = res.data.items
    console.log(data)

}
render()

document.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('shop')) {
        $('.shopActive') && $('.shopActive').classList.remove('shopActive')
        target.classList.add('shopActive')
    }
    if (target.className === 'sort') {
        $('.active') ? $A('span', target).forEach(item => item.classList.toggle('active')) : $('span', target).classList.add('active')
    }
    if (target.className === 'arrange') {
        $('.icon-gengduo-2') ? $('span', target).className = 'iconfont icon-fenlei-xuanzhong' : $('span', target).className = 'iconfont icon-gengduo-2'
    }
})