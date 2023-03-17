function alternate(menu)
{
	let oMenu = document.getElementById(menu);
	const opened = 'opened';
	const closed = 'closed';
	if (oMenu.classList.contains(opened)){
		oMenu.classList.remove(opened);
		oMenu.classList.add(closed);
	}
	else{
		oMenu.classList.remove(closed);
		oMenu.classList.add(opened);
	}
}

window.onscroll = function() {scrollFunction()};

function isInViewport(courses) {
	let distance = courses.getBoundingClientRect();
	return (
		distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0
	);
}
	
function scrollFunction() {
	let courses = document.getElementById('courses');
	let instructor = document.getElementById('instructor');
	let suscribe = document.getElementById('suscribe');
	let contact = document.getElementById('contact');
	const courseOpt = 'coursesOpt';
	const instructorOpt = 'instructorOpt';
	const suscribeOpt = 'suscribeOpt';
	const contactOpt = 'contactOpt';
	const noSelectedColor = '#FFFFFF';
	const selectedColor = '#004000';
	if (isInViewport(courses)) {
		document.getElementById(courseOpt).style.color = selectedColor;
		document.getElementById(instructorOpt).style.color = noSelectedColor;
		document.getElementById(suscribeOpt).style.color = noSelectedColor;
		document.getElementById(contactOpt).style.color = noSelectedColor;
	}
	if (isInViewport(instructor)) {
		document.getElementById(courseOpt).style.color = noSelectedColor;
		document.getElementById(instructorOpt).style.color = selectedColor;
		document.getElementById(suscribeOpt).style.color = noSelectedColor;
		document.getElementById(contactOpt).style.color = noSelectedColor;
	}
	if (isInViewport(suscribe)) {
		document.getElementById(courseOpt).style.color = noSelectedColor;
		document.getElementById(instructorOpt).style.color = noSelectedColor;
		document.getElementById(suscribeOpt).style.color = selectedColor;
		document.getElementById(contactOpt).style.color = noSelectedColor;
	}
	if (isInViewport(contact)) {
		document.getElementById(courseOpt).style.color = noSelectedColor;
		document.getElementById(instructorOpt).style.color = noSelectedColor;
		document.getElementById(suscribeOpt).style.color = noSelectedColor;
		document.getElementById(contactOpt).style.color = selectedColor;
	}	
} 