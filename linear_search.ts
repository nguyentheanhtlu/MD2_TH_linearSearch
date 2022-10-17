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

console.log(findItemMis([1,2,3]))
