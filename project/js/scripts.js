// $(function() {
//   let lastScrollLeft = 0;
//   let isScrollRight = true;
//   $(".scroll-text").mousewheel(function(event, delta) {
//     event.preventDefault();
//     this.scrollLeft -= (delta * 1);
//
//     if (this.scrollLeft + $(window).width() === this.scrollWidth) {
//       console.log('bottom')
//     }
//     if (lastScrollLeft < this.scrollLeft) {
//       // console.log('scroll right');
//       isScrollRight = true;
//     } else {
//       // console.log('scroll left');
//       isScrollRight = false;
//     }
//     lastScrollLeft = this.scrollLeft <= 0 ? 0 : this.scrollLeft;
//     const _this = this
//     $('.scroll-text span').each(function(index, item) {
//       const itemLeft = $(item).offset().left;
//       const itemRight = $(item).offset().left + $(item).width();
//       if (
//           ((itemLeft > 427) && (itemRight < 1100))
//           || ((itemLeft < 427) && (itemRight > 427 && itemRight < 1100) && isScrollRight)
//           || ((itemLeft > 427 && itemLeft < 1100) && (itemRight > 1100) && !isScrollRight)
//           || ((itemLeft < 427) && (itemRight > 1100))
//           ) {
//         // console.log(item)
//         $('.scroll-text span').removeClass('active');
//         $(item).addClass('active');
//       }
//     })
//   });
//
// });
