<template>
  <div class="p-6">
    <RandomSlider :images="imageLinks" />
  </div>
</template>

<script setup>
import RandomSlider from './RandomSlider.vue';

const imageLinks = [
  'https://www.kodlab.com/modules/ps_imageslider/images/c9664f01d5fd2a0628ce5b1c8b62126ed5473b92_Excel%20ile%20Tam%20Gu%CC%88c%CC%A7%20banner%20c%CC%A7%C4%B1kt%C4%B1.jpg',
  'https://www.kodlab.com/modules/ps_imageslider/images/2dde062d51b2efe4f9cf8ae575e73e7e45b693a2_Bir%20Bilis%CC%A7imci%20Yetis%CC%A7iyor%20banner%20c%CC%A7%C4%B1kt%C4%B1.jpg',
  'https://www.kodlab.com/modules/ps_imageslider/images/73f919bfae528013c2ae649ab2b0f6793ccd55c3_YAPAY%20ZEKA%CC%82%20TABANLI%20SI%CC%87BER%20GU%CC%88VENLI%CC%87G%CC%86E%20GI%CC%87RI%CC%87S%CC%A7%20banner%20c%CC%A7%C4%B1kt%C4%B1.jpg',
  'https://www.kodlab.com/modules/ps_imageslider/images/af8c8d7a321cf864adaaff52fdc06c9ef63740c4_fb96c7df3089094a994c46b9bcfe5287225d7029_S%C4%B1f%C4%B1rbir%20yay%C4%B1nlar%C4%B1%20site%20banner%20copy.jpg'
];
</script>
