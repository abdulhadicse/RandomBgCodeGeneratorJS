
const col= document.querySelector('.container');
const code= document.querySelector('h2');

document.querySelector('h1').addEventListener('click',()=>{
    const ran= Math.random().toString(16).slice(2,8);
    col.style.backgroundColor = '#'+ ran;
    code.innerText= '#'+ran;
})