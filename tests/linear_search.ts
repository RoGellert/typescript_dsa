function linear_search(a: Array<number>, to_find: number): number {
    for (let i = 0; i < a.length; ++i) {
        if (a[i] === to_find) {
            return i
        }
    }

    return -1;
}

let a: Array<number> = [1, 2, 3, 4, 5, 6]
let out_index = linear_search(a, 3)

if (out_index === -1 ){
    console.log('No such num : '); 
} else {
    console.log('Index is : ' +out_index); 
}