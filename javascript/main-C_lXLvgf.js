import{$ as e,a as n,b as l}from"./axios-B1hsza8D.js";import{B as r}from"./core.esm-DWWMfJTk.js";async function t(c){let i=(await l.get(c)).data.items;e(".asscend")&&(i=i.sort((a,o)=>a.price-o.price)),e(".descend")&&(i=i.sort((a,o)=>o.price-a.price)),e(".con").innerHTML=i.map((a,o)=>`
          <dl data_id=${a.item_id}>
            <dt><img src="${a.img}" alt=""></dt>
            <dd>
              <h2>${a.title}</h2>
              <h3>月销${a.sold}笔</h3>
              <p>￥${a.price}</p>
            </dd>
          </dl>`).join(""),localStorage.setItem("itemOrigin",c),new r(".wrapper",{scrollY:!0,click:!0})}t("https://zyxcl.xyz/exam_api/zh");document.addEventListener("click",c=>{const s=c.target;if(s.classList.contains("shop")&&(e(".shopActive")&&e(".shopActive").classList.remove("shopActive"),s.classList.add("shopActive")),s.className==="shop compre shopActive"&&t("https://zyxcl.xyz/exam_api/zh"),s.className==="shop sell shopActive"&&t("https://zyxcl.xyz/exam_api/xl"),s.className==="shop new shopActive"&&t("https://zyxcl.xyz/exam_api/sx"),s.className==="arrange"&&(e(".icon-gengduo-2")?(e(".con").className="con grid",e("span",s).className="iconfont icon-fenlei-xuanzhong"):(e(".con").className="con list",e("span",s).className="iconfont icon-gengduo-2")),s.nodeName==="DL"&&(localStorage.setItem("itemInfo",s.getAttribute("data_id")),location.assign("./detail.html")),s.classList.contains("sort")){if(console.log(n("span",s)[0],n("span",s)[1]),e(".active")&&e(".active").classList.remove("active"),e(".asscend")){s.className="sort descend",n("span",s)[1].classList.add("active"),t(localStorage.getItem("itemOrigin"));return}if(e(".descend")){s.className="sort",t(localStorage.getItem("itemOrigin"));return}s.className="sort asscend",n("span",s)[0].classList.add("active"),t(localStorage.getItem("itemOrigin"))}});
//# sourceMappingURL=main-C_lXLvgf.js.map
