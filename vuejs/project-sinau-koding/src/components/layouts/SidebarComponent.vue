<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="position-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" :to="{ name: 'home' }">
            <span data-feather="home" class="align-text-bottom"></span>
            <i class="bi bi-layout-text-window-reverse"></i> Dashboard
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" aria-current="page" :to="{ name: 'daftar.pengguna' }">
            <span data-feather="home" class="align-text-bottom"></span>
            <i class="bi bi-person-check"></i> Daftar Pengguna
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
nav a:hover,
nav .router-link-active,
nav .router-link-exact-active {
  color: #0b5ed7 !important;
}
</style>
