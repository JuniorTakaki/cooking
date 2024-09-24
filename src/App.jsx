
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './App.css';


export default function App() {
  return (
    <div className="w-full h-full   ">
      <div className="container mx-auto px-4 ">
        <header className="w-full py-4">
          <div className="flex justify-between items-center px-4 md:px-8 lg:px-28">
            <div className="flex items-center space-x-2">
              <img src="/recipedia/logo.png" alt="logo" className="w-12 h-10" />
              <h1 className="text-xl font-bold">Recipedia</h1>
            </div>
            <ul className="hidden md:flex space-x-8 font-semibold text-lg">
              <li>Home</li>
              <li>Recipe</li>
              <li>Community</li>
              <li>About US</li>
            </ul>
            <div className="flex space-x-4">
              <img src="/recipedia/Vector.png" alt="search" className="w-6 h-6" />
              <img src="/recipedia/person.png" alt="person" className="w-6 h-6" />
            </div>
          </div>
        </header>

        <div className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-8 lg:px-28 py-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-inter">
              Cooking Made Fun and Easy: Unleash Your Inner Chef
            </h1>
            <p className="text-base md:text-lg lg:text-xl font-light mb-6">
              Discover more than 10,000 recipes in your hand with the best recipe. Help you to find the easiest way to cook.
            </p>
            <button className="py-3 px-6 bg-orange-400 text-white rounded-lg text-base md:text-lg transition ease-in hover:scale-110">
              Explore Recipes
            </button>
          </div>
          <img src="/recipedia/Group 3.png" alt="Group 3" className="w-full max-w-xs md:max-w-md lg:max-w-lg" />
        </div>
        <div className="flex justify-between px-4 md:px-8 lg:px-12 py-8">
          <div className="flex flex-col ">
            <h1 className="font-semibold text-4xl">
              Discover, Create, Share
            </h1>
            <p className="font-light md:text-lg lg:text-1xl font-inter">Check our most popular recipes of this week</p>
          </div>
          <div className="flex items-center">
            <button className="w-36 h-14 rounded-lg bg-orange-400  text-white transition ease-in hover:scale-110">See All</button>
          </div>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 ">
          <div className="bg-slate-100 shadow-xl rounded-xl px-2 pt-1 ">
            <img src="recipedia/creamy salad.jpg" alt="" className="w-full h-52 object-cover rounded-t-xl" />
            <div className="flex justify-evenly text-green-700 text-sm font-semibold pt-2">
              <p className="flex items-center gap-2">  <img src="/recipedia/time.png" className="w-4 h-4" />10 Mins</p>
              <p className="flex items-center gap-2">  <img src="/recipedia/foodperson.png" className="w-4 h-4" />2 Serving</p>
              <p className="flex items-center gap-2">  <img src="/recipedia/easy2.png" className="w-4 h-4" />Easy</p>
            </div>
            <div className=" w-full h-20 grid grid-cols-1 ">
              <h1 className="text-2xl font-semibold items-center">Creamy Salad</h1>
              <p>View Recipe</p>
            </div>
          </div>

          <div className="bg-slate-100 shadow-xl rounded-xl px-2 pt-1">
            <img src="recipedia/Tofu tomatoes soup.jpg" alt="" className="w-full h-52 object-cover rounded-t-xl" />
            <div className="flex justify-evenly text-green-700 text-sm font-semibold pt-2">
              <p className="flex items-center gap-2">  <img src="/recipedia/time.png" className="w-4 h-4" />15 Mins</p>
              <p className="flex items-center gap-2">  <img src="/recipedia/foodperson.png" className="w-4 h-4" />3 Serving</p>
              <p className="flex items-center gap-2">  <img src="/recipedia/easy2.png" className="w-4 h-4" />Easy</p>
            </div>
            <div className=" w-full h-20 grid grid-cols-1">
              <h1 className="text-2xl font-semibold items-center">Tofu Tomatoes Soup</h1>
              <p>View Recipe</p>
            </div>
          </div>

          <div className="bg-slate-100 shadow-xl rounded-xl px-2 pt-1">
            <img src="recipedia/Crunchy potatoes.jpg" alt="" className="w-full h-52 object-cover rounded-t-xl" />
            <div className="flex justify-evenly text-green-700 text-sm font-semibold pt-2">
              <p className="flex items-center gap-2">  <img src="/recipedia/time.png" className="
            w-4 h-4"/>15 Mins</p>
              <p className="flex items-center gap-2">  <img src="/recipedia/foodperson.png" className="w-4 h-4" />3 Serving</p>
              <p className="flex items-center gap-2">  <img src="/recipedia/easy2.png" className="w-4 h-4" />Easy</p>
            </div>
            <div className=" w-full h-20 grid grid-cols-1">
              <h1 className="text-2xl font-semibold items-center">Crunchy Potatoes</h1>
              <p>View Recipe</p>
            </div>
          </div>

          <div className="bg-slate-100 shadow-xl rounded-xl px-2 pt-1 ">
            <img src="recipedia/image 10.png" alt="" className="w-full h-52 object-cover rounded-t-xl" />
            <div className="flex justify-evenly text-green-700 text-sm font-semibold pt-2">
              <p className="flex items-center gap-2">  <img src="recipedia/time.png" className="w-4 h-4" />25 Mins</p>
              <p className="flex items-center gap-2">  <img src="recipedia/foodperson.png" className="w-4 h-4" />2 Serving</p>
              <p className="flex items-center gap-2">  <img src="recipedia/easy2.png" className="w-4 h-4" />Medium</p>
            </div>
            <div className=" w-full h-20 grid grid-cols-1 ">
              <h1 className="text-2xl font-semibold items-center">Mushroom Soup</h1>
              <p>View Recipe</p>
            </div>
          </div>

          <div className="bg-slate-100 shadow-xl rounded-xl px-2 pt-1">
            <img src="recipedia/image 6.png" alt="" className="w-full h-52 object-cover rounded-t-xl" />
            <div className="flex justify-evenly text-green-700 text-sm font-semibold pt-2">
              <p className="flex items-center gap-2">  <img src="recipedia/time.png" className="w-4 h-4" />30 Mins</p>
              <p className="flex items-center gap-2">  <img src="recipedia/foodperson.png" className="w-4 h-4" />1 Serving</p>
              <p className="flex items-center gap-2">  <img src="recipedia/easy2.png" className="w-4 h-4" />Easy</p>
            </div>
            <div className=" w-full h-20 grid grid-cols-1">
              <h1 className="text-2xl font-semibold items-center">Raspberry Pancake</h1>
              <p>View Recipe</p>
            </div>
          </div>

          <div className="bg-slate-100 shadow-xl rounded-xl px-2 pt-1">
            <img src="recipedia/image 9.png" alt="" className="w-full h-52 object-cover rounded-t-xl" />
            <div className="flex justify-evenly text-green-700 text-sm font-semibold pt-2">
              <p className="flex items-center gap-2">  <img src="recipedia/time.png" className="
            w-4 h-4"/>20 Mins</p>
              <p className="flex items-center gap-2">  <img src="/recipedia/foodperson.png" className="w-4 h-4" />1 Serving</p>
              <p className="flex items-center gap-2">  <img src="/recipedia/easy2.png" className="w-4 h-4" />Medium</p>
            </div>
            <div className="w-full h-20 grid grid-cols-1">
              <h1 className="text-2xl font-semibold items-center">Beef Teriyaki</h1>
              <p>View Recipe</p>
            </div>
          </div>
        </div>

        <div className='sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          <div className="flex justify-center my-10 py-10">
            <div className="flex justify-center text-3xl font-semibold">
              <h1>From Our Community</h1>
            </div>
          </div>

          <div className='relative w-full'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="swiper-container"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 w-full h-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 w-full h-full">
                  <SwiperSlide className='pb-10'>
                    <div className="bg-slate-100 shadow-xl rounded-xl px-12 pt-14 pb-4 min-h-[578px] h-full flex flex-col flex-wrap">
                      <div className="flex justify-start gap-x-4">
                        <img src="/recipedia/user.png" alt="" className="rounded-full" />
                        <div>
                          <h1 className="font-semibold text-lg">Spaghetti Bolognese</h1>
                          <p>Lady Rudy</p>
                        </div>
                      </div>
                      <div className="flex flex-row pt-6">
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                      </div>
                      <div className="w-full pb-4">
                        <p className="pb-4 w-full h-[150px] container flex items-center">I have to say, your Spaghetti Bolognese recipe is nothing short of amazing! I've always been a fan of Italian cuisine, but I was a bit intimidated by the idea of making this classic at home.</p>
                        <img src="/recipedia/Frame 477.png" alt="" className="w-full h-[260px] flex justify-center rounded-2xl" />
                      </div>
                      <div className="flex justify-evenly font-semibold">
                        <div className="flex flex-row w-full items-center gap-x-4">
                          <p className="flex items-center gap-x-2 ">  <img src="/recipedia/like.png" className="w-4 h-4" /> 2</p>
                          <p className="flex items-center gap-x-2">  <img src="/recipedia/share.png" className="w-4 h-4" /> Share</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-slate-100 shadow-xl rounded-xl px-12 pt-14 pb-4 min-h-[578px] h-full flex flex-col">
                      <div className="flex justify-start gap-x-4">
                        <img src="/recipedia/image 18.png" alt="" className="rounded-full" />
                        <div>
                          <h1 className="font-semibold text-lg">Vegetable Pot Pie</h1>
                          <p>Susan H</p>
                        </div>
                      </div>
                      <div className="flex flex-row pt-6">
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                      </div>
                      <div className="w-full pb-4">
                        <p className="pb-4 w-full h-[150px] container flex items-center">I've always been a fan of hearty comfort food, and the 'Ultimate Vegetable Pot Pie' recipe on this platform completely exceeded my expectations.</p>
                        <img src="/recipedia/food.png" alt="" className=" w-full h-[260px] flex justify-center rounded-2xl" />
                      </div>
                      <div className="flex justify-evenly font-semibold">
                        <div className="flex flex-row w-full items-center gap-x-4">
                          <p className="flex items-center gap-x-2">  <img src="/recipedia/like.png" className="w-4 h-4" /> 3</p>
                          <p className="flex items-center gap-x-2">  <img src="/recipedia/share.png" className="w-4 h-4" /> Share</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-slate-100 shadow-xl rounded-xl px-12 pt-14 pb-4 min-h-[578px] h-full flex flex-col">
                      <div className="flex justify-start gap-x-4">
                        <img src="/recipedia/image 19.png" alt="" className="rounded-full" />
                        <div>
                          <h1 className="font-semibold text-lg">Fresh Garden Salad</h1>
                          <p>Lilac Laura</p>
                        </div>
                      </div>
                      <div className="flex flex-row pt-6">
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                      </div>
                      <div className="w-full pb-4">
                        <p className="pb-4 w-full h-[150px] container flex items-center">I've always considered myself a salad enthusiast, and this salad recipe is nothing short of a culinary masterpiece and has taken my love for greens to a whole new level.</p>
                        <img src="recipedia/2.png" alt="2.png" className=" w-full h-[260px] flex justify-center rounded-2xl" />
                      </div>
                      <div className="flex justify-evenly font-semibold">
                        <div className="flex flex-row w-full items-center gap-x-4">
                          <p className="flex items-center gap-x-2">  <img src="/recipedia/like.png" className="w-4 h-4" /> 1</p>
                          <p className="flex items-center gap-x-2">  <img src="/recipedia/share.png" className="w-4 h-4" /> Share</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="bg-slate-100 shadow-xl rounded-xl px-12 pt-14 pb-4 min-h-[578px] h-full flex flex-col">
                      <div className="flex justify-start gap-x-4">
                        <img src="/recipedia/image 20.png" alt="" className="rounded-full" />
                        <div>
                          <h1 className="font-semibold text-lg">Roasted Chicken</h1>
                          <p>Emily Rose</p>
                        </div>
                      </div>
                      <div className="flex flex-row pt-6">
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                        <img src=" /recipedia/stars.png" alt="Stars" />
                      </div>
                      <div className="w-full pb-4">
                        <p className="pb-4 w-full h-[150px] container flex items-center">I've always been a bit hesitant to roast a whole chicken, fearing it might be too complicated, but your recipe changed that for me. The instructions were so clear and easy to follow.</p>
                        <img src="/recipedia/image 1.png" alt="" className=" w-full h-[260px] flex justify-center rounded-2xl" />
                      </div>
                      <div className="flex justify-evenly font-semibold">
                        <div className="flex flex-row w-full items-center gap-x-4">
                          <p className="flex items-center gap-x-2">  <img src="/recipedia/like.png" className="w-4 h-4" /> 5</p>
                          <p className="flex items-center gap-x-2">  <img src="/recipedia/share.png" className="w-4 h-4" /> Share</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>

              </div>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="py-20 container mx-auto flex justify-center px-4">
        <div className="h-auto lg:h-96 w-full md:w-5/6 rounded-lg p-6 md:p-12 gap-3 bg-[#046E1B] text-white font-inter font-semibold flex flex-col md:flex-row">
          <div className="w-full h-full flex flex-col justify-evenly">
            <h1 className="text-xl md:text-3xl h-full w-full flex-grow md:pb-4">
              Embrace the joy of cooking with get it on your iPhone or Android. Your kitchen adventure begins now!
            </h1>
            <div className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 md:gap-x-8 rounded-md mt-6 md:mt-0">
              <button className="w-full md:w-32 h-12 md:h-16 bg-orange-500 rounded-md px-1 transition ease-in hover:scale-110">
                <p>Download on the <span>APP Store</span></p>
              </button>
              <button className="w-full md:w-32 h-12 md:h-16 bg-orange-500 rounded-md px-1 transition ease-in hover:scale-110">
                <p>Get it on <span>Google Play</span></p>
              </button>
            </div>
          </div>
          <div className="flex items-center md:items-end w-full h-full mt-6 md:mt-0">
            <img src="/recipedia/iPhone 15 Pro.png" alt="iPhone 15 Pro" className="w-full md:w-auto" />
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full h-full font-semibold pb-20 px-4">
        <div className="flex items-center w-full h-full pb-4 gap-1">
          <img src="/recipedia/logo.png" alt="logo.png" className="w-6 h-6 md:w-4 md:h-4 object-cover object-center" />
          <h1 className="text-lg md:text-base">Recipedia</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-y-0 w-full h-full">
          <div className="w-full h-full flex flex-wrap md:flex-nowrap justify-between pr-0 md:pr-40">
            <ul className="mb-6 md:mb-0">
              <h1 className="font-bold text-lg pb-3">Menu</h1>
              <li>Home</li>
              <li>Recipe</li>
              <li>Community</li>
              <li>About Us</li>
            </ul>
            <ul className="mb-6 md:mb-0">
              <h1 className="font-bold text-lg pb-3">Categories</h1>
              <li>Breakfast</li>
              <li>Lunch</li>
              <li>Dinner</li>
              <li>Dessert</li>
              <li>Drink</li>
            </ul>
            <ul>
              <h1 className="font-bold text-lg pb-3">Social</h1>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Youtube</li>
              <li>Facebook</li>
            </ul>
          </div>
          <div className="w-full h-full flex justify-center flex-col gap-y-10">
            <h1 className="w-full flex justify-center font-semibold text-lg">Sign up for our newsletter</h1>
            <form className="w-full flex justify-center">
              <div className="flex items-center border-b border-gray-800 py-2">
                <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Your Email Address" aria-label="Your Email" />
                <button className="flex-shrink-0 bg-orange-400 hover:bg-orange-500 border-orange-400 hover:border-orange-500 text-sm border-4 text-white py-1 px-2 rounded transition ease-in hover:scale-110" type="button">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div>
          </div>
        </div>
      </div>
    </div>
  );
}
