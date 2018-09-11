window.onload=function () {
    let positionli=document.querySelector(".positionli");
    let aboutList=document.querySelector(".aboutList");
    console.log(positionli, aboutList);
    positionli.onmouseenter=function () {
        aboutList.style.display="block";
    }
    positionli.onmouseleave=function () {
        aboutList.style.display="none";
    }





}