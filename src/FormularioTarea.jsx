// Componente del formulario para agregar una nueva tarea.
// Recibe el texto actual, la función para actualizarlo, y la función para agregar
function FormularioTarea({ textoNuevo, setTextoNuevo, agregarTarea }) {
  return (
    <div>
      <input
        type="text"
        value={textoNuevo}
        onChange={(e) => setTextoNuevo(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <button onClick={agregarTarea}>Agregar</button>
    </div>
  )
}

export default FormularioTarea