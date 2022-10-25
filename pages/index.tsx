/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'
import { ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Button from 'components/ui/Button';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Player from 'components/Player';
import React, { useState, useEffect } from 'react';



const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]


const features = [
    {
      name: 'Math',
      description:
        'Learn math concepts with our AI Coach and get real-time help with your math homework.',
      icon: GlobeAltIcon,
    },
    {
      name: 'Code',
      description:
        'Get instant help with your coding projects, debug your code, and learn new coding concepts',
      icon: ScaleIcon,
    },
    {
      name: 'Essays',
      description:
        'Get help writing your essays, from brainstorming to editing. Our AI Coach will help you every step of the way.',
      icon: BoltIcon,
    },
    {
      name: 'Science',
      description:
        'Get help with your science homework, from choosing a topic to writing your lab report.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      name: 'Research Paper',
      description:
        'Get help with your research paper from start to finish. Our AI Coach will help you choose a topic, do your research, and write your paper.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      name: 'History',
      description:
        'Get help with your history homework, from choosing a topic to writing your essay.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      name: 'Cover Letter & Resume',
      description:
        'Get help with writing your cover letter and resume. Our AI Coach will help you showcase your skills and experience in the best way possible..',
      icon: ChatBubbleBottomCenterTextIcon,
    },
    {
      name: 'Any School Problem',
      description:
        'Need help with any school problem? MyStudyPal.ai is here to help. Get instant help with your homework, from choosing a topic to writing your essay.',
      icon: ChatBubbleBottomCenterTextIcon,
    },
  ]



export default function HomePage(this: any) {
  const [showPlayer, setShowPlayer] = useState(false);

    const openPlayer = () => {
        setShowPlayer(true);
    };

    const closePlayer = () => {
        setShowPlayer(false);
    };

  
  

  return (
    
    <div className="relative overflow-hidden bg-white">
          {showPlayer && (
                <Player
                    video="/MyStudypalDemo.mp4"
                    title="MyStudypal.ai Demo"
                    onClose={closePlayer}
                />
            )}
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          /* I can add more content up here */

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Get the help you need</span>{' '}
                <span className="block text-indigo-600 xl:inline">when you need it.</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              If you're struggling with school work, you're not alone. MystudyPal is here to help. We offer AI-powered assistance for essays, math problems, coding, and more. Get the help you need, when you need it.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="signin"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                <button
                                        onClick={openPlayer}
                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                                    >
                                        Live demo
                  </button>
                
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="image-container">
  <img width="1280" height="720" src="logo.jpg" alt="Mystudypal.ai_Logo" ></img>
  </div>
      </div>
      <div>
  <div className="bg-white py-12">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="text-lg font-semibold text-indigo-600">Features</h2>
      <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl">
        The Smartest and Easist way to help with school work
      </p>
      <p className="mt-4 max-w-2xl text-md text-gray-500 lg:mx-auto">
      MyStudyPal.ai is the smartest and easiest way to get help with your school work. With our AI Coach, you can get help with your homework,  projects, essays, and more. You'll get instant help, 24/7.
      </p>
    </div>

    <div className="mt-10">
      <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
        {features.map((feature) => (
          <div key={feature.name} className="relative">
            <dt>
              <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
  <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-indigo-600">Start your free trial today.</span>
        </h2>
      
        <Button>Click "Get Started" below!</Button>
      
          
        
        
      </div>
    </div>
    <Button>Get Started!</Button> 
</div>
</div>

     
</div>

)
}

