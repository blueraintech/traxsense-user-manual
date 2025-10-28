let buttons;
let index = 0;
let isMouseOverSlide = false;

$(document).ready(function () {
  buttons = $("#carouselButtons").find("a.slider-nav").get();

  function iterateButtons() {
    const numButtons = buttons.length;

    setInterval(function () {
      if (!isMouseOverSlide) {
        $(buttons[index]).click();

        index = (index + 1) % numButtons;
      }
    }, 3000);
  }

  $(buttons).on("click", function () {
    index = buttons.indexOf(this);

    $(buttons).removeClass("active-button");
    $(this).addClass("active-button");
  });

  iterateButtons();
  
  toggleAccordion(1);
});

function navigateToSlide(event, targetSlideId) {
  event.preventDefault();
  const targetSlide = document.querySelector(targetSlideId);
  const slides = document.querySelector(".slides");
  slides.scrollLeft = targetSlide.offsetLeft;
  isManualTransition = true;
}

function scrollToNextSlide() {
  if (!isManualTransition && !isMouseOverSlide) {
    const slides = document.querySelector(".slides");
    const currentSlide = document.querySelector(".slides-item:focus");
    const nextSlide =
      currentSlide &&
      (currentSlide.nextElementSibling ||
        document.querySelector(".slides-item:first-child"));

    if (currentSlide && nextSlide) {
      slides.scrollLeft = nextSlide.offsetLeft;
      nextSlide.focus();

      const currentIndex = Array.from(buttons).findIndex(
        (button) => button.href === `#${currentSlide.id}`
      );
      $(buttons).removeClass("active-button");
      $(buttons[currentIndex]).addClass("active-button");
    }
  }
}

function toggleAccordion(chapter) {
  const accordionItem = $(`#chapter-${chapter}`).closest(".accordion-item");

  // Check if the clicked item is already open
  const isOpen = accordionItem.hasClass("active");
  
  // Close all accordion items
  $(".accordion-item").removeClass("active");
  $(".accordion-body").slideUp();

  // Open the clicked item if it was closed and not already open
  if (!isOpen) {
    accordionItem.addClass("active");
    const accordionBody = accordionItem.find(".accordion-body");
    accordionBody.slideDown();
  }
  


  // Change the image if needed
  const imageMap = {
    1: "assets/images/home/acquisitionMonitoring.png",
    2: "assets/images/home/taskViewFramed.png",
    3: "assets/images/home/itemTrackingDashboard.png",
    4: "assets/images/home/itemManagement.png",
    5: "assets/images/home/inventoryFramed.png"
  };
  const accordionImage = $("#accordion-img");
  const image = imageMap[chapter];
  if (image) {
    accordionImage.attr("src", image);
  }
}

$(".slides-item")
  .on("mouseenter", function () {
    isMouseOverSlide = true;
  })
  .on("mouseleave", function () {
    isMouseOverSlide = false;
  });

window.MathJax = {
    tex: {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true
    },
    options: {
      ignoreHtmlClass: ".*|",
      processHtmlClass: "arithmatex"
    }
  };
  
  document$.subscribe(() => { 
    MathJax.typesetPromise()
  })
  
  
