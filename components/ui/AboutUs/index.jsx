import SectionWrapper from "../../SectionWrapper";

const AboutUs = () => {
    const aboutContent = [
        {
            title: "Our Mission",
            description: "We aim to revolutionize the way businesses operate by providing cutting-edge solutions that enhance efficiency and drive success. Our mission is to empower companies with the tools they need to thrive in an ever-changing digital landscape."
        },
        {
            title: "Who We Are",
            description: "We are a team of passionate professionals dedicated to innovation and excellence. With years of experience across various industries, we bring together the best minds to create impactful solutions for businesses worldwide."
        },
        {
            title: "Our Values",
            description: "Integrity, innovation, and customer-centricity are at the heart of everything we do. We believe in building long-lasting relationships with our clients and helping them achieve their goals through trust and excellence."
        },
        {
            title: "What We Do",
            description: "From automation to AI-driven insights, we offer a range of services tailored to meet the unique needs of businesses. Our solutions are designed to streamline processes, reduce costs, and enhance productivity."
        },
        {
            title: "Our Vision",
            description: "To be the global leader in business solutions, transforming industries through innovation and cutting-edge technology. We envision a world where businesses operate seamlessly with the help of intelligent automation."
        }
    ];

    return (
        <SectionWrapper className="pb-0">
            <div id="aboutUs" className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-2xl sm:text-center md:mx-auto">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        About Us
                    </h2>
                    <p className="mt-3 text-gray-600">
                        Learn more about our journey, values, and what drives us to create innovative solutions.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {aboutContent.map((item, idx) => (
                            <li key={idx} className="bg-white border p-4 rounded-xl">
                                <h3 className="text-gray-800 font-semibold text-xl">{item.title}</h3>
                                <p className="mt-3 text-gray-700">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutUs;
