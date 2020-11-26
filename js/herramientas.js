document.getElementById('hablar').addEventListener("click",()=>{
	decir(document.getElementById("texto").value);
});

function decir(texto) {
	speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
}
alert(
	"Síguenos en nuestras redes sociales como JazetStyle y Tyoesgo, difrute de las APIs ;)"
)
