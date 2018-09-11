window.onload=function () {
    alert(1);
    let banlis=document.querySelectorAll(".ban li");
    let crilis=document.querySelectorAll(".bannercircle li");
    let banleft=document.getElementsByClassName("banleft")[0];
    let banright=document.getElementsByClassName("banright")[0];
    let banner=document.getElementsByClassName("banner")[0];
    // console.log(banlis, crilis,banleft,banright);
    //图和原点
    let num=0;
    let t=setInterval(move,2000);
    function move() {
        num++;
        if (num==crilis.length){
            num=0;
        }
        for (let i=0;i<crilis.length;i++){
            banlis[i].style.zIndex="5";
            crilis[i].className="";
        }
        banlis[num].style.zIndex="10";
        crilis[num].className="default";
    }
    function moveL() {
        num--;
        if (num<0){
            num=crilis.length-1;
        }
        for (let i=0;i<crilis.length;i++){
            banlis[i].style.zIndex="5";
            crilis[i].className="";
        }
        banlis[num].style.zIndex="10";
        crilis[num].className="default";
    }
//左右按钮
    banright.onclick=function () {
        move();
    }
    banleft.onclick=function () {
        moveL();
    }
//    点击原点  图出现
    for (let i=0;i<crilis.length;i++){
        crilis[i].onclick=function () {
            for (let j=0;j<crilis.length;j++) {
                banlis[j].style.zIndex="5";
                crilis[j].className="";
            }
            banlis[i].style.zIndex="10";
            crilis[i].className="default";
            mun=i;
        }
    }
//    移入不动
    banner.onmouseenter=function () {
        clearInterval(t);
    }
    banner.onmouseleave=function () {
        t=setInterval(move,2000);
    }








}