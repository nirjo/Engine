const query_pruner = require("../search_modules/pruner/query_pruner")


test('query_pruner test 1', () => {
   expect(query_pruner.prune("is lion".split(" ")).length.toString()).toMatch("1");

});

test('query_pruner test 2', () => {

    expect(query_pruner.prune("is ".split(" ")).length.toString()).toMatch("0");
 });

 test('query_pruner test 3', () => {

    expect(query_pruner.prune("lion ".split(" ")).length.toString()).toMatch("1");
 });