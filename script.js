const startTime = performance.now();

window.addEventListener("load", function () {
  document.querySelector(".preloader").style.display = "none";
  const endTime = performance.now();
  const preloadingTime = (endTime - startTime) / 1000;
  document.documentElement.style.setProperty(
    "--animation-delay",
    `${preloadingTime}s`
  );
  setTimeout(function () {
    document.querySelector(".start_animation").style.display = "none";
  }, (preloadingTime + 6) * 1000);
});