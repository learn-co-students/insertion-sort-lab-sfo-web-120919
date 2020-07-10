function findMinAndRemove(array) {
  let currentMin = array[0];
  let minIndex = 0;

  array.forEach((el, i) => {
    if (el < currentMin) {
      currentMin = el;
      minIndex = i;
    }
  });

  array.splice(minIndex, 1);
  return currentMin;
}

function insertionSort(array) {}
