var users = [
    {
        "name" : "john doe",
        "gender" : "MALE",
        "img" : "john.png"
    },
    { 
        "name" : "jane doe",
        "gender" : "FEMALE",
        "img" : "jane.png"
    }
];

var id = 0;

function toggleuser() {
    id = (id + 1) % users.length; // cycle through users

    var userImage = document.getElementById("user-Image");
    userImage.src = users[id].img; // use [] not ()

    var username = document.getElementById("user-name");
    username.innerHTML = users[id].name; // lowercase 'id'

    var usergender = document.getElementById("user-gender");
    usergender.innerHTML = users[id].gender;
}
