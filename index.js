// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name)
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    let temporarycatname = cats.slice()
    temporarycatname.push(name)
    return temporarycatname

}
function prependCat(name){
    let temporarycatname = cats.slice()
    temporarycatname.unshift(name)
    return temporarycatname
}
function removeLastCat(){
  let temporarycatname = cats.slice() 
    temporarycatname.pop()
    return temporarycatname
}
function removeFirstCat(){
    let temporarycatname = cats.slice()
    temporarycatname.shift()
    return temporarycatname
}