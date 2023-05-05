var arr = function () {
  this.data = [
    19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
  ];
};

arr.prototype.snail = function (rowsCount, colsCount) {
  let snailArr = new Array();
  if (rowsCount * colsCount != this.data.length) return snailArr;

  let i = 0;
  for (let c = 0; c < colsCount; c++) {
    let isOdd = c & 1;
    if (!isOdd) {
      for (let r = 0; r < rowsCount; r++) {
        console.log(r, c, this.data[i++], 'odd');
        // snailArr[r][c] = this.data[i];
      }
    } else {
      for (let r = rowsCount - 1; r >= 0; r--) {
        console.log(r, c, this.data[i++], 'even');
        // snailArr[r][c] = this.data[i];
      }
    }
  }

  return snailArr;
};

const myarr = new arr();
console.log(myarr.snail(5, 4)); // [[1,2,3,4]]h
