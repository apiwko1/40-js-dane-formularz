function uzupelnij(){
    let fname = document.getElementById('fname');
    let name = document.querySelector('#name');
    name.textContent = fname.value;

}

let b = document.querySelector('button');

b.onclick = uzupelnij;