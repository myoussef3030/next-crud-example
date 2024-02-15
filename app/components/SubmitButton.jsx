'use client'
import { useFormStatus } from 'react-dom'


const SubmitButton = ({title, pendingTitle}) => {
  
    const { pending } = useFormStatus()
  
  
    return (
        <button 
            type="submit"
            className='bg-blue-800 text-white px-6 py-[9px] cursor-pointer' 
        >
            {pending ? pendingTitle : title}
        </button>
    )
}

export default SubmitButton