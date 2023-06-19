// const form = document.querySelector(".top-banner form");
// const input = document.querySelector(".top-banner input");
// const msgSpan = document.querySelector(".container .msg");
// const coinList = document.querySelector(".ajax-section .container .coins");
// //*LocalStorage
// localStorage.setItem(
//   "apiKey",
//   EncryptStringAES(
//     "coinranking6e7e6751579f89007138c8ebc709a16fb576dd1a173af285"
//   )
// );

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   getCoinDataFromApi();
//   e.currentTarget.reset();
// });

// const getCoinDataFromApi = async () => {
//   const apiKey = DecryptStringAES(window.localStorage.getItem("apiKey"));
//   const URL = `https://api.coinranking.com/v2/coins?search=${input.value}&limit=1`;
//   const options = {
//     headers: {
//       "x-access-token": apiKey,
//     },
//   };
//   //* fetch vs axios
//   //   const res= await fetch(URL,options)
//   //   .then((response)=> response.json())
//   //   .then((result)=>console.log(result.data))
//   const response = await axios();

//   // console.log(response.data.data.coins[0]);
//   //*obj.destructring
//   const { price, name, change, iconUrl, symbol } = response.data.data.coins[0];

//   const createdLi = document.createElement("li");
//   createdLi.classList.add("coin");
//   createdLi.innerHTML = `
// <h2 class="coin-name" data-name=${name}>
//     <span>${name}</span>
//     <sup>${symbol}</sup>
// </h2>
// <div class="coin-temp">$${Number(price).toFixed(3)}</div>
// <figure>
//     <img class="coin-icon" src="${iconUrl}">                
//     <figcaption  style="color:${change < 0 ? "red": "green"}">
//         <span><i class="fa-solid fa-chart-line"></i></span>
//         <span>${change}%</span>
//     </figcaption>
// </figure>
// <span class="remove-icon">
//     <i class="fas fa-window-close" style="color:red"></i>
// </span>
// `;
// //* append vs prepend
// coinList.prepend(createdLi);
// createdLi.querySelector(".remove-icon").addEventListener("click",()=>{
//     createdLi.remove();
// })

// };


const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
//.class1.class2 vs. .class1 .class2 
const msgSpan = document.querySelector(".container .msg");
const coinList = document.querySelector(".ajax-section .container .coins");

//localStorage
localStorage.setItem("apiKey", EncryptStringAES("coinranking6e7e6751579f89007138c8ebc709a16fb576dd1a173af285"));
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    getCoinDataFromApi();
    //form.reset == e.target.reset
    e.target.reset();
});

const getCoinDataFromApi = async() =>{
    //alert("Get Coin Data!!");
    const apiKey = DecryptStringAES(localStorage.getItem("apiKey"));
    //console.log(apiKey);
    //!!!template literal!!!
    const url = `https://api.coinranking.com/v2/coins?search=${input.value}&limit=1`;
    const options = {
        headers: {
          'x-access-token': apiKey,
        },
    };
      //fetch vs. axios
    //   const response = await fetch(url, options)
    //   .then((response) => response.json())
    //   .then((result) => console.log(result.data.coins[0]));
    try { const response = await axios(url, options);
    //console.log(response.data.data.coins[0]);
    //obj. dest.
    const { price, name, change, iconUrl, symbol } = response.data.data.coins[0];
    //console.log(iconUrl);
//*Coin Control !!!
const coinNameSpans= coinList.querySelectorAll("h2 span");  
//* filter vs map(array)
if(coinNameSpans.length>0){const filteredArray = [...coinNameSpans].filter(span=>
    span.innerText == name
)
if(filteredArray.length> 0){
    msgSpan.innerText = `You already know the data for ${name}, Please search for another coin 😉`
    setTimeout(()=>{
        msgSpan.innerText = "";
    },3000)
    return;
}}


    const createdLi = document.createElement("li");
    createdLi.classList.add("coin");
    createdLi.innerHTML = `
        <h2 class="coin-name" data-name=${name}>
            <span>${name}</span>
            <sup>${symbol}</sup>
        </h2>
        <div class="coin-temp">$${Number(price).toFixed(6)}</div>
        <figure>
            <img class="coin-icon" src=${iconUrl}>                
            <figcaption style='color:${change < 0 ? "red" : "green"}'>
                <span><i class="fa-solid fa-chart-line"></i></span>
                <span>${change}%</span>
            </figcaption>
        </figure>
        <span class="remove-icon">
            <i class="fas fa-window-close" style="color:red"></i>
        </span>`;
        //append vs. prepend
        //append vs appendChild
        coinList.prepend(createdLi);
        //remove func.
        createdLi.querySelector(".remove-icon").addEventListener("click", ()=>{
            createdLi.remove();
        });
        
    } catch (error) {
        //*Error Logging
        //*postErrorLog("crypto.js","getCoinDataFromApi",new Date(),error...);
        msgSpan.innerText="Coin not found!"
        setTimeout(()=>{
            msgSpan.innerText=""
        },3000)
    }
   
        //

}