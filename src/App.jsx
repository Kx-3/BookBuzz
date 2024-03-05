import { useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import { useEffect } from 'react'

function App() {
  const [search, setSearch] = useState('')
  const [googleBooks, setGoogleBooks] = useState(null);
  const [nyTimesBooks, setNyTimesBooks] = useState(null);
  const G_KEY = 'AIzaSyAlo2RyJuMgWOZ6BoNSUm4GwbJ6fiJ-Jpw'
  const TIMES_KEY = 'MENH0JaFr7qfGXhh4KumJ4voGuddZQeo'
  

  const handleInput = (e) => {
    setSearch(e.target.value)
  }
  const handleSearch = (e) => {
    e.preventDefault()
    
  }

  useEffect(() => {
    // Fetch data from Google Books API
    const googleUrl = `https://www.googleapis.com/books/v1/volumes?q=${search}+intitle:${search}&key=${G_KEY}`;
    const fetchGoogleBooks = async () => {
      const response = await fetch(googleUrl);
      const data = await response.json()
      setGoogleBooks(data);
    };
    fetchGoogleBooks();

    // Fetch data from New York Times Books API
    const timesUrl = `https://api.nytimes.com/svc/books/v3/lists/current/trade-fiction-paperback.json?api-key=${TIMES_KEY}`;
    const fetchNyTimesBooks = async () => {
      const response = await fetch(timesUrl);
      const data = await response.json()
      setNyTimesBooks(data);
    };
    fetchNyTimesBooks();
  }, [search, G_KEY, TIMES_KEY]);

  return (
    <>
      <form onSubmit={handleSearch}>
        <label htmlFor="search-input"></label>
        <input type="text" id="search-input" placeholder='Search' value={search} onChange={handleInput} />
        <button type="submit">Submit</button>
      </form>
      <div>
        {
          nyTimesBooks && nyTimesBooks.results.books.map((book) => {
            return (
              <div>
                <div>
                  <img src={book.book_image} alt="" />
                </div>
                <h2>{book.title}</h2>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
