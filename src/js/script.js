


class Algorithms {

    /*
        - Сортировка Пузырьком / Bubble Sort
        - Принимает на вход неотсортированный массив / Accepts an unsorted array as input
        - Возвращается отсортированный массив  / Returns a sorted array
    */
    static bubbleSort(array){
        // Если массив пустой, то не выполнять сортировку / If the array is empty, don`t sort
        if( array.length == 0 ) return false;

        let newArray = array.slice();//Копируем массив, сохраняя старый / Copy the array, keeping the old one

        let swapped = null;//Перменная, которая показывается состояние текующего элемента в цикле / A variable that shows the state of the current item in the loop.

        do {
            //Изначально ложь, т.к элемент не был отсортирован / Initially false, because the item was not sorted
            swapped = false;

            for( let i = 1; i < newArray.length; i++ ) {
                //Правый элемент / Right Element
                let rightEl = newArray[i];
                //Левый элемент / Left Element
                let leftEl = newArray[i - 1];
                //Если левый элемент больше правого элемента, меняем их местами  / If the left element is more than the right element, swap them.
                if(leftEl > rightEl) {
                    newArray[i] = leftEl;
                    newArray[i - 1] = rightEl;
                    //Меняем состание на правду, т.к элемент был отсортирован / Change the status to true, because the item has been sorted
                    swapped = true;
                }
    
            }

        } while( swapped != false );

        return newArray;
    
    }
}

console.log(Algorithms.bubbleSort([5, 1, 4, 2, 8]));