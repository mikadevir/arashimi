<template>
  <!-- <v-card class="mx-auto my-12" max-width="374">


    <v-img cover height="250" src="/images/map11.jpg"></v-img>

    <v-card-item>
      <v-card-title>تماس با ما</v-card-title>

    </v-card-item>

    <v-form @submit.prevent="submitForm">
      
      <v-text-field name="name" v-model="name" label="نام" class="ma-3"></v-text-field>
      <v-text-field name="email" v-model="email" label="ایمیل" class="ma-3"></v-text-field>
      <v-textarea name="message" v-model="message" label="پیام" class="ma-3"></v-textarea>
      <div class=text-center>
    <v-btn type="submit" color="success" class="my-2">ارسال</v-btn>
      </div>
  </v-form>
  </v-card> -->
  <section class="book_section layout_padding">
        <div class="container">
            <div class="heading_container">
                <h2>
                    تماس با ما
                </h2>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form_container">
                        <form action="">
                            <div>
                                <input type="text" class="form-control" placeholder="نام و نام خانوادگی" />
                            </div>
                            <div>
                                <input type="email" class="form-control" placeholder="ایمیل" />
                            </div>
                            <div>
                                <input type="text" class="form-control" placeholder="موضوع پیام" />
                            </div>
                            <div>
                                <textarea rows="10" style="height: 100px" class="form-control"
                                    placeholder="متن پیام"></textarea>
                            </div>
                            <div class="btn_box">
                                <button>
                                    ارسال پیام
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="map_container ">
                        <div id="map" style="height: 345px;"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!--abouuuuuuuuuuuuut  -->

  <section class="about_section layout_padding">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    
            <ul class="list-unstyled mb-0">
                <li><i class="bi bi-geo-alt-fill"></i>
                    <p><h3>دفتر شرکت آرا شیمی کیمیا</h3><br>
                        تهران-خیابان مطهری ساختمان 161 
                    </p>
                </li>

                <li><i class="bi bi-telephone-fill"></i>
                    <p> 021-86031772 <br>
                        021-86031779 <br>
                        021-86031779
                    </p>
                </li>

                <li><i class="bi bi-printer-fill"></i>
                    <p>021-86031779</p>
                </li>
            </ul>
        
        
        
                </div>
                <div class="col-md-6">
                    
            <div style="font-family:arial; direction:ltr">
                <ul class="list-unstyled mb-0">
                <li><i class="bi bi-geo-alt-fill"></i>
                    <p><h3>ARA CHEM Co.</h3>
                        6th floor, No 161, Motahari St, Tehran 
                    </p>
                </li>

                <li><i class="bi bi-telephone-fill"></i>
                    <p> 021-86031772
                    </p>
                </li>

                <li><i class="bi bi-mailbox"></i>
                    <p>Postal Code: 1576638655</p>
                </li>
                <li><i class="bi bi-envelope-fill"></i>
                    <p>Info@arachemco.com <br>
                        Hr@arachemco.com
                    </p>
                </li>
            </ul>
            </div>
        
        
        
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { $leaflet } = useNuxtApp();

onMounted(() => {
  var map = $leaflet.map("map").setView([35.7245261, 51.4296521], 20.5);

  $leaflet
    .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    })
    .addTo(map);

  $leaflet
    .marker([35.7245261, 51.4296521])
    .addTo(map)
    .bindPopup("AraShimiKimia")
    .openPopup();
});

// const FORMSPARK_ACTION_URL = "https://submit-form.com/Fiyrjk69";

// export default {
//   data() {
//     return {
//       name: "",
//       email: "",
//       message: "",
//     };
//   },
//   methods: {
//     async submitForm() {
//       await fetch(FORMSPARK_ACTION_URL, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           message: this.name,
//           message: this.email,
//           message: this.message,
//         }),
//       });
//       alert("Form submitted");
//     },
//   },
// };
</script>