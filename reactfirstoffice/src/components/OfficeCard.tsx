import { Office } from "../types/type";

export default function OfficeCard({office}: OfficeCardProps) {
    const baseURL = "http://127.0.0.1:8080/storage";
    
    return (
        <div className="card">
            <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
                <div className="thumbnail-container relative w-full h-[200px]">
                    <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#0D903A] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                        Popular
                    </p>
                    <img
                        src={`${baseURL}/${office.thumbnail}`}
                        className="w-full h-full object-cover"
                        alt="thumbnails"
                    />
                </div>
                <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
                    <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                        {office.name}
                    </h3>
                    <div className="flex items-center justify-between">
                        <p className="font-semibold text-xl leading-[30px]">
                            Rp {office.price.toLocaleString("id-ID")}
                        </p>
                        <div className="flex items-center justify-end gap-[6px]">
                            <p className="font-semibold">{office.duration} days</p>
                            <img
                                src="/assets/images/icons/clock.svg"
                                className="w-6 h-6"
                                alt="icon"
                            />
                        </div>
                    </div>
                    <hr className="border-[#F6F5FD]" />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-end gap-[6px]">
                            <img
                                src="/assets/images/icons/location.svg"
                                className="w-6 h-6"
                                alt="icon"
                            />
                            <p className="font-semibold">{office.city.name}</p>
                        </div>
                        <div className="flex items-center justify-end gap-[6px]">
                            <p className="font-semibold">4.5/5</p>
                            <img
                                src="/assets/images/icons/Star 1.svg"
                                className="w-6 h-6"
                                alt="icon"
                            />
                        </div>
                    </div>
                    <hr className="border-[#F6F5FD]" />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-end gap-[6px]">
                            <img
                                src="/assets/images/icons/wifi.svg"
                                className="w-6 h-6"
                                alt="icon"
                            />
                            <p className="font-semibold">Fast-Connection</p>
                        </div>
                        <div className="flex items-center justify-end gap-[6px]">
                            <img
                                src="/assets/images/icons/security-user.svg"
                                className="w-6 h-6"
                                alt="icon"
                            />
                            <p className="font-semibold">Secure 100%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface OfficeCardProps {
    office: Office
}