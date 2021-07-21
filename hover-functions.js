/* SCRIPT PARA AS FUNÇÕES DE HOVER */

// Variáveis da UI

// imagem 1 
const img1 = document.querySelector('.img-1');
const palavra1 = document.querySelector('.palavra1');
// imagem 2
const img2 = document.querySelector('.img-2');
const palavra2 = document.querySelector('.palavra2');
// imagem 3
const img3 = document.querySelector('.img-3');
const palavra3 = document.querySelector('.palavra3');

const layer = document.querySelector('.first');

// Eventos

// evento para a primeira imagem
img1.addEventListener('mouseover', HoverImg1 = function() {

  const layer = document.querySelector('.first');
  layer.style.display = 'flex';
  img1.style.backgroundSize = '140%'
  img1.style.filter = 'blur(10px)'
  palavra1.style.opacity = '1';
  // zerar as outras
  palavra3.style.opacity = '0';
  palavra2.style.opacity = '0';
  layer.style.cursor = 'pointer'
} );

// evento para a segunda imagem
img2.addEventListener('mouseover', HoverImg2 = function() {
  const layer = document.querySelector('.first');
  layer.style.display = 'flex';
  img2.style.backgroundSize = '150%'
  img2.style.filter = 'blur(10px)'
  palavra2.style.opacity = '1';
  // zerar as outras
  palavra3.style.opacity = '0';
  palavra1.style.opacity = '0';
  layer.style.cursor = 'pointer'
} );

// evento para a terceira imagem
img3.addEventListener('mouseover', HoverImg3 = function() {
  const layer = document.querySelector('.first');
  layer.style.display = 'flex';
  img3.style.backgroundSize = '150%'
  img3.style.filter = 'blur(10px)'
  palavra3.style.opacity = '1';
  // zerar as outras
  palavra1.style.opacity = '0';
  palavra2.style.opacity = '0';
  layer.style.cursor = 'pointer'
} );


layer.addEventListener('mouseout', Out = function() {
  // "reset"
  layer.style.display = 'none'
  img1.style.backgroundSize = '160%'
  img2.style.backgroundSize = '170%'
  img3.style.backgroundSize = '170%'
  img2.style.filter = 'blur(0px)'
  img1.style.filter = 'blur(0px)'
  img3.style.filter = 'blur(0px)'
})