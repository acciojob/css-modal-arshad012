
//your JS code here. If required.
function open_modal() {
	const modal = document.querySelector('.modal');
	modal.style.display = 'block';
	const modal_content = document.querySelector('.modal-content');
	modal_content.style.top = 0;
}

function close_modal() {
	const modal = document.querySelector('.modal');
	modal.style.display = 'none';
	const modal_content = document.querySelector('.modal-content');
	modal_content.style.top = '-150px';
}