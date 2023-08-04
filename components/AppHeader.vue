<template>
  <nav class="nav transition-colors duration-500 z-10 w-full " :class="[isScrolled ? 'shadow-md' : '']">
    <div class="max-w-7xl 2xl:max-w-screen-2xl mx-auto px-3 sm:px-6 mx-auto lg:px-8 transition duration-500 delay-300 ease-in-out">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center flex justify-start">
          <div class="flex-shrink-0 flex items-center">
            <!-- <nuxt-link v-if="$colorMode.value === 'light'" to="/" class="flex items-center">
              <Logo aria-label="Light Amgital Logo" class="transition duration-150 ease-in-out"></Logo>
            </nuxt-link>
            <nuxt-link v-else to="/" class="flex items-center">
              <LogoDark v-if="$colorMode.value === 'dark'" aria-label="Dark Amgital Logo" class="transition duration-150 ease-in-out"></LogoDark>
            </nuxt-link> -->
            <span class="font-h2 text-lg ml-3 text-c-primary-500">amgital.</span>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="flex">
            <ul class="relative flex space-x-6 lg:space-x-10">
              <li v-for="(navItem, index) in navItems" :key="index">
                <a :href="navItem.url" class="text-lg hover:font-semibold text-secondary outline-none hover:border-accent-focus border-transparent border-b-2"> {{ navItem.label }} </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="flex items-center space-x-2" :class="{hidden: isVisible}">
            <button
              class="darkmode-toggle btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              @click="toggleDark"
            >
              <svg
                class="darkmode-moon h-6 w-6 text-amber-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.75 3.412a.818.818 0 01-.07.917 6.332 6.332 0 00-1.4 3.971c0 3.564 2.98 6.494 6.706 6.494a6.86 6.86 0 002.856-.617.818.818 0 011.1 1.047C19.593 18.614 16.218 21 12.283 21 7.18 21 3 16.973 3 11.956c0-4.563 3.46-8.31 7.925-8.948a.818.818 0 01.826.404z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="darkmode-sun h-6 w-6 text-amber-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <!--Mobile menu hamburger -->
        <div class="flex md:hidden justify-end">
          <button type="button" @click="toggleVisibility" class="c-hamburger c-hamburger--dive z-50" :class="{ active: isVisible }">
            <div class="c-hamburger-inner">
              <span class="c-hamburger-bar"></span>
              <span class="c-hamburger-bar"></span>
              <span class="c-hamburger-bar"></span>
            </div>
          </button>
        </div>
        <!-- -->
      </div>
    </div>
    <!--Mobile menu -->
    <div class="backdrop-blur-sm fixed overflow-hidden inset-0 z-30" :class="isVisible ? 'translate-x-0': '-translate-x-full'" v-show="isVisible">
      <div class="h-screen w-screen bg-white dark:bg-darkteal absolute inset-0 opacity-75 transition duration-500 delay-300 ease-in-out" @click="toggleVisibility">
      </div>
      <div class="block " @click="toggleVisibility">
        <nav class="absolute left-0 bottom-24 flex justify-between flex-col w-9/12 h-3/4 transition duration-500 delay-300 ease-in-out z-40">
          <div class="ml-12">
            <ul class="">
              <li 
                v-for="(navItem, index) in navItems" 
                :key="index"   
              >
                <a 
                  :href="navItem.url" 
                  class="mt-1 block px-3 py-2 rounded-md text-2xl font-h2 text-c-primary-500 focus:outline-none transition duration-150 ease-in-out"
                  > 
                  {{ navItem.label }} 
                </a>
              </li>
            </ul>
          </div>
          <div class="ml-12">
            <button type="button"
              class="darkmode-toggle z-50 btn h-8 w-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              @click="toggleDark"
            >
              <svg
                class="darkmode-moon h-6 w-6 text-amber-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M11.75 3.412a.818.818 0 01-.07.917 6.332 6.332 0 00-1.4 3.971c0 3.564 2.98 6.494 6.706 6.494a6.86 6.86 0 002.856-.617.818.818 0 011.1 1.047C19.593 18.614 16.218 21 12.283 21 7.18 21 3 16.973 3 11.956c0-4.563 3.46-8.31 7.925-8.948a.818.818 0 01.826.404z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="darkmode-sun h-6 w-6 text-amber-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </div>
    <!-- -->
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
const colorMode = useColorMode()

const navItems = [{
  label: 'Home',
  url: '/'
},{
  label: 'About',
  url: '/#about'
},
{
  label: 'Contact',
  url: '/#contact'
}]

const isScrolled = ref(false)
const isVisible = ref(false);

onMounted(() => {
  window.addEventListener('resize', onWidthChange)
  window.addEventListener('scroll', onScrollChange);
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWidthChange);
  window.removeEventListener('scroll', onScrollChange);
 });

const toggleVisibility = () => {
      isVisible.value = !isVisible.value;
    };

const toggleDark = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const onWidthChange = () => {
  isVisible.value = window.innerWidth < 768 && isVisible.value;
}

const onScrollChange = () => {
  isScrolled.value = window.scrollY > 10;
}

  
</script>

<style>

</style>