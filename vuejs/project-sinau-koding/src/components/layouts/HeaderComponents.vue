<script>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'home' }">
        <img src="@/assets/images/logo/logo.png" alt="Logo Brand" width="30" height="24" class="d-inline-block align-text-top" />
        Sinau Koding
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ms-auto">
          <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.router-link-exact-active {
  font-weight: 600;
}
</style>
