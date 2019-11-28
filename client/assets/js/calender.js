$(document).ready(function() {
    
  let planTheFix = {
    totalTime: 60
  };

  // function to converts the totalTime to the format hh:mm , in order for the calander to accept it as a duration
  function timeConvert(min) {
    var hours = (min / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + ":" + rminutes;
  }
      
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
        title: 'timeslot taken',
        start: '2019-12-03T10:00:00',
        end: '2019-12-03T11:00:00'
    }
    ]


    var Calendar = FullCalendar.Calendar;
    var Draggable = FullCalendarInteraction.Draggable;

    // the dragable list
    var containerEl = document.getElementById('your-fix-list');
    new Draggable(containerEl, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        return {
          title: eventEl.innerText.trim(),
          //   todo: get the duration-information from the selected tasks
          duration: timeConvert(planTheFix['totalTime']),
          textColor: 'white',
          backgroundColor: 'black',
          editable: true,
          durationEditable: false,
          id: "myFix"
        }
      }
    });

    var calendarEl = document.getElementById('calendar');


    window.repairCalendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid', 'list' ],
      header: {
        right: 'prev,next today', //positions the the prev/next button on the right 
        center: 'title', //sets the title of the month to center
        left: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      defaultView: 'timeGridWeek',
      scrollTime: '09:00',
      firstDay: 1,
      validRange: function(nowDate) {
        return {
          start: nowDate.add(1, 'days'),
        };
      },
      validRange: function(currentDate) {
        // Generate a new date for manipulating in the next step
        var startDate = new Date(currentDate.valueOf());
        // Start at one day in the future
        startDate.setDate(startDate.getDate() + 1);
        return { start: startDate};
      },
      slotDuration: '00:30',
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
      drop: function(info) {
        // $('#your-fix').remove();
        info.draggedEl.parentNode.removeChild(info.draggedEl); // this is to delete only the draggable event itself
        planTheFix['startTime'] = info.date;
        $('.date .next').prop('disabled', false);
        // console.log("date::", JSON.stringify({startdate: pickedDate}))
      },
      eventDrop: function(info) {
        planTheFix['startTime'] = info.event.start;
        $('.date .next').prop('disabled', false);
        // console.log("date::", JSON.stringify({startdate: pickedDate}))
      },
      nowIndicator: true,
    });

    $('.date .next').click(function(e){
      // planTheFix['startTime'] = pickedDate;
      console.log(planTheFix);
      console.log("information that is saved here: startDate = "+planTheFix['startTime'])
    })

});