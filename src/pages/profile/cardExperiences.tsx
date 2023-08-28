'use client';
import { Card } from 'flowbite-react';
import {  Timeline } from 'flowbite-react';
import { useState } from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from 'flowbite-react';
import { Flowbite } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import CardAddExperience from './add/cardAddExperience';
const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      delete: 'hover:bg-red-400 text-slate-900 outline-none',
      edit: 'hover:bg-yellow-300 text-slate-900 outline-none',
      add: 'hover:bg-emerald-300 text-slate-900 outline-none'
    },
  },
};
export const CardExperiences = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };
  return (
    <Card>
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Experinces
        </h1>
        <span className="flex items-center">
        <Flowbite theme={{ theme: customTheme }}>
        <Button color="add" className="w-5 h-5" onClick={() => props.setOpenModal('form-add-experience')}>
        <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
        </svg>
        </Button>
        <Modal show={props.openModal === 'form-add-experience'} size="5xl" popup onClose={() => props.setOpenModal(undefined)}>
          <Modal.Header />
          <Modal.Body>
            <CardAddExperience/>
          </Modal.Body>
        </Modal>
      </Flowbite>
        </span>
      </div>
      
      <Timeline>
      <Timeline.Item>
        <Timeline.Point/>
        <Timeline.Content>
          <Timeline.Time>
            February 2022
          </Timeline.Time>
          <Timeline.Title>
          <div className="text-sm mb-2 font-semibold leading-none text-gray-900 dark:text-white flex justify-between items-center">
          <span>
            Application UI code in Tailwind CSS
          </span>
        <div className="flex items-center space-x-2">
          <Flowbite theme={{ theme: customTheme }}>
          <Button color="edit" className="w-5 h-5" onClick={() => props.setOpenModal('form-elements')}>
          <svg className="w-3 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z"/>
       </svg>
        </Button>
        <Modal  size="lg" popup onClose={() => props.setOpenModal(undefined)}>
          <Modal.Header />
          <Modal.Body>
            <CardAddExperience/>
          </Modal.Body>
        </Modal>
      </Flowbite>
      <Flowbite theme={{ theme: customTheme }}>
        <Button color="delete" className="w-5 h-5" onClick={() => props.setOpenModal('form-elements')}>
        <svg className="w-2 h-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
        </Button>
        <Modal size="lg" popup onClose={() => props.setOpenModal(undefined)}>
          <Modal.Header />
          <Modal.Body>
            <CardAddExperience/>
          </Modal.Body>
        </Modal>
      </Flowbite>
      </div>
  </div>
  </Timeline.Title>
          
          <Timeline.Body>
            <p className='text-sm'>
              Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
              E-commerce & Marketing pages.
            </p>
          </Timeline.Body>
         
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
    </Card>
  )
}
