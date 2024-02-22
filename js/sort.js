// Complexity- https://www.doabledanny.com/big-o-notation-in-javascript

// Pivot value, O(nlog(n)), worst= O(n^2)
// space complexity O(log(n))
function QuickSort(list) {
    if(list?.length <= 1) return list
    const pivot = list[0]
    const left = [], right = []
    for (let i = 1; i < list.length; i++) {
        if (list[i] < pivot) left.push(list[i])
        else right.push(list[i])
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)] 
}
var unsorted = [5, 7, 1, 8, 4, 3, 0, 9, 2, 6, 1]
var sorted = QuickSort(unsorted)
console.log('Sorted by quick sort', sorted)

//MergeSort- out-of-place, stable(same order of equal input), and comparison-type sorting algorithm
// Divide n Conquer, break the arr to 1 0r 0 element and then merge the sorted arrays together
// array with 1 or 0 element is ALWAYS sorted
// O(nlog(n)) always, space complexity O(n)
// most efficient sorting algorithms for sorting large arrays
const merge = (leftSorted, rightSorted) => {
    const sorted = []
    while (leftSorted.length && rightSorted.length) {
        if (leftSorted[0] < rightSorted[0]) {
            sorted.push(leftSorted.shift())
        } else {
            sorted.push(rightSorted.shift())
        }
    }
    return[...sorted, ...leftSorted, ...rightSorted]
}
function MergeSort(list) {
    if(list?.length <= 1) return list
    const mid = Math.floor(list.length / 2)

    const left = MergeSort(list.slice(0, mid))
    const right = MergeSort(list.slice(mid))

    return merge(left, right)
}
var unsorted = [5, 7, 1, 8, 4, 3, 0, 9, 2, 6, 1]
var sorted = MergeSort(unsorted)
console.log('Sorted by merge sort', sorted)

// Radix Sort
// Time O(k*n) k is max digit count in number, space O(n+d) d is 10 buckets
