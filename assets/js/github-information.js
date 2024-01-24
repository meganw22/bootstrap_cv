function fetchGitHubInformation(event) {

    var username = $("#gh-username").val();
    //if no value in search box, return "please enter username"
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub Username</h2>`);
        //prevent API looking for usernames if the field is empty
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);

        $.when(
            $.getJSON(`https://api.github.com/users/${username}`)
        ).then(
            function(response) {
                var userData = response;
                $("#gh-user-data").html(userInformationHTML(userData));
            },
            function(errorResponse) {
                if (errorResponse.status === 404) {
                    $("#gh-user-data").html(
                        `<h2>No info found for user ${username}</h2>`);
                } else {
                    console.log(errorResponse);
                    $("#gh-user-data").html(
                        `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
                }
            });
    }
