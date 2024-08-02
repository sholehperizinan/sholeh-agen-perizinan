// --------------- navbar ---------------
window.addEventListener("click", e => {
    const menu = document.querySelector(".menu");
    const nav = document.querySelector(".nav");

    if (e.target == menu) {
        nav.classList.toggle("aktif");
        if( nav.classList.contains("aktif") ){
            // console.log(menu.className);
            menu.className = "menu fas fa-times";
        }
        else{
            menu.className = "menu fas fa-bars";
        }
    }
    else{
        nav.classList.remove("aktif");
        menu.className = "menu fas fa-bars";
    }
})

// --------------- lazy loads ---------------
const images = document.querySelectorAll("img");
images.forEach(function(image) {
	image.setAttribute("loading", "lazy");
});


// --------------- footer credit ---------------
const tahun = new Date().getFullYear();
document.querySelector(".tahun").innerHTML = tahun;


// --------------- border-radius btn ---------------
const btn = document.querySelectorAll(".btn");
btn.forEach(b => {
	btnHeight = b.offsetHeight;
	b.style.borderRadius = `${btnHeight}px`;
});


// --------------- anti cheats ---------------
document.addEventListener("contextmenu", e => {
	e.preventDefault();
}, false);

const forbiddenKeys = ['c', 'u', 's', 'p'];
const forbiddenKeyCodes = [123, 73, 74];

document.addEventListener("keydown", e => {
	if (e.ctrlkey || forbiddenKeys.includes(e.key) || forbiddenKeyCodes.includes(e.keyCode)) {
		e.stopPropagation();
		e.preventDefault();
	};
});
