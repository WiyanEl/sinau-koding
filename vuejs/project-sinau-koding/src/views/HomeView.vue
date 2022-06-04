<script>
import HeaderComponents from "@/components/layouts/HeaderComponents.vue";

export default {
  components: {
    HeaderComponents,
  },
};
</script>

<template>
  <HeaderComponents />
  <div class="container">
    <div class="row justify-content-center mt-5">
      <div class="col-12 col-lg-10 col-xl-10 col-xxl-10">
        <div class="row">
          <div class="col-6">
            <h3>Daftar Pengguna</h3>
          </div>
          <div class="col-6 text-end">
            <router-link to="" class="btn btn-primary"><i class="bi bi-plus-lg"></i> Pengguna </router-link>
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
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Ambar Somayaji</td>
                    <td>somayaji_ambar@wuckert.biz</td>
                    <td>female</td>
                    <td>inactive</td>
                    <td>
                      <button type="button" class="btn btn-info me-1"><i class="bi bi-eye"></i></button>
                      <button type="button" class="btn btn-warning me-1"><i class="bi bi-pencil-square"></i></button>
                      <button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <th>2</th>
                    <td>Atmananda Pilla</td>
                    <td>atmananda_pilla@gleason-gislason.info</td>
                    <td>male</td>
                    <td>active</td>
                    <td>
                      <button type="button" class="btn btn-info me-1"><i class="bi bi-eye"></i></button>
                      <button type="button" class="btn btn-warning me-1"><i class="bi bi-pencil-square"></i></button>
                      <button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td>Aaryan Guneta DDS</td>
                    <td>aaryan_guneta_dds@vendorvort.info</td>
                    <td>male</td>
                    <td>inactive</td>
                    <td>
                      <button type="button" class="btn btn-info me-1"><i class="bi bi-eye"></i></button>
                      <button type="button" class="btn btn-warning me-1"><i class="bi bi-pencil-square"></i></button>
                      <button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <th>4</th>
                    <td>Karunanindhi Pilla</td>
                    <td>karunanindhi_pilla@smith.io</td>
                    <td>female</td>
                    <td>active</td>
                    <td>
                      <button type="button" class="btn btn-info me-1"><i class="bi bi-eye"></i></button>
                      <button type="button" class="btn btn-warning me-1"><i class="bi bi-pencil-square"></i></button>
                      <button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <th>5</th>
                    <td>Balachandra Kakkar</td>
                    <td>kakkar_balachandra@morissette-bechtelar.io</td>
                    <td>female</td>
                    <td>inactive</td>
                    <td>
                      <button type="button" class="btn btn-info me-1"><i class="bi bi-eye"></i></button>
                      <button type="button" class="btn btn-warning me-1"><i class="bi bi-pencil-square"></i></button>
                      <button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <th>6</th>
                    <td>Kamlesh Mehra</td>
                    <td>kamlesh_mehra@tremblay-white.co</td>
                    <td>female</td>
                    <td>active</td>
                    <td>
                      <button type="button" class="btn btn-info me-1"><i class="bi bi-eye"></i></button>
                      <button type="button" class="btn btn-warning me-1"><i class="bi bi-pencil-square"></i></button>
                      <button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <th>7</th>
                    <td>Sarada Malik</td>
                    <td>malik_sarada@reilly.org</td>
                    <td>female</td>
                    <td>active</td>
                    <td>
                      <button type="button" class="btn btn-info me-1"><i class="bi bi-eye"></i></button>
                      <button type="button" class="btn btn-warning me-1"><i class="bi bi-pencil-square"></i></button>
                      <button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
                    </td>
                  </tr>
                  <tr>
                    <th>8</th>
                    <td>Chandranath Desai</td>
                    <td>desai_chandranath@runolfsdottir-schaefer.name</td>
                    <td>female</td>
                    <td>inactive</td>
                    <td>
                      <button type="button" class="btn btn-info me-1"><i class="bi bi-eye"></i></button>
                      <button type="button" class="btn btn-warning me-1"><i class="bi bi-pencil-square"></i></button>
                      <button type="button" class="btn btn-danger"><i class="bi bi-trash"></i></button>
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
</template>
