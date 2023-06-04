const addDialogBtn = document.getElementById("add-dialog-btn");
const addDialog = document.getElementById("add-dialog");
const cancelElementBtn = document.getElementById("cancel-element");

addDialogBtn.addEventListener("click", () => {
  addDialog.showModal();
});

cancelElementBtn.addEventListener("click", () => {
  addDialog.close();
})

const addBtn = document.getElementById("add-btn");
const container = document.getElementById("container")
const titleInput = document.getElementById("headline-input");
const innerText =  document.getElementById("text");
const removeAllBtn = document.getElementById("removeall");
const checkedContainer = document.getElementById("checked-container");

addBtn.addEventListener("click", () => {
  const newElement = document.createElement("div");
  newElement.classList.add("addedDiv");

  const title = titleInput.value;
  const text = innerText.value;
  const newElementContent = `
    <h2>${title}</h2>
    <p>${text}</p>
    <div class="check-cart">
      <p>Checked</p>
      <button class="checked"></button>
      <button class="deleteElement">
        <svg viewBox="0 0 448 512" width="100" title="trash-alt">
          <path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
        </svg>
      </button>
    </div>
  `;

newElement.innerHTML = newElementContent;

  
  if(title.length > 0) {
    container.append(newElement);
    addDialog.close();
  };
  


  
const checkedBtn = newElement.querySelector(".checked");
checkedBtn.addEventListener("click", () => {
  checkedBtn.classList.toggle("checked-active");
  if (checkedBtn.classList.contains("checked-active")) {
    checkedContainer.appendChild(newElement);
    newElement.classList.add("checkedCard");
  } else {
    container.appendChild(newElement);
     newElement.classList.remove("checkedCard");
  }
});

const deleteElementBtns = newElement.querySelectorAll(".deleteElement");

deleteElementBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetCard = btn.closest(".addedDiv");
    targetCard.remove();
  });
});


});


const removeDialog = document.getElementById("remove-dialog");
const cancelRemoveBtn = document.getElementById("notRemoving");
const finalRemovingBtn = document.getElementById("finalRemoving");

removeAllBtn.addEventListener("click", () => {
  removeDialog.showModal();
});

finalRemovingBtn.addEventListener("click", () => {
  const allNewElements = document.querySelectorAll(".addedDiv");
   allNewElements.forEach(element => {
    element.remove();
  });
  removeDialog.close();
});

cancelRemoveBtn.addEventListener("click", () => {
  removeDialog.close();
});


