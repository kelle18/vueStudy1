<template>
  <div>
    <div class="box">
      <div class="left">
        <button>
          <router-link to="/c" class="san">首页</router-link>
        </button>
        <br />
        <button>
          <router-link to="/b" class="san">新增</router-link>
        </button>
        <br />
        <button>
          <router-link to="/d" class="san">查看</router-link>
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
</script>
<style scoped>
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
  background-color: black;
}
.san {
  color: #fff;
}
</style>