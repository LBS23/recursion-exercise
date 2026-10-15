// Iterative way

const merge = function(arr, left, half, right) {
  let leftAux = half - left + 1;
  let rightAux = right - half;
  let auxLeft = new Array(leftAux);
  let auxRight = new Array(rightAux);
  for (let i = 0; i < leftAux; i++) {
    auxLeft[i] = arr[left+i];
  }
  for(let j = 0; j < rightAux; j++) {
    auxRight[j] = arr[half + 1 + j];
  }
  let i = 0, j = 0;
  let k = left;

  while (i < leftAux && j < rightAux) {
    if (auxLeft[i] <= auxRight[j]) {
      arr[k] = auxLeft[i];
      i++;
    }
    else {
      arr[k] = auxRight[j];
      j++;
    }
    k++;
  }

  while (i < leftAux) {
    arr[k] = auxLeft[i];
    i++;
    k++;
  }

  while (j < rightAux) {
    arr[k] = auxRight[j];
    j++;
    k++;
  }
}

const mergeSort = function(arr, lo, hi) {
      if (lo >= hi) {
        return
      }
      let half = Math.floor(lo+(hi-lo)/2);
      mergeSort(arr, lo, half);
      mergeSort(arr, half + 1,hi);
      merge(arr, lo, half, hi);
}