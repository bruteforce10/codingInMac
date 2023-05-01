const bookEvent = new Event("render-book");
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#inputBook");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputTitle = document.querySelector("#inputBookTitle").value;
    const inputAuthor = document.querySelector("#inputBookAuthor").value;
    const inputYear = document.querySelector("#inputBookYear").value;
    const generateID = generateId();
    const inputComplete = document.querySelector(
      "#inputBookIsComplete"
    ).checked;

    const bookObject = generateBookObject(
      generateID,
      inputTitle,
      inputAuthor,
      inputYear,
      inputComplete
    );
    dataBooks.push(bookObject);
    saveData();
    document.dispatchEvent(bookEvent);
  });

  function generateId() {
    return +new Date();
  }

  function generateBookObject(id, title, author, year, complete) {
    return {
      id,
      title,
      author,
      year,
      complete,
    };
  }
  loadDataFromStorage();
});

const STORAGE_KEY = "TODO_APPS";

const dataBooks = [];

document.addEventListener("render-book", function () {
  const searchBook = document.querySelector("#searchBook");
  searchBook.addEventListener("submit", function (e) {
    e.preventDefault();
    const searchInput = document.querySelector("#searchBookTitle");
    const resultInput = searchInput.value.toUpperCase();
    if (resultInput === "") {
      inCompleteBook.innerHTML = "";
      completeBook.innerHTML = "";
      for (const bookItem of dataBooks) {
        const bookElement = makeBook(bookItem);
        if (bookItem.complete === false) {
          inCompleteBook.append(bookElement);
        } else {
          completeBook.append(bookElement);
        }
      }
    } else {
      for (let i = 0; i < dataBooks.length; i++) {
        let bookName = dataBooks[i].title.toUpperCase();
        if (bookName.indexOf(resultInput) > -1) {
          const bookRender = makeBook(dataBooks[i]);
          inCompleteBook.innerHTML = "";
          completeBook.innerHTML = "";
          if (dataBooks[i].complete == false) {
            inCompleteBook.append(bookRender);
          } else {
            completeBook.append(bookRender);
          }
        }
      }
    }
  });
  const inCompleteBook = document.querySelector("#incompleteBookshelfList");
  inCompleteBook.innerHTML = "";
  const completeBook = document.querySelector("#completeBookshelfList");
  completeBook.innerHTML = "";

  for (const bookItem of dataBooks) {
    const bookElement = makeBook(bookItem);
    if (bookItem.complete === false) {
      inCompleteBook.append(bookElement);
    } else {
      completeBook.append(bookElement);
    }
  }
});

function makeBook(bookObject) {
  const textTitle = document.createElement("h3");
  textTitle.innerHTML = bookObject.title;
  const textPenulis = document.createElement("p");
  textPenulis.innerHTML = bookObject.author;
  const textYear = document.createElement("p");
  textYear.innerHTML = bookObject.year;

  const action = document.createElement("div");
  action.classList.add("action");
  const buttonDone = document.createElement("button");
  buttonDone.classList.add("green");
  let textButtonDone = "";
  if (bookObject.complete === false) {
    textButtonDone = "Selesai dibaca";
  } else {
    textButtonDone = "Belum Selesai dibaca";
  }
  buttonDone.innerText = textButtonDone;
  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("red");
  buttonDelete.innerText = "Hapus Buku";
  action.append(buttonDone, buttonDelete);

  const article = document.createElement("article");
  article.classList.add("book_item");
  article.append(textTitle, textPenulis, textYear, action);

  buttonDone.addEventListener("click", function () {
    if (!bookObject.complete) {
      bookObject.complete = true;
    } else {
      bookObject.complete = false;
    }
    document.dispatchEvent(bookEvent);
    saveData();
  });

  buttonDelete.addEventListener("click", function () {
    const bookTarget = findBookIndex(bookObject.id);
    dataBooks.splice(bookTarget, 1);
    document.dispatchEvent(bookEvent);
    saveData();
  });

  function findBookIndex(bookId) {
    for (const index in dataBooks) {
      if (dataBooks[index].id == bookId) {
        return index;
      }
    }
  }

  return article;
}

function saveData() {
  const parsed = JSON.stringify(dataBooks);
  localStorage.setItem(STORAGE_KEY, parsed);
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const book of data) {
      dataBooks.push(book);
    }
  }
  document.dispatchEvent(bookEvent);
}
