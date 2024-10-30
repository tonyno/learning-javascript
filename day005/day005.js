//  TASK: udelej funkci "mySort", ktera na vstupu dostane pole cisel a seradi cisla od nejmensiho po nejvetsi


function mySort(array) {
    for (let z = 0; z < array.length; z++) {
        for (let x = 0; x < array.length - 1; x++) {
            if (array[x] > array[x + 1]) {
                let y = array[x + 1]
                array[x + 1] = array[x]
                array[x] = y
            }
        }
    }
    return array
}


const unsortedArray = [5, 7, 3, 1, 2, -5, 9, 30, 6, -1]
const sortedArray = mySort(unsortedArray)
console.log(sortedArray)


