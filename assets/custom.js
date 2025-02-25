jQuery_T4NT(document).ready(function($) {

     /**
     *  Variant selection changed
     *  data-variant-toggle="{{ variant.id }}"
     */
	   $( document ).on( "variant:changed", function( evt ) {
	     // console.log( evt.currentVariant );
	     // $('[data-variant-toggle]').hide(0);
	     // $('[data-variant-toggle="'+evt.currentVariant.id+'"]').show(0);
	   });
});

// Función para actualizar la galería de imágenes en Shopify
function updateGallery() {
    console.log("🔄 Actualizando galería de imágenes...");

    document.querySelectorAll("[data-main-media]").forEach(gallery => {
        let flickityInstance = Flickity?.data(gallery);
        if (flickityInstance) {
            flickityInstance.destroy();
        }

        new Flickity(gallery, {
            cellSelector: "[data-main-slide]:not(.is--media-hide)",
            adaptiveHeight: true,
            contain: true,
            wrapAround: true,
            prevNextButtons: true,
            percentPosition: true,
            pageDots: false,
            autoPlay: false,
            pauseAutoPlayOnHover: true,
            thumbNav: true,
            thumbVertical: false,
            isMedia: true
        });

        console.log("✅ Galería actualizada correctamente.");
    });
}

// Simulación de Web Worker usando eventos en Shopify
document.addEventListener("DOMContentLoaded", function () {
    console.log("🚀 Shopify: Listo para actualizar la galería.");
    
    // Escuchar cambios en la variante seleccionada
    document.querySelector("[name='id']")?.addEventListener("change", function () {
        console.log("🔄 Cambio de variante detectado, actualizando galería...");
        
        // Llamar la función para actualizar la galería
        updateGallery();
    });
});



