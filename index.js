let array = []
let sorted = 0
let counter = 0 ;
let arr ;
var readed = false ;
var space = 0 ;

const algo = document.getElementById('algorithm')
const sortBtn = document.getElementById('sort')
const newBtn = document.getElementById('new')
const sizebtn = document.getElementById('size')
const btn = document.querySelector('#inputfile')

var container = document.querySelector('.container')
var h42 = document.getElementById("h42");
var count= document.getElementById("h4");

h42.innerHTML = "0";
count.innerHTML = counter.toString() + "  ms";


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
          space = i ;
          h42.innerHTML = space.toString() ;
        }
      }
    }
    fr.readAsText(this.files[0]);
    
    })

// const container = document.querySelector('.container')
// // creating the visual
// function createVisual(array, spInd1, spInd2, spInd3) {
//   array.map((ele, index) => {
//     const newEle = document.createElement('div')
//     newEle.style.width = '3px'
//     newEle.style.height = `${ele}px`
//     newEle.classList.add('numEle')
//     if (index === spInd1) newEle.classList.add('spInd1')
//     if (index === spInd2) newEle.classList.add('spInd2')
//     if (index === spInd3) newEle.classList.add('spInd3')
//     container.appendChild(newEle)
//   })
// }

// // clearing the visual
// function clearVisual() {
//   container.innerHTML = ''
// }


// implementing bubble 

async function bubbleSort(arr) {
  sorted = 2 ;
  counter = 0 ;
  clearVisual()
  const arrLen = arr.length
  space += 3 ;
  h42.innerHTML = space.toString() ;
  for (let i = 0; i < arrLen - 1; i++) {
    // createVisual(arr , -1 , 0 , 1  ) ;
    let swapped = false
    let k = 0 ;
  
    for (let j = 0; j < arrLen - i - 1; j++) {
      
      if (arr[j] > arr[j + 1]) {
        clearVisual() ;
        k = j ;
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
        swapped = true
        counter = counter + 1 ;
        createVisual(arr ,i , j , j+1 ) ;
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve()
        }, 10)
      )
      }
      counter = counter + 1 ;
      count.innerHTML = counter.toString() + "  ms";
    }
    if (!swapped) {
      sorted = 1
      clearVisual();
  createVisual(arr);
      return
    }
    counter = counter + 1 ;
      count.innerHTML = counter.toString() + "  ms";
    // await new Promise((resolve) =>
    //   setTimeout(() => {
    //     resolve()
    //   }, 200)
    // )
    clearVisual();
  createVisual(arr);

  }
  sorted = 1 ;
}

// implementing selection sort
async function selectionSort(arr) {
  counter = 0 ;
  sorted = 2 ;

  space += 3 ;
  h42.innerHTML = space.toString() ;
  
  for (let i = 0; i < arr.length - 1; i++) {
    
    let min = i
  
    for (let j = i + 1; j < arr.length; j++) {
      clearVisual()
      if (arr[j] < arr[min]) {
        min = j
      }
      counter = counter + 2 ;
      count.innerHTML = counter.toString() + "  ms";
      createVisual(arr , i , min , j )
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 10)
      })
    }

    if (min !== i) {
      let temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }

    counter = counter + 1 ;
    count.innerHTML = counter.toString() + "  ms";
  }
  clearVisual() ;
  createVisual(arr) ;
  sorted = 1 ;
  
}


async function visualizeInsertion(arr , n){
  let i, key, j; 
  counter = 0 ;
  sorted = 2 ;
  
  space += 3 ;
  h42.innerHTML = space.toString() ;

  for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 

        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
            counter = counter + 2 ;
            createVisual(arr, i , j , j+1)
            await new Promise((resolve) => {
              setTimeout(() => {
                resolve()
              }, 100)
            })
            clearVisual() ;           
        } 
        counter = counter + 1 ;
        count.innerHTML = counter.toString() + "  ms";
        console.log(counter) ;
        console.log(j) ;
        arr[j + 1] = key;

        // create visual 
        // createVisual(arr, i , -1 , j+1)
        // await new Promise((resolve) => {
        //   setTimeout(() => {
        //     resolve()
        //   }, 100)
        // })
        clearVisual() ;
    }
    createVisual(arr) ;
    sorted = 1 ;
}



async function sort( arr)
    {
      console.log("sort")
      counter = 0 ;
      sorted = 2 ; 
      var N = arr.length;

      createVisual(arr) ;
        // Build heap (rearrange array)
        for (var i = Math.floor(N / 2) - 1; i >= 0; i--){
          clearVisual() ;  
          createVisual(arr , i , N ) ;
          await new Promise((resolve) => {
            setTimeout(() => {
              resolve()
            }, 100)
          })
          await  heapify(arr, N, i);
          console.log("loopp 1111111")
          counter = counter + 1 ;
          count.innerHTML = counter.toString() + "  ms";
        }

        // One by one extract an element from heap
        for (var i = N - 1; i > 0; i--) {
            // Move current root to end
            console.log("loooppp 222222")
            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
          clearVisual() ;
            // call max heapify on the reduced heap
            await heapify(arr, i, 0);
            createVisual(arr , 0  , i) ; 
            await new Promise((resolve) => {
              setTimeout(() => {
                resolve()
              }, 100)
            })
            counter = counter + 1 ;
            count.innerHTML = counter.toString() + "  ms";
        }
        clearVisual()      
        console.log(counter)
        counter = counter + 1 ;
        count.innerHTML = counter.toString() + "  ms";
        console.log(counter)
        for(let i = 0 ; i < N ; i++ ){
          console.log("loooppp 222222")
          clearVisual() ;
          createVisual(arr , N , i) ;
          await new Promise((resolve) => {
            setTimeout(() => {
              resolve()
            }, 100)
          })
        }
        clearVisual()
        createVisual(arr) ;
        sorted = 1 ;
    }
 
    // To heapify a subtree rooted with node i which is
    // an index in arr[]. n is size of heap
   async function heapify(arr, N, i)
    {
      console.log("heapify") ;
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
        
        // If left child is larger than root
        if (l < N && arr[l] > arr[largest])
            largest = l;

        counter = counter + 1 ;
        count.innerHTML = counter.toString() + "  ms";
        // If right child is larger than largest so far
        if (r < N && arr[r] > arr[largest])
            largest = r;
 
        counter = counter + 1 ;
        count.innerHTML = counter.toString() + "  ms";
            // If largest is not root
        if (largest != i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            clearVisual()
            createVisual(arr , largest , i , N  ) ; 
            await new Promise((resolve) => {
              setTimeout(() => {
                resolve()
              }, 100)
            })
            clearVisual();
            // Recursively heapify the affected sub-tree
           await heapify(arr, N, largest);
        }
        counter = counter + 1 ;
        count.innerHTML = counter.toString() + "  ms";
    }




// implementing merge sort
async function merge(arr, s, m, e) {
  const newArr = []
  let i = s,
    j = m + 1,
    k = 0
  
  while (i <= m && j <= e) {
    if (arr[i] <= arr[j]) {
      newArr.push(arr[i])
      i++
    } else {
      newArr.push(arr[j])
      j++
    }
    counter = counter + 1 ;
    count.innerHTML = counter.toString() + "  ms";
  
  }
  while (i <= m) {
    newArr.push(arr[i])
    i++
    counter = counter + 1 ;
    count.innerHTML = counter.toString() + "  ms";
  
  }
  while (j <= e) {
    newArr.push(arr[j])
    j++
    counter = counter + 1 ;
    count.innerHTML = counter.toString() + "  ms";
  
  }
  for (let p = s; p <= e; p++) {
    arr[p] = newArr[k]
    k++

  createVisual(arr, s, p , e)
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 100)
  })
  clearVisual()

    counter = counter + 1 ;
      count.innerHTML = counter.toString() + "  ms";
    
  }

  createVisual(arr, s, m, e)
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 100)
  })
  clearVisual()
}

async function mergeSort(arr, s, e) {
  sorted = 2 ;
  if (s < e) {
    const mid = parseInt((s + e) / 2)
    await mergeSort(arr, s, mid)
    await mergeSort(arr, mid + 1, e)
    await merge(arr, s, mid, e)
  }
  sorted = 1 ;
}

// implementing quick sort
async function partition(arr, l, h) {
  // pivot at any random position
  let pivot = arr[h]
  let pIndex = l

  for (let i = l; i < h; i++) {
    if (arr[i] <= pivot) {
      let temp = arr[i]
      arr[i] = arr[pIndex]
      arr[pIndex] = temp
      pIndex = pIndex + 1
      createVisual(arr , i , pIndex)
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 100)
      })
      clearVisual()
    }
    counter = counter + 1 ;
    count.innerHTML = counter.toString() + "  ms";
  
  }

  let temp = arr[pIndex]
  arr[pIndex] = pivot
  arr[h] = temp

  createVisual(arr, l, pIndex, h)
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 100)
  })
  clearVisual()

  return pIndex
}


async function quickSort(arr, l, h) {
  sorted = 2 ;
  if (l < h) {
    const pIndex = await partition(arr, l, h)
    await quickSort(arr, l, pIndex - 1)
    await quickSort(arr, pIndex + 1, h)
  }
  sorted = 1 ;
}



const countingSort = (arr, size, place) => {
  let c = 0 ;
  let output = new Array(size + 1).fill(0);
  let max = Math.max(...arr);
  
  let freq = new Array(max + 1).fill(0);
  
  // Calculate count of elements
  for (let i = 0; i < size; i++){
    const num = Math.floor(arr[i] / place) % 10;
      freq[num]++;
    }
  
  // Calculate cummulative count
  for (let i = 1; i < 10; i++){
      freq[i] += freq[i - 1];
  }

  // Place the elements in sorted order
  for (let i = size - 1; i >= 0; i--) {
    
      const num = Math.floor(arr[i] / place) % 10;
      output[freq[num] - 1] = arr[i];
      freq[num]--;
      
  }
  
  //Copy the output array
  for (let i = 0; i < size; i++){
    arr[i] = output[i];
    c = c + 1 ; 
  }
//  clearVisual() ; ;
  return c ;
}

async function radixsort(arr , size){
 createVisual(arr) ;
 counter = 0 ;
 sorted = 2 ;

 console.log(size);
  let max = Math.max(...arr); 

  //Sort the array using counting sort
  for(let i = 1; parseInt(max / i) > 0; i *= 10){
    clearVisual() ;
   
    for(let j = 0 ; j < size ; j++ ){
      createVisual(arr , -1 , j) ;
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        } , 100)
      })
      clearVisual() ;
    }

    //counter = counter + countingSort(arr, size, i);


 counter =  counter + countingSort(arr, size, i) ;
count.innerHTML = counter.toString() + "  ms";

}
 clearVisual()
 sorted = 1 ;
}


// initial render
createVisual(array)

async function visualizeMerge() {
  await mergeSort(array, 0, array.length - 1)
  createVisual(array)

}

async function visualizeQuick() {
  await quickSort(array, 0, array.length - 1)
  createVisual(array);

}

async function visualizeRadix(){
  await radixsort(array , array.length);
  createVisual(array);

}

newBtn.addEventListener('click', () => {
  window.location.reload()
})

// sizebtn.addEventListener('click' , ()=> {
//   const si = array.length ;
//   if(si > 10000 && (sizebtn.value === 'small' || sizebtn.value === 'medium') ){
//     alert("Please select the file that contains numbers more than 10^3 ") ;
//     window.location.reload() ;
//   }else if((si < 10000 && si > 10)   && (sizebtn.value === 'large' || sizebtn.value === 'small')){
//     alert("Please select the file that contains numbers more than 10 and less than 10^3 ") ;
//     window.location.reload() ;
//   }else if(si <= 10 && (sizebtn.value === 'large' || sizebtn.value === 'medium')){
//     alert("Please select the file that contains numbers less than 11 ") ;
//     window.location.reload() ;
//   }
    

// })


sortBtn.addEventListener('click', () => {
  if(readed){
  if ( sorted === 0 ) {
    
    btn.disabled = true ;
    sizebtn.disabled = true ;

    clearVisual() ;
    if (algo.value === 'bubble') bubbleSort(array)
    else if (algo.value === 'selection') selectionSort(array)
    else if (algo.value === 'insertion') visualizeInsertion(array , array.length)
    if (algo.value === 'heap') sort(array)
    else if (algo.value === 'merge') visualizeMerge()
    else if (algo.value === 'quick') visualizeQuick()
    else if (algo.value === 'radix') visualizeRadix(array , array.length);
    else if (algo.value === 'counting') visualizationCounting(array , Math.max(...array) , Math.min(...array));
    else if (algo.value === 'bucket') bucketSort(arr , arr.length);
  } else if(sorted === 1) {
    alert('Already Sorted!')
  }else if(sorted === 2 ){
    alert("Please wait for the sort to complete ") ;
  }
  }else{
    alert("please choose a file ") ;
  }
})



