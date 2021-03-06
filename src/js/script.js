class Algorithms {

    /*
        - Сортировка Пузырьком / Bubble Sort | O(N^2)
        - Принимает на вход неотсортированный массив / Accepts an unsorted array as input
        - Возвращается отсортированный массив  / Returns a sorted array
    */
    static bubbleSort(array) {
        // Если массив пустой, то не выполнять сортировку / If the array is empty, don`t sort
        if (array.length == 0) return false;

        let newArray = array.slice(); //Копируем массив, сохраняя старый / Copy the array, keeping the old one

        let swapped = null; //Перменная, которая показывается состояние текующего элемента в цикле / A variable that shows the state of the current item in the loop.

        do {
            //Изначально ложь, т.к элемент не был отсортирован / Initially false, because the item was not sorted
            swapped = false;

            for (let i = 1; i < newArray.length; i++) {
                //Правый элемент / Right Element
                let rightEl = newArray[i];
                //Левый элемент / Left Element
                let leftEl = newArray[i - 1];
                //Если левый элемент больше правого элемента, меняем их местами  / If the left element is more than the right element, swap them.
                if (leftEl > rightEl) {
                    newArray[i] = leftEl;
                    newArray[i - 1] = rightEl;
                    //Меняем состание на правду, т.к элемент был отсортирован / Change the status to true, because the item has been sorted
                    swapped = true;
                }

            }

        } while (swapped != false);

        return newArray;

    }

    /* Quick Sort algorithm | O(N log N) */
    static qsort(arr) {
        if (arr.length <= 1) { // basic recursion case
            return arr;
        }

        let supp = arr[~~(arr.length / 2)],
            less = this.qsort(arr.filter(n => n < supp)), // recursively sort array of less items
            equal = arr.filter(n => n === supp),
            larger = this.qsort(arr.filter(n => n > supp)); // recursively sort array of larger items

        return less.concat(equal, larger);
    }

    /* Section Sort algotihm | O(N ^ 2) */
    static sectionSort(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            let last = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[last]) {
                    last = j;
                }
            }
            let number = arr[last];
            arr[last] = arr[i];
            arr[i] = number;
        }
        return arr
    }
}

console.log(Algorithms.bubbleSort([5, 1, 4, 2, 8]));
console.log(Algorithms.qsort([2, 1, 3, 5, Infinity, 5, 5, 100, 591, 100, -Infinity]));
console.log(Algorithms.sectionSort([5, 1, 4, 2, 8]));
console.log(Algorithms.sectionSort([2, 1, 3, 5, Infinity, 5, 5, 100, 591, 100, -Infinity]));