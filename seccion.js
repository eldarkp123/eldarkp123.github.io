document.getElementById('formEstudiante').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const materias = document.getElementById('materias').value;
    const seccion = document.getElementById('seccion').value;

    // Validar que todos los campos están completos
    if (nombre === '' || materias === '' || seccion === '') {
        alert('Por favor, complete todos los campos.');
        return;
    }

    // Crear el elemento de la lista
    const lista = document.getElementById('listaEstudiantes');
    const li = document.createElement('li');
    li.textContent = `Nombre: ${nombre}, Materias: ${materias}, Sección: ${seccion}`;

    // Agregar el estudiante a la lista
    lista.appendChild(li);

    // Limpiar el formulario
    document.getElementById('formEstudiante').reset();
});