const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorius text-content!';

const para = document.createElement('p');
para.textContent = 'Hey I\'m red!';
para.style.color = 'red';

const header3 = document.createElement('h3');
header3.textContent = 'I\'m a blue h3!'
header3.style.color = 'blue';

// Box with border and background with appended children (h1 and p)
const blackpinkBox = document.createElement('div');
blackpinkBox.style.cssText = 'background: pink; border-style: solid; border-color: black;'

const header1 = document.createElement('h1');
header1.textContent = 'I\'m in a div!'

const boxPara = document.createElement('p');
boxPara.textContent = 'ME TOO!';

blackpinkBox.appendChild(header1);
blackpinkBox.appendChild(boxPara);
container.appendChild(content);
container.appendChild(para);
container.appendChild(header3);
container.appendChild(blackpinkBox);

// Event listeners

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World!');

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello World!");
});

// Even listener with named functions!

function alertFunction () {
    alert('Hurray for Event Listeners w/ named functions!');
}

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function (e) {
    e.target.style.background = 'teal';
});