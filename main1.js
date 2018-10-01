var users = []

function signup() {
  const firstnameInput = document.getElementById("firstname").value
  const lastnameInput = document.getElementById("lastname").value
  const epostInput = document.getElementById("epost").value
  const usernameInput = document.getElementById("username").value
  const passwordInput = document.getElementById("password").value

  const maleInput = document.getElementById("male").checked
  const femaleInput = document.getElementById("female").checked
  const otherInput = document.getElementById("othergender").checked

  const favoriteProgrammingLanguageInput = document.getElementById("language").value


const user = {
firstname:firstnameInput,
lastname:lastnameInput,
epost:epostInput,
username:usernameInput,
password:passwordInput,

isMale:maleInput,
isfemale:femaleInput,
isothergender:otherInput,
favoriteProgrammingLanguage:favoriteProgrammingLanguageInput
}
users.push(user)
console.log(users)
}