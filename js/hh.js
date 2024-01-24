const scriptURL = 'https://script.google.com/macros/s/AKfycbwT81yHlLT3Tl4ts3n_wYK21Qt_LKrfWnw-K4KQyJnoC2BroQZWjUNZLLrw24ulnhWL/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you for order...!" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})