const myArray = ["Table", "Chairs", "Couch"];

myArray.forEach(item => {
  for (let i = 0; i < item.length; i++) {
    console.log(item[i]);
  }
});