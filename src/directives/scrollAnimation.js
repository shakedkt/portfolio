const animatedScrollObserver = new IntersectionObserver(
    (entries, animatedScrollObserver) => {
        entries.forEach((entery) => {
            if (entery.isIntersecting) {
                entery.target.classList.add('enter')
                animatedScrollObserver.unobserve(entery.target)
            }
        })
    }
)

export default {
    bind(el) {
        el.classList.add('before-enter');
        animatedScrollObserver.observe(el);
    }
}