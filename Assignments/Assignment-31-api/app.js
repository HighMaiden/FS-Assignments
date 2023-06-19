//*************SELECTOR**************

const frm= document.querySelector(".frm")
const qrData=document.getElementById("qrData")
const qrCodes= document.getElementById("qrCodes")

frm.addEventListener("submit",(e)=>{

e.preventDefault();
createQR(qrData.value)


})


let ader =" https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="



const createQR=(request)=>{

fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${request}`)
.then((res)=>{
    if(!res.ok){
        throw new Error("There is an Error")
    }
    else{
        return res
    }
}).then((data)=>{

domaYaz(data.url)

}
)


}
const domaYaz =(gelenData)=>{

qrCodes.innerHTML +=`

<a href="${gelenData}" download="" target="_blank"><img src="${gelenData}" alt=""></a>

`
qrData.value=""
qrData.focus()

}