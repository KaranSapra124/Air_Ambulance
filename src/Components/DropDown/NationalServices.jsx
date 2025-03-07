import React from "react";
import GlobalHero from "../Global/GlobalHero";
import GlobalContentContainer from "../Global/GlobalContentContainer";
import GlobalLocations from "../Global/GlobalLocations";

const NationalServices = () => {
  const locations = [
    {
      state: "Bhubaneswar",
      desc: "Air ambulance services in Bhubaneswar provide fast and reliable patient transport, ensuring critical care in emergencies.",
      points: [
        "Air ambulances eliminate road congestion risks and provide immediate medical transport.",
        "Equipped with advanced ICU facilities to ensure patient stability during transit.",
      ],
      address:
        "Bus stand, 129/6, RBI Colony, Baramunda, Bhubaneswar, Odisha 751003",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example1",
    },

    {
      state: "Mumbai",
      desc: "Mumbai's air ambulance services ensure rapid emergency response with top-notch medical care.",
      points: [
        "24/7 availability for urgent medical evacuation across the country.",
        "Highly trained medical teams provide onboard critical care.",
      ],
      address:
        "Chhatrapati Shivaji Maharaj International Airport, Mumbai, Maharashtra 400099",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example2",
    },

    {
      state: "Dhanbad",
      desc: "Air ambulance services in Dhanbad offer swift patient transport with modern medical equipment.",
      points: [
        "Immediate response for critically ill patients needing urgent treatment.",
        "Advanced monitoring systems ensure patient safety during flight.",
      ],
      address: "Dhanbad Airport, Dhanbad, Jharkhand 826001",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example3",
    },

    {
      state: "Noida",
      desc: "Noida's air ambulance services provide efficient and safe medical transport for patients.",
      points: [
        "Ensures timely transfer to top hospitals in India.",
        "Equipped with life-saving medical devices and emergency care facilities.",
      ],
      address: "Sector 62, Noida, Uttar Pradesh 201301",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example4",
    },

    {
      state: "Allahabad",
      desc: "Air ambulance services in Allahabad guarantee rapid and secure patient evacuation in medical emergencies.",
      points: [
        "Doctors and paramedics onboard provide continuous medical supervision.",
        "Fastest mode of transport to ensure timely medical intervention.",
      ],
      address: "Allahabad Airport, Prayagraj, Uttar Pradesh 211012",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example5",
    },

    {
      state: "Rohtak",
      desc: "Rohtak's air ambulance services are designed for quick and safe medical transportation.",
      points: [
        "Ensures transfer of critically ill patients with minimal delay.",
        "Specialized air medical teams handle high-risk patients effectively.",
      ],
      address: "Rohtak, Haryana 124001",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example6",
    },

    {
      state: "Rudrapur",
      desc: "Rudrapur offers efficient air ambulance services to transport patients safely and swiftly.",
      points: [
        "Equipped with ICU and ventilator support for critical cases.",
        "24/7 service availability for emergency medical evacuations.",
      ],
      address: "Rudrapur, Uttarakhand 263153",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example7",
    },

    {
      state: "Raipur",
      desc: "Raipur's air ambulance services provide fast emergency medical transport for patients.",
      points: [
        "Advanced life support and expert medical teams onboard.",
        "Ensures transfer to multi-specialty hospitals in minimal time.",
      ],
      address: "Swami Vivekananda Airport, Raipur, Chhattisgarh 492015",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example8",
    },

    {
      state: "Agra",
      desc: "Air ambulance services in Agra ensure immediate and safe medical evacuations.",
      points: [
        "Fastest mode of transport with critical care facilities.",
        "Round-the-clock availability for medical emergencies.",
      ],
      address: "Agra Airport, Agra, Uttar Pradesh 282008",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example9",
    },

    {
      state: "Agartala",
      desc: "Reliable air ambulance services in Agartala for emergency medical evacuations.",
      points: [
        "Quick and efficient patient transportation to major hospitals.",
        "Equipped with life-saving medical equipment",
      ],
      address: "Agartala Airport, Agartala, Tripura 799009",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example10",
    },

    {
      state: "Bangalore",
      desc: "Bangalore's air ambulance services provide quick and efficient medical transport for patients in need.",
      points: [
        "Equipped with state-of-the-art medical facilities for critical care.",
        "24/7 availability for emergency medical evacuations.",
      ],
      address: "Kempegowda International Airport, Bangalore, Karnataka 560300",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example11",
    },

    {
      state: "Bagdogra",
      desc: "Air ambulance services in Bagdogra ensure rapid patient transport to major hospitals.",
      points: [
        "Specialized medical teams onboard for critical care.",
        "Quick response times for emergency situations.",
      ],
      address: "Bagdogra Airport, Bagdogra, West Bengal 734421",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example12",
    },

    {
      state: "Bhopal",
      desc: "Bhopal's air ambulance services offer reliable and swift medical transport.",
      points: [
        "Advanced medical equipment for patient monitoring during transit.",
        "Trained medical personnel available for critical care.",
      ],
      address: "Raja Bhoj International Airport, Bhopal, Madhya Pradesh 462047",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example13",
    },

    {
      state: "Bilaspur",
      desc: "Air ambulance services in Bilaspur provide efficient transport for patients requiring urgent care.",
      points: [
        "Equipped with life support systems for critical patients.",
        "Fast response times to ensure timely medical intervention.",
      ],
      address: "Bilaspur Airport, Bilaspur, Chhattisgarh 495001",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example14",
    },

    {
      state: "Chennai",
      desc: "Chennai's air ambulance services ensure quick and safe medical transport for patients.",
      points: [
        "Highly trained medical teams provide onboard care.",
        "24/7 service availability for emergency evacuations.",
      ],
      address: "Chennai International Airport, Chennai, Tamil Nadu 600027",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example15",
    },

    {
      state: "Delhi",
      desc: "Air ambulance services in Delhi offer rapid medical transport across the country.",
      points: [
        "Equipped with advanced medical technology for patient care.",
        "Immediate response for critical medical emergencies.",
      ],
      address: "Indira Gandhi International Airport, Delhi 110037",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example16",
    },

    {
      state: "Dibrugrah",
      desc: "Dibrugrah's air ambulance services provide efficient transport for patients in need of urgent care.",
      points: [
        "Equipped with life-saving medical equipment.",
        "Quick response times for emergency situations.",
      ],
      address: "Dibrugarh Airport, Dibrugarh, Assam 786012",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example17",
    },

    {
      state: "Guwahati",
      desc: "Air ambulance services in Guwahati ensure swift medical transport for patients.",
      points: [
        "Advanced medical facilities onboard for critical care.",
        "24/7 availability for emergency medical evacuations.",
      ],
      address:
        "Lokpriya Gopinath Bordoloi International Airport, Guwahati, Assam 781015",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example18",
    },

    {
      state: "Itanagar",
      desc: "Itanagar's air ambulance services provide reliable transport for patients requiring urgent medical attention.",
      points: [
        "Equipped with advanced medical equipment for patient care.",
        "Fast response times to ensure timely medical intervention.",
      ],
      address: "Itanagar Airport, Itanagar, Arunachal Pradesh 791113",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example19",
    },

    {
      state: "Kolkata",
      desc: "Kolkata's air ambulance services ensure quick and efficient medical transport for patients.",
      points: [
        "Highly trained medical teams provide onboard care.",
        "24/7 service availability for emergency evacuations.",
      ],
      address:
        "Netaji Subhas Chandra Bose International Airport, Kolkata, West Bengal 700052",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example20",
    },

    {
      state: "Lucknow",
      desc: "Air ambulance services in Lucknow provide fast and reliable patient transport.",
      points: [
        "Equipped with advanced medical facilities for critical care.",
        "Immediate response for medical emergencies.",
      ],
      address:
        "Chaudhary Charan Singh International Airport, Lucknow, Uttar Pradesh 226009",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example21",
    },

    {
      state: "Manipur",
      desc: "Manipur's air ambulance services ensure efficient transport for patients needing urgent care.",
      points: [
        "Equipped with life-saving medical equipment.",
        "Quick response times for emergency situations.",
      ],
      address: "Imphal International Airport, Imphal, Manipur 795001",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example22",
    },

    {
      state: "Patna",
      desc: "Air ambulance services in Patna provide reliable and swift medical transport.",
      points: [
        "Advanced medical equipment for patient monitoring during transit.",
        "Trained medical personnel available for critical care.",
      ],
      address: "Jay Prakash Narayan International Airport, Patna, Bihar 800014",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example23",
    },

    {
      state: "Port Blair",
      desc: "Port Blair's air ambulance services offer efficient transport for patients requiring urgent care.",
      points: [
        "Equipped with life support systems for critical patients.",
        "Fast response times to ensure timely medical intervention.",
      ],
      address:
        "Veer Savarkar International Airport, Port Blair, Andaman and Nicobar Islands 744103",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example24",
    },

    {
      state: "Purnia",
      desc: "Air ambulance services in Purnia provide quick and efficient medical transport.",
      points: [
        "Equipped with advanced medical facilities for critical care.",
        "24/7 availability for emergency medical evacuations.",
      ],
      address: "Purnia Airport, Purnia, Bihar 854301",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example25",
    },

    {
      state: "Rajahmundry",
      desc: "Rajahmundry's air ambulance services ensure rapid patient transport to major hospitals.",
      points: ["Specialized medical teams onboard for critical care"],
      address: "Rajahmundry Airport, Rajahmundry, Andhra Pradesh 533102",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example26",
    },

    {
      state: "Sikkim",
      desc: "Sikkim's air ambulance services provide reliable transport for patients needing urgent medical attention.",
      points: [
        "Equipped with advanced medical equipment for patient care.",
        "Fast response times to ensure timely medical intervention.",
      ],
      address: "Pakyong Airport, Sikkim 737106",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example27",
    },

    {
      state: "Siliguri",
      desc: "Air ambulance services in Siliguri ensure swift medical transport for patients.",
      points: [
        "Advanced medical facilities onboard for critical care.",
        "24/7 availability for emergency medical evacuations.",
      ],
      address: "Bagdogra Airport, Siliguri, West Bengal 734421",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example28",
    },

    {
      state: "Surat",
      desc: "Surat's air ambulance services provide fast and reliable patient transport.",
      points: [
        "Equipped with advanced medical facilities for critical care.",
        "Immediate response for medical emergencies.",
      ],
      address: "Surat Airport, Surat, Gujarat 395007",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example29",
    },

    {
      state: "Vellore",
      desc: "Air ambulance services in Vellore ensure efficient transport for patients requiring urgent care.",
      points: [
        "Equipped with life-saving medical equipment.",
        "Quick response times for emergency situations.",
      ],
      address: "Vellore Airport, Vellore, Tamil Nadu 632001",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example30",
    },

    {
      state: "Vijayawada",
      desc: "Vijayawada's air ambulance services offer reliable and swift medical transport.",
      points: [
        "Advanced medical equipment for patient monitoring during transit.",
        "Trained medical personnel available for critical care.",
      ],
      address: "Vijayawada Airport, Vijayawada, Andhra Pradesh 521102",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example31",
    },

    {
      state: "Hyderabad",
      desc: "Hyderabad's air ambulance services ensure quick and safe medical transport for patients.",
      points: [
        "Highly trained medical teams provide onboard care.",
        "24/7 service availability for emergency evacuations.",
      ],
      address:
        "Rajiv Gandhi International Airport, Hyderabad, Telangana 500409",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example32",
    },

    {
      state: "Ahmedabad",
      desc: "Air ambulance services in Ahmedabad provide rapid medical transport across the country.",
      points: [
        "Equipped with advanced medical technology for patient care.",
        "Immediate response for critical medical emergencies.",
      ],
      address:
        "Sardar Vallabhbhai Patel International Airport, Ahmedabad, Gujarat 380003",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example33",
    },

    {
      state: "Pondicherry",
      desc: "Pondicherry's air ambulance services offer efficient transport for patients requiring urgent care.",
      points: [
        "Equipped with life support systems for critical patients.",
        "Fast response times to ensure timely medical intervention.",
      ],
      address: "Puducherry Airport, Pondicherry 605014",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example34",
    },

    {
      state: "Ranchi",
      desc: "Air ambulance services in Ranchi provide reliable and swift medical transport.",
      points: [
        "Advanced medical equipment for patient monitoring during transit.",
        "Trained medical personnel available for critical care.",
      ],
      address: "Birsa Munda Airport, Ranchi, Jharkhand 834002",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example35",
    },

    {
      state: "Tirupati",
      desc: "Tirupati's air ambulance services ensure efficient transport for patients needing urgent medical attention.",
      points: [
        "Equipped with advanced medical equipment for patient care.",
        "Fast response times to ensure timely medical intervention.",
      ],
      address: "Tirupati Airport, Tirupati, Andhra Pradesh 517520",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example36",
    },

    {
      state: "Chandigarh",
      desc: "Chandigarh's air ambulance services provide quick and efficient medical transport for patients.",
      points: [
        "Highly trained medical teams provide onboard care.",
        "24/7 service availability for emergency evacuations.",
      ],
      address: "Chandigarh Airport, Chandigarh 160003",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example37",
    },

    {
      state: "Jamshedpur",
      desc: "Air ambulance services in Jamshedpur ensure swift medical transport for patients.",
      points: [
        "Advanced medical facilities onboard for critical care.",
        "24/7 availability for emergency medical evacuations.",
      ],
      address: "Sonari Airport, Jamshedpur, Jharkhand 831011",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example38",
    },

    {
      state: "Varanasi",
      desc: "Air ambulance services in Varanasi provide reliable transport for patients needing urgent care.",
      points: [
        "Equipped with life-saving medical equipment.",
        "Quick response times for emergency situations.",
      ],
      address:
        "Lal Bahadur Shastri International Airport, Varanasi, Uttar Pradesh 221006",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example39",
    },

    {
      state: "Visakhapatnam",
      desc: "Visakhapatnam's air ambulance services offer efficient transport for patients requiring urgent medical attention.",
      points: [
        "Equipped with advanced medical equipment for patient care.",
        "Fast response times to ensure timely medical intervention.",
      ],
      address: "Visakhapatnam Airport, Visakhapatnam, Andhra Pradesh 530009",
      contact: "+91-9953410377",
      mapLink: "https://goo.gl/maps/example40",
    },
  ];

  return (
    <>
      <GlobalHero image={"Group 72.png"} bgColor={"bg-red-500/40"} />
      <GlobalContentContainer
        image={
          "https://s3-alpha-sig.figma.com/img/b5a9/566b/98aba35d038d396d0d23f83a17927ee2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NWLhgKRPBAt~OMBLqW~WWlK4KvE6H8Ou6zPFckgWN-pvFyN~bQulokzLzAC9KArdejzZkwmjqzGR5OiyYjnGjnIJexHjDsI9AkstkZgiT9xKugI0C0pgXmCmcMKePbDPK8vo5xfPLFKzhkGZRfRiR4IO8LjM1US18DBO8pyeBpqAx6hZfC9M4Vpgq9J57uOAXoNPhcB4p~1Xw4snvc8pmPgV3gnk~sjePHtZ6jFHoKECHrwWefrCvTL~HbaKZinEnoV9RE-~Ag9iHGZYf7svRKZmMptb-7Zhpg91v5sEmO~yfWeX8mqFKOOacoc5bJ6SYYQa2zWYTXRREgfFprUpJw__"
        }
        title={"National Services"}
        content={[
          "DHHR offers a comprehensive range of nationwide services, including top-tier air ambulance services.  We are dedicated to providing rapid response in life-threatening situations, understanding the critical nature of timely intervention.  Our primary goal is saving lives, and we strive to offer affordable solutions, never refusing a call based on ability to pay.  We prioritize immediate action and life preservation, handling financial arrangements afterward.  Driven by a commitment to human life, we are more than just a business; we are dedicated to serving and protecting our community.",
        ]}
      />
      <GlobalLocations className={"gap-4 lg:max-w-screen-xl max-w-screen-sm m-2 lg:p-0 p-2   mx-auto grid lg:grid-cols-8 grid-cols-3  flex-wrap"}
        title={"DHHR is available in all these locations:"}
        data={locations}
      />
    </>
  );
};

export default NationalServices;
