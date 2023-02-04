const navbar = document.querySelector('#navbar')

const onScroll = (event) => {
    const scrollPosition = event.target.scrollingElement.scrollTop;

    if (scrollPosition > 10) {
        if (!navbar.classList.contains("scrolled-down")) {
            navbar.classList.add("scrolled-down")
        } else {
            if (navbar.classList.contains("scrolled-down")) {
                navbar.classList.remove("scrolled-down")
            }
        }
    }
}

document.addEventListener("scroll", onScroll)