
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let arr=[];
  for(let k=1;k<matrix.length;k+=2) {matrix[k].reverse();}
  return arr = [].concat.apply([], matrix);
}
