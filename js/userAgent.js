
window.addEventListener('load', () => {
    const tipo = document.getElementById(`tipoUserAgent`);
    if (navigator.userAgent.includes('Windows')) { // (xxx && 'Windows') se muestra... verificar palabra cable para telefonos
        tipo.innerHTML =    `<img src="https://i.postimg.cc/QdjJ9jp3/11111.jpg" alt="">
                            <br>
                            <span class="parrafo">Escanear QR para descargar APK</span>`
    } else {
        tipo.innerHTML =    `<a href="http://www.google.com">
                                <div class="contenedorAPK">
                                   <button class="buttonAnimated">
                                        <span>Descargar Aquí</span>
                                   </button>
                                </div>
                            </a>`
    }
});






