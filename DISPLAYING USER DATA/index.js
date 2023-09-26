document.getElementById("fetchUsersBtn").addEventListener('click', fetchData);

function fetchData() {
  fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(data => {
      let output = "";
      console.log(data.data)

      data.data.forEach(user => {
        output += `
          <div class="user-card">
            <img src="${user.avatar}" alt="avatar">
            <div class="user-details">
              <span class="name">${user.first_name}</span>
              <span class="email">${user.email}</span>
            </div>
          </div>
        `;
      });

     
       document.getElementById("usersList").innerHTML = output;
      
    });
}
