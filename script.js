function animation(){
    let one=document.getElementById("as1")
    let as1_px=0;
    let ani_start=setInterval(fun,10)

    function fun(){
        if(as1_px==300){
            clearInterval(ani_start)
        }else{
            as1_px++
            as1_px.style.top=as1_px+"px"
            as1_px.style.left=as1_px+"px"
        }
    }
}