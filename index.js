document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        perPage: 3,
        rewind : true,
        gap: '20px',
        breakpoints: {
            790: {
                perPage: 2
            },
            720: {
                perPage: 1
            }
        }
    });
    splide.mount();
});