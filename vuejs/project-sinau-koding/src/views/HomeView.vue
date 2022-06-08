<script>
import NavbarComponent from "@/components/layouts/NavbarComponent.vue";
import SidebarComponent from "@/components/layouts/SidebarComponent.vue";

export default {
  components: {
    NavbarComponent,
    SidebarComponent,
  },
};
</script>

<template>
  <NavbarComponent />
  <div class="container-fluid">
    <div class="row">
      <SidebarComponent />
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="row mt-4">
          <div class="col">
            <h3>Selamat Datang!</h3>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
