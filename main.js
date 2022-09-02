// Fusión Desktop menu con la navBar Mail
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// Fusión Desktop menu con la navBar Mail
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
	asideCart.classList.add('inactive');
	desktopMenu.classList.toggle('inactive');
}

// Fusión Mobile menu con la navBar Menú Hamburguesa
const hamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

hamMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
	asideCart.classList.add('inactive');
	mobileMenu.classList.toggle('inactive');
}

// Fusión Menú Cart con la navBar-Hamburguesa
const menuCart = document.querySelector('.navbar-shopping-cart');
const asideCart = document.querySelector('.product-detail');

menuCart.addEventListener('click', toggleCartMenuAside);

function toggleCartMenuAside() {
	desktopMenu.classList.add('inactive');
	mobileMenu.classList.add('inactive');
	asideCart.classList.toggle('inactive');
}

//Lista de Productos
const productList = [];
productList.push({
	id: '1',
	name: 'Bicicleta',
	price: 120.0,
	image:
		'https://contents.mediadecathlon.com/p2158873/k$a6fe3d09bd90786e1c7ab0ea110c915b/sq/bicicleta-de-montana-mujer-275-rockrider-st-530-mdb-azul-turquesa.jpg?format=auto&f=800x0',
});

productList.push({
	id: '2',
	name: 'Patines',
	price: 80.0,
	image:
		'https://fishbrain.tiendarollmachine.com/wp-content/uploads/2020/02/Patines-Rollmachine.jpg',
});

productList.push({
	id: '3',
	name: 'Computador de mesa',
	price: 3000000,
	image:
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxiQuZk-jPDvDU3DVrtZei3MpHNu8StgQuRQ&usqp=CAU',
});

productList.push({
	id: '4',
	name: 'Portátil',
	price: 5000000,
	image:
		'https://s1.eestatic.com/2022/04/28/elandroidelibre/668443267_223898147_1024x576.jpg',
});

productList.push({
	id: '5',
	name: 'Escritorio',
	price: 1200000,
	image:
		'https://cdn.shopify.com/s/files/1/2953/0206/products/v2-escritorios-en-madera-para-ninos-e-08-blanco_wengue_1024x1024.jpg?v=1642616393',
});

productList.push({
	id: '6',
	name: 'Mouse',
	price: 320.0,
	image: 'https://i.linio.com/p/a189833b940185663113658b22ef5df5-product.jpg',
});

productList.push({
	id: '7',
	name: 'Mouse Pads',
	price: 100.0,
	image:
		'https://www.zdnet.com/a/img/resize/46adb559832d4aac2b376c02173ec10bfe4ffcde/2022/03/02/c6428674-235b-4dce-a48a-9e5ec67351a8/logitech-studio-series-mouse-pad.jpg?auto=webp&fit=crop&height=1200&width=1200',
});

productList.push({
	id: '8',
	name: 'Silla gamer',
	price: 1100000,
	image:
		'https://lacacharreriavirtual.com/wp-content/uploads/2021/11/O1CN015RwImn1Tfp7zht4eS_1055542410.jpg',
});

productList.push({
	id: '9',
	name: 'Celular Gamer',
	price: 5300000,
	image:
		'https://phantom-marca.unidadeditorial.es/db7a6f4b218894090cf9c45249322d5b/resize/1320/f/jpg/assets/multimedia/imagenes/2021/03/10/16153947429860.jpg',
});

productList.push({
	id: '10',
	name: 'Audífonos Gamer',
	price: 900.0,
	image:
		'https://falabella.scene7.com/is/image/Falabella/14749898_2?wid=800&hei=800&qlt=70',
});

function renderProducts(arrProducts) {
	for (product of arrProducts) {
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');

		const productImg = document.createElement('img');
		productImg.setAttribute('src', product.image);

		const productInfo = document.createElement('div');
		productInfo.classList.add('product-info');

		const productInfoChild = document.createElement('div');

		const productPrice = document.createElement('p');
		productPrice.innerText = '$' + product.price;

		const productName = document.createElement('p');
		productName.innerText = product.name;

		productInfoChild.append(productPrice, productName);

		const productInfoFigure = document.createElement('figure');
		const productImgCart = document.createElement('img');
		productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

		cardsContainer.append(productCard);

		productCard.append(productImg, productInfo);

		productInfo.append(productInfoFigure, productInfoChild);

		productInfoFigure.append(productImgCart);
	}
}

renderProducts(productList);
