<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <br />
        <el-button type="primary" plain @click="gotoReader">
            去阅读器
        </el-button>
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        HelloWorld
    },
    methods: {
        gotoReader() {
            this.$router.push('reader')
        }
    }
};
</script>
