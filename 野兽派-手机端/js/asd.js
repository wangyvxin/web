var oLi = document.getElementsByClassName("two");

for (var i = 0; i < oLi.length; i++) {
    (function (index) {
        oLi[index].getElementsByTagName("img")[1].onclick = function () {
            oLi[index].getElementsByTagName("img")[0].style.display = "block";
        }

        oLi[index].getElementsByTagName("img")[0].onclick = function () {
            oLi[index].getElementsByTagName("img")[0].style.display = "none";
        }
    })(i);

}