"use client";
// import Hero from "@/components/hero/Hero";
// import WhyUs from "@/components/whyUs/WhyUs";
import ToeflVoucherFAQ from "./ToeflVoucherFAQ";
import ToeflVoucherWhyUS from "./ToeflVoucherWhyUS";
import ToeflVoucherHero from "./ToeflVoucherHero";
import TOEFLPricing from "./ToeflVoucherPricing";
import { Info } from "lucide-react";
import ToeflVoucherWhatIsToefl from "./ToeflVoucheWhatIsToefl";
import ToeflVoucherWhatIsDiscountCode from "./ToeflVoucherWhatIsDiscountCode";


const dataQA = [
  {
    question: "How do I get free application guidance for TOEFL?",
    answer: "Simply join our WhatsApp group! We offer free, step-by-step assistance to help you with your application process."
  },
  {
    question: "How do I get the TOEFL discount code",
    answer: "It's very straightforward. In the YouTube video you will get working voucher codes."
  },
  {
    question: "What support can I expect after joining the WhatsApp group?",
    answer: "Our community provides continuous support for your academic needs, from application tips to study resources for TOEFL preparation."
  },
  {
    question: "Are the TOEFL voucher codes really free?",
    answer: "Yes, our TOEFL voucher codes are provided for free as part of our commitment to your educational journey. But if you want bigger discount you can opt for pre-paid vouchers also."
  },
];

const Page = () => {
  return (
    <div className="">
      {/* <Hero /> */}
      <ToeflVoucherHero />
      <TOEFLPricing />
      <ToeflVoucherWhyUS />

      <div className="flex flex-col md:flex-row justify-between items-center gap-5 mx-10 mb-10 ">
        <div className="md:w-[50%]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary">
            <path fill-rule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clip-rule="evenodd" />
          </svg>

          <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            MJ Study Abroad is a Verified ETS Partner Since 1998
          </h2>
          <p className="text-gray-600 dark:text-gray-300">As a trusted partner of ETS since 1998, MJ Study Abroad has been committed to helping students achieve their dreams of studying abroad. We offer comprehensive guidance, resources, and support tailored to each student&apos;s needs. Whether you&apos;re preparing for TOEFL, GRE, or any other standardized test, our expertise ensures you&apos;re on the right path to success. Join the thousands of students who have already benefited from our services and take the next step in your academic journey with confidence.</p>
        </div>
        <div className="md:w-[50%] items-center flex flex-col">
          <video className="w-full h-auto rounded-lg" controls>
            <source src="/assets/mja-getting-award.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-gray-800 font-semibold flex justify-center mt-1 gap-1 text-xs sm:text-base">
            <Info />
            MJ Study Abroad was awarded for the highest student registrations in all of North India by ETS for 2024–2025.
          </div>
        </div>
      </div>

      <ToeflVoucherFAQ />
      <ToeflVoucherWhatIsToefl />
      <ToeflVoucherWhatIsDiscountCode />
      <footer className="rounded-b-lg bg-gray-100">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div>
              <div className="flex justify-center text-blue-600 lg:justify-start">
                <p className='font-extrabold text-3xl'>TOEFL Go GLobal</p>
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                MJ Study Aborad is one of the Leading Study Abroad Counsultant (as per ETS) providing education loan and visa services as well.
              </p>
            </div>


            <div className='flex flex-col'>
              <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="/book"> Books </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="/forum"> Forum </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="/score-reporting"> score reporting</a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:text-gray-700/75" href="/book-counseling"> Counseling </a>
                </li>
              </ul>
              <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                Copyright &copy; 2024. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;
