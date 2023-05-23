logintry=()=>{
  alert('No login information');
}
const $img =document.getElementById("cat");
const $getcat=document.getElementById("get-cat");
const $id=document.getElementsByClassName("idinput");
function getcatimg(){
  fetch("https://api.thecatapi.com/v1/images/search?size=full").then(//json 객체를 가져오기
    (response)=>{
      response.json().then((res) => {
        $img.src=res[0].url;
        console.log (response);
      });
    }
  );
}
$getcat.addEventListener("click",getcatimg);
function login(){
  let cookieid=$id[0].value;
  let exTime=new Date();
  exTime.setTime(exTime.getHours()+72);
  document.cookie=`id=${cookieid};expires=${exTime};path=/`;
  localStorage.setItem("id", cookieid);
  sessionStorage.setItem("id",cookieid);
  console.log(`${cookieid}`)
}
const $loginbtn=document.getElementById("loginbtn");
$loginbtn.addEventListener("click",login);

