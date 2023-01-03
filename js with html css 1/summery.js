const paragraphs = document.getElementsByTagName('p');
// console.log(paragraphs);
for (const p of paragraphs) {
    // console.log(p);
    p.style.backgroundColor = 'yellowGreen';
    p.style.color = 'white';
}

const blogs = document.getElementById('first-blog');
blogs.innerText = 'This is my first innerText i have ever changed.';
blogs.innerHTML = `
    <h2>This is a h2,hahahaha.</h2>
    <ul>
    <li>Inner 1</li>
    <li>Inner 2</li>
    <li>Inner 3</li>
    </ul>
`

const friends = document.getElementById('friends');
console.log(friends.children);
const fifth = friends.children[4];
console.log(fifth.innerText);
friends.removeChild(fifth);  // remove any child from any list
console.log(friends.innerText);

// create element
const friend = document.createElement('li'); // document ekta element create korbe list hishebe
friend.innerText= 'Friend-11';  // list er vitore kichu text add korbe
friends.appendChild(friend); // append hishebe child add korbe friends variable, mane jei id diye take name deya hoyeche