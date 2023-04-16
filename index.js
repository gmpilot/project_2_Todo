let getText = document.getElementById('todoText');
let btn = document.getElementById('submit');
let addText = document.getElementById('todoOL');
let toDoList = [], toDoRemoveList = [], i = 0; j = 0;

btn.addEventListener('click', function () {
	if (getText.value == "") {
		alert("Todo is empty! Please Write something");
	} else {
		let addList = document.createElement("li");
		let removeBtn = document.createElement("button");

		addList.innerText = getText.value;
		removeBtn.innerText = "-";

		toDoList[i] = getText.value;
		i++;
		addText.appendChild(addList);
		addList.appendChild(removeBtn);
		getText.value = "";


		removeBtn.addEventListener('click', function () {
			toDoRemoveList[j] = addList.innerText.replace("-", "");
			j++;
			addText.removeChild(addList);
			addText.removeChild(removeBtn);
		})


		let showTodo = document.getElementById('Footer1');
		showTodo.innerText = "Show your previous ToDo";

		showTodo.addEventListener('click', function () {

			let showTodo2 = document.getElementById('Footer2');
			showTodo2.innerText = "Your All Todo : " + "br" + toDoList;

			let showTodo3 = document.getElementById('Footer3');
			showTodo3.innerText = "Your Removed Todo : " + "\n" + toDoRemoveList;

		})
	}

	

})

