import React, { useState } from 'react'
import { Badge } from 'flowbite-react';
import { Card } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import CardInformation from './edit/cardEditProfile';
import CardAddSkill from './add/cardAddSkill';
const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      delete: 'hover:bg-red-400',
      edit: 'hover:bg-yellow-300  ',
      add: 'hover:bg-emerald-300'
    },
  },
};
const CardSkill = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Skills
        </h5>
        <span className="flex items-center">
      <Flowbite theme={{ theme: customTheme }}>
          <Button color="add" className="w-5 h-5" onClick={() => props.setOpenModal('form-add-skill')}>
          <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
        </Button>
        <Modal show={props.openModal === 'form-add-skill'} size="lg" popup onClose={() => props.setOpenModal(undefined)}>
          <Modal.Header />
          <Modal.Body>
            <CardAddSkill/>
          </Modal.Body>
        </Modal>
      </Flowbite>
    </span>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm  text-gray-900 dark:text-gray-400">
                  Javascript
                </p>
              </div>
          <div className="flex items-center">
             <Flowbite theme={{ theme: customTheme }}>
              <Button color="delete" className="w-5 h-5" onClick={() => props.setOpenModal('form-elements')}>
            <svg className="w-2 h-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            </Button>
            <Modal show={props.openModal === 'form-elements'} size="lg" popup onClose={() => props.setOpenModal(undefined)}>
              <Modal.Header />
              <Modal.Body>
                <CardInformation/>
              </Modal.Body>
            </Modal>
             </Flowbite>
          </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm  text-gray-900 dark:text-gray-400">
                  C++
                </p>
              </div>
              <div className="flex items-center">
             <Flowbite theme={{ theme: customTheme }}>
              <Button color="delete" className="w-5 h-5" onClick={() => props.setOpenModal('form-elements')}>
            <svg className="w-2 h-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            </Button>
            <Modal show={props.openModal === 'form-elements'} size="lg" popup onClose={() => props.setOpenModal(undefined)}>
              <Modal.Header />
              <Modal.Body>
                <CardInformation/>
              </Modal.Body>
            </Modal>
             </Flowbite>
          </div>
            </div>
          </li>
       
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm  text-gray-900 dark:text-gray-400">
                  Java
                </p>
              </div>
              <div className="flex items-center">
             <Flowbite theme={{ theme: customTheme }}>
              <Button color="delete" className="w-5 h-5" onClick={() => props.setOpenModal('form-elements')}>
            <svg className="w-2 h-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            </Button>
            <Modal show={props.openModal === 'form-elements'} size="lg" popup onClose={() => props.setOpenModal(undefined)}>
              <Modal.Header />
              <Modal.Body>
                <CardInformation/>
              </Modal.Body>
            </Modal>
             </Flowbite>
          </div>
            </div>
          </li>
          <li className="pb-0 pt-3 sm:pt-4">
            <div className="flex items-center space-x-4">
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm  text-gray-900 dark:text-gray-400">
                  Golang
                </p>
              </div>
              <div className="flex items-center">
             <Flowbite theme={{ theme: customTheme }}>
              <Button color="delete" className="w-5 h-5" onClick={() => props.setOpenModal('form-elements')}>
            <svg className="w-2 h-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            </Button>
            <Modal show={props.openModal === 'form-elements'} size="lg" popup onClose={() => props.setOpenModal(undefined)}>
              <Modal.Header />
              <Modal.Body>
                <CardInformation/>
              </Modal.Body>
            </Modal>
             </Flowbite>
          </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  //   <Card className='ml-3'>
  //   <div className="flex flex-col">
  //   <div className="mb-4 mt-0">
  //     <h1 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
  //       Skills
  //     </h1>
  //   </div>
  //     <div className="flex  mb-4 items-center justify-space">
  //     <ul className=" divide-gray-200 dark:divide-gray-700">
        
  //       <li className="py-3 sm:py-4">
  //         <div className="flex items-center space-x-4">
  //         <div className="flex flex-wrap">
  //         <Badge color="info" className='mr-2 mb-2'>
  //          ReactJs
  //        </Badge>
  //         <Badge color="failure" className='mr-2 mb-2'>
  //          Angular
  //        </Badge>
  //         <Badge color="gray" className='mr-2 mb-2'>
  //          PostgreSQL
  //        </Badge>
  //         <Badge color="success" className='mr-2 mb-2'>
  //          NodeJs
  //        </Badge>
  //         <Badge color="warning" className='mr-2 mb-2'>
  //          Javasrcipt
  //        </Badge>
  //         <Badge color="info" className='mr-2 mb-2'>
  //          Default
  //        </Badge>
  //         </div>
  //       </div>
  //     </li>
  //     </ul>
  //   </div>
  //   </div>
  // </Card>
  )
}

export default CardSkill