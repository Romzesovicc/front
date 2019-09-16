function valid (form) {
let fail = false;
let name = form.fullname.value;
let phone = form.phone.value;
let email = form.email.value;
let adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
if (name === ""|| name === " " || name.length < 3 )
    fail = "Вы не ввели свое имя";
    else if(phone ==="")
        fail = "Вы не ввели номер телефона";
    else if(adr_pattern.test(email) === false)
         fail = "Вы ввели email неправильно";
    if(fail)
        alert(fail);
    else

        //form.submit();
        sendRequest(form);
    window.location.href = 'form_ok.html';
}




function sendRequest(form) {
  const url = 'http://localhost:3005/mail';
  const request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.onload = function() {
    console.log(request.responseText);
  };
  request.onerror = function() {
    console.log('err req');
  };
  let object = {};
  new FormData(form).forEach(function(value, key){
    object[key] = value;
  });
  request.send(JSON.stringify(object));
}