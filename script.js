var secBtn = document.querySelector('#btn-Convert-Html2Image');
var btn = document.querySelector('#generate');
var img = document.querySelector('#img-logo');
var nameop = document.querySelector('#username');
var idop = document.querySelector('#userid');
var body = document.querySelector('#body');
var sec2 = document.querySelector('#sec-2');
var opCont = document.querySelector('#op-container');


btn.addEventListener('click', function(e){
    e.preventDefault()
    var username = document.querySelector('#usernameip').value;
    var userid = document.querySelector('#useridip').value;
    var msg = document.querySelector('#msgip').value;

    if(username=='' || userid=='' || msg==''){
        alert('Enter All Data');
        return;
    }

    var names = username.split(' ');
    if(names[1]){
        var abbr = names[0][0] + names[1][0]
    }else{
        var abbr = names[0][0]
    }

    img.textContent = abbr;
    nameop.textContent = username;
    idop.textContent = userid;
    body.textContent = msg;
    sec2.style.display = 'flex';
    scrollTo(0, 780)
});

secBtn.addEventListener('click', function(e){
    if(opCont.style.display == 'flex'){
        scrollTo(0,1500);
        return;
    }
    html2canvas(document.querySelector("#previewImage")).then(canvas => {
        opCont.style.display = 'flex';
        document.getElementById('op').appendChild(canvas);
        scrollTo(0, 1500)
    });
});