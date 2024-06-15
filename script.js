

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

// 
  function toggleDisplay() {
		let element = document.getElementById('otsuv12')
		if (element.style.display == 'none') {
			element.style.display = 'block'
		} else {
			element.style.display = 'none'
		}
	}
// 


// 




// 

let products = {
	data: [
		{
			productName: 'Видеокарта MSI GeForce RTX 4060 Ti GAMING X',
			category: 'Видеокарты',
			price: '56 299 ₽',
			image: 'images/GPU/RTX4060TI.png',
		},
		{
			productName: 'Процессор AMD Ryzen 7 6000 OEM',
			category: 'Процессоры',
			price: '24 899 ₽',
			image: 'images/CPU/R7700OEM.webp',
		},
		{
			productName: 'Оперативная память Kingston FURY Beast Black 2/16',
			category: 'Память',
			price: '8 399 ₽',
			image: 'images/memory/Kingston FURY Beast Black.webp',
		},
		{
			productName: 'Видеокарта GIGABYTE GeForce RTX 3060 Ti GAMING OC',
			category: 'Видеокарты',
			price: '29 699 ₽',
			image: 'images/GPU/RTX3060TI.webp',
		},
		{
			productName: 'Материнская плата GIGABYTE B760M DS3H DDR4',
			category: 'Платы',
			price: '12 899 ₽',
			image: 'images/motherboard/GIGABYTE B760M DS3H DDR4.webp',
		},
		{
			productName: 'Процессор AMD 5 5600 OEM',
			category: 'Процессоры',
			price: '11 999 ₽',
			image: 'images/CPU/R55600OEM.webp',
		},
		{
			productName: 'Материнская плата GIGABYTE B550 AORUS ELITE V2',
			category: 'Платы',
			price: '14 999 ₽',
			image: 'images/motherboard/GIGABYTE B550 AORUSELITEV2.png',
		},
		{
			productName: 'Процессор AMD Ryzen 5 5600x OEM',
			category: 'Процессоры',
			price: '14 999 ₽',
			image: 'images/CPU/R55600XOEM.webp',
		},

		{
			productName: 'Видеокарта Palit GeForce RTX 4060 Dual',
			category: 'Видеокарты',
			price: '33 999 ₽',
			image: 'images/GPU/palit4060duo.webp',
		},
		{
			productName: 'Видеокарта MSI GeForce RTX 4060 VENTUS 2X BLACK OC',
			category: 'Видеокарты',
			price: '36 999 ₽',
			image: 'images/GPU/rtx4060msi.webp',
		},
		{
			productName: 'Видеокарта GIGABYTE GeForce RTX 4090 WINDFORCE V2',
			category: 'Видеокарты',
			price: '244 999 ₽',
			image: 'images/GPU/gigabyte4090.webp',
		},

		{
			productName: 'Видеокарта MSI GeForce RTX 4080 SUPER EXPERT',
			category: 'Видеокарты',
			price: '134 499 ₽',
			image: 'images/GPU/msi4080.webp',
		},

		{
			productName: 'Видеокарта MSI GeForce RTX 4070 VENTUS 3X E OC',
			category: 'Видеокарты',
			price: '68 999 ₽',
			image: 'images/GPU/msi4070.webp',
		},
		{
			productName: 'Видеокарта MSI GeForce RTX 3050 VENTUS 2X XS OC',
			category: 'Видеокарты',
			price: '25 799 ₽',
			image: 'images/GPU/msi3050.webp',
		},
		//
		{
			productName: 'Процессор AMD Ryzen 5 7500F OEM',
			category: 'Процессоры',
			price: '19 499 ₽',
			image: 'images/CPU/R57500F.webp',
		},
		{
			productName: 'Процессор AMD Ryzen 5 5600G OEM',
			category: 'Процессоры',
			price: '12 599 ₽',
			image: 'images/CPU/R55600G.webp',
		},
		{
			productName: 'Процессор AMD Ryzen 7 5700X OEM',
			category: 'Процессоры',
			price: '18 799 ₽',
			image: 'images/CPU/R75700X.webp',
		},
		//
		{
			productName: 'Материнская плата MSI A520M-A PRO',
			category: 'Платы',
			price: '5 699 ₽',
			image: 'images/motherboard/MSIA520M-A PRO.webp',
		},
		{
			productName: 'Материнская плата GIGABYTE A520M K V2',
			category: 'Платы',
			price: '6 199 ₽',
			image: 'images/motherboard/GIGABYTE A520M.webp',
		},
		{
			productName: 'Материнская плата MSI B450M-A PRO MAX II',
			category: 'Платы',
			price: '6 799 ₽',
			image: 'images/motherboard/MSI B450M-A PRO.webp',
		},
		{
			productName: 'Материнская плата MSI MPG B550 GAMING PLUS',
			category: 'Платы',
			price: '13 999 ₽',
			image: 'images/motherboard/MSI MPG B550 GAMING.png',
		},
		{
			productName: 'Материнская плата MSI B650 GAMING PLUS WIFI',
			category: 'Платы',
			price: '21 699 ₽',
			image: 'images/motherboard/MSI B650 GAMING PLUS.webp',
		},
		//
		{
			productName: 'Оперативная память ADATA XPG Lancer Blade',
			category: 'Память',
			price: '10 999 ₽',
			image: 'images/memory/ADATA XPG Lancer Blade.webp',
		},
		{
			productName: 'Оперативная память G.Skill AEGIS',
			category: 'Память',
			price: '3 999 ₽',
			image: 'images/memory/G.Skill AEGIS 16 GB.webp',
		},
		{
			productName: 'Оперативная память ADATA XPG GAMMIX D20',
			category: 'Память',
			price: '4 399 ₽',
			image: 'images/memory/ADATA XPG GAMMIX D20.webp',
		},
		{
			productName: 'Оперативная память ADATA XPG Lancer',
			category: 'Память',
			price: '13 299 ₽',
			image: 'images/memory/ADATA XPG Lancer.webp',
		},
		{
			productName: 'Оперативная память ADATA XPG Lancer Blade RGB',
			category: 'Память',
			price: '12 999 ₽',
			image: 'images/memory/ADATA XPG Lancer Blade RGB.png',
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



// Видеокарты

document.addEventListener('click', function(event) {
  if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ВИДЕОКАРТА MSI GEFORCE RTX 4060 TI GAMING X'
	) {
		window.location.href ='Product/MSI4060TI.html'
	}
});

document.addEventListener('click', function(event) {
  if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText ===
			'ВИДЕОКАРТА GIGABYTE GEFORCE RTX 3060 TI GAMING OC'
	) {
		window.location.href = 'Product/RTX3060TI.html'
	}
});

document.addEventListener('click', function(event) {
  if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ВИДЕОКАРТА PALIT GEFORCE RTX 4060 DUAL'
	) {
		window.location.href = 'Product/RTX4060DUO.html'
	}
});

document.addEventListener('click', function(event) {
  if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText ===
			'ВИДЕОКАРТА MSI GEFORCE RTX 4060 VENTUS 2X BLACK OC'
	) {
		window.location.href = 'Product/RTX4060MSI.html'
	}
});

document.addEventListener('click', function(event) {
  if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText ===
			'ВИДЕОКАРТА GIGABYTE GEFORCE RTX 4090 WINDFORCE V2'
	) {
		window.location.href = 'Product/RTX4090.html'
	}
});

document.addEventListener('click', function(event) {
  if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ВИДЕОКАРТА MSI GEFORCE RTX 4080 SUPER EXPERT'
	) {
		window.location.href = 'Product/MSI4080.html'
	}
});


document.addEventListener('click', function(event) {
  if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ВИДЕОКАРТА MSI GEFORCE RTX 4070 VENTUS 3X E OC'
	) {
		window.location.href = 'Product/RTX4070.html'
	}
});

document.addEventListener('click', function(event) {
  if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ВИДЕОКАРТА MSI GEFORCE RTX 3050 VENTUS 2X XS OC'
	) {
		window.location.href = 'Product/RTX3050.html'
	}
});

// 




// ПРОЦЕССОРЫ

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПРОЦЕССОР AMD RYZEN 7 6000 OEM'
	) {
		window.location.href = 'Product/R7600.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПРОЦЕССОР AMD 5 5600 OEM'
	) {
		window.location.href = 'Product/R55600.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПРОЦЕССОР AMD RYZEN 5 5600X OEM'
	) {
		window.location.href = 'Product/R55600X.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПРОЦЕССОР AMD RYZEN 5 7500F OEM'
	) {
		window.location.href = 'Product/R57700F.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПРОЦЕССОР AMD RYZEN 5 5600G OEM'
	) {
		window.location.href = 'Product/R55600G.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ПРОЦЕССОР AMD RYZEN 7 5700X OEM'
	) {
		window.location.href = 'Product/R75700X.html'
	}
})

// 
// Материнские платы


document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'МАТЕРИНСКАЯ ПЛАТА GIGABYTE B760M DS3H DDR4'
	) {
		window.location.href = 'Product/GIGABYTEB760M.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'МАТЕРИНСКАЯ ПЛАТА GIGABYTE B550 AORUS ELITE V2'
	) {
		window.location.href = 'Product/GIGABYTEB550.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'МАТЕРИНСКАЯ ПЛАТА MSI A520M-A PRO'
	) {
		window.location.href = 'Product/MSIA520M-APRO.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'МАТЕРИНСКАЯ ПЛАТА GIGABYTE A520M K V2'
	) {
		window.location.href = 'Product/GIGABYTEA520M.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'МАТЕРИНСКАЯ ПЛАТА MSI B450M-A PRO MAX II'
	) {
		window.location.href = 'Product/MSI B450M-A PRO MAX II.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'МАТЕРИНСКАЯ ПЛАТА MSI MPG B550 GAMING PLUS'
	) {
		window.location.href = 'Product/MSI MPG B550 GAMING.html'
	}
})

document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'МАТЕРИНСКАЯ ПЛАТА MSI B650 GAMING PLUS WIFI'
	) {
		window.location.href = 'Product/MSI B650 GAMING.html'
	}
})
// 
//  Оперативная память


document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ОПЕРАТИВНАЯ ПАМЯТЬ KINGSTON FURY BEAST BLACK 2/16'
	) {
		window.location.href = 'Product/KINGSTONFURYBEASTBLACK.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ОПЕРАТИВНАЯ ПАМЯТЬ ADATA XPG LANCER BLADE'
	) {
		window.location.href = 'Product/ADATA XPG Lancer Blade.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ОПЕРАТИВНАЯ ПАМЯТЬ G.SKILL AEGIS'
	) {
		window.location.href = 'Product/G.SKILL AEGIS.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ОПЕРАТИВНАЯ ПАМЯТЬ ADATA XPG GAMMIX D20'
	) {
		window.location.href = 'Product/ADATA XPG GAMMIX D20.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ОПЕРАТИВНАЯ ПАМЯТЬ ADATA XPG LANCER'
	) {
		window.location.href = 'Product/ADATA XPG LANCER.html'
	}
})
document.addEventListener('click', function (event) {
	if (
		event.target &&
		event.target.classList.contains('product-name') &&
		event.target.innerText === 'ОПЕРАТИВНАЯ ПАМЯТЬ ADATA XPG LANCER BLADE RGB'
	) {
		window.location.href = 'Product/ADATA XPG LANCER BLADE RGB.html'
	}
})

