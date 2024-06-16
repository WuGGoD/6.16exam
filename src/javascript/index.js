import '../fonts/iconfont.css'
import '../scss/index.scss'
import { $, $A } from './basicFn'
import axios from 'axios'
import BScroll from '@better-scroll/core'

new BScroll('.wrapper', {
    scrollY: true,
    click: true
})

async function render(url) {
    const res = await axios.get(url)
    const data = res.data.items
    $('.con').innerHTML = data.map((item, index) => `
          <dl data_id=${item.item_id}>
            <dt><img src="${item.img}" alt=""></dt>
            <dd>
              <h2>${item.title}</h2>
              <h3>月销${item.sold}笔</h3>
              <p>￥${item.price}</p>
            </dd>
          </dl>`).join('')
    localStorage.setItem('itemOrigin', url)
}
render('https://zyxcl.xyz/exam_api/zh')

document.addEventListener('click', e => {
    const target = e.target;
    if (target.classList.contains('shop')) {
        $('.shopActive') && $('.shopActive').classList.remove('shopActive')
        target.classList.add('shopActive')
    }
    if (target.className === 'shop compre shopActive') {
        render('https://zyxcl.xyz/exam_api/zh')
    }
    if (target.className === 'shop sell shopActive') {
        render('https://zyxcl.xyz/exam_api/xl')
    }
    if (target.className === 'shop new shopActive') {
        render('https://zyxcl.xyz/exam_api/sx')
    }
    if (target.className === 'sort') {
        $('.active') ? $A('span', target).forEach(item => item.classList.toggle('active')) : $('span', target).classList.add('active')
    }
    if (target.className === 'arrange') {
        if ($('.icon-gengduo-2')) {
            $('.con').className = 'con grid'
            $('span', target).className = 'iconfont icon-fenlei-xuanzhong'
        } else {
            $('.con').className = 'con list'
            $('span', target).className = 'iconfont icon-gengduo-2'
        }
    }
    if (target.nodeName === 'DL') {
        localStorage.setItem('itemInfo', target.getAttribute('data_id'))
        location.assign('./detail.html')
    }
})