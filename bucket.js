let arr = [] ;
let array = [] ;
var readed = false ;
var sorted = 0 ;
var counter = 0 ;
var t4 = document.getElementById('h4') ;
var t42 = document.getElementById('h42') ;

t4.innerHTML = "0 ms";
t42.innerHTML = "0"
const btn = document.querySelector('#inputfile')
const algo = document.getElementById('algorithm')
const sortBtn = document.getElementById('sort')
const newBtn = document.getElementById('new')

btn.addEventListener('change', function() {

  var fr=new FileReader();
  fr.onload=function(){
    // const newBtn = document.getElementById('new') ;
    arr = fr.result.split("\r\n");

    let i = 0 ;
    for(i = 0 ; i < arr.length ; i++ ){
      array[i] = parseFloat(arr[i]) ;
      if(i == arr.length - 1){ 
       // createTable() ;
       t42.innerHTML = (i+1).toString() ;
       var flag = true ;
       for(let j = 0 ; j < array.length ; j++ ){
        if(typeof array[i] == 'number'){
            if(Number.isInteger(array[i]) || (arr[i] < 0 && array[i] >=1 ) ){
                flag = false ;
                break ;
            }
        }else{
            flag = false ;
            break ; 
        }
        
       }

       if(!flag){
            alert("Please Select the that has only number 0 to 1 (exclusive)") ;
            window.location.reload() ;
       }
       else{
            readed = true ;
            firstTable() ;
       }
       
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

    for(var r = 0 ; r < 10 ; r++ ){
        
    }

}



async function bucketSort(arr,n)
{
    if (n <= 0)
            return;
    sorted = 2 ;
    btn.disabled = true ;
        // 1) Create n empty buckets       
        let buckets = new Array(n);
        let tab = [] ;
        for (let r = 0; r < 10 ; r++)
        {
            buckets[r] = [];
            tab[r] = 1 ;
            var x = document.getElementById('table2').insertRow(r) ;
            var y = x.insertCell(0);
            await new Promise((resolve) => {
                setTimeout(() => {
                  resolve()
                }, 500)
              })
            y.innerHTML = r.toString() ;

        }
        let space  = array.length ;
        // 2) Put array elements in different buckets
        for (let i = 0; i < n; i++) {
            let idx = arr[i] * 10;
            idx = parseInt(idx) ;
            buckets[idx].push(arr[i]);
            space = space + 1;
            counter += 1 ;

            var t = document.getElementById('table2') ;
            var y = t.rows[idx].insertCell(tab[idx]) ;

            await new Promise((resolve) => {
                setTimeout(() => {
                  resolve()
                }, 500)
              })
            t42.innerHTML = space.toString();
            t4.innerHTML = counter.toString();
            y.innerHTML = arr[i].toString() ;
            tab[idx]++ ;
        }
   
        // 3) Sort individual buckets
        for(let k = 0 ; k < 10 ; k++) {
            var b = buckets[k] ;
            console.log(b.length) ;
            // do an insertion sort on the bucket
            for (let i = 1; i < b.length; i++) {

                const key = b[i];
                var t = document.getElementById('table2') ;
                let j = i - 1;
                while (j >= 0 && b[j] > key) {
                    
                    b[j + 1] = b[j];
                    t.rows[k].cells[j+2].innerHTML = b[j].toString() ;
                    await new Promise((resolve) => {
                        setTimeout(() => {
                          resolve()
                        }, 500)
                      });
                    j--;
                    counter += 1 ;
                    t4.innerHTML = counter.toString();
                }
                
                b[j + 1] = key;
                t.rows[k].cells[j+2].innerHTML = key.toString() ;
                await new Promise((resolve) => {
                    setTimeout(() => {
                      resolve()
                    }, 500)
                  });
                  counter += 1 ;
                  t4.innerHTML = counter.toString();
                
            }
        }
  
        // 4) Concatenate all buckets into arr[]
        let index = 0;
        for (let i = 0; i < 10 ; i++) {
            for (let j = 0; j < buckets[i].length; j++) {
                arr[index++] = buckets[i][j] ;
              }
        }

        for(let i = 0 ; i < n ; i++ ){
            var t = document.getElementById('table') ;
            t.rows[0].cells[i].innerHTML = arr[i].toString() ;
            await new Promise((resolve) => {
                setTimeout(() => {
                  resolve()
                }, 500)
                
              });
              counter += 1 ;
              t4.innerHTML = counter.toString() + " ms" ;
        }
console.log(arr) ;
        sorted = 1 ;

    }
function createTable(){
    firstTable()
    secodTable();
  //colo()
    //var ta = document.getElementById('table2') ;
    
    
}


  newBtn.addEventListener('click', () => {
    window.location.reload()
  })

 

sortBtn.addEventListener('click', () => {
    if(readed){

    if(sorted === 0){ 
      btn.disabled = true ;
      bucketSort(array ,array.length);
    }else if(sorted === 1){
        alert("already sorted") ;
    }else if(sorted === 2){
        alert("please wait for the array to sort ") ;
    }
}else{
    alert("please select a file ") ;
}    
})

