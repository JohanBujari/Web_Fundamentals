// index     0  1   2
var likes = [9, 12, 9];
var spans = [
    document.querySelector("#par-1"),
    document.querySelector("#par-2"),
    document.querySelector("#par-3")
];

function increase(id) {
    likes[id]++;
    spans[id].innerHTML = likes[id] + "like(s)";
}