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
			productName: '15.6" Ноутбук Acer Aspire 3 A315-44P-R2DH',
			category: 'Ryzen-7',
			price: '47 999 ₽',
			image: 'images/Notebook/Acer Aspire 3 A315-44P-R2DH.webp',
		},
		{
			productName: '16" Ноутбук DEXP Atlas M16-A7W303',
			category: 'Ryzen-7',
			price: '47 999 ₽',
			image: 'images/Notebook/DEXP Atlas M16-A7W303.webp',
		},
		{
			productName: '15.6" Ноутбук MAIBENBEN M557',
			category: 'Ryzen-7',
			price: '49 999 ₽',
			image: 'images/Notebook/MAIBENBEN M557.webp',
		},
		{
			productName: '15.6" Ноутбук ASUS TUF Gaming A15 FA507NV-LP023',
			category: 'Ryzen-7',
			price: '128 999 ₽',
			image: 'images/Notebook/ASUS TUF Gaming A15 FA507NV-LP023.webp',
		},
		{
			productName: '16" Ноутбук Acer Nitro 16 AN16-41-R5MW',
			category: 'Ryzen-7',
			price: '189 999 ₽',
			image: 'images/Notebook/Acer Nitro 16 AN16-41-R5MW.webp',
		},
		//
		//
		//
		{
			productName: '15.6" Ноутбук ASUS Vivobook Go 15 E1504FA-BQ533',
			category: 'Ryzen-5',
			price: '52 999 ₽',
			image: 'images/Notebook/ASUS Vivobook Go 15 E1504FA-BQ533.webp',
		},
		{
			productName: '15.6" Ноутбук MAIBENBEN X565',
			category: 'Ryzen-5',
			price: '84 299 ₽',
			image: 'images/Notebook/MAIBENBEN X565.webp',
		},
		{
			productName: '14" Ноутбук HUAWEI MateBook D 14 NbM-WDQ9',
			category: 'Ryzen-5',
			price: '50 999 ₽',
			image: 'images/Notebook/HUAWEI MateBook D 14 NbM-WDQ9.webp',
		},
		{
			productName: '15.6" Ноутбук MSI Bravo 15 C7VF-039XRU',
			category: 'Ryzen-5',
			price: '109 999 ₽',
			image: 'images/Notebook/MSI Bravo 15 C7VF-039XRU.webp',
		},
		{
			productName: '15.6" Ноутбук Tecno Megabook T1',
			category: 'Ryzen-5',
			price: '52 999 ₽',
			image: 'images/Notebook/Tecno Megabook T1.webp',
		},
		//
		//
		//
		{
			productName: '17.3" Ноутбук ARDOR GAMING NEO G17-I7ND315',
			category: 'Intel-i7',
			price: '117 499 ₽',
			image: 'images/Notebook/ARDOR GAMING NEO G17-I7ND315.webp',
		},
		{
			productName: '15.6" Ноутбук ASUS TUF Gaming F15 FX506HC-HN040',
			category: 'Intel-i7',
			price: '78 499 ₽',
			image: 'images/Notebook/ASUS TUF Gaming F15 FX506HC-HN040.webp',
		},
		{
			productName: '17.3" Ноутбук MSI Katana 17 B12VFK-271XRU',
			category: 'Intel-i7',
			price: '113 999 ₽',
			image: 'images/Notebook/MSI Katana 17 B12VFK-271XRU.webp',
		},
		{
			productName: '17.3" Ноутбук ASUS TUF Gaming FX707ZV4-HX020',
			category: 'Intel-i7',
			price: '135 999 ₽',
			image: 'images/Notebook/ASUS TUF Gaming FX707ZV4-HX020.webp',
		},
		{
			productName: '15.6" Ноутбук ASUS TUF Gaming F15 FX506HE-HN393',
			category: 'Intel-i7',
			price: '89 999 ₽',
			image: 'images/Notebook/ASUS TUF Gaming F15 FX506HE-HN393.webp',
		},
		//
		//
		//
		{
			productName: '17.3" Ноутбук MSI Katana B12VFK-463XRU',
			category: 'Intel-i5',
			price: '99 899 ₽',
			image: 'images/Notebook/MSI Katana B12VFK-463XRU.webp',
		},
		{
			productName: '16" Ноутбук ASUS VivoBook 16X',
			category: 'Intel-i5',
			price: '79 799 ₽',
			image: 'images/Notebook/ASUS VivoBook 16X.webp',
		},
		{
			productName: '17.3" Ноутбук MSI GF76 Katana B12UCX-1004XRU',
			category: 'Intel-i5',
			price: '77 999 ₽',
			image: 'images/Notebook/MSI GF76 Katana B12UCX-1004XRU.webp',
		},
		{
			productName: '15.6" Ноутбук ASUS TUF Gaming F15 FX507ZC4-HN009',
			category: 'Intel-i5',
			price: '88 999 ₽',
			image: 'images/Notebook/ASUS TUF Gaming F15 FX507ZC4-HN009.webp',
		},
		{
			productName: '15.6" Ноутбук ARDOR GAMING NEO G15-I5ND300',
			category: 'Intel-i5',
			price: '76 999 ₽',
			image: 'images/Notebook/ARDOR GAMING NEO G15-I5ND300.webp',
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

// Ryzen 7

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '15.6" НОУТБУК ACER ASPIRE 3 A315-44P-R2DH'
	) {
		window.location.href = 'Product/Acer Aspire 3 A315-44P-R2DH.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '16" НОУТБУК DEXP ATLAS M16-A7W303'
	) {
		window.location.href = 'Product/DEXP ATLAS M16-A7W303.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '15.6" НОУТБУК MAIBENBEN M557'
	) {
		window.location.href = 'Product/MAIBENBEN M557.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '15.6" НОУТБУК ASUS TUF GAMING A15 FA507NV-LP023'
	) {
		window.location.href = 'Product/ASUS TUF Gaming A15 FA507NV-LP023.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '16" НОУТБУК ACER NITRO 16 AN16-41-R5MW'
	) {
		window.location.href = 'Product/ACER NITRO 16 AN16-41-R5MW.html'
	}
})

// Ryzen 5
// 
// 

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '15.6" НОУТБУК ASUS VIVOBOOK GO 15 E1504FA-BQ533'
	) {
		window.location.href = 'Product/ASUS Vivobook Go 15 E1504FA-BQ533.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '15.6" НОУТБУК MAIBENBEN X565'
	) {
		window.location.href = 'Product/MAIBENBEN X565.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '14" НОУТБУК HUAWEI MATEBOOK D 14 NBM-WDQ9'
	) {
		window.location.href = 'Product/HUAWEI MateBook D 14 NbM-WDQ9.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '15.6" НОУТБУК MSI BRAVO 15 C7VF-039XRU'
	) {
		window.location.href = 'Product/MSI Bravo 15 C7VF-039XRU.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '15.6" НОУТБУК TECNO MEGABOOK T1'
	) {
		window.location.href = 'Product/Tecno Megabook T1.html'
	}
})
// intel 7
// 
// 

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '17.3" НОУТБУК ARDOR GAMING NEO G17-I7ND315'
	) {
		window.location.href = 'Product/ARDOR GAMING NEO G17-I7ND315.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '15.6" НОУТБУК ASUS TUF GAMING F15 FX506HC-HN040'
	) {
		window.location.href = 'Product/ASUS TUF Gaming F15 FX506HC-HN040.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '17.3" НОУТБУК MSI KATANA 17 B12VFK-271XRU'
	) {
		window.location.href = 'Product/MSI Katana 17 B12VFK-271XRU.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '17.3" НОУТБУК ASUS TUF GAMING FX707ZV4-HX020'
	) {
		window.location.href = 'Product/ASUS TUF Gaming FX707ZV4-HX020.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '15.6" НОУТБУК ASUS TUF GAMING F15 FX506HE-HN393'
	) {
		window.location.href = 'Product/ASUS TUF Gaming F15 FX506HE-HN393.html'
	}
})

// intel 5
// 
// 

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '17.3" НОУТБУК MSI KATANA B12VFK-463XRU'
	) {
		window.location.href = 'Product/MSI Katana B12VFK-463XRU.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '16" НОУТБУК ASUS VIVOBOOK 16X'
	) {
		window.location.href = 'Product/ASUS VivoBook 16X K3605ZF-MB338.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '17.3" НОУТБУК MSI GF76 KATANA B12UCX-1004XRU'
	) {
		window.location.href = 'Product/MSI GF76 Katana B12UCX-1004XRU.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '15.6" НОУТБУК ASUS TUF GAMING F15 FX507ZC4-HN009'
	) {
		window.location.href = 'Product/ASUS TUF Gaming F15 FX507ZC4-HN009.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === '15.6" НОУТБУК ARDOR GAMING NEO G15-I5ND300'
	) {
		window.location.href = 'Product/ARDOR GAMING NEO G15-I5ND300.html'
	}
})