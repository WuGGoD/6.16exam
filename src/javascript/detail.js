import axios from 'axios';
import '../fonts/iconfont.css'
import { $, $A } from './basicFn'
import '../scss/detail.scss';

async function render() {
    const res = await axios.get(localStorage.getItem('itemOrigin'))
    const data = res.data.items.find(item => item.item_id.toString() === localStorage.getItem('itemInfo'))
    $('img').src = data.img
    $('.info').innerHTML = `
            <p class="price">￥${data.price}</p>
            <p><span>价格：<i>￥999</i></span></p>
            <p>${data.title}</p>
            <div class="express">
                <p>快递：00.00</p>
                <p>月销量:${data.sold}件</p>
                <p>天津</p>
            </div>`
}
render()