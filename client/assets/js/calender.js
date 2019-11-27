
$(document).ready(function() {
    
// TODO: this information needs to come from the database

const allTheEvents = [
    {
        title: 'timeslot taken',
        start: '2019-11-28T14:00:00',
        end: '2019-11-28T16:00:00'
    },
    {
        title: 'timeslot taken',
        start: '2019-11-28T16:00:00',
        end: '2019-11-28T17:00:00'
    },
    {
        // id: 999,
        title: 'timeslot taken',
        start: '2019-11-28T10:00:00',
        end: '2019-11-28T11:00:00'
    },   
    {
        title: 'timeslot taken',
        start: '2019-11-29T09:00:00',
        end: '2019-11-29T10:00:00'
    },     
    {
        title: 'timeslot taken',
        start: '2019-11-29T10:00:00',
        end: '2019-11-29T11:00:00'
    },
    {
        title: 'timeslot taken',
        start: '2019-11-29T14:00:00',
        end: '2019-11-29T16:00:00'
    },
    {
        title: 'timeslot taken',
        start: '2019-12-03T16:00:00',
        end: '2019-12-03T17:00:00'
    },
    {
        // id: 999,
        title: 'timeslot taken',
        start: '2019-12-03T10:00:00',
        end: '2019-12-03T11:00:00'
    }
    ]


    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendarInteraction.Draggable;

    // the dragable list
    var containerEl = document.getElementById('external-events-list');
    new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText.trim(),
          //   todo: get the duration-information from the selected tasks
          duration: '02:00',
          textColor: 'white',
          backgroundColor: 'black',
          editable: true,
          durationEditable: false,
          id: "myFix"
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
      },
      defaultView: 'timeGridWeek',
      firstDay: 1,
      validRange: function(nowDate) {
        return {
          start: nowDate,
        };
      },
      slotDuration: '00:30', // 2 hours
      navLinks: true, // click on day/week names to navigate views
      editable: false,
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
      eventConstraint: 'businessHours', // to prevent that events can be dropped on business hours
      // the drop-function:  
      droppable: true, // this allows things to be dropped onto the calendar
      drop: function(arg) {
        arg.draggedEl.parentNode.removeChild(arg.draggedEl);
        // const dateAppointment = arg.dateStr;

        console.log(arg.date);
        console.log("date::", JSON.stringify({startdate: arg.date}))
        console.log(arg.dateStr);
        // console.log(calendarEl.getEventSources());
      },
      eventDrop: function(info) {
        console.log(info.event.start.getDay());
      },
      eventClick: function(info) {
        alert('Event: ' + info.event.title);
        alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
        alert('View: ' + info.view.type);
    
        // change the border color just for fun
        info.el.style.borderColor = 'red';
      },
      nowIndicator: true,
    });

    $

    calendar.render();

});