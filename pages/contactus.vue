<template>
  <section class="book_section layout_padding-top .layout_padding2-bottom">
        <div class="container">
            <!-- <div class="heading_container">
                <h2>
                    تماس با ما
                </h2>
            </div> -->
            <div class="row">
                <div  class="col-md-3 col-sm-6 col-xs-6">
                    
                    <ul class="list-unstyled mb-0">
                        <li><i class="bi bi-geo-alt-fill"></i>
                            <p class="text-mdAndUp-h4 text-xs-h6">دفتر شرکت آرا شیمی کیمیا</p>
                            <p class="text-mdAndUp-h4 text-xs-h6"> تهران-خیابان شهید مطهری ساختمان 161 </p>
                        </li>
        
                        <li><i class="bi bi-telephone-fill"></i>
                            <p> 021-86031772 ، 021-86031775 </p>
                        </li>
                
                        <li><i class="bi bi-printer-fill"></i>
                            <p>021-86031778</p>
                        </li>

                        <li><i class="bi bi-mailbox"></i>
                            <p>کد پستی: 1576638655</p>
                        </li>


                        <li>
                            <br>
                            <p>Hr@arachemco.com</p>
                        </li>
                        
                    </ul>
                
                
                
                        </div>
            <div class="col-md-3 col-sm-6 col-xs-6">
                    
            <div style="font-family:arial; direction:ltr">
                <ul class="list-unstyled mb-0">
                <li><i class="bi bi-geo-alt-fill"></i>
                    <p class="text-mdAndUp-h4">ARA CHEM Co.</p>
                      <p class="text-mdAndUp-h4">  6th floor, No 161, Motahari St, Tehran</p>
                </li>

                <li><i class="bi bi-telephone-fill"></i>
                    <p> 021-86031772 , 021-86031775 </p>
                </li>
                <li><i class="bi bi-printer-fill"></i>
                            <p>021-86031778</p>
                        </li>

                <li><i class="bi bi-mailbox"></i>
                    <p>Postal Code: 1576638655</p>
                </li>
                <li><i class="bi bi-envelope-fill"></i>
                    <p>Info@arachemco.com
                    </p>
                </li>
            </ul>
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

    <section class="book_section  ">
        <div class="container ">
            <div class="heading_container align-center justify-center">
                <h2>
                    تماس با ما
                </h2>
            </div>
            <div class="row align-center justify-center">
                
                <div class="col-md-4 ">
                    <div class="form_container ">
                        <form class="form" ref="form" @submit.prevent="sendMail">
                            <div>
                                <input name="from_name"  type="text" class="form-control" :value="inputFieldReset" placeholder="نام و نام خانوادگی" required />
                            </div>
                            <div>
                                <input name="email"  type="email" class="form-control" :value="inputFieldReset" placeholder="ایمیل" required />
                            </div>
                            <div>
                                <input name="subject"  type="text" class="form-control" :value="inputFieldReset" placeholder="موضوع پیام" required />
                            </div>
                            <div>
                                <textarea name="message"  rows="10" style="height: 100px" :value="inputFieldReset" class="form-control" required
                                    placeholder="متن پیام"></textarea>
                            </div>
                            <div class="btn_box">
                                <button class="submit" type="submit" name="send" >
                                    ارسال پیام
                                    <div v-if="loading" class="spinner-border spinner-border-sm ms-2"></div>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script setup>
 import { useToast } from "vue-toastification";
import emailjs from '@emailjs/browser';
import {ref} from 'vue';

const { $leaflet } = useNuxtApp();
const form = ref(null);
const inputFieldReset = ref(null);
const loading = ref(false);
const toast = useToast();

const sendMail = () => {
    
        loading.value =true;
        emailjs.sendForm('service_fbqo7dw', 'template_8l87wy7', form.value, 'HQScrU4x3F6MxEf9e')
        .then(() => {
          toast.success("پیام شما با موفقیت ثبت شد")
          inputFieldReset.value = " ";
        }, (error) => {
          alert('Message not sent', error);
        }) 
        .finally(()=>{
            loading.value = false
        })
      }
onMounted(() => {
    let map = $leaflet.map('map').setView([35.7245261, 51.4296521], 20.5);

    let tiles = $leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(map);

    let marker = $leaflet.marker([35.7245261, 51.4296521], {
        icon: $leaflet.icon({
            popupAnchor: [0, -30],
            iconSize: [24, 36],
            iconAnchor: [12, 36],
            iconUrl: 'images/map/marker-icon.png',
            shadowUrl: 'images/map/marker-shadow.png'
        })
    }).addTo(map)
        .bindPopup('<b>Arashimikimia</b>').openPopup();
})
// onMounted(() => {
//   let map = $leaflet.map("map").setView([35.7245261, 51.4296521], 20.5);

//   $leaflet
//     .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     })
//     .addTo(map);

//   $leaflet
//     .marker([35.7245261, 51.4296521],20.5 , {
//         icon: $leaflet.icon({
//             popupAnchor: [12, 6],
//             iconUrl: 'images/map/marker-icon.png',
//             shadowUrl: 'images/map/marker-shadow.png'
//         })
//     })
//     .addTo(map)
//     .bindPopup("AraShimiKimia")
//     .openPopup();
// });
</script>