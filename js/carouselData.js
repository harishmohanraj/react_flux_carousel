module.exports = {
    // Load Mock Product Data Into localStorage
    init: function() {
        localStorage.clear();
        localStorage.setItem('slidesData',JSON.stringify(
            [
                {
                    img: "img/carousel-1.jpg",
                    caption: "Carousel title 1"
                },
                {
                    img: "img/carousel-2.jpg",
                    caption: "Carousel title 2"
                },
                {
                    img: "img/carousel-3.jpg",
                    caption: "Carousel title 3"
                },
                {
                    img: "img/carousel-4.jpg",
                    caption: "Carousel title 4"
                },
                {
                    img: "img/carousel-5.jpg",
                    caption: "Carousel title 5"
                }
            ]
        )
        );
    }

};