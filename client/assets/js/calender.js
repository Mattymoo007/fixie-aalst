
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
    }
    ];


    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendarInteraction.Draggable

    // the dragable list
    var containerEl = document.getElementById('external-events-list');
    new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText.trim(),
        //   todo: get the duration-information from the selected tasks
          duration: '02:00'
        }
      }
    });

    var calendarEl = document.getElementById('calendar');


    var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
        header: {
        right: 'prev,next today', //positions the the prev/next button on the right 
        center: 'title', //sets the title of the month to center
        left: 'timeGridWeek,timeGridDay'
        // left: 'month,basicWeek,basicDay' //positions the the prev/next button on the left 
        // left: 'month' //positions the the prev/next button on the left 
      },
      defaultView: 'timeGridWeek',
      slotDuration: '00:30', // 2 hours
      // defaultDate: '2018-02-16',
      navLinks: true, // click on day/week names to navigate views
    //   editable: false,
    //   eventLimit: true, // add "more" link when there are too many events in a day
      events: allTheEvents,
      eventOverlap: false, // to avoid overlapping
      businessHours: [
        {
          daysOfWeek: [ 1, 2, 3, 4 ], // Monday, Tuesday, Wednesday
          startTime: '08:00', // 8am
          endTime: '18:00' // 6pm
        },
        {
          daysOfWeek: [ 4, 5 ], // Thursday, Friday
          startTime: '08:00', // 10am
          endTime: '16:00' // 4pm
        }
      ],
      nowIndicator: true,
      
      // the drop-function:  
    //   editable: true,
      droppable: true, // this allows things to be dropped onto the calendar
      drop: function(arg) {
          confirm("you are going to add this appointment");
          if (r == true) {
            arg.draggedEl.parentNode.removeChild(arg.draggedEl);
          };
        // remove the element from the "Draggable Events" list

        console.log("is dropped");
      }
    });

    calendar.render();

});