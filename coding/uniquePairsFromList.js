// Build Unique pairs from array of 5 elements in javascript

function buildPairs(arr) {
    const pairs = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            pairs.push([arr[i], arr[j]]);
        }
    }
    
    return pairs;
}

// Example usage:
const array = [1, 2, 3, 4, 5];
const pairs = buildPairs(array);
console.log(pairs);

// This code will generate unique pairs from the given array [1, 2, 3, 4, 5]. It avoids duplicates by starting the inner loop from i + 1, ensuring that each pair is unique.