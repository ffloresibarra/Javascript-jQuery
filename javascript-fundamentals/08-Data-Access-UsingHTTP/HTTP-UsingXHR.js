let xhttp= new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status==200){
        console.log(this.responseText);
    }
}

xhttp.open("GET", "http://z5b32a4fd82407e001413f1df.mockapi.io/api/v1/users", true);

xhttp.send();