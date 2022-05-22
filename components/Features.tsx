/* This example requires Tailwind CSS v2.0+ */
import { UsersIcon, GlobeAltIcon, LightningBoltIcon, CurrencyDollarIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Completely open-source',
    description:
      'Performave is completely open-source and available on GitHub. You can view the source code, contribute, or report issues.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Cutting-Edge technology',
    description:
      'Performave is built with the latest web technologies and is designed to run quickly. It is built with a focus on performance and scalability.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Freemium',
    description:
      'Performave is free to use, but we do ask that you consider supporting our work. We are a non-profit and we rely on donations to keep our services running.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'For the community',
    description:
      'Performave is built by the community for the community, and we welcome all feedback and contributions. We are always looking for new features and ways to improve our product.',
    icon: UsersIcon,
  },
]

const Features = () => {
  return (
    <div className="py-20 bg-white" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Providing a better world for everyone
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Performave wants everyone to have access to high quality tools at the fraction of the price.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features
