import Image from "next/image";
export default function Team() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Meet our team of passionate interior designers who bring creativity, expertise, and a keen eye for detail to every project.</p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    <li>
                        <div className="flex items-center gap-x-6">
                            <div className="h-32 w-32 rounded-full overflow-hidden">
                                <Image
                                    src="/Nikola.png"
                                    alt="Profile Picture"
                                    width={128}
                                    height={128}
                                    objectFit="cover"
                                />
                            </div>                 <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Nikola RAPAIĆ</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">CEO / Founder</p>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Bachelor of Architecture</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <div className="h-32 w-32 rounded-full overflow-hidden">
                                <Image
                                    src="/Tamara.png"
                                    alt="Profile Picture"
                                    width={128}
                                    height={128}
                                    objectFit="cover"
                                />
                            </div>
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Tamara SIMOVIĆ</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Interior Design Expert</p>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Bachelor of Architecture</p>

                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="flex items-center gap-x-6">
                            <div className="h-32 w-32 rounded-full overflow-hidden">
                                <Image
                                    src="/Mia.png"
                                    alt="Profile Picture"
                                    width={128}
                                    height={128}
                                    objectFit="cover"
                                />
                            </div>                  <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Mia MIHAILOVIĆ</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Interior Design Expert</p>

                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Graphic and Product Designer</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <div className="h-32 w-32 rounded-full overflow-hidden">
                                <Image
                                    src="/Marija.png"
                                    alt="Profile Picture"
                                    width={128}
                                    height={128}
                                    objectFit="cover"
                                />
                            </div>                   <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">Marija TOPIĆ</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Interior Design Expert</p>
                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Bachelor of Architecture</p>

                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    );
}


