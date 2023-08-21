var menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";

function togglemenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "130px"
    }else{
        menuList.style.maxHeight = "0px"
    }
}

// Obtén todos los botones de colores
const colorButtons = document.querySelectorAll('.colors');

// Obtén la imagen del controlador
const controllerImage = document.querySelector('.controller');

// Asigna un controlador de clic a cada botón de color
colorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Obtiene la ruta de la imagen del atributo data-image del botón
        const imageSrc = button.getAttribute('data-image');
        
        // Cambia la fuente de la imagen del controlador
        controllerImage.src = imageSrc;

        // Si deseas ocultar una imagen mientras muestras la otra, puedes hacerlo así:
        if (imageSrc === './white-controller.png') {
            controllerImage.style.display = 'block';
            document.getElementById('black-controller').style.display = 'none';
        } else if (imageSrc === './black-controller.png') {
            controllerImage.style.display = 'none';
            document.getElementById('black-controller').style.display = 'block';
        }
    });
});
