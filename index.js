var arr = function () {
  this.data = [
    19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15,
  ];
};

arr.prototype.snail = function (rowsCount, colsCount) {
  let snailArr = new Array();
  if (rowsCount * colsCount != this.data.length) return snailArr;

  for (let r = 0; r < rowsCount; r++) {
    let initialRowIndex = [];
    let evenStart = r;
    let oddStart = rowsCount * 2 - 1 - r;

    for (let c = 0; c < colsCount; c++) {
      let isOdd = c & 1;
      if (isOdd == 1) {
        initialRowIndex.push(oddStart);
        oddStart += rowsCount * 2;
      } else {
        initialRowIndex.push(evenStart);
        evenStart += rowsCount * 2;
      }
    }

    let row = [];
    for (let key of initialRowIndex) {
      row.push(this.data[key]);
    }
    snailArr.push(row);
  }
  return snailArr;
};

const myarr = new arr();
console.log(myarr.snail(5, 4)); // [[1,2,3,4]]h
