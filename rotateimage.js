/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]

*/

var rotate = function(matrix){
    var n = matrix.length;
    
    for (var i=0; i<n;i++){
      for(var j=0; j<n; j++){
        var tmp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = tmp;
        if(i==j){
          break;
        }
      }
    }
    
    for (var k=0; k<n; k++){
      matrix[k].reverse();
    }
  
  };