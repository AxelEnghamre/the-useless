// hydrateSelect js
// run index 1
feelings.forEach((feeling, index) => {
  const option = document.createElement('option');
  option.setAttribute('value', index);
  option.textContent = feeling.feeling;
  select.append(option);
});
