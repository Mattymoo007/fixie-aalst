
$(document).ready(function() {

    
// TODO: this information needs to come from the database

const allTheEvents = [
    {
        title: 'timeslot taken',
        start: '2019-11-05T14:00:00',
        end: '2019-11-05T16:00:00'
    },
    {
        title: 'timeslot taken',
        start: '2019-11-05T16:00:00',
        end: '2019-11-05T17:00:00'
    },
    {
        // id: 999,
        title: 'timeslot taken',
        start: '2019-11-05T10:00:00',
        end: '2019-11-05T11:00:00'
    },   
    {
        title: 'timeslot taken',
        start: '2019-11-14T09:00:00',
        end: '2019-11-14T10:00:00'
    },     
    {
        title: 'timeslot taken',
        start: '2019-11-14T10:00:00',
        end: '2019-11-14T11:00:00'
    },
    {
        title: 'timeslot taken',
        start: '2019-11-25T14:00:00',
        end: '2019-11-25T16:00:00'
    },
    {
        title: 'timeslot taken',
        start: '2019-11-25T16:00:00',
        end: '2019-11-25T17:00:00'
    },
    {
        // id: 999,
        title: 'timeslot taken',
        start: '2019-11-25T10:00:00',
        end: '2019-11-25T11:00:00'
    },
    {
        start: '2019-11-24T18:00:00',
        end: '2014-11-25T08:00:00',
        rendering: 'background'
    }
    ];


    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid', 'timeGrid' ],
      header: {
        right: 'prev,next today', //positions the the prev/next button on the right 
        center: 'title', //sets the title of the month to center
        left: 'dayGridMonth,timeGridWeek,timeGridDay'
        // left: 'month,basicWeek,basicDay' //positions the the prev/next button on the left 
        // left: 'month' //positions the the prev/next button on the left 
      },
      // defaultDate: '2018-02-16',
      navLinks: true, // click on day/week names to navigate views
      editable: true,
      eventLimit: true, // add "more" link when there are too many events in a day
      events: allTheEvents,
      eventOverlap: false // to avoid overlapping
    });

    calendar.render();

});