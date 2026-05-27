function mostrarMensagem() {

    const mensagem = document.getElementById("mensagem");

    if (mensagem.style.display === "block") {
        mensagem.style.display = "none";
    } else {
        mensagem.style.display = "block";
    }
}

for (let i = 0; i < 60; i++) {

    const particula = document.createElement("div");

    particula.className = "particula";

    particula.style.left = Math.random() * 100 + "vw";

    particula.style.animationDuration =
        (Math.random() * 3 + 2) + "s";

    document.body.appendChild(particula);
}