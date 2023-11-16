<template>
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
</script>