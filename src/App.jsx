import { useState, useEffect } from 'react'
import './App.css'
import Tarea from './Tarea'
import FormularioTarea from './FormularioTarea'

function App() {
  // Estado: la lista completa de tareas, cargada desde localStorage si existe
  const [tareas, setTareas] = useState(() => {
    const datosGuardados = localStorage.getItem("tareasReact")
    return datosGuardados ? JSON.parse(datosGuardados) : []
  })

  // Estado: el texto que el usuario está escribiendo en el input
  const [textoNuevo, setTextoNuevo] = useState("")

  // Cada vez que "tareas" cambia, se guarda automáticamente en localStorage
  useEffect(() => {
    localStorage.setItem("tareasReact", JSON.stringify(tareas))
  }, [tareas])

  // Marca o desmarca una tarea como completada, sin mutar el array original
  function toggleCompletada(index) {
    const nuevasTareas = tareas.map((tarea, i) => {
      if (i === index) {
        return { ...tarea, completada: !tarea.completada }
      }
      return tarea
    })
    setTareas(nuevasTareas)
  }

  // Elimina una tarea específica usando filter (sin mutar el array original)
  function eliminarTarea(index) {
    const nuevasTareas = tareas.filter((tarea, i) => i !== index)
    setTareas(nuevasTareas)
  }

  // Agrega una tarea nueva al final de la lista
  function agregarTarea() {
    if (textoNuevo === "") {
      return
    }

    const nuevaTarea = { texto: textoNuevo, completada: false }
    setTareas([...tareas, nuevaTarea])
    setTextoNuevo("")
  }

  return (
    <div>
      <h1>Mi lista de tareas</h1>

      {/* Componente del formulario, recibe lo que necesita como props */}
      <FormularioTarea
        textoNuevo={textoNuevo}
        setTextoNuevo={setTextoNuevo}
        agregarTarea={agregarTarea}
      />

      <ul>
        {/* Por cada tarea, se crea un componente Tarea con sus props correspondientes */}
        {tareas.map((tarea, index) => (
          <Tarea
            key={index}
            tarea={tarea}
            index={index}
            toggleCompletada={toggleCompletada}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </ul>
    </div>
  )
}

export default App