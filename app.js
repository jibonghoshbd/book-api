// load search book 
const searchBook = () => {
    const searchFiled = document.getElementById('input-filed')
    const searchText = searchFiled.value;
    // clear search filed 
    searchFiled.value = '';
    // fetch url 
    const url = `https://openlibrary.org/search.json?q=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayBook(data.docs))
}
// display book
const displayBook = (books) => {
    const bookLength = books.length;
    const searchMessage = document.getElementById('search-message');
    searchMessage.innerHTML = `
    <h1 class="bg-secondary rounded-pill p-2">Your Search Result: ${bookLength}</h1>`
    const showBook = document.getElementById('show-book')
    // prevue content clear  
    showBook.textContent = '';
    // error message 
    const errorMessage = document.getElementById('error-message')
    if (books.length === 0) {
        errorMessage.innerHTML = `
        <h1 class="bg-danger rounded-pill p-2">Opp No!!! Enter Your Valid Book Name!</h1>
        `;
    } else {
        errorMessage.innerHTML = '';
    }
    // forEach of books 
    books.forEach(book => {
        // show display content 
        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
        <div class="col">
            <div class="card">
                <img src="https://covers.openlibrary.org/b/id/${book.cover_i ? book.cover_i : ''}-M.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title fs-4">${book.title}</h5>
                    <p class="fs-5">Author Name: ${book.author_name}</p>
                    <p class="fs-5">Frirs Publis: ${book.first_publish_year}</p>
                    <p class="card-text">Publisher: ${book.publisher}</p>
                </div>
            </div>
         </div>
     `
        showBook.appendChild(div);
    })
}