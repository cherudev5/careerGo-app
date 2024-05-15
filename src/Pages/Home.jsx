import { Link } from "react-router-dom";


const Homepage = () => {
  return (
    <div className="w-full relative bg-lavender-200 flex flex-col items-end justify-start pt-[25px] px-0 pb-0 box-border gap-[61px] leading-[normal] tracking-[normal] mq450:gap-[15px] mq750:gap-[30px]">
      <header className="self-stretch flex flex-row items-start justify-center pt-0 pb-[5px] pr-5 pl-6 box-border max-w-full text-left text-base text-darkslateblue-100 font-dm-sans">
        <div className="w-[1120px] rounded-3xs bg-snow flex flex-row items-end justify-between pt-0.5 pb-[3px] pr-[90px] pl-[65px] box-border mix-blend-normal gap-[20px] max-w-full mq750:pr-[22px] mq750:box-border mq1225:pl-8 mq1225:pr-[45px] mq1225:box-border">
          <div className="h-[45px] w-[1120px] relative rounded-3xs bg-snow hidden max-w-full" />
          <img
            className="h-10 w-[200px] relative rounded object-cover mix-blend-normal z-[1]"
            loading="lazy"
            alt=""
            src="src/images/logo2.png"
          />
          <div className="w-[368px] flex flex-col items-start justify-end pt-0 px-0 pb-[9px] box-border max-w-full mq750:w-0">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq750:hidden">
              
                <div className="relative inline-block min-w-[46px] z-[1]">
                <Link to="/"className="mr-4">HOME</Link>
                
              </div>
              <div className="relative inline-block min-w-[53px] z-[1]">
                ABOUT
              </div>
              <div className="relative whitespace-pre-wrap inline-block min-w-[102px] shrink-0 z-[1]">
                CONTACT US
              </div>
              <div className="relative inline-block min-w-[47px] z-[1]">
                LOGIN
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="w-[1414px] flex flex-row items-start justify-center pt-0 px-5 pb-14 box-border max-w-full text-center text-13xl text-darkslateblue-100 font-dm-sans mq750:pb-9 mq750:box-border">
        <div className="w-[964px] flex flex-col items-start justify-start gap-[57px] max-w-full mq750:gap-[28px]">
          <div className="w-[939px] flex flex-row items-start justify-start py-0 px-20 box-border max-w-full mq1050:pl-10 mq1050:pr-10 mq1050:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[13px] max-w-full">
              <h2 className="m-0 self-stretch relative text-inherit font-normal font-inherit mq450:text-lgi mq750:text-7xl">{`Navigate Your Career with CareerGo: Where Opportunities Find You! `}</h2>
              <div className="w-[750px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full text-base">
                <div className="flex-1 relative leading-[22px] whitespace-pre-wrap inline-block max-w-full">
                  CareerGo revolutionizes job hunting by seamlessly connecting
                  job seekers with employers without the need for active job
                  applications or job postings. employers gain access to a
                  curated pool of qualified talent. With CareerGo, the job
                  search becomes efficient, intuitive, and stress-free,
                  empowering both candidates and employers to find their perfect
                  match effortlessly.
                </div>
              </div>
            </div>
          </div>
          <div className="w-[937px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[645px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <button className="cursor-pointer [border:none] py-[5px] px-[27px] bg-darkslateblue-100 rounded-3xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-cornflowerblue-200 active:animate-[1s_ease_0s_infinite_normal_none_shake-horizontal] active:opacity-[1]">
                  <div className="relative text-xl tracking-[0.01em] font-dm-sans text-white text-left">
                    Register as Jobseker
                  </div>
                </button>
              </div>
              <button className="cursor-pointer [border:none] py-[5px] px-6 bg-darkslateblue-100 rounded-3xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-cornflowerblue-200 active:animate-[1s_ease_0s_infinite_normal_none_shake-horizontal] active:opacity-[1]">
                <div className="relative text-xl tracking-[0.01em] font-dm-sans text-white text-left">
                  Register as Employer
                </div>
              </button>
            </div>
          </div>
          <img
            className="self-stretch h-[361px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="src/images/welcome page.svg"
          />
        </div>
      </section>
      <section className="self-stretch h-[762px] overflow-hidden shrink-0 flex flex-col items-end justify-start pt-[329px] pb-[0.2px] pr-[204.2px] pl-[181.9px] box-border gap-[211px] mix-blend-normal max-w-full text-center text-[60px] text-black font-poppins mq450:gap-[53px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[105px] mq750:pl-[91px] mq750:pt-[139px] mq750:pr-[102px] mq750:box-border mq1225:h-auto mq1225:pt-[214px] mq1225:pb-5 mq1225:box-border">
        <div className="mt-[-334px] w-[1030.6px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full shrink-0">
          <h1 className="m-0 h-[123px] w-[659px] relative text-inherit font-bold font-inherit inline-block shrink-0 [text-shadow:0px_1px_4px_rgba(0,_0,_0,_0.25)] [debug_commit:1de1738] max-w-full z-[1] mq450:text-[36px] mq750:text-29xl">
            Why choose Us?
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[61.2px] shrink-0 [debug_commit:1de1738] text-left text-5xl text-darkslateblue-100 font-dm-sans mq750:gap-[15px] mq1050:gap-[31px] mq1225:flex-wrap">
          <div className="flex-[0.876] shadow-[0px_8px_60px_rgba(0,_0,_0,_0.15)] rounded-3xs bg-white flex flex-col items-start justify-start pt-[75px] pb-[32.8px] pr-[18.4px] pl-[20.1px] box-border gap-[62px] min-w-[232px] z-[1] mq450:gap-[31px] mq450:pt-[49px] mq450:pb-[21px] mq450:box-border mq450:flex-1">
            <div className="w-[310.5px] h-[432.8px] relative shadow-[0px_8px_60px_rgba(0,_0,_0,_0.15)] rounded-3xs bg-white hidden" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-[26px]">
              <b className="flex-1 relative z-[1] mq450:text-lgi">
                Profile Creation
              </b>
            </div>
            <div className="self-stretch h-[232px] relative text-xl text-black inline-block shrink-0 z-[1] mq450:text-base">
              Job seekers can create detailed profiles highlighting their
              skills, experience, and preferences, providing employers with
              comprehensive information for selection.
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start relative min-w-[232px]">
            <img
              className="h-[633px] w-[1436px] absolute !m-[0] top-[-334px] right-[-575.9px] object-cover"
              loading="lazy"
              alt=""
              src="/background@2x.png"
            />
            <div className="flex-1 shadow-[0px_8px_60px_rgba(0,_0,_0,_0.15)] rounded-3xs bg-white flex flex-col items-start justify-start pt-[65px] px-[15.4px] pb-[196.7px] gap-[31px] z-[1] mq450:gap-[15px] mq450:pt-[42px] mq450:pb-32 mq450:box-border">
              <div className="w-[310.5px] h-[432.8px] relative shadow-[0px_8px_60px_rgba(0,_0,_0,_0.15)] rounded-3xs bg-white hidden" />
              <b className="w-[272px] relative inline-block z-[1] mq450:text-lgi">
                Direct Employer Selection
              </b>
              <div className="w-[271.7px] h-[78.1px] relative text-xl text-black inline-block shrink-0 z-[1] mq450:text-base">
                Employers have the autonomy to browse through job seeker
                profiles and directly choose suitable candidates without the
                need for job postings or active applications.
              </div>
            </div>
          </div>
          <div className="flex-[0.9372] shadow-[0px_8px_60px_rgba(0,_0,_0,_0.15)] rounded-3xs bg-white flex flex-col items-start justify-start pt-[65px] pb-[196.7px] pr-[7.8px] pl-[11.7px] box-border gap-[31px] min-w-[232px] z-[1] mq450:gap-[15px] mq450:pt-[42px] mq450:pb-32 mq450:box-border mq450:flex-1">
            <div className="w-[310.5px] h-[432.8px] relative shadow-[0px_8px_60px_rgba(0,_0,_0,_0.15)] rounded-3xs bg-white hidden" />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3.5">
              <b className="flex-1 relative z-[1] mq450:text-lgi">
                One-Way Selection Process
              </b>
            </div>
            <div className="w-[273px] h-[78.1px] relative text-xl text-black inline-block shrink-0 z-[1] mq450:text-base">
              The app facilitates a streamlined selection process where
              employers make the first move by selecting a job seeker based on
              their profile and extending them an offer, simplifying recruitment
              for both parties.
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[33px] pr-9 pl-5 box-border max-w-full text-center text-lg text-darkslateblue-100 font-dm-sans">
        <div className="w-[1072px] flex flex-col items-start justify-start gap-[57px] max-w-full mq750:gap-[28px]">
          <div className="w-[983px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[637px] flex flex-col items-start justify-start gap-[18px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-[22px] pl-5">
                <b className="relative tracking-[4px] leading-[18px] uppercase">
                  testimonials
                </b>
              </div>
              <h1 className="m-0 relative text-[54px] leading-[54px] font-bold font-inherit mq450:text-13xl mq450:leading-[32px] mq750:text-[43px] mq750:leading-[43px]">
                What Our Customer Say
              </h1>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[32px] max-w-full text-left text-xl text-darkslategray-100 mq750:gap-[16px]">
            <div className="flex-1 rounded-xl bg-white flex flex-col items-start justify-start pt-[57px] px-6 pb-[39px] box-border gap-[23.5px] min-w-[252px] max-w-full mq450:pt-[37px] mq450:pb-[25px] mq450:box-border">
              <div className="w-[336px] h-[390px] relative rounded-xl bg-white hidden max-w-full" />
              <img
                className="w-[136px] h-6 relative z-[1]"
                loading="lazy"
                alt=""
                src="/rating.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch relative leading-[24px] z-[1] mq450:text-base mq450:leading-[19px]">
                  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam. "
                </div>
                <div className="self-stretch h-0.5 relative z-[1]">
                  <div className="absolute top-[0px] left-[0px] bg-darkslategray-200 w-full h-full" />
                  <div className="absolute top-[0px] left-[0px] bg-lightskyblue w-[72px] h-0.5 z-[1]" />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[11px] text-5xl text-gray-200 mq450:flex-wrap">
                <img
                  className="h-[72px] w-[72px] relative rounded-81xl object-cover mix-blend-normal z-[1]"
                  loading="lazy"
                  alt=""
                  src="/img@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <b className="relative leading-[24px] capitalize z-[1] mq450:text-lgi mq450:leading-[19px]">
                      Melvin Lamberty
                    </b>
                    <div className="flex flex-row items-start justify-start py-0 px-px text-base text-lightskyblue">
                      <div className="relative leading-[16px] uppercase font-medium inline-block min-w-[88px] z-[1]">
                        JOBSEEKER
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-white flex flex-col items-start justify-start pt-[57px] px-6 pb-[39px] box-border gap-[23.5px] min-w-[252px] max-w-full mq450:pt-[37px] mq450:pb-[25px] mq450:box-border">
              <div className="w-[336px] h-[390px] relative rounded-xl bg-white hidden max-w-full" />
              <img
                className="w-[136px] h-6 relative z-[1]"
                alt=""
                src="/rating.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch relative leading-[24px] z-[1] mq450:text-base mq450:leading-[19px]">
                  " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam. "
                </div>
                <div className="self-stretch h-0.5 relative z-[1]">
                  <div className="absolute top-[0px] left-[0px] bg-darkslategray-200 w-full h-full" />
                  <div className="absolute top-[0px] left-[0px] bg-lightskyblue w-[72px] h-0.5 z-[1]" />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start gap-[11px] text-5xl text-gray-200">
                <img
                  className="h-[72px] w-[72px] relative rounded-81xl object-cover mix-blend-normal z-[1]"
                  alt=""
                  src="/img-1@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                  <div className="flex flex-col items-start justify-start gap-[8px]">
                    <b className="relative leading-[24px] capitalize inline-block min-w-[78px] z-[1] mq450:text-lgi mq450:leading-[19px]">{`Melvin `}</b>
                    <div className="flex flex-row items-start justify-start py-0 pr-1.5 pl-px text-base text-lightskyblue">
                      <div className="relative leading-[16px] uppercase font-medium inline-block min-w-[71px] z-[1]">
                        EMLOYER
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-xl bg-white flex flex-col items-start justify-start pt-[60px] pb-9 pr-[22px] pl-6 box-border gap-[22px] min-w-[252px] max-w-full mq450:pt-[39px] mq450:pb-[23px] mq450:box-border">
              <div className="w-[336px] h-[390px] relative rounded-xl bg-white hidden max-w-full" />
              <img
                className="w-[136px] h-6 relative z-[1]"
                alt=""
                src="/rating-2.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                  <div className="flex-1 relative leading-[24px] z-[1] mq450:text-base mq450:leading-[19px]">
                    " Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam. "
                  </div>
                </div>
                <div className="self-stretch h-0.5 relative z-[1]">
                  <div className="absolute top-[0px] left-[0px] bg-darkslategray-200 w-full h-full" />
                  <div className="absolute top-[0px] left-[0px] bg-lightskyblue w-[72px] h-0.5 z-[1]" />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[12px] text-5xl text-gray-200 mq450:flex-wrap">
                <img
                  className="h-[72px] w-[72px] relative rounded-81xl object-cover mix-blend-normal z-[1]"
                  alt=""
                  src="/img-2@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[132px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                    <b className="relative leading-[24px] capitalize z-[1] mq450:text-lgi mq450:leading-[19px]">
                      Felix Thönnessen
                    </b>
                    <div className="relative text-base leading-[16px] uppercase font-medium text-lightskyblue inline-block min-w-[88px] z-[1]">
                      JOBSEEKER
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[1414px] flex flex-row items-start justify-center pt-0 px-5 pb-[87px] box-border max-w-full text-left text-xl text-black font-dm-sans mq750:pb-[57px] mq750:box-border">
        <div className="w-[1118px] flex flex-col items-start justify-start gap-[14.8px] max-w-full">
          <div className="self-stretch flex flex-row items-end justify-start gap-[17px] max-w-full mq1050:flex-wrap">
            <div className="flex-1 shadow-[0px_4px_20px_rgba(0,_0,_0,_0.1)] rounded-3xs bg-white overflow-hidden flex flex-col items-start justify-start pt-[23px] px-[17px] pb-[22.9px] box-border gap-[18px] min-w-[440px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq750:min-w-full">
              <div className="self-stretch rounded-8xs box-border flex flex-row items-start justify-start pt-2.5 px-[25px] pb-[11px] max-w-full border-[1px] border-solid border-darkslateblue-100">
                <div className="h-[54.5px] w-[643px] relative rounded-8xs box-border hidden max-w-full border-[1px] border-solid border-darkslateblue-100" />
                <input
                  className="w-[127.8px] [border:none] [outline:none] font-dm-sans text-lg bg-[transparent] h-[30px] relative leading-[33px] text-lightskyblue text-left inline-block p-0 z-[1]"
                  placeholder="Your Name"
                  type="text"
                />
              </div>
              <div className="self-stretch rounded-8xs box-border flex flex-row items-start justify-start pt-[11px] px-[25px] pb-2.5 max-w-full border-[1px] border-solid border-darkslateblue-100">
                <div className="h-[54.5px] w-[643px] relative rounded-8xs box-border hidden max-w-full border-[1px] border-solid border-darkslateblue-100" />
                <input
                  className="w-[116.2px] [border:none] [outline:none] font-dm-sans text-lg bg-[transparent] h-[30px] relative leading-[33px] text-lightskyblue text-left inline-block p-0 z-[1]"
                  placeholder="Your EMail"
                  type="text"
                />
              </div>
              <div className="self-stretch rounded-8xs box-border flex flex-row items-start justify-start pt-1 px-[25px] pb-[17px] max-w-full border-[1px] border-solid border-darkslateblue-100">
                <div className="h-[54.5px] w-[643px] relative rounded-8xs box-border hidden max-w-full border-[1px] border-solid border-darkslateblue-100" />
                <input
                  className="w-[86.5px] [border:none] [outline:none] font-dm-sans text-lg bg-[transparent] h-[30px] relative leading-[33px] text-lightskyblue text-left inline-block p-0 z-[1]"
                  placeholder="Subject"
                  type="text"
                />
              </div>
              <textarea
                className="bg-[transparent] h-[150.8px] w-auto [outline:none] self-stretch rounded-8xs box-border flex flex-row items-start justify-start pt-[11.5px] px-[25px] pb-[11px] font-dm-sans text-lg text-lightskyblue border-[1px] border-solid border-darkslateblue-100"
                placeholder="Your Massage"
                rows={8}
                cols={32}
              />
            </div>
            <div className="w-[424px] flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px] box-border min-w-[424px] max-w-full mq750:min-w-full mq1050:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
                <div className="w-[383px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-13xl text-darkslateblue-100">
                  <h2 className="m-0 relative text-inherit leading-[70px] font-bold font-inherit mq450:text-lgi mq450:leading-[42px] mq750:text-7xl mq750:leading-[56px]">
                    Contact us
                  </h2>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[11px] gap-[6px]">
                  <div className="self-stretch relative leading-[33px] mq450:text-base mq450:leading-[26px]">
                    Got questions or feedback? We're here to help! Reach out to
                    us through our contact form below. Your thoughts matter, and
                    we're committed to providing the best experience possible.
                    We look forward to hearing from you!
                  </div>
                  <div className="relative text-13xl leading-[51px] text-darkslateblue-100 mq450:text-lgi mq450:leading-[31px] mq750:text-7xl mq750:leading-[41px]">
                    CareerGo
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[25px]">
                    <img
                      className="h-[19px] w-[19px] relative"
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                    <div className="relative leading-[25px] whitespace-nowrap mq450:text-base mq450:leading-[18px]">
                      +62 6943 6956
                    </div>
                  </div>
                </div>
                <div className="w-[275.1px] flex flex-row items-start justify-start gap-[21.5px]">
                  <div className="flex flex-col items-start justify-start pt-[3.8px] px-0 pb-0">
                    <img
                      className="w-[22.6px] h-[17px] relative"
                      loading="lazy"
                      alt=""
                      src="/group-74.svg"
                    />
                  </div>
                  <div className="flex-1 relative leading-[25px] whitespace-nowrap mq450:text-base mq450:leading-[18px]">
                    contact@domain.com
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[677px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <button className="cursor-pointer [border:none] py-[5px] px-[26px] bg-darkslateblue-100 rounded-3xs overflow-hidden flex flex-row items-start justify-start hover:bg-cornflowerblue-200 active:animate-[1s_ease_0s_infinite_normal_none_shake-horizontal] active:opacity-[1]">
              <div className="relative text-xl tracking-[0.01em] font-dm-sans text-white text-left inline-block min-w-[68px] mq450:text-base">
                Submit
              </div>
            </button>
          </div>
        </div>
      </section>
      <footer className="self-stretch h-[404px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-0 px-0 pb-[196.8px] box-border gap-[82.8px] mix-blend-normal max-w-full text-left text-xl text-black font-dm-sans mq450:gap-[21px] mq750:gap-[41px] mq750:pb-32 mq750:box-border mq1225:h-auto">
        <div className="w-[1337px] flex flex-row items-start justify-start py-0 px-[65px] box-border max-w-full mq1225:pl-8 mq1225:pr-8 mq1225:box-border">
          <div className="flex-1 flex flex-row items-end justify-between shrink-0 [debug_commit:1de1738] max-w-full gap-[20px] mq1225:flex-wrap">
            <div className="h-[121.2px] w-[400px] flex flex-col items-start justify-start min-w-[400px] max-w-full mq750:min-w-full mq1225:flex-1">
              <img
                className="self-stretch h-20 relative rounded max-w-full overflow-hidden shrink-0 object-cover mix-blend-normal mq1225:self-stretch mq1225:w-auto"
                alt=""
                src="/logo2-1-1@2x.png"
              />
            </div>
            <div className="w-[671px] flex flex-row items-start justify-start gap-[33px] min-w-[671px] max-w-full mq750:flex-wrap mq750:gap-[16px] mq1050:min-w-full mq1225:flex-1">
              <div className="flex-1 flex flex-col items-start justify-start pt-[22px] pb-0 pr-[33.8px] pl-0 box-border min-w-[179px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[21px]">
                  <b className="self-stretch h-[41px] relative leading-[70px] flex text-center items-center justify-center shrink-0 mq450:text-base mq450:leading-[56px]">
                    Contact Information
                  </b>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[6px]">
                    <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[2.3px]">
                      <img
                        className="w-[19px] h-[19px] relative overflow-hidden shrink-0"
                        loading="lazy"
                        alt=""
                        src="/fluentmail20filled.svg"
                      />
                    </div>
                    <div className="flex-1 relative leading-[14.3px] font-medium whitespace-nowrap mq450:text-base mq450:leading-[27px]">
                      info@traveller.com
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[6px]">
                    <img
                      className="h-[19px] w-[19px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/carbonphonefilled.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-px">
                      <div className="self-stretch h-[14.3px] relative leading-[34px] font-medium flex items-center shrink-0 whitespace-nowrap mq450:text-base mq450:leading-[27px]">
                        +97 888 8888
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[158px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <b className="self-stretch relative leading-[66.7px] mix-blend-normal shrink-0 [debug_commit:1de1738] z-[1] mq450:text-base mq450:leading-[53px]">
                    Quick Link
                  </b>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2 pl-[6.7px] mt-[-11.7px]">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[5px] shrink-0 [debug_commit:1de1738]">
                      <div className="relative leading-[34px] font-medium inline-block min-w-[56px] mq450:text-base mq450:leading-[27px]">
                        <Link to='/'>Home</Link>
                      </div>
                      <div className="w-[104.5px] relative leading-[34px] font-medium flex items-center mq450:text-base mq450:leading-[27px]">
                        <Link to='/about'>About Us</Link>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[79px] w-[172px] relative">
                <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[165px]">
                  <img
                    className="absolute top-[59px] left-[99px] w-6 h-4"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start h-full">
                    <b className="self-stretch relative leading-[70px] z-[1] mq450:text-base mq450:leading-[56px]">
                      Follow Us
                    </b>
                    <div className="flex flex-row items-start justify-start gap-[27px] mt-[-14px]">
                      <img
                        className="h-[23px] w-[23px] relative min-h-[23px] shrink-0 [debug_commit:1de1738]"
                        alt=""
                        src="/vector-2.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <img
                          className="w-[22.7px] h-[18.5px] relative shrink-0 [debug_commit:1de1738]"
                          alt=""
                          src="/vector-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="absolute top-[57px] left-[150px] w-[22px] h-[22px]"
                  alt=""
                  src="/vector-4.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-lightskyblue flex flex-row items-start justify-center pt-8 pb-[27.9px] pr-5 pl-[55px] box-border shrink-0 [debug_commit:1de1738] max-w-full text-center text-5xl text-white mq1050:pl-[27px] mq1050:box-border">
          <div className="h-[114.2px] w-[1440px] relative bg-lightskyblue hidden max-w-full" />
          <div className="h-[54.3px] w-[881px] relative leading-[34px] inline-block shrink-0 max-w-full z-[1] mq450:text-lgi mq450:leading-[27px]">
            Copyright © All rights reserved 2024
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
