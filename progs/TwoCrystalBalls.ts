export default function two_crystal_balls(breaks: boolean[]): number {
    let temp: number = 0;
    let curr: number = 0;
    const n: number = breaks.length
    const to_add: number = Math.floor(Math.sqrt(n))

    while (curr < n && breaks[curr] != true) {
        temp = curr;
        curr = Math.min(curr + to_add, n);
    }

    while (temp < n && breaks[temp] != true) {
        temp += 1;
    }

    if (temp === n) {
        return -1
    }

    return temp;
}