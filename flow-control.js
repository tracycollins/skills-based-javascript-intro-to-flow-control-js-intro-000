function basicTeenager(age) {
    console.log("age: " + age)
    if (age>=13 && age<=19){
      return "You are a teenager!";
    }
    return;
}

function teenager(age) {
  if (age>=13 && age<=19){
    return "You are a teenager!"
  }
  return 'You are not a teenager'
}

function ageChecker(age) {
  if (age>=20){
    return "You are a grownup"
  }
  if (age<=12){
    return "You are a kid"
  }
  // if (age>=13 && age<=19){
    return "You are a teenager!"
  // }
}

function ternaryTeenager(age) {
  return (age>=13 && age<=19) ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age) {

}
