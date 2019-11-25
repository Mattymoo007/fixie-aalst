$( document ).ready(function() {
    var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'dayGrid' ],
    defaultView: 'dayGridWeek'
  });
});