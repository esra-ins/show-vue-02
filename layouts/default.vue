<template>
  <div class="wrapper">
    <div class="content font-bold bg-dark-blue content-center grid">
      <div class="sub_media m-8 mt-4 mb-4">
        <div class="nav_wrapper flex mr-[10px] ml-8">
          <!-- <NuxtLink to="/" class="logo" > -->
          <div class="logo inline-flex mr-20 content-center text-2xl">
            <div class="inline text-green mr-4">
              <NuxtLink to="/"> T M D B </NuxtLink>
            </div>
            <div class="rounded-full bg-green w-16 h-5 mt-1"></div>
          </div>
          <!-- </NuxtLink> -->
          <div class="mt-1 flex" data-role="menu" tabindex="0" role="menubar">
            <nav class="flex">
              <div class="hidden mr-8 text-white">
                <NuxtLink to="/"> Home </NuxtLink>
              </div>
              <div class="mr-8 text-white">
                <!-- <a href="/movies"> Movies </a> -->
                <NuxtLink to="/movies/popular"> popular movies </NuxtLink> <br>
                <NuxtLink to="/movies/topRated"> top rated movies </NuxtLink> <br>
                <NuxtLink to="/movies/upcoming"> upcoming movies </NuxtLink>
              </div>
              <div class="mr-8 text-white">
                <!-- <NuxtLink to="/shows"> SHOWS </NuxtLink> -->
                <NuxtLink to="/shows/popular"> popular shows </NuxtLink> <br>
                <NuxtLink to="/shows/topRated"> top rated shows </NuxtLink> <br>
                <NuxtLink to="/shows/onTheAir"> on the air shows </NuxtLink>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
</script>

<style></style>