    document.querySelectorAll('.tilt').forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const { offsetWidth: width, offsetHeight: height } = element;
            const { offsetX: x, offsetY: y } = e;
            const xPercent = (x / width) * 100;
            const yPercent = (y / height) * 100;

            const tiltX = (yPercent - 50) * 0.1;
            const tiltY = (xPercent - 50) * -0.1;

            element.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    });
