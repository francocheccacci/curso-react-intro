import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Textarea} from "@nextui-org/react";
import toast, { Toaster } from "react-hot-toast";
export default function ModalTodo({isOpen, onClose, todos, saveTodos}) {
  //const {isOpen } = useDisclosure();

  const addTodo = () => {
    // agregar un todo al local storage
    const newTodos = [...todos]
    // quiero traer el valor del input
    const todoText = document.getElementById('todoText').value

    if(todoText === ''){
      // cambiar los datos del modal
        toast.error('No puedes agregar una tarea vacia')
    }else{
        newTodos.push({text:todoText, completed:false})
        localStorage.setItem('TODOS_V1', JSON.stringify(newTodos))
        saveTodos(newTodos);
        toast.success('Tarea agregada') 
    }

       
}

  return (
    <>
    <Toaster position="bottom-center" 
    toastOptions={{
        // Define default options
        className: '',
        duration: 3000,
        style: {
          background: '#363636',
          color: '#fff',
        },
    success: {
          duration: 3000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}
      ></Toaster>
      <Modal className='bg-slate-950' backdrop={'blur'} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white  ">Agregar Todo</ModalHeader>
              <ModalBody>
               <Textarea id="todoText" placeholder="Aqui puedes agregar tus tareas..." />
              </ModalBody>
              <ModalFooter>
                <Button  color="danger" variant="bordered"  onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="success" variant="flat" onClick={addTodo} onPress={onClose}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export {ModalTodo};