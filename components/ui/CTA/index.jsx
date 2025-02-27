import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import home1 from "../../../public/home.png"
import home2 from "../../../public/home2.svg"
import home3 from "../../../public/home3.png"
import Image from "next/image"

const CTA = () => {
    return (
        <SectionWrapper id="cta" className="pb-0">
            <div className="custom-screen space-y-20">
                {/* First Section */}
                <div className="flex flex-col sm:flex-col lg:flex-row items-center gap-x-12">
                    <div className="flex-1">
                        <Image src={home2} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Create Successful Business Models with Our IT Solutions
                        </h2>
                        <p className="mt-3 text-gray-600">
                            Archcaves, a software development company, helps to digitize businesses by focusing on client’s business challenges, needs. We value close transparent cooperation and encourage our clients to participate actively in the project development life cycle.
                        </p>
                        <NavLink
                            href="/get-started"
                            className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                        >
                            Get started
                        </NavLink>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-t border-gray-300 my-10" />

                {/* Second Section */}
                <div className="flex flex-col sm:flex-col lg:flex-row-reverse items-center gap-x-12">
                    <div className="flex-1">
                        <Image src={home1} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Create Successful Business Models with Our IT Solutions
                        </h2>
                        <p className="mt-3 text-gray-600">
                            Archcaves, a software development company, helps to digitize businesses by focusing on client’s business challenges, needs. We value close transparent cooperation and encourage our clients to participate actively in the project development life cycle.
                        </p>
                        <NavLink
                            href="/get-started"
                            className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                        >
                            Get started
                        </NavLink>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-t border-gray-300 my-10" />

                {/* Third Section */}
                <div className="flex flex-col sm:flex-col lg:flex-row items-center gap-x-12">
                    <div className="flex-1">
                        <Image src={home3} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                    </div>
                    <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                        <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Create Successful Business Models with Our IT Solutions
                        </h2>
                        <p className="mt-3 text-gray-600">
                            Archcaves, a software development company, helps to digitize businesses by focusing on client’s business challenges, needs. We value close transparent cooperation and encourage our clients to participate actively in the project development life cycle.
                        </p>
                        <NavLink
                            href="/get-started"
                            className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                        >
                            Get started
                        </NavLink>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default CTA
