/**
 * creates and appends a name to the document;
 */
const addName = () => {
    const name = 'Saviour Eking';
    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'name');
    h1.innerText = name;
    document.body.appendChild(h1);
}

const addUl = () => {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');

    li.innerText = 'I am practicing element manipulation using js';
    li2.innerText = 'I am proud of how far i have come with AAOpen, and I hope to go farther!, so help me GOD!!!';
    li3.innerText = 'I love dogs, but cats are my faves';
    li4.innerText = 'Ali the lebanese is a motivation to me each day';

    ul.appendChild(li);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);

    document.body.appendChild(ul)
}

const addUlRefactored = () => {
    const createLi = (str) => {
        // const li = document.createElement('li'); // method 1
        // li.innerText = str;                      // method 1
        // return li;                               // mehtod 1
        return `<li>${str}</li>`;                   // method 2
    }
    const ul = document.createElement('ul');

    const contents = [
        'I am practicing element manipulation using js',
        'I am proud of how far i have come with AAOpen, and I hope to go farther!, so help me GOD!!!',
        'I love dogs, but cats are my faves',
        'Ali the lebanese is a motivation to me each day'
    ];

    contents.forEach(textContent => {
        // ul.appendChild(createLi(textContent)); // method 1
        ul.innerHTML += createLi(textContent);    // method 2
    });

    document.body.appendChild(ul);
}

const addSection = () => {
    const section = document.createElement('section');
    section.setAttribute('class', 'section')
    document.body.appendChild(section);
}

const addClasses = () => {
    const h1 = document.getElementById('name');
    const ul = document.getElementsByTagName('ul')[0];
    const li = document.querySelectorAll('ul li');

    h1.setAttribute('class', 'name');
    ul.setAttribute('class', 'my-details');

    li.forEach(li => li.setAttribute('class', 'detail'));
}

const addDate = () => {
    // const dateSection = document.createElement('section');

    const ul = document.querySelector('ul.my-details');
    const li = document.createElement('li');
    li.setAttribute('class', 'detail');
    li.innerText = `fetching ...`;

    setInterval(() => {
        const date = new Date();
        li.innerText = `I live in Lagos, nigeria and it's ${date} here!`;
    }, 1000);

    ul.append(li);
}

const addImage = () => {
    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('id', 'img-div');
    const img = document.createElement('img');
    img.setAttribute('src', 'assets/pexels-collis-3170635.jpg');

    imgDiv.appendChild(img); // to use background image, comment this out and check css file

    const name = document.getElementById('name');
    name.after(imgDiv)
}

const useOtherElementMethods = () => {
    /**
     * use outerHtml to replace profile image
     */
    const useOuterHtml = () => {
        const img = document.querySelector('div#img-div img');
        img.outerHTML = '<img src="./assets/c051b14a-39f9-4b3a-a561-668461053230.png">';
    }
    useOuterHtml();

    /**
     * use classList API to add/remove classes
     * 
     */
    const useClassList = () => {
        const body = document.body;
        // (body.classList.contains('light-mode') ? body.classList.add('dark-mode') : body.classList.add('light-mode'))();
        if (body.classList.length === 0) {
            body.classList.add('light-mode')
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        }
    }
    useClassList();

    /**
     * use Element.closest to select element on the page
     * writes 'here we go' the first ancestor to match li
     */
    const useElementClosest = () => {
        const element = document.getElementsByClassName('detail')[2];
        const closest = element.closest('ul')
        const h1 = document.createElement('h1');
        h1.innerText = 'here we go'
        closest.appendChild(h1)
    }
    useElementClosest();

    //  getElementbyClassName and getElementsByTagName are already second nature and i don't have a usecase for them right now
}

const makeCountDownClock = () => {
    const convertSeconds = (milliSeconds) => {
        const days = Math.floor(milliSeconds / 86400000);
        const hours = Math.floor(milliSeconds / 3600000 % 24); // Use % 24 to keep hours within 0-23
        const mins = Math.floor(milliSeconds / 60000 % 60);
        const secs = Math.floor(milliSeconds / 1000 % 60);
        const milliSecs = milliSeconds % 1000;
      
        return { days, hours, mins, secs, milliSecs };
      };
      
    console.log(convertSeconds(86400054))

    const section = document.createElement('section');
    section.setAttribute('class', 'count-down');
    section.setAttribute('id', 'count-down');

    const birthDay = new Date("2024-12-25T02:24:00"); // This is standardized and will work reliably
    setInterval(() => {
        const date = new Date();
        const { days, hours, mins, secs, milliSecs } = convertSeconds(birthDay.getTime() - date.getTime());
        section.innerText = `${days} days, ${hours} hours, ${mins} mins, ${secs} seconds, ${milliSecs} milliseconds until birthday`
    }, 1000)

    section.innerText = 'fetching...';
    document.body.appendChild(section);
}

const init = () => {
    /* phase 1A */
    addName();
    // addUl();
    /* phase 1B */
    addUlRefactored();
    // addSection();
    /* phase 2 */
    addClasses();
    /* phase 3 */
    addDate();

    /* Bonus 1 */
    addImage();

    /* Bonus 2 */
    useOtherElementMethods();

    /* Bonus 3 */
    makeCountDownClock();
}

window.onload = init;
