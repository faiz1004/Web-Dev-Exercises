let helloBtn = document.querySelector('button');
helloBtn.addEventListener('click', inputmsg);

function inputmsg(){
    let name = prompt('Enter Name of Student');
    helloBtn.textContent = 'Roll no 1:' + name;
}