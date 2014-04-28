/* global _:true */
/* jshint unused: false */
/* jshint camelcase: false */

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
    $('#output > *').remove();

    var movieCount = $('#movieCount').val() * 1;
    var minScore = $('#score').val() * 1;

    var url = `http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=${movieCount}&country=us&apikey=tntv5r3367ajeyw9w9wd862g&callback=?`;
    $.getJSON(url, addBoxOffice);

    function addBoxOffice(data)
    {
      var movies = data.movies.filter(movie=>movie.ratings.critics_score >= minScore);
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