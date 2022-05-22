const SocialMedia = () => {
    return <div className="py-20 bg-white" id="platforms">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    Check out our other platforms
                </p>
            </div>

            <div className='mt-10'>
                <div className='flex space-x-2 justify-center'>
                    <a href="https://github.com/ericwang401" className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
                        Github
                    </a>
                    <a href="https://www.patreon.com/performave" className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                        Patreon
                    </a>
                    <a href="https://discord.gg/23DhraTrSA" className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                        Discord
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default SocialMedia