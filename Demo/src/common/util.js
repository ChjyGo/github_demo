/**
 *
 * */
let BASE_ADDRESS = 'https://api.douban.com/v2/';

export default {

    book_search:   BASE_ADDRESS + 'book/search',
    book_detail:   BASE_ADDRESS + 'book/:',
    movie_search:  BASE_ADDRESS + 'movie/' + 'search/',
    movie_detail:  BASE_ADDRESS + 'movie/:',
    music_search:  BASE_ADDRESS + 'music/' + 'search/',
    music_detail:  BASE_ADDRESS + 'music/:'
}