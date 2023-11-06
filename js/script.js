const DURATION = 4000;
var counter, parentbar, childbar;
var flag = true;

$(".play-button").on("click", function () {
  if ($(".progress-color").width() === 0) {
    flag = true;
  }
  manageProgress(flag);
  flag = !flag;

  $(".pause-button").removeClass("d-none");
  $(".play-button").addClass("d-none");
});

$(".pause-button").on("click", function () {
  manageProgress(flag);
  flag = !flag;
  $(".play-button").removeClass("d-none");
  $(".pause-button").addClass("d-none");
});

function manageProgress(flag) {
  if (!flag) {
    let activeWidth = $(".progress-color").width();
    $(".progress-color").css("width", activeWidth);
    $(".sound-wave").find(".bar-scale1").addClass("stop-animation");
    $(".sound-wave").find(".bar-scale2").addClass("stop-animation");
    $(".sound-wave").find(".bar-scale3").addClass("stop-animation");
    if (counter) {
      clearTimeout(counter);
    }
  } else {
    parentbar = $(".progress-bar").width();
    childbar = $(".progress-color").width();
    let duration = ((parentbar - childbar) * (DURATION / 1000)) / parentbar;
    $(".progress-color")
      .css("width", parentbar)
      .css("transition", "width " + duration + "s linear");
    $(".sound-wave").find(".bar-scale1").removeClass("stop-animation");
    $(".sound-wave").find(".bar-scale2").removeClass("stop-animation");
    $(".sound-wave").find(".bar-scale3").removeClass("stop-animation");
    counter = setTimeout(() => {
      $(".sound-wave").find(".bar-scale1").addClass("stop-animation");
      $(".sound-wave").find(".bar-scale2").addClass("stop-animation");
      $(".sound-wave").find(".bar-scale3").addClass("stop-animation");
      $(".play-button").removeClass("d-none");
      $(".pause-button").addClass("d-none");
      $(".progress-color").css("width", 0).css("transition-duration", "0s");
    }, duration * 1000);
  }
}
