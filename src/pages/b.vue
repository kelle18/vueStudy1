<template>
  <div class="Xinzeng">
    <el-input v-model="input" class="Neirong" placeholder="请输入内容"></el-input>
    <el-row>
      <el-button type="primary" v-on:click="send">确认</el-button>
    </el-row>
  </div>
</template>
<script>
const axios = require("axios");

export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    async send() {
      axios
        .post("https://api.orderour.com/api/centens", {
          text: this.input
        })
        .then(function(res) {
          console.log("回应", res);
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
};
</script>
<style scoped>
.Xinzeng {
  width: 100%;
  height: 200px;
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
.Neirong {
  width: 200px;
  margin-right: 10px;
}
</style>