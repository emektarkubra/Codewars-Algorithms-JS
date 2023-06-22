function mergeArrays(arr1, arr2) {
  if (arr1.length > 0 || arr2.length > 0) {
    for (let i = 0; i < arr2.length; i++)
      if (!arr1.includes(arr2[i])) arr1.push(arr2[i]);
    return arr1.sort((a, b) => a - b);
  }
  return [];
}
