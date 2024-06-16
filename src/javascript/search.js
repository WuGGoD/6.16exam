import axios from 'axios';
import { $ } from './basicFn'
import '../scss/search.scss'
import '../fonts/iconfont.css'
import BScroll from '@better-scroll/core';

const data = [];
async function render() {
    await axios.get('https://zyxcl.xyz/exam_api/zh')
        .then(res => data.push(...res.data.items))
    await axios.get('https://zyxcl.xyz/exam_api/xl')
        .then(res => data.push(...res.data.items))
    await axios.get('https://zyxcl.xyz/exam_api/sx')
        .then(res => data.push(...res.data.items))
}
render()
    .then(res => {
        console.log(data)
    })
$('input').addEventListener('change', function () {
    $('.data').innerHTML = data.filter(item => item.title.includes(this.value.trim())).map(item =>
        `<p>${item.title}</p>`
    ).join('')
})

new BScroll('.wrapper')