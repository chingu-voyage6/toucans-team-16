/*function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}
*/

function getbookingform() {

    var panel = document.getElementById("panel1");
    var form = document.getElementById("signinform");

    console.log(panel.style);
    if (panel.style.display = "none")
    {
        panel.style.display = "block";
        form.style.display = "none";
    } else {
       panel.style.display = "none";
       form.style.display = "block";
    }
}
