import Image from 'next/image'

const SupportUs = () => {
    return <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
                <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                    <div className="lg:self-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            <span className="block">Please donate to us</span>
                        </h2>
                        <p className="mt-4 text-lg leading-6 text-indigo-200">
                            Our projects are developed with our free time and the community. We rely on donations to keep our services running.
                        </p>
                        <a
                            href="https://www.patreon.com/performave"
                            className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-blue-600 hover:bg-blue-50"
                        >
                            Donate now
                        </a>
                    </div>
                </div>
                <div className="relative -mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
                    <Image
                        layout='fill'
                        className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                        src="https://imgur.com/DnNJ3uR.png"
                        alt="Patreon"
                    />
                </div>
            </div>
        </div>
    </div>
}

export default SupportUs