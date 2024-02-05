let K =  5
let array = []
let sorted = 0
let counter = 0 ;
let arr ;
var readed = false ;

const sortBtn = document.getElementById('sort')
const newBtn = document.getElementById('new')
const sizebtn = document.getElementById('size')

var count= document.getElementById("h4");


async function limited_quicksort(arr , p, r, treshold) {
    console.log("start limited");
    if (r - p > treshold) {
        console.log("in limited") ;
        let q = await partition(arr, p, r);
        await limited_quicksort(arr, p, q, treshold);
        await limited_quicksort(arr , q + 1, r, treshold);
    }
    console.log("end of limit") ;

  }


async function partition(arr, p, r) {
  clearVisual() ;  
  console.log("partitioning") ;
    let x, i, j, tmp;

    x = arr[r - 1];
    i = p;

    for (j = p; j < r - 1; j++) {
        if (arr[j] <= x) {
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
        }
        counter = counter + 1; 
        count.innerHTML = counter.toString();

        createVisual(arr , j  , i);
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          }, 100)
        })
        clearVisual()
    
      }
    tmp = arr[i];
    arr[i] = arr[r - 1];
    arr[r - 1] = tmp;

    createVisual(arr , p, i, r)
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 100)
    })
    clearVisual()
  console.log("end partition") ;
  createVisual(array) ;
    return i;
}

async function insertion_sort(arr , p, r) {
  clearVisual() ;
    let i, j, key;
    console.log("insertion sort");
    for (j = p + 1; j < r; j++) {
        key = arr[j];
        for (i = j - 1; i >= p && arr[i] > key; i--) {
            arr[i + 1] = arr[i];
            counter += 1 ;
            count.innerHTML = counter.toString() ;

            createVisual(arr , i , j+1)
            await new Promise((resolve) => {
              setTimeout(() => {
                resolve()
              }, 100)
            })
            clearVisual() ;
        }
        arr[i + 1] = key;
        counter += 1 ;
        count.innerHTML = counter.toString() ;
    }
    createVisual(array);
}

async function modified_quicksort( arr ,  p, r) {
    sorted = 2 ;
    console.log("modified sort") ;
    await limited_quicksort(arr, p, r, K);
    await insertion_sort(arr, p, r);
    console.log("end of modified") ;
    sorted = 1 ;
}

const container = document.querySelector('.container')
// creating the visual
function createVisual(array, spInd1, spInd2, spInd3) {
  array.map((ele, index) => {
    const newEle = document.createElement('div')
    newEle.style.width = '3px'
    newEle.style.height = `${ele}px`
    newEle.classList.add('numEle')
    if (index === spInd1) newEle.classList.add('spInd1')
    if (index === spInd2) newEle.classList.add('spInd2')
    if (index === spInd3) newEle.classList.add('spInd3')
    container.appendChild(newEle)
  })
}

// clearing the visual
function clearVisual() {
  container.innerHTML = ''
}


count.innerHTML = counter.toString() + "  ms";

  const btn = document.querySelector('#inputfile')
  btn.addEventListener('change', function() {

clearVisual();
    var fr=new FileReader();
    fr.onload=function(){
      // const newBtn = document.getElementById('new') ;
    clearVisual() ;
      arr = fr.result.split("\r\n");
      console.log(arr) ;
      console.log(arr.length);

      const si = arr.length ;
      if(si > 10000 && si < 10000000 && sizebtn.value === 'large' ){
        container.style.width = "9000px";
      }else if((si > 10 ) && (sizebtn.value === 'small' ) ){
        alert("Please select the file that contains numbers less than 11 elements ") ;
        window.location.reload() ;
      }else if((si > 10000 && si < 10) && (sizebtn.value === 'medium' ) ){
        alert("Please select the file that contains numbers more than 10 and less than 10^3 ") ;
        window.location.reload() ;
      }else if(si < 10000 && (sizebtn.value === 'large' )){
        alert("Please select the file that contains numbers greater than 10000 ") ;
        window.location.reload() ;
      }
      sizebtn.disabled = true ;

      let i = 0 ;
      for(i = 0 ; i < arr.length ; i++ ){
        array[i] = parseInt(arr[i]) ;
        if(i == arr.length - 1){ 
          readed = true ;
          createVisual(arr) ;
        }
      }
    }
    fr.readAsText(this.files[0]);
    
    })


// initial render
createVisual(array)


newBtn.addEventListener('click', () => {
  window.location.reload()
})

sortBtn.addEventListener('click', () => {
  if(readed){
  if ( sorted === 0 ) {
    btn.disabled = true ;
    clearVisual() ;
    modified_quicksort(array , 0 , array.length) ;  
  } else if(sorted === 1) {
    alert('Already Sorted!')
  }else if(sorted === 2 ){
    alert("Please wait for the sort to complete ") ;
  }
  }else{
    alert("please choose a file ") ;
  }
})




