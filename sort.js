function SortAndRemove(array) {
  var done = false;
  var array = []
  while (!done) {
    done = true;
    for (var i = 1; i < arr.length;i++) {

       if(array.indexOf(arr[i]) == -1){
         done = false;
            array.push(arr[i])
         }
        
      else if (array[i - 1] > array[i]) 
      {
         
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
        
    
    }
  }

  return array;
}
var num1 = [1,3,4,5,6];
var num2 = [2,3,4,6,7,8,9];
var numbers=num1.concat(num2);
console.log(SortAndRemove(numbers));
