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
window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        document.getElementById("scrollBtn").style.display = "block";
	    } else {
	        document.getElementById("scrollBtn").style.display = "none";
	    }
	}

function getbookingform() {

    var panel = document.getElementById("panel1");
    var form = document.getElementById("signinform");
    panel.style.display = "none";
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

function topFunction() {
	    document.body.scrollTop = 0;
	    document.documentElement.scrollTop = 0;
	}
