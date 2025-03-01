import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Get started with Archcaves today
                </h2>
                <p className="mt-3 text-gray-600">
                    Hire experts to create your next idea, follow best practices, remove roadblocks, and deliver on schedule.
                </p>
                <NavLink
                    href="/get-started"
                    className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                >
                    Start building
                </NavLink>
                <div className="mt-6 text-gray-600">
                    <p>Email us at: <a href="mailto:support@archcaves.com" className="text-gray-800 font-medium">support@archcaves.com</a></p>
                    <p>Call us: <span className="text-gray-800 font-medium">+1 (123) 456-7890</span></p>
                    <p>Follow us on <a href="#" className="text-gray-800 font-medium">Twitter</a> and <a href="#" className="text-gray-800 font-medium">LinkedIn</a></p>
                </div>
            </div>
        </div>
    </SectionWrapper>
);

export default FooterCTA;
