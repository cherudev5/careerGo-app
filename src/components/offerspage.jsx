const OfferPage = () => {
    return (
      <div className="w-full relative bg-lavender-100 overflow-hidden flex flex-col items-center justify-start pt-[25px] px-5 pb-0 box-border gap-[19px] leading-[normal] tracking-[normal] text-center text-[22px] text-white font-dm-sans">
        <div className="w-[22px] h-0 relative font-medium hidden mq450:text-lg">
          
        </div>
        <header className="w-[1120px] rounded-3xs bg-snow flex flex-row items-start justify-between pt-[5px] pb-1.5 pr-[102px] pl-[42px] box-border mix-blend-normal top-[0] z-[99] sticky gap-[20px] max-w-full text-left text-xs text-darkslateblue-100 font-dm-sans mq750:pr-[25px] mq750:box-border mq1125:pl-[21px] mq1125:pr-[51px] mq1125:box-border">
          <div className="h-[45px] w-[1120px] relative rounded-3xs bg-snow hidden max-w-full" />
          <img
            className="h-[34px] w-[170px] relative rounded object-cover mix-blend-normal z-[1]"
            loading="lazy"
            alt=""
            src="/logo2-11@2x.png"
          />
          <div className="w-56 flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
              <div className="relative inline-block min-w-[35px] z-[1]">HOME</div>
              <div className="relative whitespace-pre-wrap inline-block min-w-[76px] shrink-0 z-[1]">
                CONTACT US
              </div>
              <div className="relative inline-block min-w-[49px] z-[1]">
                LOGOUT
              </div>
            </div>
          </div>
        </header>
        <main className="w-[1120px] flex flex-row items-start justify-start max-w-full text-left text-base text-white font-dm-sans">
          <div className="w-[272px] flex flex-col items-start justify-start pt-[265px] pb-[52px] pr-0 pl-[13px] box-border relative gap-[121px] mq450:gap-[60px] mq750:hidden mq750:pt-28 mq750:pb-[22px] mq750:box-border mq1025:pt-[172px] mq1025:pb-[34px] mq1025:box-border">
            <div className="self-stretch flex flex-row items-start justify-end">
              <div className="w-[196px] flex flex-col items-start justify-start gap-[21px]">
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[30px]">
                  <div className="flex-1 relative z-[1]">unverified</div>
                </div>
                <div className="w-[151px] flex flex-col items-start justify-start gap-[11px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[15px]">
                    <div className="flex-1 relative z-[1]">First Name</div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[15px]">
                    <div className="relative inline-block min-w-[83px] z-[1]">
                      Last name
                    </div>
                  </div>
                  <div className="relative inline-block min-w-[113px] z-[1]">
                    Job -Category
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[156px]">
              <button className="cursor-pointer [border:none] py-[13px] px-[51px] bg-darkslateblue-200 shadow-[-1px_0px_0px_#313d4f_inset] rounded-4xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-cornflowerblue-300">
                <b className="relative text-base tracking-[0.3px] inline-block font-dm-sans text-white text-left min-w-[110px]">
                  Make an offer
                </b>
              </button>
            </div>
            <div className="w-[265px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px]">
              <div className="absolute top-[0px] left-[0px] rounded-4xs bg-lightsteelblue w-full h-full" />
              <img
                className="absolute top-[25px] left-[25px] rounded-[50%] w-[216px] h-[223px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/profile-pic@2x.png"
              />
              <img
                className="absolute top-[260px] left-[60px] w-[31px] h-[34px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/unverifed-shield-1@2x.png"
              />
            </div>
            <button className="cursor-pointer [border:none] py-[13px] px-[61px] bg-darkslateblue-200 shadow-[-1px_0px_0px_#313d4f_inset] rounded-4xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-cornflowerblue-300">
              <div className="relative text-base tracking-[0.3px] font-dm-sans text-white text-left inline-block min-w-[112px]">
                Back to profile
              </div>
            </button>
          </div>
          <section className="flex-1 flex flex-col items-start justify-start pt-[47px] px-0 pb-0 box-border max-w-[calc(100%_-_272px)] mq450:pt-5 mq450:box-border mq750:max-w-full mq1025:pt-[31px] mq1025:box-border">
            <footer className="self-stretch flex flex-col items-start justify-start gap-[87px] max-w-full text-left text-lg text-darkslateblue-100 font-dm-sans mq450:gap-[22px] mq1025:gap-[43px]">
              <div className="self-stretch rounded-4xs bg-white flex flex-col items-start justify-start pt-[39px] pb-7 pr-0 pl-[13px] box-border gap-[46px] max-w-full mq450:gap-[23px] mq750:pt-[25px] mq750:pb-5 mq750:box-border">
                <div className="self-stretch h-[732px] relative rounded-4xs bg-white hidden" />
                <div className="self-stretch flex flex-col items-start justify-start gap-[39px] max-w-full mq450:gap-[19px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq750:flex-wrap">
                    <div className="flex-1 flex flex-col items-end justify-start gap-[61px] min-w-[357px] max-w-full mq450:gap-[15px] mq450:min-w-full mq750:gap-[30px]">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq750:flex-wrap">
                        <div className="flex-[0.6203] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-8 px-9 pb-[17px] box-border gap-[8px] min-w-[127px] z-[1] mq450:flex-1">
                          <div className="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                          <div className="relative inline-block min-w-[89px] z-[1]">
                            Availability
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[11px] text-base text-black">
                            <div className="relative inline-block min-w-[67px] z-[1]">
                              Full-time
                            </div>
                          </div>
                        </div>
                        <div className="flex-[0.7722] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-1 px-6 pb-[17px] box-border gap-[8.5px] min-w-[127px] z-[1] text-sm text-white mq450:flex-1">
                          <div className="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                          <div className="self-stretch flex flex-row items-start justify-end py-0 px-[5px]">
                            <div className="relative inline-block min-w-[26px] z-[1]">
                              edit
                            </div>
                          </div>
                          <div className="relative text-lg text-darkslateblue-100 inline-block min-w-[115px] z-[1]">
                            Job-category
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pr-8 pl-[23px] text-base text-black">
                            <div className="relative inline-block min-w-[67px] z-[1]">
                              Full-time
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-[29px] px-1.5 pb-[17px] box-border gap-[11px] min-w-[127px] z-[1]">
                          <div className="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                          <div className="relative z-[1]">Salary expectation</div>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[41px] text-base text-black">
                            <div className="relative inline-block min-w-[67px] z-[1]">
                              Full-time
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[20px] max-w-full mq750:flex-wrap">
                        <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-0.5 pb-[115px] pr-[6.2px] pl-4 box-border gap-[10.9px] min-w-[233px] min-h-[208px] max-w-full z-[1]">
                          <div className="w-[358px] h-52 relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden max-w-full" />
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                            <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                              <div className="relative inline-block min-w-[97px] shrink-0 [debug_commit:1de1738] z-[1]">
                                Experience
                              </div>
                            </div>
                            <div className="h-[37.1px] w-[54.8px] relative text-sm text-white inline-block shrink-0 [debug_commit:1de1738] z-[1]">
                              edit
                            </div>
                          </div>
                          <div className="w-[185.1px] flex flex-row items-start justify-start py-0 px-[22px] box-border text-base text-black">
                            <div className="h-[43.2px] flex-1 relative inline-block shrink-0 z-[1]">
                              Full-time
                            </div>
                          </div>
                        </div>
                        <div className="h-52 w-[170px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start py-1 px-2 box-border gap-[10px] min-w-[170px] z-[1] mq750:flex-1">
                          <div className="w-[170px] h-52 relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                          <div className="relative whitespace-pre-wrap inline-block min-w-[117px] z-[1]">
                            {" "}
                            Qualifications
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 px-[33px] text-base text-black">
                            <div className="h-[43.2px] relative inline-block min-w-[67px] z-[1]">
                              Full-time
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[265px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-[33px] pb-[41.1px] pr-[13.3px] pl-[101px] box-border gap-[32px] min-w-[265px] z-[1] text-base text-black mq450:gap-[16px] mq450:pl-5 mq450:box-border mq750:flex-1">
                      <div className="w-[265px] h-[312px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                      <div className="self-stretch flex flex-col items-start justify-start gap-[22px] text-lg text-darkslateblue-100">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3">
                          <div className="flex-1 relative z-[1]">Skills</div>
                        </div>
                        <div className="w-[104.4px] relative text-base text-black inline-block z-[1]">
                          Full-time
                        </div>
                      </div>
                      <div className="w-[104.4px] relative inline-block z-[1]">
                        Full-time
                      </div>
                      <div className="w-[104.4px] relative inline-block z-[1]">
                        Full-time
                      </div>
                      <div className="w-[104.4px] h-[32.9px] relative inline-block shrink-0 z-[1]">
                        Full-time
                      </div>
                    </div>
                  </div>
                  <div className="w-[743px] flex flex-row items-start justify-start py-0 px-0.5 box-border max-w-full">
                    <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
                      <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-8 px-9 pb-[17px] gap-[8px] z-[1]">
                        <div className="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                        <div className="relative inline-block min-w-[67px] z-[1]">
                          Resume
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[11px] text-base text-black">
                          <div className="relative inline-block min-w-[67px] z-[1]">
                            Full-time
                          </div>
                        </div>
                      </div>
                      <div className="w-[170px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-8 px-9 pb-[17px] gap-[8px] z-[1]">
                          <div className="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                          <div className="relative inline-block min-w-[23px] z-[1]">
                            Cv
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[11px] text-base text-black">
                            <div className="relative inline-block min-w-[67px] z-[1]">
                              Full-time
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[170px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-8 px-9 pb-[17px] gap-[8px] z-[1]">
                          <div className="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                          <div className="relative inline-block min-w-[62px] z-[1]">
                            Git hub
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[11px] text-base text-black">
                            <div className="relative inline-block min-w-[67px] z-[1]">
                              Full-time
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[740px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <div className="shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-8 px-9 pb-[17px] gap-[8px] z-[1]">
                    <div className="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                    <div className="relative inline-block min-w-[69px] z-[1]">
                      LinkedIn
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[11px] text-base text-black">
                      <div className="relative inline-block min-w-[67px] z-[1]">
                        Full-time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="w-[273px] h-[55px] relative rounded object-cover mix-blend-normal"
                alt=""
                src="/logo2-1-11@2x.png"
              />
            </footer>
          </section>
        </main>
      </div>
    );
  };
  
  export default OfferPage;
  