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

window.addEventListener('scroll', () => {
  const bottomOfWindow = window.screenY + screen.height;
  const bottomOfMain = main.offsetTop + main.clientHeight;

  // when bottom of the window is near bottom of the bottom of the main
  if (bottomOfWindow >= bottomOfMain) {
    output();
  }
});
