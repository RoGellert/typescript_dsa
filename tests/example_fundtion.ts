function sum_char_codes(a: string): number {
    let out = 0;
    for (let i = 0; i < a.length; ++i) {
        out += a.charCodeAt(i);
    }

    return out;
}

var string_sum = sum_char_codes("asfasfa")

console.log('String sum is : ' +string_sum); 