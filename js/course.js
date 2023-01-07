const nav = document.querySelector('nav')
const link = document.querySelectorAll('nav ul li a')
const logo = document.querySelector('nav div')

document.addEventListener('scroll', function(ev){
	if (ev.target.scrollingElement.scrollTop > 0) {
		nav.style.backgroundColor = '#0090D4'
		logo.style.color="white"
		link.forEach(a => a.style.color="white")
	}
	else {
		nav.style.backgroundColor='transparent'
		link.forEach(a => a.style.color="white")
		logo.style.color="white"
	}
} )