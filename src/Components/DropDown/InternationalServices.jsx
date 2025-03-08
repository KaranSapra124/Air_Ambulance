import React, { useState } from "react";
import GlobalHero from "../Global/GlobalHero";
import GlobalContentContainer from "../Global/GlobalContentContainer";
import { Modal } from "antd";
import GlobalLocations from "../Global/GlobalLocations";

const InternationalServices = () => {
  const [open, setOpen] = useState(false);
  const destinations = [
    {
      state: "USA",
      description:
        "Hospital booking and assistance: We understand the fact that our patients are in a nerve-wracking situation and they might not be in the frame of mind to negotiate. Therefore, we have a team to assess your treatment needs and find the right package for you. Since we are partnered with medical facilities, we as the competent medical flight services in India to USA offer the best possible packages. If you are looking for emergency air ambulances in India to New York, then you should consider us. We have the quickest emergency service. Combined with the best technology, expertise and skills, we offer the perfect service. Call us now.",
    },
    {
      state: "Bangkok",
      description:
        "Hospital booking and assistance: We provide air ambulance services from India to Bangkok for emergency medical transportation. Our expert team ensures the best medical care and hassle-free service during transit. With our strong network and medical partnerships, we guarantee quick and reliable transportation. Call us now.",
    },
    {
      state: "Bangladesh",
      description:
        "If you are in Bangladesh and seeking emergency medical transportation to India, our air ambulance services are here for you. We ensure quick, safe, and reliable transfers for critical patients. Contact us for assistance.",
    },
    {
      state: "Colombo",
      description:
        "Our air ambulance services from Colombo to India offer emergency medical transportation for patients in need. With highly equipped flights and expert medical teams, we ensure quick and safe transportation. Call us for more information.",
    },
    {
      state: "Dhaka",
      description:
        "Our air ambulance services from Dhaka to India provide reliable and fast medical transportation. We handle all necessary arrangements to ensure a smooth and safe journey for critical patients. Contact us for more information.",
    },
    {
      state: "Dubai",
      description:
        "We offer high-quality air ambulance services from Dubai to India. Our team ensures seamless medical transportation for patients requiring critical care. With advanced medical facilities on board, we provide safe and quick transportation. Call us now.",
    },
    {
      state: "Kabul",
      description:
        "Our air ambulance services from Kabul to India provide efficient and fast medical transportation. We have experienced medical professionals and advanced facilities to ensure patient safety. Contact us for immediate assistance.",
    },
    {
      state: "Kathmandu",
      description:
        "We provide air ambulance services from Kathmandu to India with a team of highly skilled professionals. Our priority is to offer quick and secure medical transportation for critical patients. Call us for assistance.",
    },
    {
      state: "Muscat",
      description:
        "Our air ambulance services from Muscat to India provide rapid medical transportation for critical patients. With advanced medical care on board, we ensure safe and quick transfers. Contact us now.",
    },
    {
      state: "Singapore",
      description:
        "We provide air ambulance services from Singapore to India for critical medical transportation. Our highly skilled medical team ensures safe and reliable transfers. Call us for more information.",
    },
    {
      state: "United Kingdom",
      description:
        "Our air ambulance services from the United Kingdom to India offer quick and reliable medical transportation. We guarantee patient safety and quality care throughout the journey. Contact us now.",
    },
    {
      state: "Silchar",
      description:
        "We offer air ambulance services from Silchar to various medical facilities across India. Our team ensures fast and safe transportation for critical patients. Contact us now.",
    },
  ];

  return (
    <>
      <GlobalHero image={"Group 72.png"} bgColor={"bg-red-500/40"} />
      <GlobalContentContainer
        image={
          "https://s3-alpha-sig.figma.com/img/babb/0096/75898b8ba75b1b3221eac0642efc4a2d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IKJP0AuEe4-ql24DrSxmlt8rSmOotRMx-l-KjAQMetFVRAAdW73Z3YPxIKx5MHN~TJ4M-wr-NNiH4nw4CIRoXDDVJssCvzMasp63cxzbYvQhXkEoRibwYPkRzpBiig2S3FJbagjvgFkCASbfzIvIfiUBtxzaJi-rMyidxo57~~9DFRzEs~hCuRcTNeM1ZLswHFZCwahFQ7dhIieysu0YJZbCCEIDlFMclHeSKctXW2MFN1SH59g9JtyNbQnm3l-2XIpYpPNTpyttrm5DK~3hMCt5EYa6BTQJ0mB4EGKZLrZiKLqcTjy4NuwTZpfq3L9vvh1HLvkLvj~CSv42IBIntA__"
        }
        title={"International Services"}
        content={[
          "DHHR offers a comprehensive range of international services, including top-tier air ambulance services.  We are dedicated to providing rapid response in life-threatening situations, understanding the critical nature of timely intervention.  Our primary goal is saving lives, and we strive to offer affordable solutions, never refusing a call based on ability to pay.  We prioritize immediate action and life preservation, handling financial arrangements afterward.  Driven by a commitment to human life, we are more than just a business; we are dedicated to serving and protecting our community.",
        ]}
      />
      <GlobalLocations data={destinations} className={"gap-4 lg:max-w-screen-xl max-w-screen-sm m-2 lg:p-0 p-2   mx-auto grid lg:grid-cols-8 grid-cols-3  flex-wrap"}  title={"DHHR is available in all these locations:"}/>
    </>
  );
};
const LocationModal = ({ open, onClose, data }) => {
  const { address, contact, points, state, desc, mapLink } = data;

  return (
    <Modal onCancel={onClose} footer={false} onClose={onClose} open={open}>
      <div className="p-6 bg-red-500 text-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">
          DHHR is available in all these locations:
        </h1>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">{state}</h2>
          <p className="mb-4 font-semibold lg:text-sm text-xs ">
            Make sure to rely on our company to avail the best Air ambulance
            service at an affordable price. You don’t need to break your bank to
            access the air ambulance service. We ensure to provide the best and
            cost-effective service to save the lives of the patients.
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
      </div>
    </Modal>
  );
};

export default InternationalServices;
