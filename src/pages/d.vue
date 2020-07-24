<template>
  <div>
    <li v-for="(item, index) in tableData" :key="index">
      <p>{{index}}</p>
      <p>{{item.text}}</p>
      <p>{{item._id}}</p>
      <button v-on:click="delItem(item._id)">删除</button>
    </li>
  </div>
</template>
<script>
const axios = require("axios");

export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    delItem(id) {
      console.log(id);

      axios
        .delete("https://api.orderour.com/api/centens", {
          id: id
        })
        .then(function(res) {
          console.log("回应", res);
          if (res.data.code === 201) {
            alert("删除成功");
          } else {
            alert("删除失败");
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  mounted() {
    let that = this;
    axios.get("https://api.orderour.com/api/centens").then(function(res) {
      console.log("res", res);
      console.log("get的回应", res.data.data);

      that.tableData = res.data.data;
    });
  }
};
</script>
<style scoped>
li {
  display: flex;
}
li p {
  margin: 0 20px;
}
</style>