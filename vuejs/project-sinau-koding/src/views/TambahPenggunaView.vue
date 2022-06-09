<script>
import { reactive, ref } from "@vue/reactivity";
import axios from "axios";
import { RouterLink, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import NavbarComponent from "@/components/layouts/NavbarComponent.vue";
import SidebarComponent from "@/components/layouts/SidebarComponent.vue";

export default {
  components: {
    NavbarComponent,
    SidebarComponent,
  },
  setup() {
    const token = "9690fb8196780608aa119e9cadbf3901b8d6679995f2667a259a1f07fb7617cd";

    let user = reactive({
      name: "",
      email: "",
      gender: "",
      status: "",
    });

    const validation = ref([]);

    let messages = [];

    const router = useRouter();

    const toast = useToast();

    function store() {
      const btnAddUser = document.querySelector(".btn-add-user");
      btnAddUser.removeChild(btnAddUser.children[0]);
      btnAddUser.innerHTML = `
        <span>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span>Loading...</span>
        </span>
      `;

      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      axios
        .post("https://gorest.co.in/public/v2/users", this.user)
        .then(() => {
          router.push({
            name: "daftar.pengguna",
          });
          toast.success("Berhasil menambahkan user!", {
            type: "success",
            timeout: 3000,
            position: "top-right",
          });
        })
        .catch((err) => {
          validation.value = err.response.data;
          messages = validation.value;

          messages.forEach((message) => {
            document.querySelector(`.${message.field}-error`).innerHTML = message.message;
          });

          btnAddUser.removeChild(btnAddUser.children[0]);
          btnAddUser.innerHTML = `
            <span><i class="bi bi-save"></i> Submit</span>
          `;
        });
    }

    return {
      user,
      validation,
      router,
      store,
    };
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
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link :to="{ name: 'daftar.pengguna' }" class="text-decoration-none">Daftar Pengguna</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">Tambah</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-10">
            <h3>Tambah Pengguna</h3>
            <hr />
            <div class="card shadow">
              <div class="card-body">
                <form @submit.prevent="store">
                  <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input v-model="user.name" type="text" id="name" class="form-control" />
                    <span class="text-danger name-error"></span>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input v-model="user.email" type="email" id="email" class="form-control" />
                    <span class="text-danger email-error"></span>
                  </div>
                  <div class="mb-3">
                    <label for="gender" class="form-label">Gender</label>
                    <select v-model="user.gender" id="gender" class="form-select">
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <span class="text-danger gender-error"></span>
                  </div>
                  <div class="mb-3">
                    <label for="status" class="form-label">Gender</label>
                    <select v-model="user.status" id="status" class="form-select">
                      <option value="active">Active</option>
                      <option value="inactive">Inactive</option>
                    </select>
                    <span class="text-danger status-error"></span>
                  </div>
                  <div class="mb-3">
                    <button type="submit" class="btn btn-primary btn-add-user">
                      <span><i class="bi bi-save"></i> Submit</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
