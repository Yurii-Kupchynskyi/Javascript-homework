const ADMIN_PASSWORD = "jar";
let message;
let myPassword = prompt("Введіть пароль ");

switch (myPassword) {
  case null:
    message = "Скасовано користувачем!";
    break;

  case ADMIN_PASSWORD:
    message = "Ласкаво просимо!";
    break;

  default:
    message = "Доступ заборонений, невірний пароль!";
    break;
}
alert(message);
