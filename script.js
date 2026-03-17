script.jsdocument.addEventListener('DOMContentLoaded', () => {
    // --- 1. LÓGICA DEL MAPA CORPORAL ---
    const bodyParts = document.querySelectorAll('.body-part');
    const infoPanel = document.getElementById('info-panel');
    const title = document.getElementById('panel-title');
    const symptom = document.getElementById('panel-symptom');
    const massage = document.getElementById('panel-massage');
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const closeBtn = document.getElementById('close-btn');

    const miNumeroWhatsApp = "59896882087"; 

    bodyParts.forEach(part => {
        part.addEventListener('click', function() {
            const zonaName = this.getAttribute('data-name');
            const zonaSymptom = this.getAttribute('data-symptom');
            const zonaMassage = this.getAttribute('data-massage');

            title.textContent = zonaName;
            symptom.textContent = zonaSymptom;
            massage.textContent = zonaMassage;

            // Formateo del mensaje para WhatsApp
            const mensaje = `Hola, visité tu plataforma. Siento molestia en la zona de: *${zonaName}*. Me gustaría reservar una sesión para un *${zonaMassage}*.`;
            const urlWhatsApp = `https://wa.me/${miNumeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
            
            whatsappBtn.href = urlWhatsApp;
            
            // Quitar clase hidden y animar
            infoPanel.classList.remove('hidden');
            
            // Scroll suave automático
            setTimeout(() => {
                infoPanel.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        });
    });

    closeBtn.addEventListener('click', () => {
        infoPanel.classList.add('hidden');
    });

    // --- 2. LÓGICA DEL MÓDULO EDUCATIVO ---
    const eduData = {
        muscular: {
            title: "Sistema Muscular",
            text: "Tus músculos son el motor de tu cuerpo. El masaje libera tensiones profundas, mejora la elasticidad de las fibras y elimina el ácido láctico acumulado por el estrés."
        },
        linfatico: {
            title: "Sistema Linfático",
            text: "Es el sistema de limpieza de tu organismo. Mediante movimientos rítmicos y suaves, ayudamos a eliminar toxinas y reducir la retención de líquidos."
        },
        cadenas: {
            title: "Cadenas Musculares",
            text: "El cuerpo es una unidad. Un dolor en las cervicales puede originarse por una tensión en la cadena posterior que viene desde los pies. Tratamos el origen, no solo el síntoma."
        }
    };

    // Hacer las funciones accesibles globalmente desde el HTML
    window.showEdu = function(key) {
        const eduContent = document.getElementById('edu-content');
        const eduTitle = document.getElementById('edu-title');
        const eduText = document.getElementById('edu-text');
        
        if(eduData[key]) {
            eduTitle.textContent = eduData[key].title;
            eduText.textContent = eduData[key].text;
            eduContent.classList.remove('hidden');
            
            setTimeout(() => {
                eduContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    };

    window.closeEdu = function() {
        document.getElementById('edu-content').classList.add('hidden');
    };
});
