import React from "react";
import Button from ".././button";
import Link from "next/link";

type Props = {};

const JourneyWithUsBanner = (props: Props) => {
  return (
    <section className="relative isolate flex w-full items-center bg-transparent py-6">
      <div className="absolute top-0 h-1/2 w-full bg-[#F1F5F5] "></div>

      <div className="circle flex flex-col items-center py-[clamp(90px,90px,_105px)]">
        <h2 className="font-gilroy-extrabold text-[clamp(1.5rem,_4.5vw,_2rem)] font-bold ">
          A Smooth Journey on your next trip!
        </h2>
        <p className=" mb-[clamp(1.5rem,_5vw,_40px)] mt-2 text-[clamp(13px,_4.5vw,_20px)] font-semibold text-[#4E4B66]">
          Sign up to get special offers, discounts and travel advisories!
        </p>
        <div className="mx-auto flex w-fit flex-wrap items-center gap-4">
          <Link href="/apply">
            <Button
              text="Apply now"
              reverse={false}
              filled={true}
              color="#FF9943"
              padding="clamp(9px,5vw,16px) clamp(16px,5vw,24px)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4 sm:h-6 sm:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Button>
          </Link>
          <Link href="/about">
            <Button
              text="Learn more"
              reverse={false}
              filled={false}
              color="#FF9943"
              padding="clamp(9px,5vw,16px) clamp(16px,5vw,24px)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4 sm:h-6 sm:w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default JourneyWithUsBanner;
