"use strict";

{
  // 戻るボタンの表示
  var px_change = 1;

  window.addEventListener("scroll", function (e) {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > px_change) {
      this.document.getElementById("back-top").classList.add("fade-in");
    } else {
      this.document.getElementById("back-top").classList.remove("fade-in");
    }
  });
}
