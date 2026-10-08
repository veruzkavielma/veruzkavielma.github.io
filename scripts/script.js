        AOS.init({
            once: true,
            duration: 900,
            offset: 80,
            easing: 'ease-out-cubic'
        });

        // Mobile Menu Dropdown Toggle
        const mobileToggle = document.getElementById("mobileMenuToggle");
        const mobileMenu = document.getElementById("mobileMenu");
        const mobileIcon = document.getElementById("mobileMenuIcon");
        const mobileLinks = document.querySelectorAll(".mobile-nav-link");

        if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener("click", (e) => {
                e.stopPropagation();
                const isHidden = mobileMenu.classList.toggle("hidden");
                mobileIcon.classList.toggle("fa-bars", isHidden);
                mobileIcon.classList.toggle("fa-xmark", !isHidden);
            });

            // Close dropdown when clicking any link
            mobileLinks.forEach(link => {
                link.addEventListener("click", () => {
                    mobileMenu.classList.add("hidden");
                    mobileIcon.classList.add("fa-bars");
                    mobileIcon.classList.remove("fa-xmark");
                });
            });

            // Close dropdown when clicking outside
            document.addEventListener("click", (e) => {
                if (!mobileMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                    mobileMenu.classList.add("hidden");
                    mobileIcon.classList.add("fa-bars");
                    mobileIcon.classList.remove("fa-xmark");
                }
            });
        }

        // Typing Effect
        const phrases = ["into Manual Testing", "into Automation Testing"];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        const typingElement = document.getElementById("typing-text");

        function type() {
            const currentPhrase = phrases[phraseIndex];
            if (isDeleting) {
                typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 40 : 100;
            if (!isDeleting && charIndex === currentPhrase.length) {
                typeSpeed = 2200;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typeSpeed = 400;
            }
            setTimeout(type, typeSpeed);
        }

        document.addEventListener("DOMContentLoaded", type);

        // Scroll Progress
        const scrollProgress = document.getElementById("scrollProgress");
        window.addEventListener("scroll", () => {
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / documentHeight) * 100;
            scrollProgress.style.width = scrollPercent + "%";
        });

        // Back To Top
        const backToTop = document.getElementById("backToTop");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        // Cursor Glow
        const cursorGlow = document.getElementById("cursorGlow");
        document.addEventListener("mousemove", e => {
            cursorGlow.style.left = e.clientX + "px";
            cursorGlow.style.top = e.clientY + "px";
        });

        // 3D Card Tilt
        document.querySelectorAll(".tilt-card").forEach(card => {
            card.addEventListener("mousemove", e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -4;
                const rotateY = ((x - centerX) / centerX) * 4;

                card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
            });

            card.addEventListener("mouseleave", () => {
                card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)";
            });
        });

        // Header Shadow on Scroll
        const header = document.getElementById("mainHeader");
        window.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
                header.classList.add("shadow-lg", "shadow-sky-950/20");
            } else {
                header.classList.remove("shadow-lg", "shadow-sky-950/20");
            }
        });
