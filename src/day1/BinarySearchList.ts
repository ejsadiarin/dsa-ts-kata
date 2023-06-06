/*
 * Binary Search
 * - also known as logarithmic search
 * - data must be sorted first before implementing a binary search
 * - O(log n)
 * */
export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const midpoint = Math.floor(low + (high - low) / 2);
        const value = haystack[midpoint];

        if (value === needle) {
            return true;
        } else if (value > needle) {
            // high becomes the midpoint, throwaway the midpoint for a new midpoint
            high = midpoint;
        } else {
            // again drop the midpoint
            low = midpoint + 1;
        }
    } while (low < high);

    return false;
}

// can also be

function binarySearch(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;

    // loop if left is less than right
    while (left <= right) {
        // get midpoint by gettings the average (floored)
        const mid: number = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;
        if (target < nums[mid]) right = mid - 1;
        else left = mid + 1;
    }

    return -1;
}

const exampleArr: number[] = [
    -10, -7, -2, -3, 1, 4, 5, 7, 10, 19, 20, 100, 120, 121, 123, 145, 890,
];

console.log(binarySearch(exampleArr, 123)); // output: 14, meaning 14th index
