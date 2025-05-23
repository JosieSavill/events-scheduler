let currentDate = new Date();
        let selectedDate = null;

        function renderCalendar() {
            const monthYear = document.getElementById('month-year');
            const calendarDays = document.getElementById('calendar-days');
            calendarDays.innerHTML = '';

            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

            const firstDay = new Date(year, month, 1).getDay();
            const lastDate = new Date(year, month + 1, 0).getDate();

            // Add weekday headers
            const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            daysOfWeek.forEach(day => {
                const dayElement = document.createElement('div');
                dayElement.textContent = day;
                dayElement.classList.add('calendar-day');
                calendarDays.appendChild(dayElement);
            });

            // Add empty slots for days before the first day
            for (let i = 0; i < firstDay; i++) {
                const emptyDay = document.createElement('div');
                emptyDay.classList.add('calendar-day');
                calendarDays.appendChild(emptyDay);
            }

             // Add days of the month
             for (let day = 1; day <= lastDate; day++) {
                const dayElement = document.createElement('div');
                dayElement.textContent = day;
                dayElement.classList.add('calendar-day');
                dayElement.onclick = () => selectDate(day, month, year);
                calendarDays.appendChild(dayElement);
            }
        }

        function selectDate(day, month, year) {
            selectedDate = new Date(year, month, day);
            document.getElementById('selected-date').value = selectedDate.toDateString();
            document.querySelectorAll('.calendar-day').forEach(el => el.classList.remove('selected'));
            event.target.classList.add('selected');
        }

        function prevMonth() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        }

        function nextMonth() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        }

        function addTask() {
            const taskInput = document.getElementById('task-input').value;
            const taskList = document.getElementById('task-list');
            if (taskInput && selectedDate) {
                const li = document.createElement('li');
                li.textContent = `${taskInput} - ${selectedDate.toDateString()}`;
                taskList.appendChild(li);
                document.getElementById('task-input').value = '';
                document.getElementById('selected-date').value = '';
                selectedDate = null;
            } else {
                alert('Please enter a task and select a date.');
            }
        }

        // Initial render
        renderCalendar();


        
  const quotes = [
    "You don’t have to see the whole staircase, just take the first step.<br/> — Martin Luther King Jr.",
    "Success is the sum of small efforts, repeated day in and day out.<br/> — Robert Collier",
    "The secret of getting ahead is getting started.<br/> — Mark Twain",
    "Action is the foundational key to all success.<br/> — Pablo Picasso",
    "Don’t watch the clock; do what it does. Keep going.<br/> — Sam Levenson"
  ];

  const quoteElement = document.getElementById("inspirational-quote");

  function rotateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.innerHTML = quotes[randomIndex];
  }

  // Rotate immediately and then every 10 seconds
  rotateQuote();
  setInterval(rotateQuote, 1000 * 60 * 2);

function lightMode() {

}

  document.querySelector("#sun").addEventListener("click", lightMode)
