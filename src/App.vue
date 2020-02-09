<template>
  <div id="app" class="">
    <div class="w-2/4 mx-auto bg-gray-300">
      <div class="font-header mt-8">
        <router-link
          class="px-3 py-2 mr-4 text-red-900 bg-red-200 hover:bg-red-300 rounded shadow"
          to="/">
          Homepage
        </router-link>

        <router-link
          class="px-3 py-2 mr-4 text-red-900 bg-red-200 hover:bg-red-300 rounded shadow"
          to="/toggle">
          Toggle
        </router-link>

        <router-link
          class="px-3 py-2 mr-4 text-red-900 bg-red-200 hover:bg-red-300 rounded shadow"
          to="/counter">
          Counter
        </router-link>

        <router-link
          class="px-3 py-2 mr-4 text-red-900 bg-red-200 hover:bg-red-300 rounded shadow"
          to="/temperature">
          Temperature
        </router-link>

        <router-link
          class="px-3 py-2 mr-4 text-red-900 bg-red-200 hover:bg-red-300 rounded shadow"
          to="/booking">
          Flight Booking
        </router-link>
      </div>

      <div class="mt-8">
        <router-view/>
      </div>
    </div>
  </div>
</template>
