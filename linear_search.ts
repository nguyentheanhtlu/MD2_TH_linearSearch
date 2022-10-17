function findItemMis( date : number[] ): number[] {
    let i : number = 1;
    let arr : number[] = [];
    while ( i <= 10){
        if (date.indexOf(i) == -1){
            arr.push(i);
        }
        i++;
    }
    return arr;
}

let a = new findItemMis([2,3,4,5]);
console.log(a)
