const scriptURL = 'https://script.google.com/macros/s/AKfycbzLXyrYXKkk9UX4uqj0WXQsWQqT9HaKPnO16_EAz7piV1bicAU-sF1tV1OBsveWyUdk/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you for order...!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})