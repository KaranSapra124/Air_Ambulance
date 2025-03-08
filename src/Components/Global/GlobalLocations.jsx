import React, { useState } from "react";
import Container from "./Container";
import { Modal } from "antd";

const GlobalLocations = ({ title, data, className }) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState(null);
  //   const locations = [
  //     {
  //       state: "Bhubaneswar",
  //       desc: "Air ambulance services in Bhubaneswar provide fast and reliable patient transport, ensuring critical care in emergencies.",
  //       points: [
  //         "Air ambulances eliminate road congestion risks and provide immediate medical transport.",
  //         "Equipped with advanced ICU facilities to ensure patient stability during transit.",
  //       ],
  //       address:
  //         "Bus stand, 129/6, RBI Colony, Baramunda, Bhubaneswar, Odisha 751003",
  //       contact: "+91-9953410377",
  //       mapLink: "https://goo.gl/maps/example1",
  //     },
  //     {
  //       state: "Mumbai",
  //       desc: "Mumbai's air ambulance services ensure rapid emergency response with top-notch medical care.",
  //       points: [
  //         "24/7 availability for urgent medical evacuation across the country.",
  //         "Highly trained medical teams provide onboard critical care.",
  //       ],
  //       address:
  //         "Chhatrapati Shivaji Maharaj International Airport, Mumbai, Maharashtra 400099",
  //       contact: "+91-9953410377",
  //       mapLink: "https://goo.gl/maps/example2",
  //     },
  //     {
  //       state: "Dhanbad",
  //       desc: "Air ambulance services in Dhanbad offer swift patient transport with modern medical equipment.",
  //       points: [
  //         "Immediate response for critically ill patients needing urgent treatment.",
  //         "Advanced monitoring systems ensure patient safety during flight.",
  //       ],
  //       address: "Dhanbad Airport, Dhanbad, Jharkhand 826001",
  //       contact: "+91-9953410377",
  //       mapLink: "https://goo.gl/maps/example3",
  //     },
  //     {
  //       state: "Noida",
  //       desc: "Noida's air ambulance services provide efficient and safe medical transport for patients.",
  //       points: [
  //         "Ensures timely transfer to top hospitals in India.",
  //         "Equipped with life-saving medical devices and emergency care facilities.",
  //       ],
  //       address: "Sector 62, Noida, Uttar Pradesh 201301",
  //       contact: "+91-9953410377",
  //       mapLink: "https://goo.gl/maps/example4",
  //     },
  //     {
  //       state: "Allahabad",
  //       desc: "Air ambulance services in Allahabad guarantee rapid and secure patient evacuation in medical emergencies.",
  //       points: [
  //         "Doctors and paramedics onboard provide continuous medical supervision.",
  //         "Fastest mode of transport to ensure timely medical intervention.",
  //       ],
  //       address: "Allahabad Airport, Prayagraj, Uttar Pradesh 211012",
  //       contact: "+91-9953410377",
  //       mapLink: "https://goo.gl/maps/example5",
  //     },
  //     {
  //       state: "Rohtak",
  //       desc: "Rohtak's air ambulance services are designed for quick and safe medical transportation.",
  //       points: [
  //         "Ensures transfer of critically ill patients with minimal delay.",
  //         "Specialized air medical teams handle high-risk patients effectively.",
  //       ],
  //       address: "Rohtak, Haryana 124001",
  //       contact: "+91-9953410377",
  //       mapLink: "https://goo.gl/maps/example6",
  //     },
  //     {
  //       state: "Rudrapur",
  //       desc: "Rudrapur offers efficient air ambulance services to transport patients safely and swiftly.",
  //       points: [
  //         "Equipped with ICU and ventilator support for critical cases.",
  //         "24/7 service availability for emergency medical evacuations.",
  //       ],
  //       address: "Rudrapur, Uttarakhand 263153",
  //       contact: "+91-9953410377",
  //       mapLink: "https://goo.gl/maps/example7",
  //     },
  //     {
  //       state: "Raipur",
  //       desc: "Raipur's air ambulance services provide fast emergency medical transport for patients.",
  //       points: [
  //         "Advanced life support and expert medical teams onboard.",
  //         "Ensures transfer to multi-specialty hospitals in minimal time.",
  //       ],
  //       address: "Swami Vivekananda Airport, Raipur, Chhattisgarh 492015",
  //       contact: "+91-9953410377",
  //       mapLink: "https://goo.gl/maps/example8",
  //     },
  //     // Add the remaining locations following the same structure.
  //   ];
  const handleOpen = (item) => {
    setItem(item);
    setOpen(true);
  };
  return (
    <>
      {open && (
        <LocationModal onClose={() => setOpen(false)} data={item} open={open} />
      )}
      <h1 className="text-lg text-center text-primary-color font-semibold my-2">
        {title}
      </h1>
      <div className={className}>
        {data?.map((elem, index) => {
          return (
            <>
              <button
                onClick={() => handleOpen(elem)}
                className="bg-primary-color cursor-pointer hover:scale-105 transition-all lg:w-full text-sm font-semibold rounded-md text-white p-2  mx-auto w-28 "
              >
                {elem?.state}
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

const LocationModal = ({ open, onClose, data }) => {
  const { address, contact, points, state, desc, mapLink, description } = data;

  return (
    <Modal onCancel={onClose} footer={false} onClose={onClose} open={open}>
      <div className="p-6 bg-red-500 text-white rounded-lg shadow-lg">
        {window.location.pathname.includes("/national-services") ? (
          <>
            <h1 className="text-xl font-bold mb-4">
              DHHR is available in all these locations:
            </h1>

            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">{state}</h2>
              <p className="mb-4 font-semibold lg:text-sm text-xs ">
                Make sure to rely on our company to avail the best Air ambulance
                service at an affordable price. You don’t need to break your
                bank to access the air ambulance service. We ensure to provide
                the best and cost-effective service to save the lives of the
                patients.
              </p>

              <div className="flex flex-col lg:flex-row gap-4">
                <div>
                  <h2 className="lg:text-lg text-md font-semibold mb-2">
                    Advantages of Air Ambulance {state} Services?
                  </h2>
                  <p className="mb-2 text-xs font-semibold">{desc}</p>
                  <ul className="list-disc list-inside mb-4">
                    {points?.map((point, index) => (
                      <li className="text-xs font-semibold" key={index}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <img
                  src="https://s3-alpha-sig.figma.com/img/e159/265e/4713340905360d90d5f0a83364c56a75?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j~Jy7Y-LjwJr4-gOQxiAPuogIQdDYw5r-b2r9X6V6bOFmZfW9zLSQHxqSn-7NKOFgjueeHN-xQTTXIJC-nKzOIetrtKNiHfFK5zVaBdtQAOFBjmeXjq75tRcN7VdxuX89F4XEw01Q0kyqYKr~yben3SZuW6yEw0UZN367oNe6~7b3izJpBOtvAYS1HXZyyozLoJ3H55fVPEMNhWg-k34tWg5CeozwVzgr5mc1XwvKr247UXubMy-Dv3PNSIeZje2xr5pV5sVB1g3Ztq4TkaVGenDdVPexcK1SnYpEp2KTOx2BOWL~VV~DXyzJDfGhIK8jN194JPJkvs-EbUOhoQcFQ__"
                  alt="Air Ambulance"
                  className="rounded-lg shadow-md lg:h-32 lg:w-32  self-center"
                />
              </div>
            </div>

            <div className="lg:p-4 p-2 bg-white text-primary-color rounded-lg shadow-md">
              <h2 className="lg:text-lg text-sm font-semibold mb-2">
                Contact Air Ambulance Service {state}
              </h2>
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <h1 className="font-semibold text-sm">Address:</h1>
                  <span className="lg:text-sm text-xs font-medium lg:font-bold">
                    {address}
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <h1 className="font-semibold text-sm">Contact:</h1>
                  <span className="lg:text-sm text-xs font-medium lg:font-bold">
                    {contact}
                  </span>
                </div>
                <a
                  href={mapLink}
                  className="text-primary-color underline inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View On Map
                </a>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-xl text-center font-bold mb-4">
              DHHR is available in all these locations:
            </h1>

            <div className="mb-4 text-center">
              <h2 className="text-lg font-semibold mb-2">{state}</h2>
              <h3 className="text-lg font-semibold mb-2">
                Choose fast {state} Air Ambulance services at DHHR
              </h3>
              <p className="font-semibold text-xs">{description}</p>
              <div className="flex flex-col lg:flex-row gap-4"></div>
            </div>

            {/* <div className="lg:p-4 p-2 bg-white text-primary-color rounded-lg shadow-md">
              <h2 className="lg:text-lg text-sm font-semibold mb-2">
                Contact Air Ambulance Service {state}
              </h2>
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <h1 className="font-semibold text-sm">Address:</h1>
                  <span className="lg:text-sm text-xs font-medium lg:font-bold">
                    {address}
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <h1 className="font-semibold text-sm">Contact:</h1>
                  <span className="lg:text-sm text-xs font-medium lg:font-bold">
                    {contact}
                  </span>
                </div>
                <a
                  href={mapLink}
                  className="text-primary-color underline inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View On Map
                </a>
              </div>
            </div> */}
          </>
        )}
      </div>
    </Modal>
  );
};
export default GlobalLocations;
