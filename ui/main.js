console.log('Loaded!');

var element = document.getElementById("main-text");

element.innerHTML = 'New value';

var img = docment.getElementById('img');
img.onclick = function(){
    img.style.marginLeft =  '100px';
}