var check = false ;
var x ;
var y ;
var sorted = 0 ;
var readed = false ;
var space = 0 ;
let arr = [] ;
let array = [] ;

const btn = document.querySelector('#inputfile')
const algo = document.getElementById('algorithm')
const sortBtn = document.getElementById('sort')
const newBtn = document.getElementById('new')
var h42 = document.getElementById("h42") ;

function input(max){
  while(!check){
        x = parseInt(prompt("Enter the number a "));
        if(Number.isInteger(x)){
            check = true ;
        }else{
            alert("Bhau needs valid numbers to process ") ;
        }
    }
    check = false ;
    while(!check){
        y = parseInt(prompt("Enter the number b "));
        if(Number.isInteger(x) && y <= max ){
            check = true ;
        }else if (y > max){
          alert("please enter the number that is in the range of array ");
        }
        else{
            alert("Bhau needs valid numbers to process ") ;
        }
    }

    if(x > y){
      check = false ;
      alert("b should be gretaer than a ") ;
      input() ;
    }

}

btn.addEventListener('change', function() {

  var fr=new FileReader();
  fr.onload=function(){
    // const newBtn = document.getElementById('new') ;
    arr = fr.result.split("\r\n");
    console.log(arr) ;
    console.log(arr.length);
    let i = 0 ;
    for(i = 0 ; i < arr.length ; i++ ){
      array[i] = parseInt(arr[i]) ;
      if(i == arr.length - 1){ 
        readed = true ;
        space = i+1 ;
        h42.innerHTML = space.toString();
        console.log(array)
        firstTable() ;
      }
    }
  }
  fr.readAsText(this.files[0]);

  })


function firstTable() {
  var t = document.getElementById('table') ;
    var table = '';
    table += '<tr>'
    for(let i = 0 ; i < array.length ; i++ ){
        table += '<td>' + array[i] + '</td>' ;
    }
    
    table += '</tr>' ;
    t.innerHTML = table ;
}

function secodTable(min , max){

    var table = '';
    table += '<tr>'
    for(let i = min ; i <= max; i++ ){
        table += '<td>' + 0 + '</td>' ;
    }
    
    table += '</tr>' ;
    console.log(table) ;
    console.log(min)
    console.log(max) ;

    var t = document.getElementById('table2') ;
    t.innerHTML = table ;
}

function thirdtable(){
    var table = '';
    table += '<tr>'
    for(let i = 0 ; i < 1 ; i++ ){
        table += '<td>' + "" + '</td>' ;
    }
    
    table += '</tr>' ;

    var t = document.getElementById('table3') ;
    t.innerHTML = table  ;
}


async function visualizationCounting(arr , max , min ){
//    sortBtn.disabled = true ;
    var counter = 0 ;
    var answer ;
    const counts = [];
    var t = document.getElementById('table2') ;
    var c = document.getElementById("h4") ;
    
    sorted = 2 ;
    c.innerHTML = "0 ms" ;

    // First populate the count object
    secodTable(min , max) ;
    
    for (let i = 0 ; i <= max  ; i++) {
        counts[i] = 0;
        space += 1 ;
        
      }
      h42.innerHTML = space.toString() ;
    console.log(counts.length) ;
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]] += 1;
        await new Promise((resolve) => {
            setTimeout(() => {
              resolve()
            } , 10)
          })
        
        console.log(counts[arr[i]]);
        t.rows[0].cells[arr[i] - min].innerHTML = counts[arr[i]] ;
        
        counter = counter + 1 
        c.innerHTML = counter.toString() + "  ms" ;
    }
    for (var i = min + 1  ; i <= max; ++i){
        counts[i] += counts[i - 1];
        console.log(counts[i]) ;
        t.rows[0].cells[i - min].innerHTML = counts[i] ;
        counter = counter + 1 
        c.innerHTML = counter.toString() + "  ms" ;
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          } , 0)
        })
    }
    answer = counts[y] - counts[x-1]
    
    var output = [];
    n = arr.length ;
    for(let i = 0 ; i < n ; i++){
      output[i] = 0 ;
      space += 1 ;
    }
    h42.innerHTML = space.toString();
    
    for (let i = n -1 ; i >= 0 ; i--) {
      console.log(arr[i]) ;
      console.log(output[counts[arr[i]]-1]) ;
      output[counts[array[i]] - 1] = arr[i];
    counts[arr[i]]--;
    t.rows[0].cells[i].innerHTML = counts[i] ;
    counter = counter + 1 
    c.innerHTML = counter.toString() + "  ms" ;
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      } , 10)
    })
    }
    t = document.getElementById('table3') ;
    for (var i = 0; i < n; ++i){
      arr[i] = output[i];

    //   await new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve()
    //     } , 100)
    //   })
    }t
    thirdtable() ;
    t.rows[0].cells[0].innerHTML = "the number of elements between " + x.toString() +  " and " + y.toString() + " is equal to " + answer.toString() ;

    

    console.log(arr) ;
    sorted = 1  ;
  sortBtn.disabled = false ;
  }

  newBtn.addEventListener('click', () => {
    window.location.reload()
  })

 

sortBtn.addEventListener('click', () => {

  if(readed){

    if(sorted === 0){
      btn.disabled = true ;
      input(Math.max(...array)) ;
      visualizationCounting(array , Math.max(...array) , Math.min(...array));
    }else if (sorted === 1) {
        alert("Output has already been calculated") ;
    }else if(sorted == 2 ){
      alert("please wait for Bhau to compute ") ;
    }
  }else{
    alert("please select a file ") ;
  }
    
})



