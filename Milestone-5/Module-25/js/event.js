console.log("md arif jahan");

// make red part
function makered() {
    document.body.style.backgroundColor = "tomato";
  }

//   another option
const pinkbutton = document.getElementById("make-pink");
pinkbutton.addEventListener("click", makepink);

function makepink() {
document.body.style.backgroundColor = "pink";
}

// this is final what we use
document
        .getElementById("make-orange")
        .addEventListener("click", function makeorange() {
          document.body.style.backgroundColor = "orange";
        });