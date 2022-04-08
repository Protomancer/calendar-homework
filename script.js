/* Needed a variable to store the time blocks*/
let dayPlanner = [
    {
        id: '0',
        hour: '09',
        time: '09',
        meridiem: 'am',
        note: '',
    },
    {
        id: '1',
        hour: '10',
        time: '10',
        meridiem: 'am',
        note: '',
    },
    {
        id: '2',
        hour: '11',
        time: '11',
        meridiem: 'am',
        note: '',
    },
    {
        id: '3',
        hour: '12',
        time: '12',
        meridiem: 'pm',
        note: '',
    },
    {
        id: '4',
        hour: '01',
        time: '13',
        meridiem: 'pm',
        note: '',
    },
    {
        id: '5',
        hour: '02',
        time: '14',
        meridiem: 'pm',
        note: '',
    },
    {
        id: '6',
        hour: '03',
        time: '15',
        meridiem: 'pm',
        note: '',
    },
    {
        id: '7',
        hour: '04',
        time: '16',
        meridiem: 'pm',
        note: '',
    },
    {
        id: '8',
        hour: '05',
        time: '17',
        meridiem: 'pm',
        note: ''
    },
    {
        id: '9',
        hour: '06',
        time: '18',
        meridiem: 'pm',
        note: '',
    }
]

/*sets current date and time to header*/
getDate();
/*set the style of the columns and rows*/
dayPlanner.forEach(function(thisHour) {
    let thisHourRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(thisHourRow);
    /*creates area for current time block.*/
    let timeSlotArea = $("<div>")
        .text(`${thisHour.hour}${thisHour.meridiem}`)
        .attr({
            "class": "col-md-1 hour"
    });
    /*should add schedule data into the text area*/
    let timeBlockNote = $("<div>")
        .attr({
            "class": "col-md-10 description p-0"
        });
    let notesData = $("<textarea>");
    timeBlockNote.append(notesData);
    notesData.attr("id", thisHour.id);
    if (thisHour.time < moment().format("HH")) {
        notesData.attr ({
            "class": "past", 
        })
    } else if (thisHour.time === moment().format("HH")) {
        notesData.attr({
            "class": "present"
        })
    } else if (thisHour.time > moment().format("HH")) {
        notesData.attr({
            "class": "future"
        })
    }
    /*show bootstrap button*/
    let saveNoteButton = $("<i class='far fa-save fa-lg'></i>")
    let saveNote = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    saveNote.append(saveNoteButton);
    thisHourRow.append(timeSlotArea, timeBlockNote, saveNote);
})
