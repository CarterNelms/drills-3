/* global moment: true */

(function()
{
  'use strict';

  $(document).ready(init);

  function init()
  {
    $('#operate').click(squares);
  }

  function squares()
  {
    $('#output > *').remove();

    var date = $('#input').val();
    var daysFromNow = moment(date).endOf('day').fromNow();//('D MMMM YYYY');//, h:mm:ss a');

    $('#output').text(daysFromNow);
  }

})();