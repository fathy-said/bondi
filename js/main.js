let goUp = document.querySelector(".box-up");
let navLiA = document.querySelectorAll(".collapse li a");

window.addEventListener("scroll", (e) => {
    // add-active-to-goUp
    if (this.scrollY >= 500) {
        goUp.classList.add("active");
        goUp.onclick = (up) => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        };
    } else if (this.scrollY < 500) {
        goUp.classList.remove("active");
    }

    //
    // loop-to-navLiA
    navLiA.forEach((a) => {
        a.classList.remove("active");
        if (this.scrollY >= hero.offsetTop - 100) {
            if (a.dataset.name == hero.id) {
                loopNavLiA();
                a.classList.add("active");
            }
        }

        if (this.scrollY >= services.offsetTop - 50) {
            if (a.dataset.name == services.id) {
                loopNavLiA();
                a.classList.add("active");
            }
        }
        if (this.scrollY >= portfolio.offsetTop - 50) {
            if (a.dataset.name == portfolio.id) {
                loopNavLiA();
                a.classList.add("active");
            }
        }
        if (this.scrollY >= about.offsetTop - 50) {
            if (a.dataset.name == about.id) {
                loopNavLiA();
                a.classList.add("active");
            }
        }
        if (this.scrollY >= contact.offsetTop - 50) {
            if (a.dataset.name == contact.id) {
                loopNavLiA();
                a.classList.add("active");
            }
        }
    });

    function loopNavLiA() {
        navLiA.forEach((a) => {
            a.classList.remove("active");
        });
    }
});

// start-work
let titleWork = document.querySelectorAll(".our-work .all-titles ul li");
let boxWork = document.querySelectorAll(".our-work .row .box-content");

// loop-in-the-titleWork
titleWork.forEach((ti) => {
    ti.addEventListener("click", (e) => {
        //
        // remove-the-active-from-li
        ti.parentElement.querySelectorAll("li").forEach((el) => {
            el.classList.remove("active");
        });
        //
        // add-the-active-target-li
        ti.classList.add("active");
        //
        // loop-in-the-boxWork
        boxWork.forEach((box) => {
            // remove-the-active-from-box

            box.classList.remove("active");

            //
            // add-the-active-from-box-data-name

            if (box.dataset.name == ti.dataset.name) {
                box.classList.add("active");

                // add-the-active-from-all-box
            } else if (ti.dataset.name == "all") {
                box.classList.add("active");
            }
        });
    });
});
// end-work
