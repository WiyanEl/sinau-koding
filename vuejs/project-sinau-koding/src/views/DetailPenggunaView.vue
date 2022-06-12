<script>
import { onMounted } from "vue";
import { reactive, ref } from "@vue/reactivity";
import axios from "axios";
import { RouterLink, useRoute } from "vue-router";
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

    const user = reactive({
      name: "",
      email: "",
      gender: "",
      status: "",
    });

    const post = reactive({
      title: "",
      body: "",
    });

    let posts = ref([]);

    const validation = ref([]);

    let messages = [];

    const route = useRoute();

    const toast = useToast();

    onMounted(() => {
      // Get data user
      axios
        .get(`https://gorest.co.in/public/v2/users/${route.params.id}`)
        .then((response) => {
          user.name = response.data.name;
          user.email = response.data.email;
          user.gender = response.data.gender;
          user.status = response.data.status;
        })
        .catch((err) => {
          console.log(err.response.data);
        });

      // Get data posts user
      axios
        .get(`https://gorest.co.in/public/v2/users/${route.params.id}/posts`)
        .then((response) => {
          posts.value = response.data;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    });

    function store() {
      let btnAddPost = document.querySelector(".btn-add-post");
      btnAddPost.removeChild(btnAddPost.children[0]);
      btnAddPost.innerHTML = `
        <span>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <span>Loading...</span>
        </span>
      `;

      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      axios
        .post(`https://gorest.co.in/public/v2/users/${route.params.id}/posts`, this.post)
        .then(() => {
          toast.success("Post berhasil  ditambah!", {
            type: "success",
            position: "top-right",
            timeout: 3000,
          });

          btnAddPost.removeChild(btnAddPost.children[0]);
          btnAddPost.innerHTML = `
            <span><i class="bi bi-save"></i> Submit</span>
          `;

          post.title = "";
          post.body = "";

          axios
            .get(`https://gorest.co.in/public/v2/users/${route.params.id}/posts`)
            .then((response) => {
              posts.value = response.data;
            })
            .catch((err) => {
              console.log(err.response.data);
            });
        })
        .catch((err) => {
          validation.value = err.response.data;
          messages = validation.value;

          messages.forEach((message) => {
            document.querySelector(`.${message.field}-error`).innerHTML = message.message;
          });

          btnAddPost.removeChild(btnAddPost.children[0]);
          btnAddPost.innerHTML = `
             <span><i class="bi bi-save"></i> Submit</span>
          `;
        });
    }

    function destroy(id, index) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      axios
        .delete(`https://gorest.co.in/public/v2/posts/${id}`)
        .then(() => {
          toast.success("Post berhasil  dihapus!", {
            type: "success",
            position: "top-right",
            timeout: 3000,
          });
          posts.value.splice(index, 1);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    }

    return {
      user,
      posts,
      post,
      route,
      store,
      destroy,
    };
  },
};
</script>

<template>
  <NavbarComponent />
  <div class="container-fluid">
    <div class="row">
      <SidebarComponent />
      <div class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="row mt-4">
          <div class="col">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><router-link :to="{ name: 'daftar.pengguna' }" class="text-decoration-none">Daftar Pengguna</router-link></li>
                <li class="breadcrumb-item active" aria-current="page">Detail</li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-lg-10">
            <h3>Detail Pengguna</h3>
            <hr />
            <div class="card shadow">
              <div class="card-body">
                <div class="row mb-3">
                  <div class="col-3 col-md-2 col-lg-1">
                    <span>Nama</span>
                  </div>
                  <div class="col-1 text-end">
                    <span>:</span>
                  </div>
                  <div class="col-8 col-md-9 col-lg-10">
                    <span>{{ user.name }}</span>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-3 col-md-2 col-lg-1">
                    <span>Email</span>
                  </div>
                  <div class="col-1 text-end">
                    <span>:</span>
                  </div>
                  <div class="col-8 col-md-9 col-lg-10">
                    <span>{{ user.email }}</span>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="col-3 col-md-2 col-lg-1">
                    <span>Gender</span>
                  </div>
                  <div class="col-1 text-end">
                    <span>:</span>
                  </div>
                  <div class="col-8 col-md-9 col-lg-10">
                    <span>{{ user.gender }}</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-3 col-md-2 col-lg-1">
                    <span>Status</span>
                  </div>
                  <div class="col-1 text-end">
                    <span>:</span>
                  </div>
                  <div class="col-8 col-md-9 col-lg-10">
                    <span>{{ user.status }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12 col-lg-10">
            <div class="row">
              <div class="col-6">
                <h3>Post Pengguna</h3>
              </div>
              <div class="col-6 text-end">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#tambahPost"><i class="bi bi-plus-lg"></i> Post</button>
              </div>
            </div>
            <hr />
            <div class="card shadow">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(post, index) in posts" :key="index">
                        <th>{{ index + 1 }}</th>
                        <td>{{ post.title }}</td>
                        <td>{{ post.body }}</td>
                        <td>
                          <button type="button" class="btn btn-danger" @click="destroy(post.id, index)"><i class="bi bi-trash"></i></button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Start modal tambah post -->
  <!-- Modal -->
  <div class="modal fade" id="tambahPost" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0">
          <h5 class="modal-title" id="exampleModalLabel">Tambah Post</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="store">
            <div class="mb-3">
              <label for="title" class="form-label">Title</label>
              <input v-model="post.title" ref="title" type="text" class="form-control" id="title" />
              <span class="text-danger title-error"></span>
            </div>
            <div class="mb-3">
              <label for="body" class="form-label">Body</label>
              <textarea v-model="post.body" id="body" class="form-control" rows="5"></textarea>
              <span class="text-danger body-error"></span>
            </div>
            <div class="mb-3">
              <button type="submit" class="btn btn-primary btn-add-post">
                <span><i class="bi bi-save"></i> Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- End modal tambah post -->
</template>
