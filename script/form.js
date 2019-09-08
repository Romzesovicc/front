function valid (form) {
let fail = false;
let name = form.fullname.value;
let phone = form.phone.value;
let email = form.email.value;
let adr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
if (name === ""|| name === " " )
    fail = "Вы не ввели свое имя";
    else if(phone ==="")
        fail = "Вы не ввели номер телефона";
    else if(adr_pattern.test(email) === false)
         fail = "Вы ввели email неправильно";
    if(fail)
        alert(fail);
    else
        alert("Ваш заказ принят!");
form.submit();
}