/* global _:true */
/* jshint unused: false */

(function()
{
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('#operate').click(getBoxOffice);
  }

  function getBoxOffice()
  {
    var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=16&country=us&apikey=tntv5r3367ajeyw9w9wd862g&callback=?';
    $.getJSON(url, addBoxOffice);

    function addBoxOffice(data)
    {
      var movies = data.movies;
      movies.forEach(movie=>
      {
        var $div = $('<div>');
        var $img=$('<img>').attr('src', movie.posters.thumbnail);
        $div.append($img);
        $div.append(`<br> ${movie.title}`);
        $('#output').append($div);
      });
    }
  }

})();