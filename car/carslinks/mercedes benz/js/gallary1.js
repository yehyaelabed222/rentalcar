document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const imageOverlay = document.querySelector('.image-overlay');
    const imagePopup = document.querySelector('.image-popup');
    const popupImage = document.getElementById('popup-image');
    const closePopup = document.querySelector('.close-popup');
    const popupContent = document.querySelector('.popup-content');

    galleryItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            item.querySelector('.gallery-image').style.transform = 'scale(1.2)';
        });

        item.addEventListener('mouseout', () => {
            item.querySelector('.gallery-image').style.transform = 'scale(1)';
        });

        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            popupImage.src = imgSrc;

            // Retrieve the link from a data attribute
            const link = item.getAttribute('data-link');

            // Add specifications and link here
            const specifications = "Specifications: This is a sample specification.";
            popupContent.innerHTML = `<p>${specifications}</p><a href="${link}" target="_blank">Learn More</a>`;

            imageOverlay.style.display = 'block';
            imagePopup.style.display = 'block';
        });
    });

    closePopup.addEventListener('click', () => {
        imageOverlay.style.display = 'none';
        imagePopup.style.display = 'none';
    });
});

