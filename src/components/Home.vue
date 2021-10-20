<template>
  <div class="container">
    <input
      v-model="text"
      type="text"
      class="text">

    <div class="qrcode">
      <vue-qrcode
        :options="{ width: 350 }"
        :value="text"
        class="img-fluid text-center text-lg-right"/>
    </div>
  </div>
</template>

<script>
import VueQrcode from '@chenfengyuan/vue-qrcode'
export default {
  name: 'HelloWorld',
  metaInfo: {
    title: 'QR Code'
  },
  props: {
    msg: String
  },
  components: {
    VueQrcode
  },
  data: () => {
    return {
      text: 'Sample'
    }
  },
  created () {
    document.title = 'QR Code'
  }
}
</script>

<style>
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  .text {
    border-radius: 8px;
    height: 42px;
    font-size: 16px;
    width: 500px;
    font-family: inherit;
  }
  .qrcode {
    margin-top: 5px; 
  }
</style>