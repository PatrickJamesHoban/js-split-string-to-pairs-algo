// PSEUDO CODE

// CODE
function solution(str){
  var str = str.split(/.{2}/g);
   if (str.length%2 != 0) {

   }
}

// DRIVER CODE
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']

// TEST CASES WRITTEN
// describe("Solution", function(){
//   it("return pairs", function(){
//     Test.assertEquals("actual", [ "ac", "tu", "al" ] );
//     Test.assertEquals("asd023094-0", [ "as", "d0", "23", "09", "-0" ] );
//   },
//   it("returns an empty array if no string is provided", function() {
//     Test.assertEquals( "", [], "expected empty array")
//   });
// });
