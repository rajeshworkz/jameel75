// $(document).ready(function () {
    $(".box-story, .search-list").click(function () {
        $(".stories-section").addClass("on");
        $(".stories-detail-section").addClass("on");
        $(".stories-page").addClass("on");

        animationRepeat();
        // $(".anim-title").addClass("wow fadeInRight animated");
        // $(".anim-image").addClass("wow fadeInRight animated");
        // $(".anim-subtitle").addClass("wow fadeInRight animated");
        // $(".anim-text").addClass("wow fadeInRight animated");
        

      });
      $(".close").click(function () {
        $(".stories-section").removeClass("on");
        $(".stories-detail-section").removeClass("on");
        $(".stories-page").removeClass("on");

        // $(".anim-title").removeClass("wow fadeInRight animated");
        // $(".anim-image").removeClass("wow fadeInRight animated");
        // $(".anim-subtitle").removeClass("wow fadeInRight animated");
        // $(".anim-text").removeClass("wow fadeInRight animated");

      });

      $(".detail-footer div").click(function () {
        animationRepeat();
      });
      mainAnim();
    // });
    
    function mainAnim() {
      let allImages = document.querySelectorAll(".box-story");
      let ranArray = [];
      let numberGen = function (rm) {
        if (rm.length >= 100) {
          boxAnim();
          return;
        }
        let newNumber = Math.floor(Math.random() * 100);
        if (rm.indexOf(newNumber) === -1) {
          rm.push(newNumber);
        }
        numberGen(rm);
      };
      numberGen(ranArray);
      function boxAnim() {
        for (i = 0; i <= ranArray.length - 1; i++) {
          (function (i) {
            setTimeout(function () {
              allImages[ranArray[i]].classList.add("show");
            }, 5 * i);
          })(i);
        }
      }
    }
    