const Main = ()=> {

    
    async function obtenerInformacion() {
        try {
        const respuesta = await fetch('http://ip-api.com/json');
        const datos = await respuesta.json();
        
        document.getElementById('ip').textContent = datos.query;
        document.getElementById('country').textContent = datos.country;
        document.getElementById('countryCode').textContent = datos.countryCode;
        document.getElementById('region').textContent = datos.region;
        document.getElementById('regionName').textContent = datos.regionName;
        document.getElementById('city').textContent = datos.city;
        document.getElementById('zip').textContent = datos.zip;
        document.getElementById('lat').textContent = datos.lat;
        document.getElementById('lon').textContent = datos.lon;
        document.getElementById('timezone').textContent = datos.timezone;
        document.getElementById('isp').textContent = datos.isp;
        document.getElementById('org').textContent = datos.org;
        document.getElementById('as').textContent = datos.as;
        document.getElementById('query').textContent = datos.query;
        
        
    } catch (error) {
        console.error('Error al obtener información:', error);
    }
}




function obtenerUserAgent() {
    const userAgent = navigator.userAgent;
    document.getElementById('userAgent').textContent = userAgent;
    
    const idioma = navigator.language;
    const resolucion = `${window.screen.width}x${window.screen.height}`;
    const tipoDeDispositivo = /Mobile|Tablet|iPad|iPhone|Android/.test(userAgent)
        ? 'Dispositivo móvil'
        : 'Escritorio';
    
    // Obtener información más precisa del sistema operativo
    let sistemaOperativo = 'Desconocido';

    if (/Windows/.test(userAgent)) {
        sistemaOperativo = 'Windows';
    } else if (/Linux/.test(userAgent)) {
        sistemaOperativo = 'Linux';
    } else if (/Mac/.test(userAgent)) {
        sistemaOperativo = 'macOS';
    } else if (/Android/.test(userAgent)) {
        sistemaOperativo = 'Android';
    } else if (/iOS|iPad|iPhone/.test(userAgent)) {
        sistemaOperativo = 'iOS';
    }

    document.getElementById('idioma').textContent = idioma;
    document.getElementById('resolucion').textContent = resolucion;
    document.getElementById('sistemaOperativo').textContent = sistemaOperativo;
    document.getElementById('tipoDeDispositivo').textContent = tipoDeDispositivo;
}



obtenerInformacion();
obtenerUserAgent();

// Llamar a la función cuando la página se carga

// Función para mostrar el contenido y ocultar el formulario
function mostrarContenido() {
    // Oculta el formulario
    document.getElementById('inicio').style.display = 'none';
    
    // Muestra el contenido
    document.getElementById('contenido').style.display = 'flex';

}

// Agrega un evento al formulario para que llame a mostrarContenido() cuando se envíe
document.querySelector('form').addEventListener('submit', (e)=>{
    
    e.preventDefault(); // Evita que el formulario se envíe normalmente
    mostrarContenido();
    const name = document.getElementById('input').value;
    document.getElementById('name').textContent = name.toLowerCase();
    
});

};
window.addEventListener('DOMContentLoaded', Main);