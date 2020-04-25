# SEarchEngine
The Search works following way
1. Tokeizne the search query.
2. Remove articles,conjuction, 'am','is','are', etc from the tokes 
3. Search the summaries for the tokens that pass the filtering in #2 
4. Rank the search results. The books with higher number of distinct tokens gets higher ranking. 
   In case of ties(number of tokens is equal between two boosk) the one with more tokens get higher ranking
