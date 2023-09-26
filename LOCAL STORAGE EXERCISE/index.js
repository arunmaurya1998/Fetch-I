let inputName = document.getElementById("inputName");
let inputAge = document.getElementById("inputAge");
let displayName = document.getElementById("displayName");
let displayAge = document.getElementById("displayAge")


function submit(){
    localStorage.setItem('Name', inputName.value)
    localStorage.setItem('age', inputAge.value)
    
}


function button(){
    let user_name = localStorage.getItem('Name')
    let user_age = localStorage.getItem('age')
    console.log(user_age)
    console.log(user_name) 
    document.getElementById("hidden1").style.display = "block";
    document.getElementById("hidden2").style.display = "block";
  displayName.innerText = user_name;
  displayAge.innerText = user_age;
}


