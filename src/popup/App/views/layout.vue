<template>
  <div class="qrcode">
    <div class="qrcode-name">{{title}}</div>
    <div class="qrcode-url"> {{url}}</div>
    <div class="canvas">
      <!-- 加背景图片之后很大概率识别不出码 -->
      <vue-qr :text="url"
              :size="350"
              :bgSrc="bgUrl"></vue-qr>
    </div>
  </div>
</template>

<script>
import VueQr from 'vue-qr'
export default {
  components: {
    VueQr
  },

  data () {
    return {
      title: '',
      url: '',
      bgUrl: ''
    }
  },

  methods: {
    handleUrl () { // 获取当前页面Url
      let _this = this
      // eslint-disable-next-line no-undef
      chrome.tabs.getSelected(null, function (tab) {
        _this.title = tab.title
        _this.url = tab.url
      })
    },

    getCanvasBg () { // 生成随机图片地址
      let num = Math.round(Math.random() * 1000 * 4)
      this.bgUrl = `http://img.infinitynewtab.com/wallpaper/${num}.jpg`
    }
  },

  async created () {
    await this.handleUrl()
    this.getCanvasBg()
  }
}
</script>-

<style lang="scss" scoped>
.qrcode {
  padding: 6px;
  line-height: 1.5;
  .qrcode-name {
    font-size: 14px;
    font-weight: 600;
  }
  .qrcode-url {
    width: 100%;
    color: gray;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .canvas {
    width: 90%;
    margin: auto;
  }
}
</style>
