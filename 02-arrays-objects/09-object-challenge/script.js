const library = [
  {
    title: 'This is me',
    author: 'John Doe',
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
  {
    title: 'This is us',
    author: 'Jane Doe',
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
  {
    title: 'This is you',
    author: 'John Q. Public',
    status: {
      own: true,
      reading: false,
      read: false,
    }
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {title:firstBook } = library[0];


console.log(firstBook);

const libraryJson = JSON.stringify(library);

console.log(libraryJson);