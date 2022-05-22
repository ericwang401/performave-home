import Image from 'next/image'

const posts = [
    {
        title: 'Stratum Panel',
        href: 'https://github.com/StratumPanel/Stratum-Panel',
        category: 'Productivity & Business',
        description:
            'An open-source panel created with Vue and Laravel. It is a simple and easy to use panel for you or your clients to manage their servers in Proxmox.',
        imageUrl:
            'https://cdn.discordapp.com/attachments/773055094396026880/926901843274137600/unknown.png',
    },
    {
        title: 'Pane Looking Glass',
        href: 'https://github.com/ericwang401/pane',
        category: 'Productivity & Business',
        description:
            'Pane allows people to securely benchmark your server\'s network performance. It displays basic information about your servers in a beautiful and elegant way.',
        imageUrl:
            'https://camo.githubusercontent.com/b484e029667a2543162abf898378320622d810b9d0b7327440ab058b51b22b41/68747470733a2f2f696d6775722e636f6d2f6a397870504a4c2e706e67',
    },
    {
        title: 'Echo Soundboard',
        href: 'https://github.com/ericwang401/echo-soundboard',
        category: 'Productivity',
        description:
            'A great tool for playing and mixing sound effects. Echo allows you to troll your friends in-game with a variety of sounds.',
        imageUrl:
            'https://camo.githubusercontent.com/9fc36c76b2aa004dc52af1332dc59da0c06407004b689dc81a068f6305a062d4/68747470733a2f2f692e696d6775722e636f6d2f6c6c5663704c632e706e67',
    },
]

const Products = () => {
    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8" id="our-products">
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Our Products</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        Built for the modern web, we&apos;re constantly pushing the boundaries of what&apos;s possible.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <div className='relative h-48 w-full overflow-hidden'>
                                    <Image layout='fill' className="object-cover" src={post.imageUrl} alt="" />
                                </div>
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-blue-600">
                                        {post.category}
                                    </p>
                                    <a href={post.href} className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products