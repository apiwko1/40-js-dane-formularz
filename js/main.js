function uzupelnij(){
    let fname = document.getElementById('fname');
    let name = document.getElementById('name');    

    let fsurname = document.getElementById('fsurname');
    let surname = document.getElementById('surname');

    let fphone = document.getElementById('fphone');
    let phone = document.getElementById('phone');

    name.textContent = fname.value;
    surname.textContent = fsurname.value;
    phone.textContent = fphone.value;

}

let b = document.querySelector('button');

b.onclick = uzupelnij;