<template>
  <div>
    <br />
    <br />
    <li v-for="(item, index) in tableData" :key="index">
      <p>{{index}}</p>
      <p>{{item.text}}</p>
      <p>{{item._id}}</p>
      <button @:click="delItem(item._id)">删除</button>
      <button @click="send(item._id)">选择Id</button>
      <!-- <div class="daKuang1">
        <input type="text" v-model="input1" placeholder="请输入内容" class="conter" />
        <button @:click="push1(item._id)">更新</button>
      </div>-->
      <!-- <input type="text" />
      <el-input v-model="input" class="Neirong" placeholder="请输入内容"></el-input>
      <button @:click="uplItem(item._id)">更新</button>-->
      <!-- @代表 v-on -->

      <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <div class="daKuang1">
          <!-- <span>要改的id：{{tmpId}}</span> -->
          <input type="text" v-model="newText" placeholder="请输入内容" class="conter" />
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button v-on:click="putItem" type="primary">确 定</el-button>
        </span>
      </el-dialog>
    </li>
  </div>
</template>
<script>
const axios = require("axios");

export default {
  data() {
    return {
      tableData: [],
      tmpId: "5f07131e11f36547ff83baab", //要改指定数据的id
      newText: "",
      dialogVisible: false,
      // input1: "",
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          console.log(_);
          done();
        })
        .catch((_) => {
          console.log(_);
        });
    },
    send(id) {
      console.log("查看id", id);
      this.tmpId = id;
      this.dialogVisible = true;
    },

    putItem() {
      if (this.newText == "") {
        alert("内容不能为空");
        console.log("点击了alert");
        return false; //js碰到return  一个false,就会停止后面的语句。
      }

      axios
        .put("https://api.orderour.com/api/centens", {
          id: this.tmpId,
          text: this.newText,
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

      this.dialogVisible = false;
    },
    delItem(id) {
      console.log(id);
      axios
        .delete("https://api.orderour.com/api/centens", {
          id: id,
        })
        .then(function (res) {
          console.log("回应", res);
          if (res.data.code === 201) {
            alert("删除成功");
          } else {
            alert("删除失败");
          }
        });
    },
    // push1() {
    //   axios
    //     .put("https://api.orderour.com/api/centens", {
    //       id: item._id,
    //       text: this.input1,
    //     })
    //     .then(function (res) {
    //       console.log("回应", res);
    //       if (res.data.code == 201) {
    //         alert("更新成功");
    //       }
    //     })

    //     .catch(function (err) {
    //       console.log(err);
    //     });
    // },
    // upItem(id) {
    //   console.log(id);
    //   axios;
    //   "put"("https://api.orderour.com/api/centens", {
    //     id: id,
    //     text: this.input,
    //   }).then(function (res) {
    //     console.log("回应", res);
    //     if (res.data.code === 201) {
    //       alert("更新成功");
    //     } else {
    //       alert("更新失败");
    //     }
    //   });
    // },
  },
  mounted() {
    let that = this;
    axios.get("https://api.orderour.com/api/centens").then(function (res) {
      console.log("res", res);
      console.log("get的回应", res.data.data);
      console.log("get的回应", res.data.data.length);

      that.tableData = res.data.data;
    });
  },
};
</script>
<style scoped>
li {
  display: flex;
  /* margin-bottom: 30px; */
}
li p {
  margin: 0 20px;
}
/* .daKuang1 {
  height: 50px;
  width: 200px;
  margin-left: 50px;
  display: flex;
  justify-content: center;
} */
</style>