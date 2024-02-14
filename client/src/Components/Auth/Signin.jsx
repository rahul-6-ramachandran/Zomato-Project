import { Dialog, Transition } from '@headlessui/react'
import { Fragment,} from 'react'
import { FcGoogle } from "react-icons/fc"

export default function SignIn({isOpen, setIsOpen}) {
  

  function closeModal() {
    setIsOpen(false)
  }


  return (
    <>
      

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  
                  <div className="mt-2 w-full flex flex-col gap-2">
                    
                    <form action="">
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' placeholder='email@email.com'
                            className='w-full border border-gray-400 px-3 py-2 rounded-lg  focus:outline' />

                        </div>
                        <div className='flex w-full flex-col gap-2'>
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' placeholder='*******'
                            className='w-full border border-gray-400 px-3 py-2 rounded-lg  focus:outline' />
                          
                          <div className="w-full bg-zomato-400 text-white py-3 rounded-lg text-center">
                        Sign In
                   
                   </div>
                   <button className='rounded-lg py-2 justify-center flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-200'>
                        Sign In With Google <FcGoogle/>
                    </button>
                        </div>
                       
                       
                    </form>
                  </div>

                
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
