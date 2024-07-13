import AccordianCard from "./AccordianCard";


const Accordion = () => {
    return (
        <div className="text-[#E4E8F7] mt-[68px] md:mt-[80px] lg:mb-56 max-w-[1240px] mx-auto">
            <div className="lg:w-1/2 mx-auto mb-[84px]">
                <p className="md:text-[48px] uppercase text-[24px] boldText font-bold md:leading-[56px] tracking-[0.8px] semibold text-center">
                    Frequently Asked Questions (FAQ)
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div>
                    <h1 className="text-[48px] bold leading-[48px]">Have Questions ?</h1>
                    <p className="text-[20px] normal leading-[25.6px] mt-[30px]">Have more questions ? Book a free strategy call</p>
                    <button className='bg-[#25AAE1] py-4 px-6 text-white rounded-[16px] normal mt-[51px]'>Book a Call</button>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <AccordianCard
                        title="Q. What types of videos do you specialize in editing?"
                        description="We specialize in editing a wide range of videos , including but not limited to promotional content, vlogs ,interviews, and event coverage."
                    />
                    <AccordianCard
                        title="Q. How long does the video editing process typically take?"
                        description="We specialize in editing a wide range of videos , including but not limited to promotional content, vlogs ,interviews, and event coverage."
                    />
                    <AccordianCard
                        title="Q. What file formats do you accept for editing ?"
                        description="We specialize in editing a wide range of videos , including but not limited to promotional content, vlogs ,interviews, and event coverage."
                    />
                    <AccordianCard
                        title="Q.Can I provide specific instructions for the editing style and preferences?"
                        description="We specialize in editing a wide range of videos , including but not limited to promotional content, vlogs ,interviews, and event coverage."
                    />
                    <AccordianCard
                        title="Q. What steps are involved in your video editing style and preferences?"
                        description="We specialize in editing a wide range of videos , including but not limited to promotional content, vlogs ,interviews, and event coverage."
                    />
                    <AccordianCard
                        title=" Q. Is there a limit to the revisions i can request for my edited video ?"
                        description="We specialize in editing a wide range of videos , including but not limited to promotional content, vlogs ,interviews, and event coverage."
                    />

                </div>
            </div>
        </div>
    );
};

export default Accordion;
