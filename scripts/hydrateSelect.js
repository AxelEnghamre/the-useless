// hydrateSelect js
// run index 1
feelings.forEach((feeling) => {
  const option = document.createElement('option');
  option.setAttribute('value', feeling.feeling);
  option.textContent = feeling.feeling;
  select.append(option);
});
