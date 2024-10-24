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


