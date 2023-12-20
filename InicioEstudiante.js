function showMalla() {
    console.log('showMalla() called'); // Agrega este log
    var mallaSection = document.getElementById('malla-section');
    mallaSection.style.display = 'block';

    // Inicializar FullCalendar
    $('#calendar').fullCalendar({
        // Configuración del calendario
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultDate: '2023-01-01', // Fecha de inicio por defecto
        defaultView: 'month', // Vista predeterminada al cargar
        editable: true,
        eventLimit: true, // Permite "más" en el botón de eventos
        views: {
            month: {
                // Muestra todos los meses
                titleFormat: 'MMMM YYYY',
                fixedWeekCount: false
            }
        },
        events: [
            // Puedes agregar eventos aquí
            {
                title: 'Evento de ejemplo',
                start: '2023-01-01T10:00:00',
                end: '2023-01-01T12:00:00'
            }
            // ... más eventos ...
        ]
    });
}
