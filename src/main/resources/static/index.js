var users = [
    {
        name: "john doe",
        gender: "MALE",
        img: "john.png"
    },
    {
        name: "jane doe",
        gender: "FEMALE",
        img: "jane.png"
    }
];

var id = 0;

function toggleuser() {
    id = (id + 1) % users.length;

    document.getElementById("user-Image").src = users[id].img;
    document.getElementById("user-name").innerHTML = users[id].name;
    document.getElementById("user-gender").innerHTML = users[id].gender;
}

function randomuser() {
    fetch("https://randomuser.me/api/")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var userData = data.results[0];

            document.getElementById("user-Image").src = userData.picture.large;
            document.getElementById("user-name").innerHTML =
                userData.name.first + " " + userData.name.last;
            document.getElementById("user-gender").innerHTML = userData.gender;
        })
        .catch(function(err) {
            console.error(err);
        });
}