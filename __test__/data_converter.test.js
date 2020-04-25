const path = require( "path" );
const data_converter = require("../search_modules/data/data_converter")
const sample = {
   "titles": [ "lion book"   ],
   "queries": [  "lion"  ],
   "summaries": [     {        "id": 0,        "summary": "lion lion"      }    ],
   "authors": [    {       "book_id": 0,       "author": "auth1"     }]
 }
let book_arr=  data_converter.covnert_to_model(sample);
  test ("test data_converter.covnert_to_model book_arr lengthh should be 1", ()=>{
   expect(book_arr.length.toString()).toMatch("1"); 
 
});


test ("test data_converter.covnert_to_model title should exist", ()=>{
   expect((book_arr[0].title !== undefined).toString() ).toMatch("true"); 
 
});

test ("test data_converter.covnert_to_model summary should exist", ()=>{
   expect((book_arr[0].summary !== undefined).toString() ).toMatch("true"); 
 
});


test ("test data_converter.covnert_to_model author should exist", ()=>{
   expect((book_arr[0].author !== undefined).toString() ).toMatch("true"); 
 
});
