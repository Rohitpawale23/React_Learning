
import AddToDo from './components/AddToDo'
import ToDos from './components/ToDos'

function App() {


  return (
    <div className='h-screen w-full bg-gray-900'>
      <h1 className='text-2xl text-center bg-amber-300'> ToDo List Using React Redux Toolkit</h1>
      <h2 className='text-center'>Learn about Redux Toolkit</h2>
      <AddToDo/>
      <ToDos/>
    </div>
  )
}

export default App
