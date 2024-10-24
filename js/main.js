'use strict';
{
  //intro
  const loader = document.getElementById('loader');
  const blandName = document.getElementById('bland');
  setTimeout(function() {
    blandName.classList.add('loaded');
  }, 3000);
  setTimeout(function() {
    loader.classList.add('loaded');
  }, 4000);
}

{
  //visual
  let images = document.querySelectorAll(`.image`);
  for (const[key, value] of Object.entries(images)) {
    value.animate (
      [
        {
          offset: 0.0,
          opacity: '0'
        },
        {
          offset: 1.0,
          opacity: '1'
        },
      ],
      {
        duration: 1200,
        delay: key * 1000,
        iterations: 1,
        fill:"forwards", 
      }
    );
  }
}

{
  //splide
  const target = '.splide';
  const options = {
    mediaQuery: 'min',
    parPage: 1,
    type: 'fade',
    rewind: true,
  }
  const mySplide = new Splide(target, options);
  mySplide.mount();
}


