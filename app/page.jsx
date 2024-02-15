import prisma from './db'
import { updateTodo, deleteTodo } from './actions'
import SubmitButton from './components/SubmitButton'
import AddTodoForm from './components/AddTodoForm'


async function getTodos(){

  const todos = await prisma.todo.findMany({
    select: {
      id: true,
      message: true,
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return todos
}


export default async function Home() {

  const todos = await getTodos()
  
  // server actions can go here or in separate file


  
  return (
    <div className='bg-black text-white h-screen flex flex-col gap-8 justify-center items-center'>

      <AddTodoForm />

      <div className={`flex flex-col gap-2`}>

        {todos.map(todo => (
          <div key={todo.id} className={`flex gap-2`}>

            <form action={updateTodo} className={`flex gap-3`}>
              <input name='message' defaultValue={todo.message} />
              <input name='id' hidden value={todo.id} />
              <SubmitButton title='Save' pendingTitle='Saving...' /> 
            </form>

            <form action={deleteTodo} className={`flex gap-3`}>
              <input name='id' hidden value={todo.id} />
              <SubmitButton title='Del' pendingTitle='Deleting...' /> 
            </form>

          </div>
        ))}

      </div>

    </div>  
  )
}
