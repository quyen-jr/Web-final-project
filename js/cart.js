// Set the date we're counting down to
var countDownDate = new Date("Jul 1, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

// Animations
ScrollReveal().reveal(".top_nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
});
ScrollReveal().reveal(".nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 100,
});

ScrollReveal().reveal(".header", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 200,
});
ScrollReveal().reveal(".section", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});
ScrollReveal().reveal(".footer", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});

// mobile nav
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});

const AddToCart = document.querySelectorAll(".add_to_cart");

// AddToCart.forEach((button) => {
//   button.addEventListener("click", () => {
//     const id = button.getAttribute("data-id");
//     const title = button.getAttribute("data-title");
//     const image = button.getAttribute("data-image");
//     const price = button.getAttribute("data-price");

//     const cartItem = { id, title, image, price };
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push(cartItem);
//     localStorage.setItem("cart", JSON.stringify(cart));
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const cartItems = document.querySelectorAll('.cart-item');
  const subtotalElem = document.getElementById('subtotal');
  const totalElem = document.getElementById('total');
  const shippingCost = 20.00;

  function updateCartTotal() {
      let subtotal = 0;
      cartItems.forEach(item => {
          const quantity = parseInt(item.querySelector('.quantity').textContent);
          const price = parseFloat(item.dataset.price);
          subtotal += quantity * price;
      });
      subtotalElem.textContent = `$${subtotal.toFixed(2)}`;
      totalElem.textContent = `$${(subtotal + shippingCost).toFixed(2)}`;
  }

  cartItems.forEach(item => {
      const decreaseBtn = item.querySelector('.decrease-quantity');
      const increaseBtn = item.querySelector('.increase-quantity');
      const quantityElem = item.querySelector('.quantity');
      const itemTotalPriceElem = item.querySelector('.item-total-price');

      decreaseBtn.addEventListener('click', () => {
          let quantity = parseInt(quantityElem.textContent);
          if (quantity > 1) {
              quantity--;
              quantityElem.textContent = quantity;
              const price = parseFloat(item.dataset.price);
              itemTotalPriceElem.textContent = `$${(price * quantity).toFixed(2)}`;
              updateCartTotal();
          }
      });

      increaseBtn.addEventListener('click', () => {
          let quantity = parseInt(quantityElem.textContent);
          quantity++;
          quantityElem.textContent = quantity;
          const price = parseFloat(item.dataset.price);
          itemTotalPriceElem.textContent = `$${(price * quantity).toFixed(2)}`;
          updateCartTotal();
      });
  });

  updateCartTotal();
});