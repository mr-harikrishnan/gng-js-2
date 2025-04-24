let users = [];

function onSubmit() {
    var userData = {};
    userData.id = users.length + 1;
    userData.name = document.getElementById("name").value;
    userData.email = document.getElementById("email").value;
    userData.mobile = document.getElementById("mobile").value;
    userData.country = document.getElementById("country").value;
    userData.state = document.getElementById("state").value;
    userData.city = document.getElementById("city").value;

    users.push(userData);
    generate_table();
}

function generate_table() {
    var tablebody = document.getElementById("userBody");

  
    tablebody.innerHTML = "";

    for (let user of users) {
        var tr = document.createElement("tr");

        var idtd = document.createElement("td");
        idtd.innerText = user.id;
        tr.appendChild(idtd);

        var nametd = document.createElement("td");
        nametd.innerText = user.name;
        tr.appendChild(nametd);

        var emailtd = document.createElement("td");
        emailtd.innerText = user.email;
        tr.appendChild(emailtd);

        var mobiletd = document.createElement("td");
        mobiletd.innerText = user.mobile;
        tr.appendChild(mobiletd);

        var countrytd = document.createElement("td");
        countrytd.innerText = user.country;
        tr.appendChild(countrytd);

        var statetd = document.createElement("td");
        statetd.innerText = user.state;
        tr.appendChild(statetd);

        var citytd = document.createElement("td");
        citytd.innerText = user.city;
        tr.appendChild(citytd);

        tablebody.appendChild(tr);
    }
}
