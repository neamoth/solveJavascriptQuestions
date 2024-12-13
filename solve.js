{
    //Question: How to remove falsy value from an array
    let arr = ['one', true, 'two', null, 'three', false, 'four', undefined];
    let filteredArrayWillBe = arr.filter(Boolean);
    console.log(filteredArrayWillBe); // ['one', true, 'two', 'three', 'four']
    
}

{
    //Question: Convert any value into boolean value
    let val = "let is a string";
    let convertedValue = !val
    console.log(convertedValue); // false
}

{
    //Question: how to resize array
    let arr = ['one', true, 'two', null, 'three', false, 'four', undefined];
    arr.length = 5;
    console.log(arr); //['one', true, 'two', null, 'three']
    
}

{
    //Question: Find the maximum value in an array
    let arr = [3, 7, 2, 9, 1];
    let max = Math.max(...arr);
    console.log(max); // 9  
}

{
    //Question: How to convert multidimentional array into single dimentional array
    let arr = [['one', 'two', ['three', 'four']], ['five','six']];
    let singleArr = arr.flat(Infinity);
    console.log(singleArr); // ['one', 'two', 'three', 'four', 'five','six']
}

{
    //Question: How to remove duplicate values from an array
    let arr = [1, 2, 3, 2, 1, 4, 5, 4];
    let uniqueArr = [...new Set(arr)];
    console.log(uniqueArr); // [1, 2, 3, 4, 5]
}

{
    //Question: How to sort an array in descending order
    let arr = [3, 7, 2, 9, 1];
    let sortedArr = arr.sort((a, b) => b - a);
    console.log(sortedArr); // [9, 7, 3, 2, 1]
}

{
    //Question: How to use shorten conditionals
    let time = 8;
    time === 8 && console.log("Good Morning")
}

{
    //Question: change neamoth with mitu in the string
    let str = `Neamoth is a good boy, Neamoth has been studying in Daffodil Internation University and NeaMoth is graduated from this
    university with a CGPA 2.95. neamoth got 4 out of 4 in his final defence project. neamoth has low result due to some issues but 
    he come back with a great force and make his result better . that's why neamoth is a good boy`
    console.log(str.replaceAll(/neamoth/gi, 'Mitu').replaceAll(/boy/gi, 'girl'));
    
}