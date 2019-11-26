
$(document).ready(function() {

// TODO: this information needs to come from the database

const allTheEvents = [
    {
        title: 'RepairOne',
        start: '2019-11-05',
        end: '2019-11-07T20:00:00'
    },
    {
        title: 'Attend Steemit Meetup',
        start: '2019-11-16',
        end: '2019-11-18'
    },
    {
        // id: 999,
        title: 'Event One',
        start: '2019-11-07T16:00:00',
        end: '2019-11-07T20:00:00'
    },   
    {
        id: 999,
        title: 'Repeating Event',
        start: '2019-11-14T16:00:00'
    },     
    {
        title: 'Visit Utopian-io',
        url: 'http://utopian.io/',
        start: '2019-11-20'
    }
    ];

$('#calendar').fullCalendar({
  header: {
    right: 'prev,next today', //positions the the prev/next button on the right 
    center: 'title', //sets the title of the month to center
    left: 'month,basicWeek,basicDay' //positions the the prev/next button on the left 
  },
  // defaultDate: '2018-02-16',
  navLinks: true, // click on day/week names to navigate views
  editable: true,
  eventLimit: true, // add "more" link when there are too many events in a day
  events: allTheEvents,
  eventOverlap: false // to avoid overlapping
});

});