var oLi = document.getElementsByClassName("dh")[0].getElementsByClassName("onc");
var oYc = document.getElementsByClassName("yc");
var j = 0;



for (var i = 0; i < oLi.length; i++) {
    (function (index) {
        oLi[index].onclick = function () {
            if (j == 0) {
                oYc[index].style.display = "block";
                console.log(index)
                j = 1;
            } else {
                oYc[index].style.display = "none";
                j = 0;
            }
        }
    })
    (i);


}















