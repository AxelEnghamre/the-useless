// main js
// run index 0
const select = document.querySelector('select');
const main = document.querySelector('main');

// feeling object template
// {
//     feeling: '',
//     color: '',
// },

const feelings = [
  {
    feeling: 'nothing',
    color: 'transparent',
  },
  {
    feeling: 'angry',
    color: 'red',
  },
  {
    feeling: 'sad',
    color: 'black',
  },
  {
    feeling: 'happy',
    color: 'green',
  },
  {
    feeling: 'enjoyment',
    color: 'yellow',
  },
  {
    feeling: 'horrified',
    color: 'brown',
  },
  {
    feeling: 'challenged',
    color: 'linear-gradient(to right, red , yellow)',
  },
];

// event listeners
select.addEventListener('change', () => {
  // clear main
  main.innerHTML = '';

  // hydrate main with 100 outputs
  for (let index = 0; index < 100; index++) {
    output();
  }
});

let warning = false;

window.addEventListener('scroll', () => {
  const bottomOfWindow = window.scrollY + screen.height;
  const bottomOfMain = main.offsetTop + main.clientHeight;
  const offset = 50;

  // when bottom of the window is near bottom of the bottom of the main
  if (bottomOfWindow + offset >= bottomOfMain) {
    for (let index = 0; index < 100; index++) {
      output();
    }
  }

  // warn the user
  if (bottomOfWindow > 10000 && !warning) {
    alert('I will not be responsible for any crashes');
    warning = true;
  }
});
