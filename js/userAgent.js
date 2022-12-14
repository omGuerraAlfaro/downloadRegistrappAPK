
window.addEventListener('load', () => {
    const tipo = document.getElementById(`tipoUserAgent`);
    if (navigator.userAgent.includes('Windows')) { // (xxx && 'Windows') se muestra... verificar palabra cable para telefonos
        tipo.innerHTML =    `<img src="https://i.postimg.cc/QdjJ9jp3/11111.jpg" alt="">
                                <br>        
                            <span class="parrafo">Escanear QR para descargar APK</span>`
    } else {
        tipo.innerHTML =    `
                            <a href="http://www.google.com">
                                <div class="contenedorAPK">        
                                    <button id="download" class="buttonAnimated">
                                        <span>Descargar Aquí</span>
                                    </button>
                                </div>
                            </a>`
    }
});


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getStorage, ref, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "https://firebasestorage.googleapis.com/v0/b/registrapp-44056.appspot.com/o/RegistrApp.apk?alt=media&token=529bf598-3e6d-4f92-9813-3fd276fa5894",
    authDomain: "registrapp-44056.firebaseapp.com",
    databaseURL: "https://registrapp-44056-default-rtdb.firebaseio.com",
    projectId: "registrapp-44056",
    storageBucket: "registrapp-44056.appspot.com",
    messagingSenderId: "912776550064",
    appId: "1:912776550064:web:3349b0ee99765805eecd75",
    measurementId: "G-NH5WHMSDX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
document.getElementById("download").addEventListener('click', function () {

    getDownloadURL(ref(storage, 'RegistrApp.apk')).then((url) => {
        console.log(url)
        var anchor = document.createElement('a');
        anchor.href = url;
        anchor.click();
    })
        .catch((error) => {
            // Handle any errors
            console.log(error);
        });
});