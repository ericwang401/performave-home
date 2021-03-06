/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import Image from 'next/image'

const navigation = [
    { name: 'About Us', href: '#about-us' },
    { name: 'Products', href: '#our-products' },
    { name: 'Platforms', href: '#platforms' },
]

const Hero = () => {
    return (
        <div className="bg-gray-50">
            <div className="relative overflow-hidden">

                <div className="relative pt-6 pb-16 sm:pb-24">
                    <Popover>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6">
                            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                                <div className='hidden grow md:flex items-center'>
                                    <h3 className='font-bold text-lg absolute'>Performave</h3>
                                </div>
                                <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                                    <div className="flex items-center justify-between w-full md:w-auto">
                                        <a href="#">
                                            <span className="sr-only">Workflow</span>
                                            <Image
                                                layout='fill'
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                alt=""
                                                className="h-8 sm:h-10"
                                            />
                                        </a>
                                        <div className="-mr-2 flex items-center md:hidden">
                                            <Popover.Button className="bg-gray-50 z-[1] rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Open main menu</span>
                                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden grow-0 md:flex md:space-x-10">
                                    {navigation.map((item) => (
                                        <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                                <div className='grow' />
                                {/* <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                                    <span className="inline-flex rounded-md shadow">
                                        <a
                                            href="#"
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500"
                                        >
                                            Log in
                                        </a>
                                    </span>
                                </div> */}
                            </nav>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                            >
                                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                                    <div className="px-5 pt-4 flex items-center justify-between">
                                        <div className="relative h-8 w-8">
                                            <Image
                                                layout='fill'
                                                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                                alt=""
                                            />
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close main menu</span>
                                                <XIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="px-2 pt-2 pb-3 space-y-1">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                    {/* <a
                                        href="#"
                                        className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700"
                                    >
                                        Log in
                                    </a> */}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
                        <div className="text-center">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block">Empowering the world with</span>
                                <span className="block text-blue-600">open source</span>
                            </h1>
                            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                                We&apos;re building a community of developers and designers who are passionate about open source and building products that make a difference.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex flex-col" aria-hidden="true">
                        <div className="flex-1" />
                        <div className="flex-1 w-full bg-gray-800" />
                    </div>
                    <div className="relative rounded-lg shadow-lg max-w-7xl mx-auto px-4 sm:px-6">
                            <Image
                                layout='fill'
                                src="https://tailwindui.com/img/component-images/top-nav-with-multi-column-layout-screenshot.jpg"
                                alt="App screenshot"
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero