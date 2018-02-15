// PSEUDO CODE


// CODE

// REFACTOR
function solution(str){
  return (str.length%2 === 0 ? str : str + "_" ).match(/../g)
}

// ORIGINAL
// function solution(str){
//   var ar = str.match(/.{1,2}/g);
//   if (str.length%2 !== 0) {
//     ar[ar.length-1] += "_";
//   }
//   return ar;
// }


// DRIVER CODE
solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']





// TEST CASES - Should be in a different file, just copying in here for ref for now.  

// describe("Solution", function(){
//   it("return pairs", function(){
//     let answerOne = solution("actual");
//     let arr = ["ar", "tu", "al"];
//     Test.expect( answerOne == arr );
//     Test.expect(solution("asd023094-0") == ['as', 'd0', '23', '09', '-0'] )
//   }); 
//   it("returns an empty array if no string is provided", function() {
//     Test.expect( solution("") == [], "expected empty array")
//   });
// });