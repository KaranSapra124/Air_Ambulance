import React from "react";
import Container from "./Container";

const GlobalLocations = ({ title, data , className }) => {
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

  return (
    <>
      <h1 className="text-lg text-center text-primary-color font-semibold my-2">{title}</h1>
      <div className={className}>
        {data?.map((elem, index) => {
          return (
            <>
              <button className="bg-primary-color cursor-pointer hover:scale-105 transition-all lg:w-full text-sm font-semibold rounded-md text-white p-2  mx-auto w-28 ">{elem?.state}</button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default GlobalLocations;
