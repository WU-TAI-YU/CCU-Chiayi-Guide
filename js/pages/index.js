(function () {
  "use strict";

  function initSplash() {
    var splash = document.getElementById("splash-screen");
    if (!splash) return;

    // 停留 1.2s 後開始淡出（0.7s 登場 + ~0.5s 停留）
    setTimeout(function () {
      splash.classList.add("is-hiding");
      splash.addEventListener(
        "transitionend",
        function () {
          splash.remove();
        },
        { once: true }
      );
    }, 1200);
  }

  document.addEventListener("DOMContentLoaded", initSplash);
})();
