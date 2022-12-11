
window.addEventListener('load', () => {
    const tipo = document.getElementById(`tipoUserAgent`);
    if (navigator.userAgent.includes('Mobile')) {
        tipo.innerHTML =    `<a href="http://www.google.com">
                                <div class="contenedorAPK">
                                   <button class="buttonAnimated"><span>Descargar Aquí</span></button>
                                </div>
                            </a>`
    } else {
        tipo.innerHTML = `<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redobservadores.cl%2F%3Fdslc_downloads%3Dperrito&psig=AOvVaw2o80sC6XiK1fCDL4S4yTKO&ust=1670871571247000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCICaseWf8vsCFQAAAAAdAAAAABAE" alt="">`
    }
});






