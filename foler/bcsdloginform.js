logintry=()=>{
  alert('No login information');
}
const $img =document.getElementById("cat");
const $getcat=document.getElementById("get-cat");
    
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
