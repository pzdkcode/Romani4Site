const openModal = document.getElementById('openModal')
const modal = document.getElementById('modal')
const close = document.getElementsByClassName('close')[0]
const orderButton = document.getElementById('orderButton')

openModal.addEventListener('click', function () {
	modal.style.display = 'block'
})

close.addEventListener('click', function () {
	modal.style.display = 'none'
})

window.addEventListener('click', function (event) {
	if (event.target === modal) {
		modal.style.display = 'none'
	}
})

orderButton.addEventListener('click', function () {
	const fullName = document.getElementById('fullName').value
	const phoneNumber = document.getElementById('phoneNumber').value
	const city = document.getElementById('city').value

	if (fullName && phoneNumber && city) {
		
		modal.style.display = 'none'
	} else {
		alert('Пожалуйста, заполните все поля.')
	}
})
