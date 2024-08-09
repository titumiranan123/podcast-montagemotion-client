import AccordianCard from "./AccordianCard";

const Accordion = () => {
    return (
        <div className="text-[#E4E8F7] lg:mt-0 lg:px-0 mt-[68px] md:mt-[80px] max-w-[1240px] mx-auto">
            <div className="lg:w-1/2 mx-auto mb-[84px] text-center">
                <p className="uppercase lg:text-[56px] md:text-[56px] text-[30px] font-bold md:leading-[56px] tracking-[0.8px]">
                    Frequently Asked Questions (FAQ)
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <h1 className="lg:text-[48px] md:text-[44px] text-[26px] font-bold leading-[30px] lg:leading-[48px]">
                        Have Questions?
                    </h1>
                    <p className="md:text-[20px] text-[16px] leading-[20px] md:leading-[25.6px] md:mt-2 ">
                        Have more questions? Book a free strategy call
                    </p>
                    <button className="bg-[#25AAE1] py-4 px-6 text-white rounded-[16px] mt-4 lg:mt-[30px] md:text-[20px] text-[14px]">
                        Book a Call
                    </button>
                </div>
                <div className="flex justify-center lg:items-center flex-col lg:-mt-8 mt-6 md:gap-0 gap-4">
                    <AccordianCard
                        title="Q: What kind of software will you use to create this video?"
                        description="A: I use Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop, Adobe Illustrator, and Adobe Audition. I also use other software as needed for the video."
                    />
                    <AccordianCard
                        title="Q: How do I provide you with my files?"
                        description="A: After completing the order, you can give me pictures and videos via a download link or file attachment. Don’t worry, I’ll guide you on how to do it easily."
                    />
                    <AccordianCard
                        title="Q: Will you do subtitles?"
                        description="A: For subtitles, you need to provide a transcript and pay an extra $10 per 10 minutes of the final video."
                    />
                    <AccordianCard
                        title="Q: What kind of videos can you edit?"
                        description="A: Professional slideshow promo videos, commercial videos, noise removal, travel vlogs, podcasts, lyrical music videos, dynamic intros & outros, creative logo animation, character animation, ads & social media content, brand promotions, green screen removal, subtitles & captions, book trailers, visual effects, and 3D product videos."
                    />
                    <AccordianCard
                        title="Q: What kind of work do you do?"
                        description="A: Podcast video editing, Zoom video editing, interview video editing, personal videos, webinar videos, and remote podcasts."
                    />
                </div>
            </div>
        </div>
    );
};

export default Accordion;
