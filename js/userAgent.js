
window.addEventListener('load', () => {
    const tipo = document.getElementById(`tipoUserAgent`);
    if (navigator.userAgent.includes('Windows')) { // (xxx && 'Windows') se muestra... verificar palabra cable para telefonos
        tipo.innerHTML = `<img src="https://bitacoradelasavesdechile.files.wordpress.com/2011/10/perrito2.jpg" alt="">`
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






