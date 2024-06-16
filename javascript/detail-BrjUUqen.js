import{b as p,$ as t}from"./axios-B1hsza8D.js";async function s(){const i=(await p.get(localStorage.getItem("itemOrigin"))).data.items.find(e=>e.item_id.toString()===localStorage.getItem("itemInfo"));t("img").src=i.img,t(".info").innerHTML=`
            <p class="price">￥${i.price}</p>
            <p><span>价格：<i>￥999</i></span></p>
            <p>${i.title}</p>
            <div class="express">
                <p>快递：00.00</p>
                <p>月销量:${i.sold}件</p>
                <p>天津</p>
            </div>`}s();
//# sourceMappingURL=detail-BrjUUqen.js.map
