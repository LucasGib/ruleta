const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const descuentos = ["10%", "20%", "30%", "40%", "50%"];
let anguloActual = 0;

function dibujarRuleta() {
    let angulo = 2 * Math.PI / descuentos.length;

    for (let i = 0; i < descuentos.length; i++) {
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 190, anguloActual, anguloActual + angulo);
        ctx.closePath();
        ctx.fillStyle = i % 2 === 0 ? '#FFDD00' : '#FF6600';
        ctx.fill();
        ctx.stroke();

        let anguloTexto = anguloActual + angulo / 2;
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText(descuentos[i], 200 + 140 * Math.cos(anguloTexto), 200 + 140 * Math.sin(anguloTexto));

        anguloActual += angulo;
    }
}

function girarRuleta() {
    let grados = Math.floor(Math.random() * (360 * 5) + 360); // Gira al menos una vez
    let velocidad = 0.5;
    let gradosGirados = 0;

    function animarGiro() {
        if (gradosGirados >= grados) return;

        anguloActual += velocidad * (Math.PI / 180);
        gradosGirados += velocidad;

        if (grados - gradosGirados < 180) {
            velocidad -= 0.005;
        }

        dibujarRuleta();
        requestAnimationFrame(animarGiro);
    }

    animarGiro();
}

dibujarRuleta();
