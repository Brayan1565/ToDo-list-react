// Componente que representa UNA sola tarea de la lista.
// Recibe sus datos y funciones desde App a través de "props"
function Tarea({ tarea, index, toggleCompletada, eliminarTarea }) {
  return (
    <li>
      {/* Al hacer clic en el texto, se marca/desmarca como completada */}
      <span
        onClick={() => toggleCompletada(index)}
        style={{ textDecoration: tarea.completada ? "line-through" : "none" }}
      >
        {tarea.texto}
      </span>

      {/* Botón para eliminar esta tarea específica */}
      <button onClick={() => eliminarTarea(index)}>X</button>
    </li>
  )
}

export default Tarea