function arrayPlusArray(arr1, arr2) {
    let totalArr1 = 0;
    let totalArr2 = 0;
    for (let i = 0; i < arr1.length; i++) totalArr1 += arr1[i];
    for (let i = 0; i < arr2.length; i++) totalArr2 += arr2[i];
    return totalArr1 + totalArr2;
}