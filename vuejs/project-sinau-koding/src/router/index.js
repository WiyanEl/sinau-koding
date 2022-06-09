import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import DaftarPenggunaView from "@/views/DaftarPenggunaView.vue";
import TambahPenggunaView from "@/views/TambahPenggunaView.vue";
import EditPenggunaView from "@/views/EditPenggunaView.vue";
import DetailPenggunaView from "@/views/DetailPenggunaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/pengguna",
      name: "daftar.pengguna",
      component: DaftarPenggunaView,
    },
    {
      path: "/pengguna/tambah",
      name: "tambah.pengguna",
      component: TambahPenggunaView,
    },
    {
      path: "/pengguna/edit/:id",
      name: "edit.pengguna",
      component: EditPenggunaView,
    },
    {
      path: "/pengguna/detail/:id",
      name: "detail.pengguna",
      component: DetailPenggunaView,
    },
  ],
});

export default router;
