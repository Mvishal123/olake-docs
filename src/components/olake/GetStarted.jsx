import React from "react";
import { outerLink } from "../../../utils/functions";
import AwesomeButton from "../AwesomeButton";
import SectionHeader from "../SectionHeader";
import { FaHourglassStart, FaGithub, FaClock } from "react-icons/fa";

const GetStarted = () => {
  return (
    <div className="mx-auto flex flex-col items-center w-full md:max-w-[90%] px-4">
      <SectionHeader
        heading={
          <>
            Get Started with <span className="font-normal">OLake</span>
          </>
        }
        subheading="Choose a plan that suits your organisation’s needs."
      />

      {/* List container */}
      <div className="relative mt-12 flex flex-col md:flex-row gap-4 md:gap-[27px]">
        {/* First Item */}
        <div className="w-full md:flex-1 z-10 flex flex-col items-center rounded-[16px] bg-[#171717] px-[24px] py-[24px]  md:py-[40px]">
          <img
            src="/img/olake/olake-github.svg"
            alt="get-started-item"
            className="max-h-[120px] object-contain"
          />
          <div className="mt-[20px] flex items-center text-center text-[12px] font-normal text-[#407bff]">
            <img src="/img/olake/meteor.svg" alt="meteor" className="mr-1" />
            Quick Results
          </div>
          <div className="mt-[16px] bg-gradient-to-r from-white to-[#bdbdbd] bg-clip-text text-[28px] text-transparent">
            O<span className="font-semibold">Lake Github</span>
          </div>
          <div className="mt-[8px] text-center text-[14px] font-normal text-[#c7c7c7]">
            Use the free &amp; open OLake for the fastest MongoDB Replication to
            Apache Iceberg
          </div>
          <AwesomeButton
            variant="dark"
            href="https://github.com/datazip-inc/olake"
            className="mt-6"
            icon={<FaGithub />}
            size="medium"
          >
            Contribute
          </AwesomeButton>
        </div>

        {/* Second Item */}
        <div className="w-full md:flex-1 z-10 flex flex-col items-center rounded-[16px] bg-[#171717] px-[24px] py-[24px]  md:py-[40px]">
          <img
            src="/img/olake/olake-saas.svg"
            alt="get-started-item"
            className="max-h-[120px] object-contain"
          />
          <div className="mt-[20px] flex items-center text-center text-[12px] font-normal text-[#407bff]">
            <img src="/img/olake/meteor.svg" alt="meteor" className="mr-1" />
            For Enterprise solutions
          </div>
          <div className="mt-[16px] bg-gradient-to-r from-white to-[#bdbdbd] bg-clip-text text-[28px] text-transparent">
            O<span className="font-semibold">Lake SaaS</span>
          </div>
          <div className="mt-[8px] text-center text-[14px] font-normal text-[#c7c7c7]">
          A complete replication service for large organisations which handle huge data
          </div>
          <AwesomeButton
            href="#olake-form-product"
            icon={<FaHourglassStart />}
            className="mt-6"
            size="medium"
          >
            Join Waitlist
          </AwesomeButton>
        </div>

        {/* Third Item */}
        <div className="w-full md:flex-1 z-10 flex flex-col items-center rounded-[16px] bg-[#171717] px-[24px] py-[24px]  md:py-[40px]">
          <img
            src="/img/olake/olake-byoc.svg"
            alt="get-started-item"
            className="max-h-[120px] object-contain"
          />
          <div className="mt-[20px] flex items-center text-center text-[12px] font-normal text-[#407bff]">
            <img src="/img/olake/meteor.svg" alt="meteor" className="mr-1" />
            Control your cloud
          </div>
          <div className="mt-[16px] bg-gradient-to-r from-white to-[#bdbdbd] bg-clip-text text-[28px] text-transparent">
            O<span className="font-semibold">Lake BYOC</span>
          </div>
          <div className="mt-[8px] text-center text-[14px] font-normal text-[#c7c7c7]">
          Bring the OLake powerhouse to your own cloud services for a seamless experience
          </div>
          <AwesomeButton
            variant="dark"
            href="#"
            icon={<FaClock />}
            className="mt-6"
            size="medium"
          >
            Coming Soon
          </AwesomeButton>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
