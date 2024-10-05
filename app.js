const counters = document.querySelectorAll('.counter');
const speed = 100; // The lower the number, the faster the counter

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20); // Call this every 20ms
        } else {
            counter.innerText = target;
        }
    };

    updateCount();
});