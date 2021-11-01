

$(document).ready(function() {

    $("form").submit(function(e) {
        e.preventDefault();
        $("button").click(function(){
            $('audio')[0].play();
            var httpRequest = new XMLHttpRequest();
            var url = "http://localhost/info2180-lab4/superheroes.php";
            httpRequest.onreadystatechange = function testChangeState() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    var response = httpRequest.responseText;
                    alert(responseText);
                }else{
                    alert('There was a problem with the request.');
                }
            }
            }

            rawInput = document.getElementById("input").value;
            console.log(rawInput)
            vari = rawInput.replace(/[^a-z0-9\s]/gi, '')
            console.log(vari)
            res=document.querySelector("#result");

            fetch('http://localhost/info2180-lab4/superheroes.php'+'?query='+vari)
                .then(function(responseText){
                    if(responseText.ok){
                        return(responseText.text());
                    }else{
                        alert("Error.");
                        Promise.reject();
                        console.log("Failed.")
                    } 
                })
                .then(function(d){
                    console.log(d);
                        res.innerHTML=d;
                    })
                });


    })
});
