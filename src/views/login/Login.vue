<template>
    <el-container id="login_container" style="height: 100%;overflow: hidden">
        <!-- 主要区域容器 -->
        <el-main style="height: 100%;padding: 0">
            <div id="main-img" style="height: 100%;">

            </div>
        </el-main>
    </el-container>
</template>

<script>
    import {setDomFullScreenSize} from "@/utils/common-utils";

    export default {
        name: "Login",
        methods: {},
        mounted() {
            // 设置容器宽高
            setDomFullScreenSize('login_container');
            // 处理背景图片宽高
            window.addEventListener("resize", ev => {
                const img = document.getElementById('main-img');
                const wind = ev.target;
                img.style.backgroundSize = wind.innerWidth + 'px ' + wind.innerHeight + 'px';
            })
        }
    }
</script>

<style scoped>
    #main-img {
        width: 100%;
        height: 100%;
        background: url("../../assets/image/cover_back.png") no-repeat;
        position: absolute;
        z-index: -1;
    }
</style>
