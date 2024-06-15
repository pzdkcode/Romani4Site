$('.back-to-top').click(function () {
	$('body,html').animate({ scrollTop: 0 }, 400)
})

$(window).scroll(function () {
	let scrolled = $(window).scrollTop()

	if (scrolled > 100) {
		$('.back-to-top').addClass('active')
	} else {
		$('.back-to-top').removeClass('active')
	}
})



let products = {
	data: [
		{
			productName: 'ПК ARDOR GAMING RAGE H335',
			category: 'RTX-4060',
			price: '100 499 ₽',
			image: 'images/Computer/ARDOR GAMING RAGE H335.webp',
		},
		{
			productName: 'ПК ARDOR GAMING RAGE H339',
			category: 'RTX-4060',
			price: '83 499 ₽',
			image: 'images/Computer/ARDOR GAMING RAGE H339.webp',
		},
		{
			productName: 'ПК ARDOR GAMING RAGE H338',
			category: 'RTX-4060',
			price: '85 799 ₽',
			image: 'images/Computer/ARDOR GAMING RAGE H338.webp',
		},
		{
			productName: 'ПК MSI MAG Infinite S3 13NUC5-1054XRU',
			category: 'RTX-4060',
			price: '109 999 ₽',
			image: 'images/Computer/MSI MAG Infinite S3 13NUC5-1054XRU.webp',
		},
		{
			productName: 'ПК ARDOR GAMING RAGE H329',
			category: 'RTX-4060',
			price: '102 999 ₽',
			image: 'images/Computer/ARDOR GAMING RAGE H329.webp',
		},
		//
		//
		// RTX-4070
		{
			productName: 'ПК ARDOR GAMING RAGE H336',
			category: 'RTX-4070',
			price: '146 499 ₽',
			image: 'images/Computer/ARDOR GAMING RAGE H336.webp',
		},
		{
			productName: 'ПК ARDOR GAMING RAGE H334',
			category: 'RTX-4070',
			price: '146 499 ₽',
			image: 'images/Computer/ARDOR GAMING RAGE H334.webp',
		},
		{
			productName: 'ПК ARDOR GAMING RAGE H331',
			category: 'RTX-4070',
			price: '142 499 ₽',
			image: 'images/Computer/ARDOR GAMING RAGE H331.webp',
		},
		{
			productName: 'ПК ARDOR GAMING EVO X050',
			category: 'RTX-4070',
			price: '199 999 ₽',
			image: 'images/Computer/ARDOR GAMING EVO X050.webp',
		},
		{
			productName: 'ПК ARDOR GAMING RAGE H330',
			category: 'RTX-4070',
			price: '147 499 ₽',
			image: 'images/Computer/ARDOR GAMING RAGE H330.webp',
		},
		//
		//
		// 4080
		{
			productName: 'ПК ARDOR GAMING EVO X042',
			category: 'RTX-4080',
			price: '274 999 ₽',
			image: 'images/Computer/ARDOR GAMING EVO X042.webp',
		},
		{
			productName: 'ПК ARDOR GAMING EVO X053',
			category: 'RTX-4080',
			price: '270 999 ₽',
			image: 'images/Computer/ARDOR GAMING EVO X053.webp',
		},
		{
			productName: 'ПК ARDOR GAMING EVO X023',
			category: 'RTX-4080',
			price: '226 999 ₽',
			image: 'images/Computer/ARDOR GAMING EVO X023.webp',
		},
		{
			productName: 'ПК ARDOR GAMING EVO X051',
			category: 'RTX-4080',
			price: '269 999 ₽',
			image: 'images/Computer/ARDOR GAMING EVO X051.webp',
		},
		{
			productName: 'ПК MSI MEG Trident X2 13NUG-248XRU [9S6-B92211-248]',
			category: 'RTX-4080',
			price: '365 999 ₽',
			image: 'images/Computer/MSI MEG Trident X2.webp',
		},
		//
		//
		// 4090
		{
			productName: 'ПК ARDOR GAMING EVO X061',
			category: 'RTX-4090',
			price: '390 999 ₽',
			image: 'images/Computer/ARDOR GAMING EVO X061.webp',
		},
		{
			productName: 'ПК ARDOR GAMING EVO X040',
			category: 'RTX-4090',
			price: '372 999 ₽',
			image: 'images/Computer/ARDOR GAMING EVO X040.webp',
		},
		{
			productName: 'ПК ARDOR GAMING EVO X056',
			category: 'RTX-4090',
			price: '405 999 ₽',
			image: 'images/Computer/ARDOR GAMING EVO X056.webp',
		},
		{
			productName: 'ПК ARDOR GAMING EVO X055',
			category: 'RTX-4090',
			price: '444 999 ₽',
			image: 'images/Computer/ARDOR GAMING EVO X055.webp',
		},
		{
			productName: 'ПК HYPERPC G6 PRO PLUS',
			category: 'RTX-4090',
			price: '563 999 ₽',
			image: 'images/Computer/HYPERPC G6 PRO PLUS.webp',
		},
	],
}

for (let i of products.data) {
	let card = document.createElement('div')

	card.classList.add('card', i.category, 'hide')

	let imgContainer = document.createElement('div')
	imgContainer.classList.add('image-container')

	let image = document.createElement('img')
	image.setAttribute('src', i.image)
	imgContainer.appendChild(image)
	card.appendChild(imgContainer)

	let container = document.createElement('div')
	container.classList.add('container')

	let name = document.createElement('h5')
	name.classList.add('product-name')
	name.innerText = i.productName.toUpperCase()
	container.appendChild(name)

	let price = document.createElement('h3')
	price.innerText = '' + i.price
	container.appendChild(price)

	card.appendChild(container)
	document.getElementById('products').appendChild(card)
}

function filterProduct(value) {
	let buttons = document.querySelectorAll('.button-value')
	buttons.forEach(button => {
		if (value.toUpperCase() == button.innerText.toUpperCase()) {
			button.classList.add('active')
		} else {
			button.classList.remove('active')
		}
	})

	let elements = document.querySelectorAll('.card')

	elements.forEach(element => {
		if (value == 'Всё') {
			element.classList.remove('hide')
		} else {
			if (element.classList.contains(value)) {
				element.classList.remove('hide')
			} else {
				element.classList.add('hide')
			}
		}
	})
}

document.getElementById('search').addEventListener('click', () => {
	let searchInput = document.getElementById('search-input').value
	let elements = document.querySelectorAll('.product-name')
	let cards = document.querySelectorAll('.card')

	elements.forEach((element, index) => {
		if (element.innerText.includes(searchInput.toUpperCase())) {
			cards[index].classList.remove('hide')
		} else {
			cards[index].classList.add('hide')
		}
	})
})

window.onload = () => {
	filterProduct('Всё')
}

// 4060

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING RAGE H335'
	) {
		window.location.href = 'Product/ARDOR GAMING RAGE H335.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING RAGE H339'
	) {
		window.location.href = 'Product/ARDOR GAMING RAGE H339.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING RAGE H338'
	) {
		window.location.href = 'Product/ARDOR GAMING RAGE H338.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК MSI MAG INFINITE S3 13NUC5-1054XRU'
	) {
		window.location.href = 'Product/MSI MAG INFINITE S3 13NUC5-1054XRU.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING RAGE H329'
	) {
		window.location.href = 'Product/ARDOR GAMING RAGE H329.html'
	}
})

// 
// 
// 4070
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING RAGE H336'
	) {
		window.location.href = 'Product/ARDOR GAMING RAGE H336.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING RAGE H334'
	) {
		window.location.href = 'Product/ARDOR GAMING RAGE H334.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING RAGE H331'
	) {
		window.location.href = 'Product/ARDOR GAMING RAGE H331.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING EVO X050'
	) {
		window.location.href = 'Product/ARDOR GAMING EVO X050.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING RAGE H330'
	) {
		window.location.href = 'Product/ARDOR GAMING RAGE H330.html'
	}
})
// 
// 
// 4080
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING EVO X042'
	) {
		window.location.href = 'Product/ARDOR GAMING EVO X042.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING EVO X053'
	) {
		window.location.href = 'Product/ARDOR GAMING EVO X053.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING EVO X023'
	) {
		window.location.href = 'Product/ARDOR GAMING EVO X023.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING EVO X051'
	) {
		window.location.href = 'Product/ARDOR GAMING EVO X051.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК MSI MEG TRIDENT X2 13NUG-248XRU [9S6-B92211-248]'
	) {
		window.location.href = 'Product/MSI MEG TRIDENT X2.html'
	}
})
// 
// 
// 4090
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING EVO X061'
	) {
		window.location.href = 'Product/ARDOR GAMING EVO X061.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING EVO X040'
	) {
		window.location.href = 'Product/ARDOR GAMING EVO X040.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING EVO X056'
	) {
		window.location.href = 'Product/ARDOR GAMING EVO X056.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК ARDOR GAMING EVO X055'
	) {
		window.location.href = 'Product/ARDOR GAMING EVO X055.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПК HYPERPC G6 PRO PLUS'
	) {
		window.location.href = 'Product/HYPERPC G6 PRO PLUS.html'
	}
})