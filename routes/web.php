<?php


Route::get('/', 'HomeController@index')->name('home');
Route::get('produtos', 'ProdutosController@index')->name('produtos.index');
