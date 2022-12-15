import IMask from 'imask';
export const formValidation = () => {
    const mainForm = document.querySelector('.order');
    const orderForm = document.getElementById("order");
    const thanksForm = document.querySelector('.thanks-form');
    const overlay = document.querySelector('.overlay');
    const modal = document.querySelector('.modal');

    const inputs = orderForm.querySelectorAll("input");
    const checkboxInput = orderForm.querySelector('.order-form__checkbox');
    const phoneInput = document.getElementById("order-phone");

    const FormOpen = (form) => {
        form.classList.add('active-form');
        //form.style.display='block';
      };

      const FormClose = (form) => {
        form.classList.remove('active-form');
        //form.style.display='none';
      };

    const mask = new IMask(phoneInput, {
      mask: "+{7}(000)000-00-00",
    });

    const removeError = (input) => {
        const parent = input.parentNode;
        if(parent.classList.contains('error')){
            parent.querySelector('.error-message').remove();
            parent.classList.remove('error');
        }
    }

    const createError = (input, text) => {
        const parent = input.parentNode;
        const errorMessage = document.createElement('small');

        errorMessage.classList.add('error-message');
        errorMessage.textContent = text;
        parent.classList.add('error')
        parent.append(errorMessage)
    }


    const validation = () => {
      let result = true;
      inputs.forEach((input) => {
        removeError(input);

        if(input.dataset.required == "true") {
            if(input.value == ""){
                createError(input, 'Поле не заполнено');
                result = false;
            }
        }
      });

      if(!checkboxInput.checked){
        createError(checkboxInput, 'Необходимо согласие');
        result = false;
    }

      return result;
    };

    mainForm.addEventListener('keyup', (event) => {
        if(event.code === 'Escape'){
            FormClose(mainForm);
        }
    })

    orderForm.addEventListener("submit", (event) => {
      //event.preventDefault();
      if (validation(this) == true && mask.masked.isComplete) {
/*         const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
        const formData = new FormData(orderForm);
        console.log(formData);
        xhr.send(formData);

        xhr.addEventListener("load", () => {
          console.log(xhr.status);
          console.log(xhr.response);
          mainForm.classList.remove('active-form');
        }); */
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
        const formData = new FormData(orderForm);
        console.log(formData);
        xhr.send(formData);

        xhr.addEventListener("load", () => {
          console.log(xhr.status);
          console.log(xhr.response);
          FormClose(mainForm);
          console.log(thanksForm);
          thanksForm.style.display='block';
         /*  FormOpen(thanksForm); */
          setTimeout(() => {
            thanksForm.style.display='none';
            modal.classList.toggle('is-open');
          }, 2000);
        });
        event.target.reset();
        thanksForm.querySelector(".order__close").addEventListener("click", () => {
            thanksForm.style.display='none';
            /* FormClose(thanksForm); */
          });
      }
    });


/*   const form = document.getElementById("order");
  
  const validator = (form) => {
    let result = true;
    form.querySelectorAll("input").forEach((input) => {
      console.log(input);
    });
    return result;
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (validator()) {
        alert("ok");
    }
  }); */

};

/* import IMask from 'imask';
const phoneInput = document.getElementById('order-phone');
const submitBtn = document.querySelector('.order__btn');

const mask = new IMask(phoneInput, {
    mask: "+{7}(000)000-00-00",
})

phoneInput.addEventListener('input', () => {
    if(mask.masked.isComplete) {
        submitBtn.classList.add('order__btn-active');
    } else {
        submitBtn.classList.remove('order__btn-active');
    }
}) */
