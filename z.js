function debounce() {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => console.log("API call"), 500);
  }
}
const onSearch = debounce();
onSearch()
onSearch()
onSearch()