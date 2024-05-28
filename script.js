//your JS code here. If required.
const addBtn = document.getElementById("submit");
const title = document.getElementById("title");
const author = document.getElementById("author");
const isbn = document.getElementById("isbn");
const tBody = document.getElementById("book-list");
addBtn.addEventListener("click", (event)=>{
	event.preventDefault();
	let titleVal = title.value;
	let authorVal = author.value;
	let isbnVal = isbn.value;
	// console.log(titleVal,authorVal,isbnVal);

	let tr = document.createElement("tr");
	
	tr.innerHTML = `<tr>
				<td>${titleVal}</td>
				<td>${authorVal}</td>
				<td>${isbnVal}</td>
				<td></td>
				</tr>`
	tBody.append(tr);
	let deleteBtn = document.createElement("button");
	deleteBtn.innerText ="X";
	deleteBtn.classList.add= "delete";
	deleteBtn.style.backgroundColor = "red";
	deleteBtn.style.color = "white";
	
	tr.append(deleteBtn)


	deleteBtn.addEventListener("click", ()=>{
		tr.remove();
	})
})