<script setup lang="ts">
import { Comic } from 'comic'
import { ref } from 'vue'
import Reader from './components/Reader.vue'

// Mock data
const comic : Comic = ref({
  id: 1,
  logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Jujutsu_Kaisen_logo_in_Japan.png',
  name: 'Jujutsu kaisen',
  image: 'https://aiptcomics.com/wp-content/uploads/2021/01/9A2AF4F6-D25A-4F18-A9A9-455F38B0B174.jpeg',
  groups: [{
    name: "Volume 1",
    pages: [{
      image: 'https://1.bp.blogspot.com/-KKjv-5US8Xw/YTlTViw6MdI/AAAAAAAA9og/8acC_vfb2-E2Gs0_p0x8e0betSpQ2SWGwCLcBGAsYHQ/s0/02.jpg'
    },{
      image: 'https://1.bp.blogspot.com/-bseMupbWue0/YTWCTLrefeI/AAAAAAAA7O4/VrTLSn43u9spL_Z-7jiAAkKybclqRFwGwCLcBGAsYHQ/s0/01.jpg'
    }]
  },{
    name: "Volume 2",
    pages: [{
      image: 'https://th.bing.com/th/id/OIP.liQHnVkPuGeCwUQqnhv8cQHaLo?pid=ImgDet&rs=1'
    },{
      image: 'https://1.bp.blogspot.com/-KKjv-5US8Xw/YTlTViw6MdI/AAAAAAAA9og/8acC_vfb2-E2Gs0_p0x8e0betSpQ2SWGwCLcBGAsYHQ/s0/02.jpg'
    }]
  }]
})

</script>

<template>
  <div class="container mx-auto px-10">
    <Reader :comic="comic" />
  </div>
</template>
