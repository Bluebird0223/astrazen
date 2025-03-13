// const nav = document.getElementsByClassName("navbar")[0];
// const man = document.getElementsByClassName("man")[0]
// // const draggableElements = document.querySelectorAll('.shape');

// window.addEventListener("scroll", () => {
//     const scrollPosition = window.scrollY;
//     // nav.style.transition = "opacity 0.5s ease-in-out";
//     // nav.style.backgroundColor = 1 - scrollPosition / 300;
//     console.log(scrollPosition)

//     if (scrollPosition > 47) {
//         nav.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
//         nav.style.color = "white"
//         man.style.left = "30%"
//         man.style.top = "10%"
//         man.style.width = "40%"
//     } else {
//         nav.style.color = "#333"
//         nav.style.backgroundColor = "white";
//         man.style.left = "0px"
//         man.style.top = "80px"
//         man.style.width = "60px"
//     }

// });

const shapes = document.querySelectorAll('.shape');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const rotationAngle = scrollPosition * 0.2;  // Adjust the speed of rotation

    shapes.forEach(shape => {
        shape.style.transform = `rotate(${rotationAngle}deg)`;
    });
});

const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
};


const diamond = document.querySelector(".hover-diamond");

const stopPositions = [200, 400, 600];
let currentStopIndex = 0; // Index to track the current stop

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    console.log("Scroll Y:", scrollY);

    if (scrollY > 3600) {
        diamond.style.top = "625%";
        diamond.style.right = "15%";
        diamond.style.transform = "translate(50%, -50%) rotate(0deg)";
        diamond.style.opacity = "100%";
        diamond.style.zIndex = "999";
        diamond.style.width = "20%";
    }
    else if (scrollY > 3300) {
        diamond.style.top = "581%";
        diamond.style.right = "50%";
        diamond.style.transform = "translate(50%, -50%) rotate(90deg)";
        diamond.style.opacity = "100%";
        diamond.style.zIndex = "999";
        diamond.style.width = "20%";
    }
    // }
    // else if (scrollY > 2500) {

    //     diamond.style.top = "458%";
    //     diamond.style.right = "60%";
    //     diamond.style.transform = "translate(50%, -50%) rotate(180deg)";
    //     diamond.style.opacity = "100%";
    //     diamond.style.zIndex = "999";
    //     diamond.style.width = "20%";
    // }
    // else if (scrollY > 1400) {
    //     diamond.style.top = "290%";
    //     diamond.style.right = "12%";
    //     diamond.style.transform = "translate(50%, -50%) rotate(90deg)";
    //     diamond.style.opacity = "100%";
    //     diamond.style.zIndex = "999";
    //     diamond.style.width = "20%";
    // }
    else if (scrollY > 1000) {
        diamond.style.top = "274%";
        diamond.style.right = "14%";
        diamond.style.transform = "translate(50%, -50%) rotate(0deg)";
        diamond.style.opacity = "100%";
        diamond.style.zIndex = "999";
        diamond.style.width = "20%";
    }
    else if (scrollY > 800) {
        // Second stop position (scrolling further down)
        // diamond.style.top = "188%";
        // diamond.style.right = "50%";
        // diamond.style.transform = "translate(50%, -50%) rotate(90deg)";
        diamond.style.opacity = "0%";
        // diamond.style.zIndex = "999";
        // diamond.style.width = "20%";

    } else if (scrollY > 400) {
        // First stop position
        diamond.style.top = "117%";
        diamond.style.right = "91%";
        diamond.style.transform = "translate(50%, -50%) rotate(184deg)";
        diamond.style.opacity = "100%";
        diamond.style.zIndex = "2";
        diamond.style.width = "20%";
    } else {
        // Default position
        diamond.style.top = "97%";
        diamond.style.right = "98%";
        diamond.style.transform = "translate(50%, -50%) rotate(153deg)";
        diamond.style.opacity = "0%";
        diamond.style.zIndex = "2";
        diamond.style.width = "20%";
    }
});




// services 
document.addEventListener("DOMContentLoaded", function () {
    const cardData = [
        { id: 1, imageUrl: './image 1.png', description: 'nETWORK INFRASTRUCTURE SERVICES' },
        { id: 2, imageUrl: './image 2.png', description: 'Server and Storage Solutions' },
        { id: 3, imageUrl: './image 3.png', description: 'Comprehensive Data Center Solutions' },
        { id: 4, imageUrl: './image 4.png', description: 'IT Support and Managed Services' },
        { id: 5, imageUrl: './image 5.png', description: 'Cybersecurity Services' }
    ];

    const imageContainer = document.getElementById("imageContainer");
    const imageTitle = document.getElementById("imageTitle");
    const imageDescription = document.getElementById("imageDescription");
    const imageNumbers = document.getElementById("imageNumbers");

    let activeIndex = 0;
    let ticking = false; // For `requestAnimationFrame`

    // Populate images
    cardData.forEach((item, index) => {
        const img = document.createElement("img");
        img.src = item.imageUrl;
        img.alt = `Image ${item.id}`;
        img.classList.add("card-image");
        if (index === 0) img.classList.add("active");
        imageContainer.appendChild(img);
    });

    // Populate image descriptions
    cardData.forEach((item, index) => {
        const span = document.createElement("span");
        span.classList.add("image-number");
        span.textContent = item.description;
        if (index === 0) span.classList.add("active");
        imageNumbers.appendChild(span);
    });

    const updateActiveImage = () => {
        const images = document.querySelectorAll(".card-image");
        const descriptions = document.querySelectorAll(".image-number");

        images.forEach((img, index) => {
            img.classList.toggle("active", index === activeIndex);
        });

        descriptions.forEach((desc, index) => {
            desc.classList.toggle("active", index === activeIndex);
        });

        imageTitle.textContent = `0${cardData[activeIndex].id}`;
        imageDescription.textContent = cardData[activeIndex].description;
    };

    // Handle scrolling with smooth updates
    imageContainer.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollPosition = imageContainer.scrollTop;
                const imageHeight = imageContainer.querySelector("img").clientHeight;
                const newIndex = Math.round(scrollPosition / imageHeight);

                if (newIndex !== activeIndex && newIndex < cardData.length) {
                    activeIndex = newIndex;
                    updateActiveImage();
                }

                ticking = false;
            });

            ticking = true;
        }
    });

    updateActiveImage();
});


// blogs
document.addEventListener('DOMContentLoaded', function () {
    const elem = document.querySelector('.gallery-container');
    const flkty = new Flickity(elem, {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        initialIndex: 0,
        accessibility: true,
        percentPosition: true,
        freeScroll: false,
        // friction: 0.3,
        selectedAttraction: 0.2,
        wrapAroundFriction: 1.0
    });

    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');

    leftArrow.addEventListener('click', function () {
        flkty.previous(false);
    });

    rightArrow.addEventListener('click', function () {
        flkty.next(false);
    });

    // flkty.on('settle', function() {
    //     flkty.resize();
    // });
});



document.addEventListener("DOMContentLoaded", () => {
    const searchIcon = document.querySelector(".search-icon");
    const searchBox = document.querySelector(".search-box");
    const navLinks = document.querySelector(".navlinks");

    searchIcon.addEventListener("click", () => {
        navLinks.classList.toggle("search-active");
    });

    // Optional: Close search box if clicked outside
    document.addEventListener("click", (event) => {
        if (!searchIcon.contains(event.target) && !searchBox.contains(event.target)) {
            navLinks.classList.remove("search-active");
        }
    });
});
