
function hidefunction() 
{
    document.getElementById("div-2-link-1").style.display= "none";
}

function showmore(){
    let hide_item=document.querySelectorAll(".footer_div2_more");
    for (let i1 = 0; i1 < hide_item.length; i1++) {
        hide_item[i1].style.display ="none";
    }
    let show_item=document.querySelectorAll(".footer_div2_hidden-list");
    for (let i2 = 0; i2 < show_item.length; i2++) {
        show_item[i2].style.display ="block";
    }
}
function showless(){
let hide_item=document.querySelectorAll(".footer_div2_hidden-list");
    for (let i1 = 0; i1 < hide_item.length; i1++) {
        hide_item[i1].style.display ="none";
    }
    let show_item=document.querySelectorAll(".footer_div2_more");
    for (let i2 = 0; i2 < show_item.length; i2++) {
        show_item[i2].style.display ="block";
}
}