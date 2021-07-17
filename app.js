const todoForm = document.querySelector(".add");
const ul = document.querySelector(".todos");
const search = document.querySelector(".search input");

const todoHandler = (inputValue) => {
  let todo = `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${inputValue}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>`;

  ul.innerHTML += todo;
};

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = todoForm.adds.value.trim();

  if (inputValue.length) {
    todoHandler(inputValue);
    todoForm.reset();
  }
});
const deleteTodo = ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
});

const filter = (searchValue) => {
  Array.from(ul.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(searchValue))
    .forEach((todo) => todo.classList.add("no-display"));

  Array.from(ul.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(searchValue))
    .forEach((todo) => todo.classList.remove("no-display"));
};

search.addEventListener("keyup", () => {
  const searchValue = search.value.trim().toLowerCase();
  filter(searchValue);
});
