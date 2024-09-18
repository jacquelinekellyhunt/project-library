const books = [
  {
    title: "Journeying with Faith",
    author: "Sophia Gracewood",
    year: 1925,
    genre: "Fiction",
    rating: 4.2,
    description:
      "A beautifully crafted journal to inspire your spiritual journey, guiding you through daily reflections and prayers to deepen your faith, one moment of devotion at a time.",
    image: "./books-images/book1.jpg",
  },
  {
    title: "The Invisible Man",
    author: "Olivia Wilson",
    year: 1925,
    genre: "Fiction",
    rating: 2.8,
    description:
      "A haunting tale of a man lost in the shadows of his own existence, struggling with the power of invisibility and the price of being unseen in a world that demands recognition.",
    image: "./books-images/book2.jpg",
  },
  {
    title: "Art History",
    author: "Lars Peeters",
    year: 1925,
    genre: "Fiction",
    rating: 4.0,
    description:
      "A comprehensive exploration of the timeless masterpieces that shaped the course of art, examining the cultural and historical significance of iconic works from antiquity to the modern era.",
    image: "./books-images/book3.jpg",
  },
  {
    title: "Modish",
    author: "Harper Russo",
    year: 2024,
    genre: "Fiction",
    rating: 2.5,
    description:
      "An avant-garde exploration of modern fashion, design, and culture, capturing the essence of contemporary style through striking visuals and thought-provoking commentary on the trends that shape our world.",
    image: "./books-images/book4.jpg",
  },
  {
    title: "Eyes",
    author: "Drew Feig",
    year: 1925,
    genre: "Fiction",
    rating: 3.5,
    description:
      "A captivating exploration of perception, identity, and the hidden truths we choose to see or ignore, where the lines between reality and illusion blur in a world constantly watched.",
    image: "./books-images/book5.jpg",
  },
  {
    title: "Memory Book",
    author: "Alex Renfield",
    year: 2004,
    genre: "Fiction",
    rating: 4.3,
    description:
      "A heartfelt memory book designed to capture and preserve the most cherished moments of your life, filled with personal reflections and meaningful snapshots that tell your unique story.",
    image: "./books-images/book6.jpg",
  },
  {
    title: "Venus",
    author: "Margarita Perez",
    year: 2021,
    genre: "Fiction",
    rating: 4.8,
    description:
      "A mesmerizing journey to the mysterious planet of Venus, where love, beauty, and the unknown intertwine, revealing a world both enchanting and perilous in the depths of the cosmos.",
    image: "./books-images/book7.jpg",
  },
  {
    title: "The Power of Positive Action",
    author: "Drew Feig",
    year: 2000,
    genre: "Fiction",
    rating: 5.0,
    description:
      "A transformative guide to unlocking your potential and breaking through barriers, it empowers you with actionable strategies to harness the power of positive thinking and achieve your dreams.",
    image: "./books-images/book8.jpg",
  },
  {
    title: "Classic Painting",
    author: "Donna Stroupe",
    year: 1999,
    genre: "Fiction",
    rating: 4.4,
    description:
      "A captivating exploration of timeless masterpieces from the Renaissance to the Baroque, it delves into the rich history and techniques of the greatest artists who shaped Western art.",
    image: "./books-images/book9.jpg",
  },
  {
    title: "Puzzles",
    author: "Harper Russo",
    year: 2005,
    genre: "Fiction",
    rating: 4.2,
    description:
      "A gripping exploration of identity, relationships, and the fragmented nature of human experience, it pieces together the complexities of life, offering a thought-provoking narrative that challenges how we see ourselves and others.",
    image: "./books-images/book10.jpg",
  },

  {
    title: "Classic Literature",
    author: "Shawn Garcia",
    year: 1950,
    genre: "Fiction",
    rating: 4.6,
    description:
      "An engaging collection of timeless literary masterpieces, it revisits the most influential works that have shaped the world of storytelling, offering deep insights into the human experience through the lens of history’s greatest writers.",
    image: "./books-images/book11.jpg",
  },
  {
    title: "The Eye",
    author: "Morgan Maxwell",
    year: 2021,
    genre: "Science Fiction",
    rating: 4.4,
    description:
      "A thought-provoking journey into the depths of consciousness, it invites you to unlock the hidden potential of your mind and explore the mysteries that shape your perception of reality.",
    image: "./books-images/book12.jpg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    year: 1988,
    genre: "Fiction",
    rating: 4.25,
    description:
      "A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.",
    image: "./books-images/alchemist.jpg",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    year: 2008,
    genre: "Science Fiction",
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: "./books-images/the-hunger-games-hunger-games.jpg",
  },
  {
    title: "The Girl with...",
    author: "Stieg Larsson",
    year: 2005,
    genre: "Mystery",
    rating: 4.1,
    description:
      "A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.",
    image: "./books-images/the-girl-with-the-dragon-tattoo.jpg",
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    year: 2006,
    genre: "Dystopian",
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: "./books-images/road.jpg",
  },
  {
    title: "Little Women",
    author: "Louisa May Alcott",
    year: 1868,
    genre: "Fiction",
    rating: 4.65,
    description:
      "With their father away at the Civil War,times are hard for the March sisters - Meg, Jo,Beth and Amy - and their mother, Marmee.",
    image: "./books-images/little-women.jpg",
  },
  {
    title: "The Giver",
    author: "Lois Lowry",
    year: 1993,
    genre: "Dystopian",
    rating: 4.12,
    description:
      "A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.",
    image: "./books-images/the-giver.jpg",
  }
];

//---------------------------------------------------------------------------------
// Function to display books in the HTML
// Function to display books in the HTML
function displayBooks(books) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; // Clear existing content
  books.forEach((book) => {
    const bookItem = `
      <div class="book-item">
        <img src="${book.image}" alt="${book.title}" />
        <p>${book.title}<br /><small>${book.author}</small></p>
        <p>${book.year}</p>
        <p>Rating: ${book.rating}</p>
      </div>
    `;
    bookList.innerHTML += bookItem;
  });
}

const sortBooks = (sortOption) => {
  let sortedBooks = [...books]; // Create a copy of the books array

  if (sortOption === "titleAZ") {
    sortedBooks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortOption === "titleZA") {
    sortedBooks.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortOption === "yearNewest") {
    sortedBooks.sort((a, b) => b.year - a.year);
  } else if (sortOption === "yearOldest") {
    sortedBooks.sort((a, b) => a.year - b.year);
  } else if (sortOption === "ratingHighest") {
    sortedBooks.sort((a, b) => b.rating - a.rating);
  } else if (sortOption === "ratingLowest") {
    sortedBooks.sort((a, b) => a.rating - b.rating);
  }

  // Display the sorted books
  displayBooks(sortedBooks);
};

const toggleDropdown = () => {
  const dropdown = document.getElementById("sort-dropdown");

  if (dropdown.style.display === "none" || dropdown.style.display === "") {
    dropdown.style.display = "block"; // Show the dropdown
  } else {
    dropdown.style.display = "none"; // Hide the dropdown
  }
};

// Set up event listeners
document.addEventListener("DOMContentLoaded", () => {
  const sortButton = document.getElementById("sort-button");
  const sortDropdown = document.getElementById("sort-dropdown");

  // Show/hide the dropdown on button click
  sortButton.addEventListener("click", toggleDropdown);

  // Listen for changes in the dropdown
  sortDropdown.addEventListener("change", () => {
    const selectedOption = sortDropdown.value;
    sortBooks(selectedOption); // Sort and display books
    sortDropdown.style.display = "none"; // Hide the dropdown after selection
  });

  // Display the initial unsorted list of books
  displayBooks(books);
});

//Fanny-------------------------------------------------------------------------
// Function for the genre filter
const filterByGenre = (bookList, genre) => {
  return bookList.filter((book) => book.genre === genre);
};

// Getting the genre button and dropdown from HTML
const genreButton = document.getElementById("genre-button");
const genreDropdown = document.getElementById("filter-dropdown"); // Ensure this ID matches your HTML

// Function to toggle the visibility of the dropdown

// Event listener for the "Genre" button to toggle dropdown

//------------------------------

// Function to filter books by title based on user input
function searchBooksByTitle(searchTerm) {
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Hide the hero section, the bestsellers title adn the buttons when searched
  document.querySelector('.hero').style.display = 'none';
  document.querySelector('.bestsellers-header h2').style.display = 'none';
  document.querySelector('.sort-btn').style.display = 'none';
  document.querySelector('.genre-btn').style.display = 'none';


  if (filteredBooks.length === 0) {
    // Clear the book list and display a message while keeping the header
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = `
      <div style="display: flex; justify-content: center; align-items: center; height: 300px; width: 100%; background-color: white;">
        <p>No books with such search term</p>
      </div>
    `;
  } else {
    // Display filtered books in the bestsellers list
    displayBooks(filteredBooks);
  }
  
}

// Adding event listener for the search button click
document.querySelector('.search-button').addEventListener('click', () => {
  const searchInput = document.querySelector('.search-box input').value;
  searchBooksByTitle(searchInput);
});

// Function to display books in the HTML
function displayBooks(books) {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; // Clear existing content
  books.forEach((book) => {
    const bookItem = `
      <div class="book-item">
        <img src="${book.image}" alt="${book.title}" />
        <p>${book.title}<br /><small>${book.author}</small></p>
        <p>${book.year}</p>
        <p>Rating: ${book.rating}</p>
      </div>
    `;
    bookList.innerHTML += bookItem;
  });
}

