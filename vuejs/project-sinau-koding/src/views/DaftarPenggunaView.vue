<script>
import { RouterLink } from "vue-router";
import { computed, onMounted, ref, watch } from "vue";
import axios from "axios";
import { useToast } from "vue-toastification";
import NavbarComponent from "@/components/layouts/NavbarComponent.vue";
import SidebarComponent from "@/components/layouts/SidebarComponent.vue";
import postcss from "postcss";

export default {
  components: {
    NavbarComponent,
    SidebarComponent,
  },
  setup() {
    const token = "9690fb8196780608aa119e9cadbf3901b8d6679995f2667a259a1f07fb7617cd";

    let users = ref([]);

    const toast = useToast();

    onMounted(() => {
      axios
        .get("https://gorest.co.in/public/v2/users")
        .then((response) => {
          users.value = response.data;
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    function destroy(id, index) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      axios
        .delete(`https://gorest.co.in/public/v2/users/${id}`)
        .then(() => {
          toast.success("User berhasil  dihapus!", {
            type: "success",
            position: "top-right",
            timeout: 3000,
          });
          users.value.splice(index, 1);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return {
      users,
      destroy,
      toast,
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
          <div class="col-6">
            <h3>Daftar Pengguna</h3>
          </div>
          <div class="col-6 text-end">
            <router-link :to="{ name: 'tambah.pengguna' }" class="btn btn-primary"><i class="bi bi-plus-lg"></i> Pengguna </router-link>
          </div>
        </div>
        <hr />
        <div class="card shadow mb-4">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user, index) in users" :key="index">
                    <th>{{ index + 1 }}</th>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.gender }}</td>
                    <td>{{ user.status }}</td>
                    <td>
                      <routerLink :to="{ name: 'detail.pengguna', params: { id: user.id } }" class="btn btn-info me-1"><i class="bi bi-eye"></i></routerLink>
                      <router-link :to="{ name: 'edit.pengguna', params: { id: user.id } }" class="btn btn-warning me-1"><i class="bi bi-pencil-square"></i></router-link>
                      <button type="button" class="btn btn-danger" @click="destroy(user.id, index)"><i class="bi bi-trash"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
