let container = document.getElementById("root");
let title = document.getElementById("title-input");
let button = document.getElementById("add-button");
let content = document.getElementById("content-input");
let select = document.getElementById("select-cat");
let filter = document.getElementById("filter-cat");

button.addEventListener("click", function () {
  if (title.value.trim() === "" || content.value.trim() === "") {
    alert("Title and Content cannot be empty!");
    return;
  }

  let note = document.createElement("div");
  note.classList.add("child");
  note.setAttribute("data-category", select.value);

  note.innerHTML = `
        <p style="text-align: center">-: Note :-</p>
        <h2>Title: ${title.value}</h2>
        <h2>Content: ${content.value}</h2>
        <h2>Category: ${select.value}</h2>
    `;

  container.appendChild(note);


  title.value = "";
  content.value = "";
  select.value = "work"; 
});

filter.addEventListener("change", function () {
  let selectedCategory = filter.value;
  let notes = document.querySelectorAll(".child");

  notes.forEach((note) => {
    if (
      selectedCategory === "all" ||
      note.getAttribute("data-category") === selectedCategory
    ) {
      note.style.display = "block";
    } else {
      note.style.display = "none";
    }
  });
});
