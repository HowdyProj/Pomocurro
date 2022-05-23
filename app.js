var globalId;
var harvests = 0, cost = 0;
var count = true;
var mode = 0;
window.onload = function() {
    Swal.fire("Crucial usage regulations", "To ensure that your usage of this website is delightful and satisfied, please either open this website as a side panel or simply open this website for accurate timing.", "info")
}
document.getElementById("60-min").addEventListener("click", function() {
    document.getElementById("min").innerHTML = "60";
    document.getElementById("sec").innerHTML = "00";
    count = true;
    document.getElementById("mode").innerHTML = "🎇 Farming a crazy Pomocurro"
})
document.getElementById("40-min").addEventListener("click", function() {
    document.getElementById("min").innerHTML = "40";
    document.getElementById("sec").innerHTML = "00";
    count = true;
    document.getElementById("mode").innerHTML = "✨ Farming a normal Pomocurro"
})
document.getElementById("10-min").addEventListener("click", function() {
    document.getElementById("min").innerHTML = "10";
    document.getElementById("sec").innerHTML = "00";
    count = false;
    document.getElementById("mode").innerHTML = "💧 Watering your Pomocurro"
})
document.getElementById("start").addEventListener("click", function() {
    if (document.getElementById("task").value == "") {
        Swal.fire("An error occurred in your input!", "Please enter a task name! Click on the top textbox or the navigation panel provided at the top to resolve this error.", "error");
        return;
    }
    document.getElementById("start").disabled = true;
    document.getElementById("end").disabled = false;
    var id = window.setInterval(function() {
        globalId = id;
        var sec = parseInt(document.getElementById("sec").innerHTML)
        var min = parseInt(document.getElementById("min").innerHTML)
        if (count) {
            cost++;
        }
        if (sec == 0 && min == 0) {
            var snd = new Audio('/alarm.mp3');
            snd.play();
            alert("Time's up!");
            if (count) {
                harvests++;
            }
            document.getElementById("id").innerHTML = harvests + 1;
            clearInterval(id);
            if (count) {
                document.getElementById("done").innerHTML += "<li>" + (document.getElementById("task").value == "" ? "No text content. If possible, please enter information on the top of the page." : document.getElementById("task").value) + "</li>";
            }
            document.getElementById("end").disabled = true;
            document.getElementById("start").disabled = false;
            document.getElementById("start").innerHTML = "Begin the Pomocurro";
            return;
        }
        if (sec == 0) {
            sec = 59;
            min--;
        }
        else {
            sec--;
        }
        var str = sec.toString();
        if (sec < 10) {
            str = "0" + sec.toString();
        }
        document.getElementById("sec").innerHTML = str;
        document.getElementById("min").innerHTML = min;
        document.getElementById("harvests").innerHTML = harvests;
        document.getElementById("cost").innerHTML = cost;
    }, 1000);
})
document.getElementById("end").addEventListener("click", function() {
    document.getElementById("start").innerHTML = "Resume the Pomocurro";
    document.getElementById("end").disabled = true;
    document.getElementById("start").disabled = false;
    clearInterval(globalId);
})
