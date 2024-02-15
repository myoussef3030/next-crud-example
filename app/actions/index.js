'use server' 
import { revalidatePath, revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'
import prisma from '../db'



export async function addTodo(prevState, formData){

    try{
        const message = formData.get('message')

        await prisma.todo.create({
          data: {
            message: message
          }
        })
        revalidatePath('/')
    }
    catch(err){
        return {
            message: err?.message   
        }
    }
}


export async function updateTodo(formData){

    const messageId = formData.get('id') 
    const message = formData.get('message')
    
    await prisma.todo.update({
      where: {
        id: messageId,
      },
      data: {
        message: message
      }
    })

    revalidatePath('/')
}


export async function deleteTodo(formData){

    const messageId = formData.get('id') 

    await prisma.todo.delete({
      where: {
        id: messageId
      }
    })

    revalidatePath('/')
}

