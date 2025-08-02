document.addEventListener('DOMContentLoaded', function() {

    // --- Scroll Animation ---
    const scrollElements = document.querySelectorAll('.animate-on-scroll');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('is-visible');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    // Trigger on load as well
    handleScrollAnimation();


    // --- Modal Logic ---
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.querySelector('.close-button');

    const privacyLink = document.getElementById('privacy-link');
    const termsLink = document.getElementById('terms-link');

    const privacyContent = document.getElementById('privacy-policy-content').innerHTML;
    const termsContent = document.getElementById('terms-of-service-content').innerHTML;

    function openModal(content) {
        modalBody.innerHTML = content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeModalFunction() {
        modal.style.display = 'none';
        modalBody.innerHTML = '';
        document.body.style.overflow = 'auto';
    }
    
    privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(privacyContent);
    });

    termsLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(termsContent);
    });

    closeModal.addEventListener('click', closeModalFunction);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalFunction();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModalFunction();
        }
    });

});
