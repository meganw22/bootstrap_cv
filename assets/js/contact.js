function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        projectsummary: document.getElementById("projectsummary").value,
    };

    const serviceID = "service_a499fme";
    const templateID = "rosie";

    emailjs.send(serviceID, templateID, params)
        .then(
            res =>{
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("projectsummary").value = "";
                console.log(res);
                alert("your message sent successfully");
            })
        .catch((err) => console.log(err));
}

