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


// --------------- remove attributes ---------------
document.addEventListener('DOMContentLoaded', function() {
        // URL src skrip yang ingin dihapus
        var scriptToRemove = 'https://www.blogger.com/static/v1/widgets/2613211189-widgets.js';
        
        // Temukan semua elemen <script>
        var scripts = document.getElementsByTagName('script');

        // Iterasi melalui elemen-elemen <script>
        for (var i = 0; i < scripts.length; i++) {
            // Periksa apakah src dan type dari elemen <script> cocok dengan yang dicari
            if (scripts[i].getAttribute('src') === scriptToRemove && scripts[i].getAttribute('type') === 'text/javascript') {
                // Hapus elemen <script> yang sesuai
                scripts[i].parentNode.removeChild(scripts[i]);
                console.log('Skrip dengan src "' + scriptToRemove + '" telah dihapus.');
                break; // Hentikan pencarian setelah elemen ditemukan dan dihapus
            }
        }
    });
