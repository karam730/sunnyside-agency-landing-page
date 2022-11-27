let dropDown = document.querySelector(".drop-down");
let list = document.querySelector(".list");

dropDown.addEventListener("click", (e) => {
  if (list.className === "list") {
    list.classList.replace("list", "list-small")
  }else if (list.className === "list-small") {
    list.classList.replace("list-small", "list")
  }
});

let alterClass = () => {
  let wW = document.body.clientWidth;
  if (wW >= 820) {
    if (list.className === "list-small") {
      list.classList.replace("list-small", "list")
    }
  }
}
window.addEventListener("resize", () => {
  alterClass()
})