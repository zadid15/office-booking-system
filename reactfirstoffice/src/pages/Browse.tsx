import Navbar from "../components/Navbar";
import BrowseOfficeWrapper from "../wrappers/BowseOfficeWrapper";
import BrowseCityWrapper from "../wrappers/BrowseCityWrapper";

export default function Browse() {
    return (
        <>
            <Navbar />
            <header className="flex flex-col w-full">
                <section id="Hero-Banner" className="relative flex h-[720px] -mb-[93px]">
                    <div
                        id="Hero-Text"
                        className="relative flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-10 gap-[30px] bg-white mt-[70px] ml-[calc((100%-1130px)/2)] z-10"
                    >
                        <div className="flex items-center w-fit rounded-full py-2 px-4 gap-[10px] bg-[#000929]">
                            <img
                                src="assets/images/icons/crown-white.svg"
                                className="w-5 h-5"
                                alt="icon"
                            />
                            <span className="font-semibold text-white">
                                We’ve won top productivity 500 fortunes
                            </span>
                        </div>
                        <h1 className="font-extrabold text-[50px] leading-[60px]">
                            All Great Offices.
                            <br />
                            Grow Your Business.
                        </h1>
                        <p className="text-lg leading-8 text-[#000929]">
                            Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih baik
                            dan sehat dalam tumbuhkan karir.
                        </p>
                        <div className="flex items-center gap-5">
                            <a
                                href="#"
                                className="flex items-center rounded-full p-[20px_26px] gap-3 bg-[#0D903A]"
                            >
                                <img
                                    src="assets/images/icons/slider-horizontal-white.svg"
                                    className="w-[30px] h-[30px]"
                                    alt="icon"
                                />
                                <span className="font-bold text-xl leading-[30px] text-[#F7F7FD]">
                                    Explore Now
                                </span>
                            </a>
                            <a
                                href="#"
                                className="flex items-center rounded-full border border-[#000929] p-[20px_26px] gap-3 bg-white"
                            >
                                <img
                                    src="assets/images/icons/video-octagon.svg"
                                    className="w-[30px] h-[30px]"
                                    alt="icon"
                                />
                                <span className="font-semibold text-xl leading-[30px]">
                                    Watch Story
                                </span>
                            </a>
                        </div>
                    </div>
                    <div
                        id="Hero-Image"
                        className="absolute right-0 w-[calc(100%-((100%-1130px)/2)-305px)] h-[720px] rounded-bl-[40px] overflow-hidden"
                    >
                        <img
                            src="assets/images/backgrounds/banner.png"
                            className="w-full h-full object-cover"
                            alt="hero background"
                        />
                    </div>
                </section>
                <div className="flex flex-col pt-[150px] pb-10 px-[120px] gap-10 bg-[#0D903A]">
                    <div className="logo-contianer flex items-center justify-center flex-wrap max-w-[1130px] h-[38px] mx-auto gap-[60px]">
                        <img src="assets/images/logos/TESLA.svg" alt="clients logo" />
                        <img src="assets/images/logos/Libra 2.svg" alt="clients logo" />
                        <img src="assets/images/logos/Binance logo.svg" alt="clients logo" />
                        <img src="assets/images/logos/Facebook 7.svg" alt="clients logo" />
                        <img src="assets/images/logos/Microsoft 6.svg" alt="clients logo" />
                    </div>
                    <div className="flex justify-center gap-[50px]">
                        <div className="flex flex-col gap-[2px] text-center">
                            <p className="text-xl leading-[30px] text-[#F7F7FD]">
                                Comfortable Space
                            </p>
                            <p className="font-bold text-[38px] leading-[57px] text-white">
                                580M+
                            </p>
                        </div>
                        <div className="flex flex-col gap-[2px] text-center">
                            <p className="text-xl leading-[30px] text-[#F7F7FD]">
                                Startups Succeed
                            </p>
                            <p className="font-bold text-[38px] leading-[57px] text-white">98%</p>
                        </div>
                        <div className="flex flex-col gap-[2px] text-center">
                            <p className="text-xl leading-[30px] text-[#F7F7FD]">Countries</p>
                            <p className="font-bold text-[38px] leading-[57px] text-white">90+</p>
                        </div>
                        <div className="flex flex-col gap-[2px] text-center">
                            <p className="text-xl leading-[30px] text-[#F7F7FD]">
                                Supportive Events
                            </p>
                            <p className="font-bold text-[38px] leading-[57px] text-white">
                                139M+
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <BrowseCityWrapper />
            <section
                id="Benefits"
                className="flex items-center justify-center w-[1015px] mx-auto gap-[100px] mt-[100px]"
            >
                <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
                    We Might Good <br />
                    For Your Business
                </h2>
                <div className="grid grid-cols-2 gap-[30px]">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
                            <img
                                src="assets/images/icons/security-user.svg"
                                className="w-[34px] h-[34px]"
                                alt="icon"
                            />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-lg leading-[27px]">
                                Privacy-First Design
                            </p>
                            <p className="text-sm leading-[24px]">
                                Lorem available without even higher tax that cost much
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
                            <img
                                src="assets/images/icons/group.svg"
                                className="w-[34px] h-[34px]"
                                alt="icon"
                            />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-lg leading-[27px]">Easy Move Access</p>
                            <p className="text-sm leading-[24px]">
                                Lorem available without even higher tax that cost much
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
                            <img
                                src="assets/images/icons/3dcube.svg"
                                className="w-[34px] h-[34px]"
                                alt="icon"
                            />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-lg leading-[27px]">Flexibility Spaces</p>
                            <p className="text-sm leading-[24px]">
                                Lorem available without even higher tax that cost much
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
                            <img
                                src="assets/images/icons/cup.svg"
                                className="w-[34px] h-[34px]"
                                alt="icon"
                            />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-lg leading-[27px]">Top-Rated Office</p>
                            <p className="text-sm leading-[24px]">
                                Lorem available without even higher tax that cost much
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
                            <img
                                src="assets/images/icons/coffee.svg"
                                className="w-[34px] h-[34px]"
                                alt="icon"
                            />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-lg leading-[27px]">
                                Extra Snacks Available
                            </p>
                            <p className="text-sm leading-[24px]">
                                Lorem available without even higher tax that cost much
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
                            <img
                                src="assets/images/icons/home-trend-up.svg"
                                className="w-[34px] h-[34px]"
                                alt="icon"
                            />
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <p className="font-bold text-lg leading-[27px]">
                                Sustain for Business
                            </p>
                            <p className="text-sm leading-[24px]">
                                Lorem available without even higher tax that cost much
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <BrowseOfficeWrapper />
        </>

    );
}