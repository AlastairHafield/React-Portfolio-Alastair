//export check email function
export function checkEmail(email) {
  return email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
}

//export check blank function
export function checkBlank(input) {
  return input === "";
}
