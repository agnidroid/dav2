(function () {
  setInterval(() => {
    let date = new Date();
    let timestamp = document.querySelector("#timestamp");
    let day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let todayDate = date.getDate();

    if (todayDate == 1) {
      todayDate = 1 + "st";
    } else if (todayDate == 2) {
      todayDate = 2 + "nd";
    } else if (todayDate == 3) {
      todayDate = 3 + "rd";
    } else {
      todayDate = todayDate + "th";
    }

    timestamp.innerHTML = `
    <span>${day[date.getDay()]}</span>
    <span>${date.toLocaleTimeString()},</span>
    <span> ${todayDate} ${month[date.getMonth()]},</span>
    <span> ${date.getFullYear()}</span>`;
  }, 1000);

  //   scroll functions
  (function () {
    let topTopBtn = document.querySelector("#toTopBtn");
    carousel = document.getElementById("carousel");
    let nav = document.getElementById("nav");
    let navbar__brand = nav.querySelector("a.navbar-brand");
    let ul = nav.querySelector("ul");
    topTopBtn.addEventListener("click", topFunction);
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = () => {
      scrollFunction();
    };
    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        topTopBtn.style.display = "block";
      } else {
        topTopBtn.style.display = "none";
      }

      // for nav bar
      if (
        document.body.scrollTop > document.innerHeight ||
        document.documentElement.scrollTop > document.innerHeight
      ) {
        carousel.style.marginTop = "75px";
        nav.classList.add("fixed-top");
        // nav.classList.replace("border-bottom", "gold-border-bottom");
        // nav.style.borderBottom = "3px solid goldenrod"
        // navbar__brand.classList.remove('d-none')
        // ul.classList.replace("m-auto", "ml-auto")
      } else {
        carousel.style.marginTop = "0";
        // navbar__brand.classList.add('d-none')
        nav.classList.remove("fixed-top");
        // nav.style.borderBottom = "1px solid #f8f9fa"
        // nav.classList.replace("gold-border-bottom", "border-bottom");
        // ul.classList.replace("ml-auto", "m-auto")
      }
    }
    scrollFunction();
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  })();

  // sliding image
  (function () {
    let carouselItem = carousel.querySelectorAll(".carousel_item");
    let prevBtn = carousel.querySelector("#prev button");
    let nextBtn = carousel.querySelector("#next button");

    console.log(prevBtn, nextBtn);
    let randNum = Math.floor(Math.random() * carouselItem.length);
    carouselItem[randNum].classList.add("current");
    const next = () => {
      const current = document.querySelector(".carousel_item.current");
      // current.classList.remove("current")
      if (current.nextElementSibling) {
        current.nextElementSibling.classList.add("current");
      } else {
        carouselItem[0].classList.add("current");
      }

      setTimeout(() => current.classList.remove("current"));
    };

    const prev = () => {
      const current = document.querySelector(".carousel_item.current");
      // current.classList.remove("current")
      if (current.previousElementSibling) {
        current.previousElementSibling.classList.add("current");
      } else {
        carouselItem[carouselItem.length - 1].classList.add("current");
      }

      setTimeout(() => current.classList.remove("current"));
    };

    prevBtn.addEventListener("click", () => {
      const current = document.querySelector(".carousel_item.current");
      if (current.classList.contains("transition-1s")) {
        current.classList.remove("transition-1s");
      }
      prev();
    });
    nextBtn.addEventListener("click", () => {
      const current = document.querySelector(".carousel_item.current");
      if (current.classList.contains("transition-1s")) {
        current.classList.remove("transition-1s");
      }
      next();
    });

    if (true) {
      setInterval(() => {
        const current = document.querySelector(".carousel_item.current");
        if (!current.classList.contains("transition-1s")) {
          current.classList.add("transition-1s");
        }
        next();
      }, 20000);
    }
  })();

  // faq accordion
  (function () {
    const container = document.querySelector("#accordion");
    const item = container.querySelectorAll(".accordion__item");
    item[0].classList.add("active");

    // click function
    const accordion = (el) => {
      let active = document.querySelector(".accordion__item.active");        
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      } else {
        el.classList.add("active");
      }
      setTimeout(() => active.classList.remove("active"));
    };
    // getting all the items
    item.forEach((el) => {
      let button = el.querySelector("button")
      el.addEventListener("click", (par) => {
        if (par.target == button || par.target.parentElement == button) {
          accordion(el); 
        }
      });
    });
  })();

  // increment section 
  (function () {
    const counter__controls = document.querySelectorAll(".counter-control")
        counter__controls.forEach(counter => {
            // Counter Initial Value
            counter.innerHTML = 0
            const updateCounter = () => {
                const targetCount = +counter.getAttribute("data-target")
                const startingCount = +counter.innerHTML
                const incr = targetCount / 100
                if (startingCount < targetCount) {
                    counter.innerHTML = Math.round(startingCount + incr)
                    setTimeout(updateCounter, 15)
                } else {
                    counter.innerHTML = targetCount
                }
            }
            updateCounter()
        })
  }())
})();