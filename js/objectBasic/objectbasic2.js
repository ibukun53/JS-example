const bandInfo = {
  name: ['miracle band'],
  nationality: ['Nigeria'],
  genre: ['R&B'],
  members: 50,
  formed: ['5yrs'],
  split: 2,
  albums: {
    name: ['good news', 'bad news'],
    released: [2022],
  },
  bio() {
    `${this.name} is estabished in ${this.nationality} about  ${this.formed} ago with ${this.members} members with ${this.genre} style,the first albums released in ${this.albums.released} with title  ${this.albums.name}.`();
  },
};

// Don't edit the code below here!

const section = document.querySelector('section');
const para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);
