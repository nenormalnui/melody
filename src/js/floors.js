export const floorsFunc = () => {
    const floorPath = document.querySelector('.home-image');
    const counter = document.querySelector('.counter');
    const counterUp = document.querySelector('.counter-up');
    const counterDown = document.querySelector('.counter-down');
    const pathFloor = document.querySelectorAll('[data-floor]');
    let currentFloor = 2;
    let usCurrentFloor = 0;

    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.modal');
    const modalClose = document.querySelector('.modal-close-button');
    const modalCounter = document.querySelector('.modal-counter');
    const flatsBtn = document.querySelector('.view-flats');
    const order = document.querySelector('.order');
    const orderForm = document.querySelector('.order-form');
    const orderClose = document.querySelector('.order__close');
    const orderBtn = document.querySelector('.order__btn');
    const thanksForm = document.querySelector('.thanks-form');
  /*   floorPath.addEventListener("click", (e) => {
      currentFloor = e.target.getAttribute("data-floor");
      counter.textContent = currentFloor;
    });
    /*
    counterUp.addEventListener("click", () => {
      if (currentFloor < 18) {
        currentFloor++;
        usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false, });
        counter.textContent = usCurrentFloor;
        currentFloor.classList.remove('current-floor);
        document.querySelector(`[data-floor=${usCurrentFloor}]`).classList.toggle('current-floor');
      } 
    });*/ 
    const toggleModal = () => {
        modal.classList.toggle('is-open');
    };

    floorPath.addEventListener('click', toggleModal);
    modalClose.addEventListener('click', toggleModal);
    flatsBtn.addEventListener('click', toggleModal);

    document.addEventListener('keyup', (event) => {
        if (event.code === 'Escape') {
           // modal.classList.remove('is-open');
            //FormClose(order);
        }
    })

    floorPath.addEventListener('mouseover', (event) => {
        const thisFloor = event.target.hasAttribute('data-floor');
        if (event.target && thisFloor) {
          pathFloor.forEach((path) => path.classList.remove('current-floor'));
          currentFloor = event.target.getAttribute('data-floor');
          counter.textContent = currentFloor;
          modalCounter.textContent = currentFloor;
          document.querySelector(`[data-floor="${currentFloor}"]`).classList.toggle('current-floor');
        }   
      });
      
      counterUp.addEventListener('click', () => {
        if (currentFloor < 18) {
          currentFloor++;
          usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false, });
          counter.textContent = usCurrentFloor;
          modalCounter.textContent = usCurrentFloor;
          pathFloor.forEach((path) => path.classList.remove('current-floor'));
          document.querySelector(`[data-floor="${usCurrentFloor}"]`).classList.toggle('current-floor');
        } 
      });

      counterDown.addEventListener('click', () => {
        if (currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGroupping: false, });
            counter.textContent = usCurrentFloor;
            modalCounter.textContent = usCurrentFloor;
            pathFloor.forEach((path) => path.classList.remove('current-floor'));
            document.querySelector(`[data-floor="${usCurrentFloor}"]`).classList.toggle('current-floor');
        }
      });
      
        const flatPath = document.querySelectorAll('.flat-path');
        const flatsLinks = document.querySelectorAll('.flat-link');
        const getData = (e) => {
            const flat = e.target.dataset.flat;
            flatPath.forEach((item) => {
                if(item.dataset.flat === flat)
                    item.classList.toggle('flat__active');
            })
            flatsLinks.forEach((item) => {
              if(item.dataset.flat === flat)
                  item.classList.toggle('link__active');
          })
        }
        flatsLinks.forEach((item) => item.addEventListener('mouseover', getData));
        flatsLinks.forEach((item) => item.addEventListener('mouseleave', getData));
        flatPath.forEach((item) => item.addEventListener('mouseover', getData));
        flatPath.forEach((item) => item.addEventListener('mouseleave', getData));

        const FormOpen = (form) => {
          form.classList.add('active-form');
          //form.style.display='block';
        };

        const FormClose = (form) => {
          form.classList.remove('active-form');
          //form.style.display='none';
        };

        flatsLinks.forEach((item) => item.addEventListener('click', () => FormOpen(order)));
        flatPath.forEach((item) => item.addEventListener('click', () => FormOpen(order)));

        orderClose.addEventListener('click', () => FormClose(order));

       /*  orderBtn.addEventListener('click', () => thanksForm.style.display='block');
 */


/*         orderForm.addEventListener('submit', (e) => {
          e.preventDefault();
          const xhr = new XMLHttpRequest();
          xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
          const formData = new FormData(orderForm);
          console.log(formData);
          xhr.send(formData);
      
          xhr.addEventListener('load', () => {
              console.log(xhr.status);
              console.log(xhr.response);
              FormClose(order);
              toggleModal();
              FormOpen(thanksForm);
              setTimeout( () => {FormClose(thanksForm)}, 2000);
          });
      });

        thanksForm.querySelector('.order__close').addEventListener('click', () => {
            FormClose(thanksForm);
        }) */

       // console.log(modalCounter);

}
/* floorsFunc(); */