let video_src = ""; /*"https://www.youtube.com/embed/L_hFw_cWg9U"*/

let tvImg = document.getElementById("tv");
let iframeDiv = $("#iF");
let iFrameBreadCrumb = document.querySelector("#live-sermon-iFrame");

let headingText = document.getElementById("heading");

let timer = document.getElementById("timer");

if (video_src) {
  tvImg.style.display = "none";
  iFrameBreadCrumb.style.display = "block";
  headingText.innerHTML = "Live From Church";
  timer.style.display = "none";
  iframeDiv.append(`
  <div class="iframe-container col-12 col-lg-12">

    <iframe
      width="100%"
      height="100%"
      src=${video_src}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    </div>`);
}
