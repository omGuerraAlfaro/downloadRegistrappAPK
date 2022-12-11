
window.addEventListener('load', () => {
    const tipo = document.getElementById(`tipoUserAgent`);
    if (navigator.userAgent.includes('Mobile')) {
        tipo.innerHTML =    `<a href="http://www.google.com">
                                <div class="contenedorAPK">
                                   <button class="buttonAnimated"><span>Descargar Aquí</span></button>
                                </div>
                            </a>`
    } else {
        tipo.innerHTML = `<img src="/img/11111.jpeg" alt="">`
    }
});






