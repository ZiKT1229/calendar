let nowday = new Date();
let year = nowday.getFullYear();
document.getElementById("year").innerHTML = year;
let today = nowday.getMonth();
document.getElementsByClassName("months")[today].classList.add("hightlight");

let monthOfDays = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let classDays = document.getElementsByClassName("days");

for (let i = 0; i < 12; i++) {
    let date = new Date(year, i + 1, 0);
    monthOfDays[i] = date.getDate();
    let day = new Date(year, i, 1);
    let j;
    for (j = 0; day.getDay() !== j; j++) {
        let ept = document.createElement("p");
        ept.className = "day";
        ept.innerHTML = '';
        classDays[i].appendChild(ept);
    }
    for (j = 0; j < monthOfDays[i]; j++) {
        let d = document.createElement("p");
        d.className = "day";
        d.innerHTML = j + 1;
        classDays[i].appendChild(d);
        if (i == today && j + 1 == nowday.getDate()) {
            d.classList.add("hightlight");
        }
    }
}
