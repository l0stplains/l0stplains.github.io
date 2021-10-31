$("#icon").on({
  click: function () {
    if ($(this).attr("src") === "/assets/images/moon.png") {
      var src = "/assets/images/sun.png";
      var src2 = "/assets/images/bars-white.png";
      var src3 = "/assets/images/down-arrow-dark.png";
      var src4 = "/assets/images/user-dark.png";
      var src5 = "/assets/images/map-marker-dark.png";
      var src6 = "/assets/images/envelope-dark.png";
      $(".dmode").addClass("dark");
    } else {
      var src = "/assets/images/moon.png";
      var src2 = "/assets/images/bars.png";
      var src3 = "/assets/images/down-arrow.png";
      var src4 = "/assets/images/user.png";
      var src5 = "/assets/images/map-marker.png";
      var src6 = "/assets/images/envelope.png";
      $(".dmode").removeClass("dark");
    }
    $("#envelope").attr("src", src6);
    $("#map-marker").attr("src", src5);
    $("#user").attr("src", src4);
    $("#down-arrow").attr("src", src3);
    $("#bars").attr("src", src2);
    $(this).attr("src", src);
  },
});
