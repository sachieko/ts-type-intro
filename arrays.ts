type Tstr = (string | number | boolean)[]
let str: Tstr = ['this', true,'an','array','of','strings.'];
const printArr = (array: Tstr) => {
  for (let i of array) {
    console.log(i);
  }
}; 
printArr(str);