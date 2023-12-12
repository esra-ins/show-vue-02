<template>
  <div class="wrapper">
    <div class="content font-bold bg-dark-blue content-center grid m-auto flex h-16">
      <div class="sub_media m-8 mt-4">
        <div class="nav_wrapper flex mr-[10px] ml-8 absolute">
          <!-- <NuxtLink to="/" class="logo" > -->
          <div class="logo inline-flex mr-20 content-center text-2xl">
            <div class="inline text-green mr-4">
              <NuxtLink to="/"> T M D B </NuxtLink>
            </div>
            <div class="rounded-full bg-green w-16 h-5 mt-1"></div>
          </div>
          <!-- </NuxtLink> -->
          <div className="dropdown mr-8">
            <button class="text-white">MOVIES</button>
            <div className="dropdown-menu hidden hover:block">
              <div className="mt-6 text-black p-2 bg-white">
                <ul class="top-0">
                  <!-- <NuxtLink to="/movies"> MOVIES </NuxtLink> -->
                  <NuxtLink class="" to="/movies/popular"> popular movies </NuxtLink> <br>
                  <NuxtLink class="" to="/movies/topRated"> top rated movies </NuxtLink> <br>
                  <NuxtLink class="" to="/movies/upcoming"> upcoming movies </NuxtLink>
                </ul>
              </div>
<<<<<<< HEAD
              <div class="mr-8 text-white">
                <!-- <a href="/movies"> Movies </a> -->
                <NuxtLink to="/movies/popular"> popular movies </NuxtLink> <br>
                <NuxtLink to="/movies/topRated"> top rated movies </NuxtLink> <br>
                <NuxtLink to="/movies/upcoming"> upcoming movies </NuxtLink>
              </div>
              <div class="mr-8 text-white">
=======
            </div>
          </div>
          
          <div className="dropdown">
            <button class="text-white">SHOWS</button>
            <div className="dropdown-menu hidden hover:block">
              <div className="mt-6 text-black p-2 bg-white">
              <ul>
>>>>>>> cdcae9d279ceb1ade6b3afd3742eb12eba74e5de
                <!-- <NuxtLink to="/shows"> SHOWS </NuxtLink> -->
                <NuxtLink to="/shows/popular"> popular shows </NuxtLink> <br>
                <NuxtLink to="/shows/topRated"> top rated shows </NuxtLink> <br>
                <NuxtLink to="/shows/onTheAir"> on the air shows </NuxtLink>
<<<<<<< HEAD
=======
              </ul>
>>>>>>> cdcae9d279ceb1ade6b3afd3742eb12eba74e5de
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <slot />
  </div>
</template>

<script>
</script>

<<<<<<< HEAD
<style></style>
=======
<style>
  .dropdown {
    position: relative;
    width: 150px;
  }

  .dropdown-menu {
    display: none;
    position: absolute;
    width: max-content;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
  }
</style>
>>>>>>> cdcae9d279ceb1ade6b3afd3742eb12eba74e5de
