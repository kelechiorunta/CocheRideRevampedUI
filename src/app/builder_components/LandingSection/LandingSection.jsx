/**
 * This code was generated by Builder.io.
 */
'use client'
import * as React from "react";
import Typer from "src/app/components/Typer";
import Slider from "src/app/components/Slider";
import pic1 from '../../../../public/assets/img/slide-pix@2x.jpg'
import pic2 from '../../../../public/assets/img/slide-pix2@2x.jpg'
import pic3 from '../../../../public/assets/img/slide-pix3@2x.jpg'
import border1 from '../../../../public/assets/img/border1.png'
import border2 from '../../../../public/assets/img/border2.png'
import Image from "next/image";

const options = ["Trucks", "Buses", "Minivans", "Other Vehicles"]

const slides = [
  { id: 0, heroPic: pic1},
  { id: 1, heroPic: pic2},
  { id: 2, heroPic: pic3},
]

export default function LandingSection() {
  return (
    <div className="box-border flex relative flex-col shrink-0 pb-8 my-5 h-auto bg-black">
      <div className="box-border flex relative flex-col shrink-0 px-8 pt-5 pb-8 mt-5 max-w-none bg-black max-[1040px]:px-16 max-[1040px]:max-w-[1418px] max-sm:px-5">
        <div className="flex gap-x-30 justify-end pl-8 max-[1040px]:flex-col max-[1040px]:pl-0">
          <div className="flex flex-col w-full max-[1040px]:ml-0 max-[1040px]:w-full">
            <div className="box-border flex relative flex-col shrink-0 py-5 pl-5 mt-5">
              <div className="flex gap-x-30 max-[1040px]:flex-col">
                <div className="flex flex-col w-6/12 max-[1040px]:ml-0 max-[1040px]:w-full">
                  <div className="box-border relative shrink-0 mt-5 h-auto text-5xl font-bold text-white leading-[55.2px] max-[1040px]:mx-auto max-[850px]:text-4xl max-[1040px]:leading-14 max-sm:text-3xl max-sm:leading-10">
                    {/* <font face="Poppins, sans-serif"> */}
                      Coche Ride: Easy Transport With Our <span className="inline-block"><Typer texts={options} time={700} speed={150}/></span>
                      {/* Other Vehicles */}
                    {/* </font> */}
                  </div>
                  <div className="box-border relative shrink-0 mt-5 h-auto text-white">
                    <span className="text-2xl text-justify">
                      {/* <font face="Poppins, sans-serif"> */}
                        We lead in offering smart and efficient transportation
                        solutions for both individuals and businesses, covering
                        end-to-end haulage operations
                      {/* </font> */}
                    </span>
                    <br />
                  </div>
                  <div className="box-border flex relative flex-col shrink-0 mt-5 mr-20 h-[49px] w-[424px] max-[1040px]:h-[50px] max-sm:flex max-sm:flex-col max-sm:pb-8 max-sm:mr-auto max-sm:mb-auto max-sm:h-[50px]">
                    <div className="flex flex-row pr-px mr-auto mb-7 max-w-[99%] w-[743px] max-[1040px]:my-5 max-[1040px]:mr-auto max-sm:mt-1 max-sm:mr-auto max-sm:ml-0 max-sm:w-[271px]">
                      <button
                        className="box-border relative z-10 shrink-0 px-6 py-4 my-auto mr-auto text-center rounded appearance-none cursor-pointer bg-neutral-100 text-neutral-400"
                        // openLinkInNewTab={false}
                      >
                        +
                      </button>
                      <input
                        type="text"
                        placeholder="Enter Location"
                        name="location"
                        className="box-border flex relative flex-col shrink-0 py-2.5 pr-20 pl-16 my-auto mr-auto ml-0 bg-white rounded border border-solid border-stone-300 w-[386px] max-[1040px]:pr-8 max-[1040px]:-ml-4 max-sm:mt-1.0 max-sm:-ml-2 max-sm:w-[226px]"
                        required
                      />
                    </div>
                    <div className="flex flex-row -mt-2 mr-auto mb-7 max-w-[99%] w-[743px] max-[1040px]:mr-auto max-[1040px]:mb-5 max-sm:mt-1 max-sm:mr-auto max-sm:ml-0 max-sm:w-[271px]">
                      <button
                        className="box-border relative z-10 shrink-0 px-6 py-4 my-auto mr-auto text-center rounded appearance-none cursor-pointer bg-neutral-100 text-neutral-400"
                        // openLinkInNewTab={false}
                      >
                        +
                      </button>
                      <input
                        type="text"
                        placeholder="Enter Destination"
                        name="destination"
                        className="box-border flex relative flex-col shrink-0 py-2.5 pr-20 pl-16 my-auto mr-auto ml-0 bg-white rounded border border-solid border-stone-300 w-[386px] max-[1040px]:pr-8 max-[1040px]:-ml-4 max-sm:mt-1.0 max-sm:-ml-2 max-sm:w-[226px]"
                        required
                      />
                    </div>
                  </div>
                  <div className="box-border flex relative flex-col shrink-0 mt-5 mr-20 h-[49px] max-[1040px]:h-[50px] max-sm:flex max-sm:flex-col max-sm:pb-8 max-sm:mr-auto max-sm:mb-auto max-sm:h-[50px]">
                    <div className="flex flex-row mr-auto mt mb-7 ml-px max-w-[99%] w-[495px] max-[1040px]:hidden max-[1040px]:my-5 max-[1040px]:mr-auto max-[1040px]:w-[411px] max-sm:mt-1 max-sm:mr-auto max-sm:ml-0 max-sm:w-[271px]" />
                  </div>
                  <button
                    className="box-border relative shrink-0 px-6 py-4 mt-10 mr-auto text-center bg-amber-500 appearance-none cursor-pointer rounded-[30px] text-[white]"
                    // openLinkInNewTab={false}
                  >
                    Get Quick Quote
                  </button>
                </div>
                <div className="flex flex-col mx-auto w-12/12 max-[1040px]:ml-0 max-[1040px]:w-full">
                  <div className="box-border flex relative flex-col shrink-0 px-5 mt-5">
                    <div className="flex max-[1040px]:flex-col">
                      <div className="flex flex-col w-full max-[1040px]:ml-0 max-[1040px]:w-full">
                        <div className="box-border flex relative flex-col shrink-0 mt-0">
                          <div className="flex gap-5 max-[1040px]:flex-col">
                            <div className="flex flex-col w-full max-[1040px]:ml-0 max-[1040px]:w-full">
                              <div className="box-border flex flex-col shrink-0 items-center px-5 pt-5 mt-5 rounded-2xl border bg-white border-white border-solid max-w-[449px] min-h-[338px] size-full max-[1040px]:max-w-[516px]">
                                <div className="flex gap-5 max-[1040px]:flex-col">
                                  {/* <div className="flex flex-col w-[33%] max-[1040px]:ml-0 max-[1040px]:w-full">
                                    <img
                                      loading="lazy"
                                      srcSet="https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F4b120a62dde746aba5b3056158b68d8d?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F4b120a62dde746aba5b3056158b68d8d?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F4b120a62dde746aba5b3056158b68d8d?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F4b120a62dde746aba5b3056158b68d8d?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F4b120a62dde746aba5b3056158b68d8d?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F4b120a62dde746aba5b3056158b68d8d?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F4b120a62dde746aba5b3056158b68d8d?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F4b120a62dde746aba5b3056158b68d8d"
                                      className="box-border object-cover overflow-hidden absolute top-0 left-0 shrink-0 mx-auto mt-5 w-full rounded-2xl aspect-[1.04] basis-full grow-0 max-w-[509px] min-h-[20px] min-w-[20px] max-[1040px]:h-[339px] max-[1040px]:max-w-[525px]"
                                    />
                                  </div>
                                  <div className="flex flex-col ml-5 w-[33%] max-[1040px]:ml-0 max-[1040px]:w-full">
                                    <img
                                      loading="lazy"
                                      srcSet="https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F3031152617ff416d87bfe0d49a877dc1?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F3031152617ff416d87bfe0d49a877dc1?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F3031152617ff416d87bfe0d49a877dc1?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F3031152617ff416d87bfe0d49a877dc1?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F3031152617ff416d87bfe0d49a877dc1?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F3031152617ff416d87bfe0d49a877dc1?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F3031152617ff416d87bfe0d49a877dc1?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F3031152617ff416d87bfe0d49a877dc1"
                                      className="box-border object-cover overflow-hidden absolute top-0 left-0 shrink-0 mx-auto mt-5 w-full rounded-2xl aspect-[1.04] h-[478px] max-w-[497px] min-h-[20px] min-w-[20px] max-[1040px]:h-[340px] max-[1040px]:max-w-[524px]"
                                    />
                                  </div>
                                  <div className="flex flex-col ml-5 w-[33%] max-[1040px]:ml-0 max-[1040px]:w-full">
                                    <img
                                      loading="lazy"
                                      srcSet="https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F2d09a1c94db64a4cb3827adddda95eb9?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F2d09a1c94db64a4cb3827adddda95eb9?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F2d09a1c94db64a4cb3827adddda95eb9?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F2d09a1c94db64a4cb3827adddda95eb9?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F2d09a1c94db64a4cb3827adddda95eb9?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F2d09a1c94db64a4cb3827adddda95eb9?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F2d09a1c94db64a4cb3827adddda95eb9?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F661e1fa212c74d1c94d19e320025bbf6%2F2d09a1c94db64a4cb3827adddda95eb9"
                                      className="box-border object-cover overflow-hidden absolute top-0 left-0 shrink-0 mx-auto mt-5 w-full rounded-2xl aspect-[1.04] h-[493px] max-w-[515px] min-h-[20px] min-w-[20px] max-[1040px]:top-px max-[1040px]:h-[339px] max-[1040px]:max-w-[524px]"
                                    />
                                  </div> */}
                                   <Image className=' absolute -top-[80px] -left-10 scale-50' src={border1} alt='border1'/>
                                  <Image className='absolute -top-2 -left-[75px] scale-50' src={border2} alt='border2'/>
                                  <Slider slides={slides}/>
                                  
                                </div>
                              </div>
                              {/* <div className="box-border flex relative flex-col shrink-0 mt-5">
                                <div className="flex gap-5 max-[1040px]:flex-col">
                                  <div className="flex flex-col w-full max-[1040px]:ml-0 max-[1040px]:w-full">
                                    <div className="box-border flex relative flex-col shrink-0 mx-auto">
                                      <div className="flex gap-5">
                                        <div className="flex flex-col w-[33%]">
                                          <button
                                            className="box-border flex relative flex-col shrink-0 px-6 py-4 mx-auto mt-5 w-5 text-xs text-center bg-white appearance-none cursor-pointer rounded-[100%] text-[white]"
                                            openLinkInNewTab={false}
                                          >
                                            <div _text="" />
                                          </button>
                                        </div>
                                        <div className="flex flex-col ml-5 w-[33%]">
                                          <button
                                            className="box-border flex relative flex-col shrink-0 px-6 py-4 mx-auto mt-5 w-5 text-xs text-center bg-white appearance-none cursor-pointer rounded-[100%] text-[white]"
                                            openLinkInNewTab={false}
                                          >
                                            <div _text="" />
                                          </button>
                                        </div>
                                        <div className="flex flex-col ml-5 w-[33%]">
                                          <button
                                            className="box-border flex relative flex-col shrink-0 px-6 py-4 mx-auto mt-5 w-5 text-xs text-center bg-white appearance-none cursor-pointer rounded-[100%] text-[white]"
                                            openLinkInNewTab={false}
                                          >
                                            <div _text="" />
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
