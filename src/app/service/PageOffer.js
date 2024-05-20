import {React, useState} from 'react'

const pageOffer = () => {
    const [showModal, setShowModal] = useState(false);
  return (
        <div>
            <section className="py-16 bg-gray-800 text-white">
                <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-black p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold mb-4">Market Place Platform</h3>
                    <p className="font-normal mb-4">
                        Offering an online platform where consumers can browse and purchase locally sourced food products directly from farmers and producers.
                    </p>
                    <button
                        className="bg-yellow-600 text-white py-2 px-4 rounded shadow hover:bg-yellow-700 hover:underline"
                        onClick={() => setShowModal(true)}
                    >
                        Learn More
                    </button>
                    </div>

                    <div className="bg-black p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold mb-4">Website Development</h3>
                    <p className="font-normal mb-4">
                        Creating a user-friendly and visually appealing website for the food hub, showcasing its services, partners, and available products.
                    </p>
                    <a href="#" className="text-yellow-700 hover:underline">
                        Read More
                    </a>
                    </div>

                    <div className="bg-black p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold mb-4">Cross-Promotions and Partnerships</h3>
                    <p className="font-normal mb-4">
                        Collaborating with other local businesses, organizations, or events to cross-promote each other's products and services and expand reach within the community.
                    </p>
                    <a href="#" className="text-yellow-700 hover:underline">
                        Read More
                    </a>
                    </div>

                    <div className="bg-black p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold mb-4">Online Reputation Management</h3>
                    <p className="font-normal mb-4">
                        Monitoring online reviews and feedback about the food hub and responding promptly to maintain a positive reputation and address any concerns or complaints.
                    </p>
                    <a href="#" className="text-yellow-700 hover:underline">
                        Read More
                    </a>
                    </div>

                    <div className="bg-black p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold mb-4">Content Marketing</h3>
                    <p className="font-normal mb-4">
                        Creating and distributing valuable content such as blog posts, articles, and videos related to food production, sustainability, recipes, and local food initiatives to attract and retain customers.
                    </p>
                    <a href="#" className="text-yellow-700 hover:underline">
                        Read More
                    </a>
                    </div>

                    <div className="bg-black p-6 rounded-lg shadow">
                    <h3 className="text-2xl font-bold mb-4">Website Development</h3>
                    <p className="font-normal mb-4">
                        Creating a user-friendly and visually appealing website for the food hub, showcasing its services, partners, and available products.
                    </p>
                    <a href="#" className="text-yellow-700 hover:underline">
                        Read More
                    </a>
                    </div>
                </div>
                </div>
            </section>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                            Website Development
                            </h3>
                            <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                Creating a user-friendly and visually appealing website for the food hub, showcasing its services, partners, and available products.
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setShowModal(false)}
                        >
                        Close
                        </button>
                    </div>
                    </div>
                </div>
                </div>
            )}
        </div>
  )
}

export default pageOffer