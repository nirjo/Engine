const path = require( "path" );
const sort = require("../search_modules/sort/sort")
const book_stats =[ 
   { book_id: 8,   distinct_tokens: 1,     total_token_count: 1 },
   { book_id: 18,  distinct_tokens: 2,     total_token_count: 6},
   { book_id: 37,  distinct_tokens: 10,    total_token_count: 20},
   { book_id: 47,  distinct_tokens: 2,     total_token_count: 2}, 
   { book_id: 50,  distinct_tokens: 10,     total_token_count:14 } 
 ]
let sorted = sort .sort_book_stats(book_stats)

  test ("test sort.sort_book_stats  book_id 37 should be first in the list", ()=>{
   expect(sorted[0].book_id.toString()).toMatch("37"); 
 
});


  test ("test sort.sort_book_stats  book_id 8 should be last in the list", ()=>{
   expect(sorted[sorted.length-1].book_id.toString()).toMatch("8"); 
 
});
