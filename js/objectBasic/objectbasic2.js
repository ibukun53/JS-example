let bandInfo;

// Put your code here
const info = {
  name: 'Miracle band',
  nationality: 'Nigeria',
  genre: 'R&B',
  members: 50,
  formed: '5yrs',
  split: 2,
  albums: {
    firstname: ['good news'],
    firstreleased: 2022,
    secondname: ['bad news'],
    secondreleased: 2021,
  },
};
// eslint-disable-next-line prefer-const
bandInfo = `${info.name} is estabished in ${info.nationality} about 
   ${info.formed} ago with ${info.members} members with ${info.genre} style,
   the first albums released in ${info.albums.firstreleased} with title  ${info.albums.firstname}.`;

const section = document.querySelector('section');
// Don't edit the code below here!

const para1 = document.createElement('p');
para1.textContent = bandInfo;
section.appendChild(para1);