// const data_access = require('./search_modules/data/data_access');
// const data_converter = require('./search_modules/data/data_converter');
// const statistics = require('./search_modules/statistics/statistics');
// const sort = require('./search_modules/sort/sort');
// const query_pruner = require('./search_modules/pruner/query_pruner');
const search = require('./search_modules/search/search');
const filename="data.json"
const query = "animal kingdom  of brain"
const n = 10;
// let book_stats =statistics.get_statistics(query,data_converter.covnert_to_model(data_access.getJsonFromFile(filename)));
console.log(search.search(filename, query,n));
