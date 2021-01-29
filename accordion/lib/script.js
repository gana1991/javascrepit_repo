var prevElementIDSeleted = "section1";
var paraElmn = document.getElementsByClassName('para');
function showParaContent(elmnID) {
    document.getElementById(prevElementIDSeleted).style.background = 'lightgray';
    for(var i=0; i<paraElmn.length; i++){
        paraElmn[i].style.display = 'none';
    }
    document.getElementById(elmnID).style.background = 'blue';
    document.getElementById(elmnID).nextElementSibling.style.display = 'block';
    prevElementIDSeleted = elmnID;
}
 