export default function bubble_sort(arr: number[]): void {
    for (let i: number = 0; i < arr.length; ++i) {
        let j: number = i;
        while (j > 0 && arr[j] < arr[j-1]) {
            const temp: number = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            --j;
        }
    }
}