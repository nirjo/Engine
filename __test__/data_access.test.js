const path = require( "path" );
const data_access = require("../search_modules/data/data_access")
const filename = ".//__test__/test_data.json";
let json_arr = data_access.getJsonFromFile(path.resolve(filename));
test ("test data_access.getJsonFromFil titles should exist", ()=>{
   expect((json_arr.titles !== undefined).toString() ).toMatch("true"); 
 
});

test ("test data_access.getJsonFromFil titles lenght should be 3", ()=>{
   expect( json_arr.titles.length.toString()).toMatch("3"); 
 
});


test ("test data_access.getJsonFromFil queries should exist", ()=>{
   expect((json_arr.queries !== undefined).toString() ).toMatch("true"); 
   
  });

  
test ("test data_access.getJsonFromFil queries lenght should be 3", ()=>{
   expect( json_arr.titles.length.toString()).toMatch("3"); 
 
});


 test ("test data_access.getJsonFromFil summaries should exist", ()=>{
   expect((json_arr.summaries !== undefined).toString() ).toMatch("true"); 
   
  });

  
  test ("test data_access.getJsonFromFil summaries lenght should be 3", ()=>{
   expect( json_arr.summaries.length.toString()).toMatch("3"); 
 
});

 test ("test data_access.getJsonFromFil authors should exist", ()=>{
   expect((json_arr.authors !== undefined).toString() ).toMatch("true"); 
   
  });

  test ("test data_access.getJsonFromFil authors lenght should be 3", ()=>{
   expect( json_arr.authors.length.toString()).toMatch("3"); 
 
});
