window.addEventListener('DOMContentLoaded', function() {
  let products = document.querySelectorAll('.product'),
      buttons = document.querySelectorAll('button'),
      openBtn = document.querySelector('.open');

  function createCart() {
  let cart = document.createElement('div'),
      field =  document.createElement('div'),
      heading =  document.createElement('h2'),
      closeBtn =  document.createElement('button');

      cart.classList.add('cart');
      field.classList.add('cart-field');
      closeBtn.classList.add('close');

      heading.textContent = "In our cart:";
      closeBtn.textContent = "Close";

      document.body.appendChild(cart);
      cart.appendChild(heading);
      cart.appendChild(field);
      cart.appendChild(closeBtn);
  }
  createCart();

  let field = document.querySelector('.cart-field'),
      cart = document.querySelector('.cart'),
      close = document.querySelector('.close');

  function openCart() {
      cart.style.display = 'block';
  }
  function closeCart() {
      cart.style.display = 'none';
  }
      openBtn.addEventListener('click', openCart);
      close.addEventListener('click', closeCart);

  // for (let i = 0; i < buttons.length; i++) {
  //   buttons[i].addEventListener('click', function() {
  //     let item = products[i].cloneNode(true),
  //         btn = item.querySelector('button');

  //         btn.remove();
  //         field.appendChild(item);
  //         products[i].remove();
  //   });
  // }

  buttons.forEach((item, i) => {
    item.addEventListener('click', () => {
      let item = products[i].cloneNode(true),
          btn = item.querySelector('button');

          btn.remove();
          field.appendChild(item);
          products[i].remove();
    });
  });



});


