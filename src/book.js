function createTitle(tital) {
  return `The ${tital}`
}
function buildMainCharacter (name,age,pronouns){
var mainCharacter = {
  name:name,
  age:age,
  pronouns:pronouns
}
return mainCharacter
}
function saveReview(info, review){
  var hasItem = false
  for (var i = 0;i < review.length; ++i){
    if (info === review[i]) {
      hasItem = true
    }
  }
  if (!hasItem) {
    review.push(info)
  }
return review
}
function calculatePageCount (bookTitle){
  return bookTitle.length * 20

}
function writeBook (title,mainCharacter,genre) {
  var book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: calculatePageCount(title),
    genre: genre

  }
  return book
}
function editBook (book){
  book.pageCount = book.pageCount * .75
  return book
}
module.exports = {
  createTitle,
   buildMainCharacter,
  saveReview,
   calculatePageCount,
   writeBook,
   editBook
}