let input = document.querySelector('input');

loadEvents();

function loadEvents() {
	document
					.querySelector('form')
					.addEventListener('submit', submit);
	document
					.getElementById('clear')
					.addEventListener('click', clearList);

	document
					.querySelector('ul')
					.addEventListener('click', tickOrDelete);
}

// submit date function
function submit(e) {
	e.preventDefault();
	if (input.value != '') {
		addTask(input.value);
	}
	input.value = '';
}

function clearList(e) {
	document.querySelector('ul').innerHTML = '';
}

function tickOrDelete(e) {
	if (e.target.className === 'delete') {
		deleteTask(e); 
	} else {
		tickTask(e);
	}
}

function addTask(task) {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">×</span><input id="${task}" type="checkbox"><label for="${task}">${task}</label>`;
  document.querySelector('ul').appendChild(li);
  document.querySelector('.taskBoard').style.display = 'block';
}

function deleteTask(e) {
	let remove = e.target.parentNode;
	let parentNode = remove.parentNode;
	parentNode.removeChild(remove);
}

function tickTask(e){
  const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  }else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}