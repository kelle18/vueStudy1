<template>
  <div>
    <div class="box">
      <div class="left">
        <button :class="{seled:selNum == 1}" @click="send(1)">
          <router-link to="/c" class="san">首页</router-link>
        </button>
        <br />
        <button :class="{seled:selNum == 2}" @click="send(2)">
          <router-link to="/b" class="san">新增</router-link>
        </button>
        <br />
        <button :class="{seled:selNum == 3}" @click="send(3)">
          <router-link to="/d" class="san">查看</router-link>
        </button>
        <br />
        <button :class="{seled:selNum == 4}" @click="send( 4)">
          <router-link to="/e" class="san">新增1</router-link>
        </button>
      </div>

      <div class="right">
        <!-- <router-view > </router-view > -->
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
//1，你的任务，给每个按钮绑定一个方法，然后传个参数，并把selNum设置为这个参数。
//2，加一个hover效果，鼠标悬浮时背景为红色。
export default {
  data() {
    return {
      selNum: 3,
    };
  },
  methods: {
    send(n) {
      console.log("看看selNum", n);
      this.selNum = n;
    },
  },
  //  selId(id) {
  //     console.log("看看id", id);
  //     this.tmpId = id;
  //     this.dialogVisible = true;
  //   },
};
</script>
<style scoped>
.seled {
  background: rebeccapurple;
}
.box {
  height: 100vh;
  display: flex;
}
.left {
  width: 100px;
  height: 100%;
  background: black;
}
.right {
  flex: 1;
  height: 100%;
  background: #fff;
}
.left button {
  width: 85px;
  height: 40px;
  font-size: 20px;
  margin-top: 30px;
  border: none;
  /* background-color: black; */
}
.san {
  color: #fff;
}
button:hover {
  background-color: blue;
}
</style>