AOS.init();

if (window.innerWidth > 350) {  
    AOS.init({
      disable: false,  
      startEvent: 'DOMContentLoaded', 
      initClassName: 'aos-init', 
      animatedClassName: 'aos-animate', 
      useClassNames: false, 
      disableMutationObserver: false, 
      debounceDelay: 50, 
      throttleDelay: 99, 
      offset: 120, 
      delay: 5, 
      duration: 400, 
      easing: 'ease',
      once: false, 
      mirror: false, 
      anchorPlacement: 'top-bottom'
    });
  } else {
    AOS.init({
      disable: true,  
    });
  }
  
const nav = document.querySelector(".nav"),
searchIcon = document.querySelector("#searchIcon"),
navOpenBtn = document.querySelector(".navOpenBtn"),
navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if(nav.classList.contains("openSearch")){
        return searchIcon.classList.replace("uil-search", "uil-times");
    }
    searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) { 
      nav.classList.add("scrolled");
  } else {
      nav.classList.remove("scrolled");
  }
});

const animItems = document.querySelectorAll('._anim-item');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll() {
        for (let index = 0; index<animItems.length; index++) {
            const animItem =animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.animHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                animItem.classList.remove('_active')
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect();
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

const arrowUp = document.querySelector('.arrow-up');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        arrowUp.classList.add('visible'); 
    } else {
        arrowUp.classList.remove('visible'); 
    }
});

arrowUp.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    });
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('json/classes.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(classes => {
      const classesSection = document.querySelector('.classes-grid');
      
      classes.forEach(classItem => {
        const classDiv = document.createElement('div');
        classDiv.classList.add('class-item');
        
        classItem.icon.split(' ').forEach(cls => classDiv.classList.add(cls));

        const classInfo = `
          <div class="class-info">
            <h3>${classItem.title}</h3>
            <p>${classItem.description}</p> <!-- Опис класу -->
            <span><i class="${classItem.icon}"></i></span>
          </div>
        `;
        classDiv.innerHTML = classInfo;

        classesSection.appendChild(classDiv);
      });
    })
    .catch(error => console.error('Error loading classes:', error));

    fetch('json/banner.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(banner => {
      const bannerSection = document.querySelector('.banner-content');

      const bannerContent = `
        <h2 class="animation _anim-item">${banner.title}</h2>
        <p class="animation-paragraph _anim-item">${banner.description}</p>
        <a href="${banner.buttonLink}">
          <button class="banner-button" data-aos="fade-up" data-aos-duration="3000">${banner.buttonText}</button>
        </a>
      `;

      bannerSection.innerHTML = bannerContent;
    })
    .catch(error => console.error('Error loading banner:', error));
});

  const modal = document.getElementById("modal");
  const openModalBtn = document.querySelector("[data-target='#modal']");
  const closeModalBtn = document.querySelector(".close");

  openModalBtn.addEventListener("click", () => {
      modal.style.display = "flex"; 
  });

  closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none"; 
  });

  window.addEventListener("click", (event) => {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });