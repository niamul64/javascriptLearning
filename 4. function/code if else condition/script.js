


// var foods =['cake', 'Ice Cream', 'chocolates','Bread'];
// var number = [1,32,31,2];

// // 1st parameter : Item
// // 2nd parameter : index
// // 3rd parameter : whole array
// foods.forEach(function(item,index_of_the_item,whole_Array){
//       console.log(`${item} er index: ${index_of_the_item} from array [${whole_Array}].\n`);

// });



var foods =['cake', 'Ice Cream', 'chocolates','Bread'];

// 1st parameter : Item
// 2nd parameter : index
// 3rd parameter : whole array

let function_name = function(item){ // also can use indx and whole_array as parameter
      return `${item} is a food`;
}

let arry = foods.map(function_name); 

console.log(arry);