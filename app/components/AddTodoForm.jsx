'use client'
import { addTodo } from '../actions'
import SubmitButton from './SubmitButton'
import { useRef } from 'react'
import { useFormState } from 'react-dom'

const AddTodoForm = () => {
  
    const formRef = useRef()

    const [state, formAction] = useFormState(addTodo, null)
  
    return (
        <div className={``} >

            <form 
                ref={formRef}
                action={async (formData) => {                    
                    await formAction(formData)
                    formRef.current.reset()
                }}
            >

                <div className={`focus-within:ring-2 ring-sky-700`}>
                <input 
                    name="message"
                    placeholder='Enter value' 
                />
                <SubmitButton title='Add' pendingTitle='Adding...' />

                <p className='text-red-700'>{state?.message}</p>
                </div>
            </form>
                  
  
        </div>
    )
}

export default AddTodoForm