let arr = [] ;
let array = [] ;
var sorted = 0 ;
var readed = false ;
var space = 0 ;

const btn = document.querySelector('#inputfile')
const algo = document.getElementById('algorithm')
const sortBtn = document.getElementById('sort')
const newBtn = document.getElementById('new')
var h42 = document.getElementById("h42") ;
var h2 = document.getElementById("h4") ;

h2.innerHTML = "0" ;
h42.innerHTML = "0" ;
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
        firstTable() ;
        space = i+1 ;
        h42.innerHTML = space.toString() ;
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
        console.log("jsdjkakjkldj") ;
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
    for(let i = 0 ; i < array.length ; i++ ){
        table += '<td>' + 0 + '</td>' ;
    }
    
    table += '</tr>' ;

    var t = document.getElementById('table3') ;
    t.innerHTML = table  ;
}


async function visualizationCounting(arr , max , min ){
//    sortBtn.disabled = true ;
    var counter = 0 ;
    const counts = [];
    sorted = 2 ;
    var t = document.getElementById('table2') ;
    h2.innerHTML = "0 ms" ;
    // First populate the count object
    secodTable(min , max) ;
    thirdtable() ;
    for (let i = min ; i <= max  ; i++) {
        counts[i] = 0;
        space += 1 ;
        h42.innerHTML = space.toString() ;
    }
    console.log(counts.length) ;
    for (let i = 0; i < arr.length; i++) {
        counts[arr[i]] += 1;
        t.rows[0].cells[arr[i] - min].innerHTML = counts[arr[i]] ;
        t.rows[0].cells[arr[i] - min].style.color = "yellow" ;
        await new Promise((resolve) => {
            setTimeout(() => {
              resolve()
            } , 200)
          })
          console.log(counts[arr[i]]);
          t.rows[0].cells[arr[i] - min].style.color = "white" ;
        counter = counter + 1 
        h2.innerHTML = counter.toString() + "  ms" ;
    }
    for (var i = min + 1  ; i <= max; ++i){
        counts[i] += counts[i - 1];
        console.log(counts[i]) ;
        t.rows[0].cells[i - min].innerHTML = counts[i] ;
        t.rows[0].cells[i - min].style.color = "blue" ;
        counter = counter + 1 
        h2.innerHTML = counter.toString() + "  ms" ;
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          } , 100)
        })
        t.rows[0].cells[i - min].style.color = "white" ;
    }

    var t1 = document.getElementById('table3') ;
    var output = [];
    n = arr.length ;
    for(let i = 0 ; i < n ; i++){
      output[i] = 0 ;
      space += 1 ;
      h42.innerHTML = space.toString() ;
    }
    
    for (let i = n -1 ; i >= 0 ; i--) {
    output[counts[array[i]] - 1] = arr[i];
    counts[arr[i]]--;
    t.rows[0].cells[arr[i] - min].innerHTML = counts[arr[i]]
    counter = counter + 1 
    h2.innerHTML = counter.toString() + "  ms" ;
    t.rows[0].cells[arr[i] - min].style.color = "red" ;
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      } , 100)
    })
    t.rows[0].cells[arr[i] - min].style.color = "white" ;
    }

    for (var i = 0; i < n; ++i){
      arr[i] = output[i];
      t1.rows[0].cells[i].innerHTML = arr[i];
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        } , 100)
      })

    }



    console.log(counter) ;
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
      visualizationCounting(array , Math.max(...array) , Math.min(...array));
    }else if (sorted === 1) {
        alert("already sorted") ;
    }else if(sorted == 2 ){
      alert("please wait for the sort to complete") ;
    }
  }else{
    alert("please select a file ") ;
  }
    
})
