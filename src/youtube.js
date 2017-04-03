const search = (query) => {
  const form = document.querySelector('#masthead-search');
  const queryInput = form.querySelector('input');

  queryInput.value = query;
  form.submit();
};

const watch = (number) => {
  const searchResults = document.querySelectorAll(".yt-uix-tile-link");
  const num = Number(number);

  if(!isNaN(num) && searchResults.length >= num) {
    searchResults[num - 1].click();
  }
};

module.exports = {
  search,
  watch,
}
