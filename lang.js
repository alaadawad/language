let arabic = document.getElementById("arabic");
let english = document.getElementById("english");
let kurdish = document.getElementById("kurdish");
let title = document.getElementById("title");

arabic.onclick = ()=>{
     setlanugage("arabic");
     localStorage.setItem("ads","arabic");
};
english.onclick = ()=>{
    setlanugage("english");
    localStorage.setItem("ads","english");
    
};
kurdish.onclick = ()=>{
    setlanugage("kurdish");
    localStorage.setItem("ads","kurdish");
};

onload = ()=>{
    setlanugage(localStorage.getItem("ads"));
};
function setlanugage(getlanuage){
if(getlanuage === "arabic"){
    title.innerHTML = "الاء سليفاني";

}else if(getlanuage === "english"){
    title.innerHTML = "Alaa slivany";

}else if(getlanuage === "kurdish"){
    title.innerHTML = "ئالا سليفاني";

}
}
