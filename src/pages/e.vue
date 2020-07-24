<template>
  <div>
    <div class="daKuang">
      <input type="text" v-model="input" placeholder="请输入内容" class="conter" />
      <button v-on:click="push">确认</button>
    </div>
    <div class="daKuang1">
      <input type="text" v-model="input1" placeholder="请输入内容" class="conter" />
      <button v-on:click="push1">更新</button>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
export default {
  data() {
    return {
      input: "",
      input1: "",
    };
  },
  methods: {
    push() {
      axios
        .post("https://api.orderour.com/api/centens", {
          text: this.input,
        })
        .then(function (res) {
          console.log("回应", res);
        })
        .catch(function (err) {
          console.log(err);
        });
    },
    push1() {
      axios
        .put("https://api.orderour.com/api/centens", {
          id: "5f070479a733f60728083ccf",
          text: this.input1,
        })
        .then(function (res) {
          console.log("回应", res);
          if (res.data.code == 201) {
            alert("更新成功");
          }
        })

        .catch(function (err) {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>
.daKuang {
  height: 50px;
  width: 200px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
.daKuang1 {
  height: 50px;
  width: 200px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
.conter {
  margin-right: 10px;
}
</style>