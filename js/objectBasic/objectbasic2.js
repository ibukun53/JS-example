let bandInfo;

// Put your code here
const info = {
  name: ['Miracle band'],
  nationality: ['Nigeria'],
  genre: ['R&B'],
  members: [50],
  formed: ['5yrs'],
  split: [2],
  albums: {
    name: ['good news', 'bad news'],
    released: [2022],
  },
};
// eslint-disable-next-line prefer-const
bandInfo = `${info.name} is estabished in ${info.nationality} about 
   ${info.formed} ago with ${info.members} members with ${info.genre} style,
   the first albums released in ${info.albums.released} with title  ${info.albums.name}.`;

const section = document.querySelector('section');
// Don't edit the code below here!

const para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);