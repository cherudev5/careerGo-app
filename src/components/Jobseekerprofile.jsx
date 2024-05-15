const JobseekerProfile = () => {
    return (
      <div className="w-full relative bg-lavender-100 overflow-hidden flex flex-col items-center justify-start pt-[25px] px-5 pb-0 box-border gap-[19px] tracking-[normal] leading-[normal]">
        <header className="w-[1120px] rounded-3xs bg-snow flex flex-row items-start justify-between pt-[5px] pb-1.5 pr-[102px] pl-[42px] box-border mix-blend-normal sticky top-[0] z-[99] gap-[20px] max-w-full text-left text-xs text-darkslateblue-100 font-dm-sans mq750:pr-[25px] mq750:box-border mq1125:pl-[21px] mq1125:pr-[51px] mq1125:box-border">
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
          <div className="h-[935px] w-[272px] flex flex-col items-start justify-start pt-[265px] pb-[46px] pr-0 pl-[13px] box-border relative gap-[21px] mq750:hidden mq750:pt-28 mq750:pb-5 mq750:box-border mq1025:pt-[172px] mq1025:pb-[30px] mq1025:box-border">
            <div className="self-stretch flex flex-row items-start justify-end">
              <div className="w-[166px] relative inline-block shrink-0 z-[1]">
                unverified
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end pt-0 px-[45px] pb-[31px]">
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
            <div className="w-[265px] h-full absolute !m-[0] top-[0px] bottom-[0px] left-[0px]">
              <div className="absolute top-[0px] left-[0px] rounded-4xs bg-lightsteelblue w-full h-full" />
              <img
                className="absolute top-[25px] left-[25px] rounded-[50%] w-[216px] h-[223px] object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/profile-pic@2x.png"
              />
              <img
                className="absolute top-[260px] left-[60px] w-[31px] h-[34px] object-cover z-[1]"
                loading="lazy"
                alt=""
                src="/unverifed-shield-1@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[22px]">
              <button className="cursor-pointer [border:none] py-[13px] px-12 bg-darkslateblue-200 shadow-[-1px_0px_0px_#313d4f_inset] rounded-4xs overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[1] hover:bg-cornflowerblue-300">
                <div className="relative text-base tracking-[0.3px] font-dm-sans text-white text-left">
                  Account Settings
                </div>
              </button>
              <button className="cursor-pointer [border:none] py-[13px] pr-[45px] pl-[72px] bg-darkslateblue-200 shadow-[-1px_0px_0px_#313d4f_inset] rounded-4xs overflow-hidden flex flex-row items-start justify-start gap-[8px] z-[1]">
                <div className="relative text-base tracking-[0.3px] font-dm-sans text-white text-left inline-block min-w-[90px]">
                  View Offers
                </div>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <b className="relative text-sm tracking-[0.3px] inline-block font-dm-sans text-white text-left min-w-[18px] z-[2]">
                    (1)
                  </b>
                </div>
              </button>
            </div>
            <button className="cursor-pointer [border:none] py-4 px-5 bg-darkslateblue-200 w-[244px] shadow-[-1px_0px_0px_#313d4f_inset] rounded-4xs overflow-hidden flex flex-row items-start justify-center box-border whitespace-nowrap z-[1] hover:bg-cornflowerblue-300">
              <div className="relative text-base tracking-[0.3px] font-dm-sans text-white text-left inline-block min-w-[61px]">
                Log Out
              </div>
            </button>
          </div>
          <section className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border max-w-[calc(100%_-_272px)] mq750:max-w-full">
            <footer className="self-stretch flex flex-col items-start justify-start gap-[77px] max-w-full text-left text-xl text-darkslateblue-100 font-dm-sans mq450:gap-[19px] mq1025:gap-[38px]">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-1 box-border max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[11px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1">
                    <b className="relative tracking-[0.3px] inline-block min-w-[87px] mq450:text-base">
                      {" "}
                      PROFILE
                    </b>
                  </div>
                  <div className="self-stretch rounded-mini bg-whitesmoke-200 overflow-hidden flex flex-col items-start justify-start pt-[37px] pb-[50px] pr-0 pl-[9px] box-border gap-[45px] max-w-full text-base mq450:gap-[22px] mq750:pt-6 mq750:pb-8 mq750:box-border">
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] max-w-full">
                      <div className="flex-1 flex flex-col items-end justify-start gap-[55px] min-w-[234px] max-w-full mq450:gap-[27px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[20px] mq450:flex-wrap">
                          <div className="flex-[0.8923] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-2.5 pb-[17px] pr-[18px] pl-9 box-border gap-[10px] min-w-[110px] mq450:flex-1">
                            <div className="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                            <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
                              <div className="self-stretch flex flex-row items-start justify-end">
                                <button className="cursor-pointer [border:none] py-0 px-3.5 bg-royalblue rounded-4xs overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-cornflowerblue-100">
                                  <div className="relative text-sm font-dm-sans text-white text-left inline-block mix-blend-normal min-w-[26px]">
                                    edit
                                  </div>
                                </button>
                              </div>
                              <div className="relative inline-block min-w-[80px] z-[1]">
                                Availability
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 px-[11px] text-black">
                              <div className="relative inline-block min-w-[67px] z-[1]">
                                Full-time
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-2.5 pb-[17px] pr-4 pl-6 box-border gap-[13px] min-w-[110px]">
                            <div className="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                            <div className="self-stretch flex flex-col items-start justify-start gap-[1px]">
                              <div className="self-stretch flex flex-row items-start justify-end">
                                <button className="cursor-pointer [border:none] py-0 px-3.5 bg-royalblue rounded-4xs overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-cornflowerblue-100">
                                  <div className="relative text-sm font-dm-sans text-white text-left inline-block mix-blend-normal min-w-[26px]">
                                    edit
                                  </div>
                                </button>
                              </div>
                              <div className="relative inline-block min-w-[102px] z-[1]">
                                Job-category
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 px-[23px] text-black">
                              <div className="relative inline-block min-w-[67px] z-[1]">
                                Full-time
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-2 pb-[120.8px] pr-4 pl-[21px] box-border gap-[13px] max-w-full">
                          <div className="w-[358px] h-52 relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden max-w-full" />
                          <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                            <div className="w-[97px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                              <div className="self-stretch relative z-[1]">
                                Experience
                              </div>
                            </div>
                            <button className="cursor-pointer [border:none] py-0 px-3.5 bg-royalblue rounded-4xs overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-cornflowerblue-100">
                              <div className="relative text-sm font-dm-sans text-white text-left inline-block mix-blend-normal min-w-[26px]">
                                edit
                              </div>
                            </button>
                          </div>
                          <div className="w-[167.1px] flex flex-row items-start justify-start py-0 px-[13px] box-border text-black">
                            <div className="h-[43.2px] flex-1 relative inline-block shrink-0 z-[1]">
                              Full-time
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[170px] flex flex-col items-start justify-start gap-[55px]">
                        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-2.5 px-1.5 pb-[17px] gap-[13px]">
                          <div className="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                          <div className="w-[149px] flex flex-col items-start justify-start gap-[1px]">
                            <div className="self-stretch flex flex-row items-start justify-end">
                              <button className="cursor-pointer [border:none] py-0 px-3.5 bg-royalblue rounded-4xs overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-cornflowerblue-100">
                                <div className="relative text-sm font-dm-sans text-white text-left inline-block mix-blend-normal min-w-[26px]">
                                  edit
                                </div>
                              </button>
                            </div>
                            <div className="relative z-[1]">
                              Salary expectation
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[41px] text-black">
                            <div className="relative inline-block min-w-[67px] z-[1]">
                              Full-time
                            </div>
                          </div>
                        </div>
                        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-end justify-start pt-2 pb-[103.8px] pr-[15px] pl-[5px] gap-[4px]">
                          <div className="w-[170px] h-52 relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                          <button className="cursor-pointer [border:none] py-0 px-3.5 bg-royalblue rounded-4xs overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-cornflowerblue-100">
                            <div className="relative text-sm font-dm-sans text-white text-left inline-block mix-blend-normal min-w-[26px]">
                              edit
                            </div>
                          </button>
                          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[33px] pl-0">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
                              <div className="self-stretch relative whitespace-pre-wrap z-[1]">
                                {" "}
                                Qualifications
                              </div>
                              <div className="flex flex-row items-start justify-start py-0 pr-3.5 pl-9 text-black">
                                <div className="h-[43.2px] relative inline-block min-w-[67px] z-[1]">
                                  Full-time
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[265px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-2.5 pb-[77.1px] pr-[13.3px] pl-[93px] box-border gap-[15px] text-black mq450:pl-5 mq450:box-border">
                        <div className="w-[265px] h-[312px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                        <div className="self-stretch flex flex-col items-start justify-start gap-[4.5px] text-darkslateblue-100">
                          <div className="self-stretch flex flex-row items-start justify-end py-0 px-1.5">
                            <button className="cursor-pointer [border:none] py-0 px-3.5 bg-royalblue rounded-4xs overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-cornflowerblue-100">
                              <div className="relative text-sm font-dm-sans text-white text-left inline-block mix-blend-normal min-w-[26px]">
                                edit
                              </div>
                            </button>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-5">
                            <div className="flex-1 relative z-[1]">Skills</div>
                          </div>
                          <div className="w-[104.4px] relative text-black inline-block z-[1]">
                            Full-time
                          </div>
                        </div>
                        <div className="w-[104.4px] relative inline-block z-[1]">
                          Full-time
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
                      <div className="flex-1 overflow-x-auto flex flex-row items-start justify-between max-w-full gap-[20px]">
                        <div className="w-[170px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 shrink-0 flex flex-col items-start justify-start pt-[13px] pb-[25px] pr-[13px] pl-8 box-border gap-[1.5px]">
                          <div className="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                          <div className="self-stretch flex flex-row items-start justify-end">
                            <button className="cursor-pointer [border:none] py-0 px-3.5 bg-royalblue rounded-4xs overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-cornflowerblue-100">
                              <div className="relative text-sm font-dm-sans text-white text-left inline-block mix-blend-normal min-w-[26px]">
                                edit
                              </div>
                            </button>
                          </div>
                          <div className="flex flex-row items-start justify-start py-0 px-1">
                            <div className="relative inline-block min-w-[59px] z-[1]">
                              Resume
                            </div>
                          </div>
                          <div className="relative text-black inline-block min-w-[67px] z-[1]">
                            Full-time
                          </div>
                        </div>
                        <div className="w-[170px] shrink-0 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[38px]">
                            <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-[9px] pb-[29px] pr-[11px] pl-6 gap-[15px]">
                              <div className="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[15px]">
                                <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                                  <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                                    <div className="relative inline-block min-w-[20px] z-[1]">
                                      Cv
                                    </div>
                                  </div>
                                  <button className="cursor-pointer [border:none] py-0 px-3.5 bg-royalblue rounded-4xs overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-cornflowerblue-100">
                                    <div className="relative text-sm font-dm-sans text-white text-left inline-block mix-blend-normal min-w-[26px]">
                                      edit
                                    </div>
                                  </button>
                                </div>
                              </div>
                              <div className="relative text-black inline-block min-w-[67px] z-[1]">
                                Full-time
                              </div>
                            </div>
                            <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-[11px] pb-[17px] pr-[18px] pl-9 gap-[10px]">
                              <div className="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                              <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
                                <div className="self-stretch flex flex-row items-start justify-end">
                                  <button className="cursor-pointer [border:none] py-0 px-3.5 bg-royalblue rounded-4xs overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-cornflowerblue-100">
                                    <div className="relative text-sm font-dm-sans text-white text-left inline-block mix-blend-normal min-w-[26px]">
                                      edit
                                    </div>
                                  </button>
                                </div>
                                <div className="relative inline-block min-w-[61px] z-[1]">
                                  LinkedIn
                                </div>
                              </div>
                              <div className="flex flex-row items-start justify-start py-0 px-[11px] text-black">
                                <div className="relative inline-block min-w-[67px] z-[1]">
                                  Full-time
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[170px] shrink-0 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                          <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-[5px] pb-[17px] pr-3.5 pl-9 gap-[9.5px]">
                            <div className="w-[170px] h-[101px] relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.47)] rounded-xl bg-whitesmoke-100 hidden" />
                            <div className="self-stretch flex flex-row items-start justify-end">
                              <button className="cursor-pointer [border:none] py-0 px-3.5 bg-royalblue rounded-4xs overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-cornflowerblue-100">
                                <div className="relative text-sm font-dm-sans text-white text-left inline-block mix-blend-normal min-w-[26px]">
                                  edit
                                </div>
                              </button>
                            </div>
                            <div className="relative inline-block min-w-[55px] z-[1]">
                              Git hub
                            </div>
                            <div className="flex flex-row items-start justify-start py-0 px-[11px] text-black">
                              <div className="relative inline-block min-w-[67px] z-[1]">
                                Full-time
                              </div>
                            </div>
                          </div>
                        </div>
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
  
  export default JobseekerProfile;
  