/* global _:true */
/* global AmCharts:true */
/* jshint unused: false */
/* jshint camelcase: false */

(function()
{
  'use strict';

  $(document).ready(init);

  function init()
  {
    makeScoreChart();
    $('#operate').click(getBoxOffice);
  }

  function getBoxOffice()
  {
    $('#output > *').remove();

    var movieCount = $('#movieCount').val() * 1;

    var url = `http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=${movieCount}&country=us&apikey=tntv5r3367ajeyw9w9wd862g&callback=?`;
    $.getJSON(url, addBoxOffice);

    function addBoxOffice(data)
    {
      chart.dataProvider = [];

      var movies = data.movies;
      movies.forEach(function(movie)
      {
        chart.dataProvider.push({
            title: movie.title,
            critics_score: movie.ratings.critics_score,
            audience_score: movie.ratings.audience_score
        });

        // var $div = $('<div>');
        // var $img=$('<img>').attr('src', movie.posters.thumbnail);
        // $div.append($img);
        // $div.append(`<br> ${movie.title}`);
        // $('#output').append($div);
      });
      debugger;
      chart.validateData();
      //makeScoreChart();
    }
  }

  var chart;

  function makeScoreChart()
  {
    debugger;
    chart = AmCharts.makeChart('chartdiv', {
    'type': 'serial',
    'theme': 'light',
    'pathToImages': 'http://www.amcharts.com/lib/3/images/',
    'legend': {
        'useGraphSettings': true
    },
    'dataProvider': [],
    'valueAxes': [{
        'id': 'v1',
        'minimum': 0,
        'maximum': 100,
        'axisAlpha': 0.2,
        'dashLength': 1,
        'position': 'left'
    }],
    'graphs': [{
        'id':'s1',
        'balloonText': 'Critic\' Score<br /><b><span style=\'font-size:14px;\'>Score: [[value]]</span></b>',
        'bullet': 'round',
        'bulletBorderAlpha': 1,
    'bulletColor':'#FFFFFF',
        'hideBulletsCount': 50,
        'title': 'Critics\' Rating',
        'valueField': 'critics_score',
    'useLineColorForBulletBorder':true
    },
    {
        'id':'s2',
        'balloonText': 'Audience\' Score<br /><b><span style=\'font-size:14px;\'>Score: [[value]]</span></b>',
        'bullet': 'round',
        'bulletBorderAlpha': 1,
    'bulletColor':'#FFFFFF',
        'hideBulletsCount': 50,
        'title': 'Audience\' Rating',
        'valueField': 'audience_score',
    'useLineColorForBulletBorder':true
    }],
    'chartScrollbar': {
        'autoGridCount': true,
        'graph': 'g1',
        'scrollbarHeight': 40
    },
    'chartCursor': {
        'cursorPosition': 'mouse'
    },
    'categoryField': 'title',
    'categoryAxis': {
        'axisColor': '#DADADA',
        'dashLength': 1,
        'minorGridEnabled': true,
        'labelRotation': 30
    },
  'exportConfig':{
    menuRight: '20px',
      menuBottom: '30px',
      menuItems: [{
      icon: 'http://www.amcharts.com/lib/3/images/export.png',
      format: 'png'   
      }]  
  }
});

chart.addListener('rendered', zoomChart);
zoomChart();

// this method is called when chart is first inited as we listen for 'dataUpdated' event
function zoomChart() {
    // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
    chart.zoomToIndexes(chart.dataProvider.length - 40, chart.dataProvider.length - 1);
}
  }

})();