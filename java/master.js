//Make sub Menue in media  Queries
const menue_element_arry=["About","Careers","Events","Products","support"];
let menue_bar_button=document.querySelector(".menue_bar i");

let menue=document.createElement("ul");
let menue_address=document.createElement("div");
menue_address.className="menue_address_style";
menue.appendChild(menue_address);
let menue_address_logo=document.createElement("h5");
menue_address_logo.style.color="white"
let menue_address_logo_txt=document.createTextNode("Loopstudios");
let menue_address_logo_close=document.createElement("span");
let menue_address_logo_close_txt=document.createTextNode("X");
menue_address_logo_close.appendChild(menue_address_logo_close_txt);
menue_address_logo_close.className="close_style";
menue_address_logo.append(menue_address_logo_txt);
menue_address.append(menue_address_logo,menue_address_logo_close)
menue.className="media_menue_style "
document.body.append(menue)
menue_bar_button.onclick=function(){
 if(menue.classList.contains("display")){
    
    menue.classList.remove("display");
    document.querySelectorAll("ul li").forEach((ele)=>{
      ele.remove()
    })
     
 }else{
   
   menue_element_arry.map((ele)=>{
   let menue_element=document.createElement("li")
   menue_element.textContent=ele;
   menue.appendChild(menue_element)
   })
   menue.classList.add("display")
 }
}


menue_address_logo_close.addEventListener("click",()=>{
  menue.classList.remove("display")
})

