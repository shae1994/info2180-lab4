$(document).ready(function() {
    $("button").click(function(){
        console.log("Clicked.")
        var httpRequest = new XMLHttpRequest();
        var url = "http://localhost/info2180-lab4/superheroes.php";
        httpRequest.onreadystatechange = testChangeState;
        httpRequest.open('GET', url);
        httpRequest.send();
        console.log("tests");

        function testChangeState() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
             if (httpRequest.status === 200) {
             var response = httpRequest.responseText;
             alert(response);
             } else {
             alert('There was a problem with the request.');
             }
            }
        }

        fetch('http://localhost/info2180-lab4/superheroes.php',{method: 'GET'})
        .then(response => response.text())
        .then(data => {
        console.log(data)
        })
        .catch(error => {
        console.log(error);
        });
        })


    });
