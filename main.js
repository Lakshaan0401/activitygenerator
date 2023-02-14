var activities = document.getElementById("activities");
var type = document.getElementById("type");
var btn = document.getElementById("btn");

var url = "https://www.boredapi.com/api/activity";

var getActivity= () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        activities.innerHTML = item.activity;
        type.innerHTML = item.type;
      })
}

window.addEventListener("load", getActivity)
btn.addEventListener("click", getActivity)