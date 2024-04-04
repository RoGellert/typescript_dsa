export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0;
    let right = haystack.length - 1;

    while (left <= right) {
        const curr_index = Math.floor(left + (right - left) / 2);
        const num = haystack[curr_index];

        if (num === needle) {
            return true;
        }

        if (num < needle) {
            left = curr_index + 1;
        } else {
            right = curr_index - 1;
        }
    }

    return false;
}