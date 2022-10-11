/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon,PaperClipIcon } from '@heroicons/react/24/outline'
import React, { useState, useEffect } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import styled from 'styled-components'
import  startListening  from "react-speech-recognition";
import { getAnswer } from './api/openai';
import Button from 'components/ui/Button';
import { Spin } from 'antd';
import debounce from 'lodash.debounce';





const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    text-align: center;
    margin-bottom: 16px;
  }

  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 300px;
  }

  input[type='submit'] {
    background-color: #4caf50;
    color: white;
    padding: 8px;
    border: none;
    border-radius: 4px;
    width: 300px;
    cursor: pointer;
  }
`

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  

]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}


export default function Dashboard(props: any) {
  const [selected, setSelected] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState('');
  const [subject, setSubject] = useState('');


  const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setSelected(e.currentTarget.innerHTML);
    setSubject(e.currentTarget.innerHTML);
  };
  const handleResultChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResult(e.target.value);
  };
  const handleGetAnswer = async () => {
    setLoading(true);
    const answer = await getAnswer(result, subject);
    setAnswer(answer);
    setLoading(false);
  };
  const debouncedGetAnswer = debounce(handleGetAnswer, 500);

  useEffect(() => {
    const interval = setInterval(() => {
      setResult(result + '');
    }, 1000);
    return () => clearInterval(interval);
  }, [result]);
    
    
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                    <h3/>
                        Mystudypal
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

          <div className="flex">  
        <div className="left-sidebar w-1/4 bg-black p-4">
        <p className="tooltip-text">Use the hints on each subject to enter your question to get the best answer</p>
        <p className="click-to-get-help"> <span role="img" aria-label="">⬇ </span>Click a subject<span role="img" aria-label=""> ⬇</span></p>
        <ul className="list">
        <OverlayTrigger placement="top" overlay={<Tooltip id="math">Type your math problem and the kind of math problem</Tooltip>}>
   <li className="list-button" data-for="math" onClick={handleClick}>📐 Math</li>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip id="science">What is the Topic of your Science problem, What kind of Science, what grade level?</Tooltip>}>
   <li className="list-button" data-for="science" onClick={handleClick}>🔬 Science</li>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip id="english">What's the Topic of your English problem, What kind of English, what grade level?</Tooltip>}>
   <li className="list-button" data-for="english" onClick={handleClick}>📚 English</li>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip id="history">What's the Topic of your History problem, What kind of History, what grade level?</Tooltip>}>
   <li className="list-button" data-for="history" onClick={handleClick}>🏛 History</li>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip id="foreignlanguage">What is the Topic of your language problem and level?</Tooltip>}>
   <li className="list-button" data-for="foreignlanguage" onClick={handleClick}>🌎 Foreign Language</li>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip id="code">What is your Code problem, What is the program language?</Tooltip>}>
   <li className="list-button" data-for="code" onClick={handleClick}>💻 Code</li>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip id="essay">What is the Topic of your essay and what kind of essay it is?</Tooltip>}>
   <li className="list-button" data-for="essay" onClick={handleClick}>📝 Essay</li>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip id="article">What is the Topic of your article, What kind of article, number of words, what grade level?</Tooltip>}>
   <li className="list-button" data-for="article" onClick={handleClick}>📰 Article</li>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip id="researchpaper">What is the Topic of your research paper, What kind of research paper, Number of words, what grade level?</Tooltip>}>
   <li className="list-button" data-for="researchpaper" onClick={handleClick}>📃 Research Paper</li>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip id="medical">What is the Topic of your medical problem, What kind of medical, what grade level?</Tooltip>}>
   <li className="list-button" data-for="medical" onClick={handleClick}>🏥 Medical</li>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip id="health">What is your Health problem, What kind of Health, what grade level?</Tooltip>}>
   <li className="list-button" data-for="health" onClick={handleClick}>🏋 Health</li>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip id="resume">What is your name, What's your email, What is your address,
What is your phone number, What is the position you are applying for, What is the company you are applying to, What are the qualifications for the position ?</Tooltip>}>
   <li className="list-button" data-for="resume" onClick={handleClick}>📄 Build Resume</li>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip id="coverletter">What is your name, What's your email, What is your address,
What is your phone number, What is the position you are applying for?</Tooltip>}>
   <li className="list-button" data-for="coverletter" onClick={handleClick}>📧 Write Cover Letter</li>
</OverlayTrigger>
<OverlayTrigger placement="top" overlay={<Tooltip id="other">What is your problem, What kind of problem and what grade level</Tooltip>}>
   <li className="list-button" data-for="other" onClick={handleClick}>🏫 Any Other School Problem</li>
</OverlayTrigger>       
</ul>
</div>
<div className="result-section w-3/4 bg-gray-200 p-4">
<div className="board">
    {selected !== '' && <h2>You selected: {selected}</h2>}
    <textarea className="question" placeholder="Write your question here" onChange={handleResultChange} value={result} disabled={selected === ''}></textarea>
    {loading && <Button className="answer-button disabled">Your Answer is Being Generated Please Wait</Button>}
    {!loading && <Button className="answer-button" onClick={debouncedGetAnswer} disabled={selected === ''}>Get Answer</Button>}   
    <div className="result-area scrollable">
    {loading ? <Spin tip="Calculating..."/> : answer ? <p>{answer}</p> : <p>No Answer</p>}  
      </div>
    
          </div>
          
 
      </div>
    
        </div>
        
          </div>
          
        </main>
        
      </div>
      
    </>
  )
}
