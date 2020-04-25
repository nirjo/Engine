const path = require( "path" );
const search = require("../search_modules/search/search")
const filename = ".//__test__/test_data.json";
const query= "lion and tiger";
const number= 3;
let result = search.search(filename,query,number)
test ("test search.search first book id should be 2", ()=>{
    
   expect(result[0].id.toString() ).toMatch("2"); 
 
});
const books_arr =[
	{id: 0,title: 'lion book',summary: 'lion lion',author: 'auth1', index_in_original_list: 0 },
	{id: 1,title: 'tiger book', summary: 'tiger tiger tiger', author: 'auth12',index_in_original_list: 1 },
    {id: 2,title: 'both book', summary: 'lion tiger',author: 'auth13',index_in_original_list: 2 } ];
result = search.get_ranked_search_result(books_arr,query,number)
test ("test search.get_ranked_search_result first book id should be 2", ()=>{
    
   expect(result[0].id.toString() ).toMatch("2"); 
 
});
