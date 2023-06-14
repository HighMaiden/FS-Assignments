//************SELECTORS***********/

let shipping = 25;
let tax = 0;
let total = 0;
let products1 = [];
let products2 = [];
let products3 = [];

const items = document.querySelector(".items");
const p1_name = document.querySelector(".p1_name");
const p1_img = document.querySelector(".p1_img");
const p1_price = document.querySelector(".p1_price");
const p2_name = document.querySelector(".p2_name");
const p2_img = document.querySelector(".p2_img");
const p2_price = document.querySelector(".p1_price");
const p3_name = document.querySelector(".p3_name");
const p3_img = document.querySelector(".p3_img");
const p3_price = document.querySelector(".p3_price");
//******Main */
const selectText = document.querySelector(".selectText");

const p1_btn = document.querySelector(".p1-btn");

let count1 = 0;
let count2 = 0;
let count3 = 0;



//?Item ekle btn
items.addEventListener("click", (e) => {
  if (e.target.classList.contains("p1-btn")) {
  
    count1++;
    let ItemInfo1 = {
      id: new Date().getTime(),
      itemName: p1_name.textContent,
      itemImg: p1_img.src,
      itemPrice: p1_price.textContent,
      itemCount: count1,
    };
    const itemname =document.querySelector('.itemname')
    if (count1 == 1  & !itemname) {
      products1.push(ItemInfo1);
      localStorage.setItem("products1", JSON.stringify(products1));
        tablo(ItemInfo1)
    } else if (count1 >= 1) {
   
      
      products1[0].itemCount= Number(count1)
      products1[0].itemPrice = Number(count1) * Number(p1_price.textContent);
      localStorage.setItem("products1", JSON.stringify(products1));
      console.log(products1[0]);
        
     
      

    }
  tablo(ItemInfo1);
    
  } else if (e.target.classList.contains("p2-btn")) {
    count2++;
    let ItemInfo2 = {
      id: new Date().getTime(),
      itemName: p2_name.textContent,
      itemImg: p2_img.src,
      itemPrice: p2_price.textContent,
      itemCount: count2,
    };
    // console.log(count);
    if (count2 == 1) {
      products2.push(ItemInfo2);
      localStorage.setItem("products2", JSON.stringify(products2));
    } else if (count2 > 1) {
      ItemInfo2.itemCount = Number(count2);
      ItemInfo2.itemPrice = Number(count2) * Number(p2_price.textContent);

      localStorage.setItem("products2", JSON.stringify(products2));
    }
    // tablo(products2[0]);
    tablo(ItemInfo2);
  } else if (e.target.classList.contains("p3-btn")) {
    count3++;

    let ItemInfo3 = {
      id: new Date().getTime(),
      itemName: p3_name.textContent,
      itemImg: p3_img.src,
      itemPrice: p3_price.textContent,
      itemCount: count3,
    };
    // console.log(count);
    if (count3 == 1) {
      products3.push(ItemInfo3);
      localStorage.setItem("products3", JSON.stringify(products3));
    } else if (count3 > 1) {
      ItemInfo3.itemCount = Number(count3);
      ItemInfo3.itemPrice = Number(count3) * Number(p3_price.textContent);

      localStorage.setItem("products3", JSON.stringify(products3));
    }
    
    tablo(ItemInfo3);
  }
  
});



const tablo = ({ itemImg, itemCount, itemPrice, itemName }) => {
  selectText.innerHTML += `
 <div class="main__product">

<h4>Selected</h4>

<figure class="main__figure">
    <img src=${itemImg} alt="" class="main__img">
</figure>
<div class="main__product-info">
    <h2 class="itemname">${itemName}</h2>

    <div class="main__product-price">
        <p class="main__product-price--text"></p>
    </div>

    <div class="main_action">

        <div class="main_action--btn">

            <div class="main__quantity-controller">

                <i class="fa-solid fa-minus"></i>
                <p>${itemCount}</p>
                <i class="fa-solid fa-plus"></i>

            </div>

        </div>

        <div class="main__product-removal">
            <button class="main__product-removal--btn">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        </div>
        
        <div class="main__product-line-price">${itemPrice}</div>


    </div>

</div>

</div>`;
};
