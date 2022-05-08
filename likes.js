var count=3
var countelement = document.querySelector("#count")

function add1(){
    count++
    countelement.innerText = count+  " like(s)"
    console.log(count)
}