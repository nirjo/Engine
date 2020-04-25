const statistics = require("../search_modules/statistics/statistics")
const books = [

    { id: 1,  title: 'lion book',    summary:    'lion lion'  },
    { id: 2,  title: 'tiger book',    summary:    'tiger tiger tiger'  },
    { id: 3,  title: 'both book',    summary:    'lion tigerr'  }
];
const query="lion"
let stat = statistics.get_statistics(query,books);  

test('test get_statistics.statics  with query='+query +', length of search results it should be 2', () => {

   expect(stat.book_stats.length.toString()).toMatch("2");      


});

test('test get_statistics.statics  with query='+query +', first search result should have 1 distinct token', () => {

    expect(stat.book_stats[0].distinct_tokens.toString()).toMatch("1");
 
 });


 test('test get_statistics.statics  with query='+query +', first search should have 2 toat_token_count', () => {
        
    expect(stat.book_stats[0].total_token_count.toString()).toMatch("2");
 
 
 });

 test('test get_statistics.statics  with query='+query +', second  search result should have 1 distinct token', () => {
    expect(stat.book_stats[1].distinct_tokens.toString()).toMatch("1");
    
 
 
 
 });
 test('test get_statistics.statics  with query='+query +', second  search should have 1 toat_token_count', () => {
        expect(stat.book_stats[1].total_token_count.toString()).toMatch("1"); 
 
 
 });

