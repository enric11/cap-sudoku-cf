using my.bookshop as my from '../db/data-model';

service CatalogService @(requires: 'system-user') {
    @readonly entity Books as projection on my.Books;
    function getTodos() returns String;
}

