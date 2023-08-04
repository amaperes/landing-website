<template>
  <div class="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center pb-5 lg:pb-10" id="services" >
    <div class="text-left" id="services">
      <h2 data-aos="fade-up"
          data-aos-once="true" class="w-full mb-3 lg:mb-0 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-c-primary-500 font-bold">
          Easy, Simple, Affordable
      </h2>
    </div>
    <div class="text-center">
        <p data-aos="fade-left"
           data-aos-once="true" class="md:text-left text-center w-full md:w-2/3 lg:w-3/5 mx-auto text-lg lg:text-xl font-light text-c-secondary-gray"> Our platform helps your business in managing expenses. These are some of the reasons why you should use our platform in managing business finances.</p>
    </div>
  </div>
  
  <!-- <div class="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-3 sm:px-6 lg:px-8 flex flex-col items-center" id="services" >
    <div class="flex flex-col items-start justify-center lg:flex-row flex-nowrap lg:space-x-10 space-y-10 lg:space-y-0">
      <div data-aos="fade-right"
           data-aos-offset="300"
           data-aos-easing="ease-in-sine" class="max-w-md rounded-2xl text-center overflow-hidden bg-card-white shadow-card">
        <div class="px-6 py-20">
          <img src="@/assets/images/service1.png" />
          <div class="font-semibold text-2xl lg:text-3xl text-c-primary-500 mt-3 mb-2"> Automatic Invoice Payment </div>
          <p class="text-c-secondary text-lg lg:text-1.25 font-light">
            No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!
          </p>
        </div>
      </div>

      <div data-aos="fade-down"
           data-aos-offset="300"
           data-aos-easing="ease-in-sine" class="max-w-md rounded-2xl text-center overflow-hidden bg-card-white shadow-card">
        <div class="px-6 py-20">
          <img src="@/assets/images/service2.png" />
          <div class="font-semibold text-2xl lg:text-3xl text-c-primary-500 mb-[3.5rem] mb-2">Clear payment history </div>
          <p class="text-c-secondary text-lg lg:text-1.25 font-light">
            Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!
          </p>
        </div>
      </div>

      <div data-aos="fade-left"
           data-aos-offset="300"
           data-aos-easing="ease-in-sine" class="max-w-md rounded-2xl text-center overflow-hidden bg-card-white shadow-card">
        <div class="px-6 py-20">
          <img src="@/assets/images/service3.png" />

          <div class="font-semibold text-2xl lg:text-3xl text-c-primary-500 mt-3 mb-2"> Use of multi-card payments </div>
          <p class="text-c-secondary text-lg lg:text-1.25 font-light">
            Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!
          </p>
        </div>
      </div>
    </div>
  </div> -->
  <div class="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-3 sm:px-6 lg:px-8 space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
    <div class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
      <img src="@/assets/images/service1.png" />
      <h3 class="font-semibold text-2xl lg:text-3xl text-c-primary-500 mt-3 mb-2"> Automatic Invoice Payment </h3>
      <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">            
        No need to pay manually, we provide automatic invoice payment service! Set a payment schedule and you're done, it's that easy!
      </p>
      <!-- <div class="flex items-baseline justify-center my-8">
      <span class="mr-2 text-5xl font-extrabold">$29</span>
      <span class="text-gray-500 dark:text-gray-400">/month</span> -->
    <!-- </div> -->

    <!-- <ul role="list" class="mb-8 space-y-4 text-left">
      <li class="flex items-center space-x-3">
        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>Individual configuration</span>
      </li>
      <li class="flex items-center space-x-3">
        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>No setup, or hidden fees</span>
      </li>
      <li class="flex items-center space-x-3">
        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>Team size: <span class="font-semibold">1 developer</span></span>
      </li>
      <li class="flex items-center space-x-3">
        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>Premium support: <span class="font-semibold">6 months</span></span>
      </li>
      <li class="flex items-center space-x-3">
        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>Free updates: <span class="font-semibold">6 months</span></span>
      </li>
    </ul> -->
    <!-- <a href="#" class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a> -->
  </div>


  <div class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
    <img src="@/assets/images/service2.png" />
    <h3 class="font-semibold text-2xl lg:text-3xl text-c-primary-500 mt-3 mb-2"> Clear payment history  </h3>

    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
      Still writing manual expenses? Our platform breaks down every expense you log down to the millisecond!
    </p>
    <!-- <div class="flex items-baseline justify-center my-8">
      <span class="mr-2 text-5xl font-extrabold">$99</span>
      <span class="text-gray-500 dark:text-gray-400" dark:text-gray-400="">/month</span>
    </div> -->

    <!-- <ul role="list" class="mb-8 space-y-4 text-left">
      <li class="flex items-center space-x-3">

        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>Individual configuration</span>
      </li>
      <li class="flex items-center space-x-3">

        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>No setup, or hidden fees</span>
      </li>
      <li class="flex items-center space-x-3">
        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>Team size: <span class="font-semibold">10 developers</span></span>
      </li>
      <li class="flex items-center space-x-3">
        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>Premium support: <span class="font-semibold">24 months</span></span>
      </li>
      <li class="flex items-center space-x-3">

        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>Free updates: <span class="font-semibold">24 months</span></span>
      </li>
    </ul> -->
    <!-- <a href="#" class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a> -->
  </div>

  <div class="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
    <img src="@/assets/images/service3.png" />
    <h3 class="font-semibold text-2xl lg:text-3xl text-c-primary-500 mt-3 mb-2"> Use of multi-card payments  </h3>

    <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
      Have more than 1 bank account or credit/debit card? Our platform is already integrated with many banks around the world, for easier payments!
    </p>
    <!-- <div class="flex items-baseline justify-center my-8">
      <span class="mr-2 text-5xl font-extrabold">$499</span>
      <span class="text-gray-500 dark:text-gray-400">/month</span>
    </div> -->
    <!-- <ul role="list" class="mb-8 space-y-4 text-left">
      <li class="flex items-center space-x-3">
        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>Individual configuration</span>
      </li>
      <li class="flex items-center space-x-3">  
        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>No setup, or hidden fees</span>
      </li>
      <li class="flex items-center space-x-3">
        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>Team size: <span class="font-semibold">100+ developers</span></span>
      </li>
      <li class="flex items-center space-x-3">

        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>Premium support: <span class="font-semibold">36 months</span></span>
      </li>
      <li class="flex items-center space-x-3">

        <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span>Free updates: <span class="font-semibold">36 months</span></span>
      </li>
    </ul> -->
    <!-- <a href="#" class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Get started</a> -->
  </div>
</div>
</template>

<style>
.grayscale-effect {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  opacity: 0.5;
}
.grayscale-effect:hover {
  -webkit-filter: none;
  filter: none;
  opacity: 1;
}

.animate {
  animation-iteration-count: infinite !important;
}

</style>