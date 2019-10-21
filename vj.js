document.addEventListener(
  "DOMContentLoaded", () => {
      new Mmenu( "#my-menu", {
          "extensions": [
            "pagedim-black",
            "theme-dark"
          ],
          "counters": true,
          "navbars": [
            {
                "position": "top",
                "content": [
                  "searchfield"
                ]
            },
            {
                "position": "top",
                "content": [
                  "prev",
                  "title"
                ]
            },
            {
                "position": "bottom",
                "content": [
                  "<a class='fas fa-envelope' href='#/'></a>",
                  "<a class='fas fa-twitter' href='#/'></a>",
                  "<a class='fas fa-facebook' href='#/'></a>"
                ]
            }
          ]
      }, {
        // configuration
        classNames: {
            fixedElements: {
                fixed: "fix",
                sticky: "stick"
            }
        }
    });
  }
);


var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 0,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  autoHeight: true,
  spaceBetween: 10,
  keyboard: {enabled: true,},
  thumbs: {
    swiper: galleryThumbs
  }
});

var element = document.getElementById('back-link');
element.setAttribute('href', document.referrer);
element.onclick = function() {
  history.back();
  return false;
}
