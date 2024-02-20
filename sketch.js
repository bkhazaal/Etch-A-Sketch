const boxes = document.querySelectorAll(".box");
boxes.forEach(box =>
    box.addEventListener("mouseenter", function () {
        box.classList.add("touch");
    })
)

console.log(boxes);