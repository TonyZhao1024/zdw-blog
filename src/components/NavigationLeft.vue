<template>
        <el-row class="tac">
            <el-col :span="12">
                <h5>导航</h5>
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>工具类</span>
                        </template>
                        <!--                    <el-menu-item-group>-->
                        <!--                        <template slot="title">分组一</template>-->
                        <!--                        <el-menu-item index="1-1">选项1</el-menu-item>-->
                        <!--                        <el-menu-item index="1-2">选项2</el-menu-item>-->
                        <!--                    </el-menu-item-group>-->
                        <!--                    <el-menu-item-group title="分组2">-->
                        <!--                        <el-menu-item index="1-3">选项3</el-menu-item>-->
                        <!--                    </el-menu-item-group>-->
                        <el-submenu index="1-4">
                            <template slot="title">字符串</template>
                            <el-menu-item index="/StringUtilsComp" @click="goto('/StringUtilsComp')">字符串校验</el-menu-item>
                        </el-submenu>

                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu"></i>
                        <span slot="title">安装类</span>
                    </el-menu-item>
                    <el-menu-item index="3" disabled>
                        <i class="el-icon-document"></i>
                        <span slot="title">算法类</span>
                    </el-menu-item>
                    <el-menu-item index="4" disabled>
                        <i class="el-icon-setting"></i>
                        <span slot="title">面试类</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <router-view></router-view>
        </el-row>
</template>

<script>
    export default {
        name: "NavigationLeft",
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            goto(path) {
                this.$router.replace(path);
                console.log('routerPath', path);
            }
        }
    }
</script>

<style scoped>

</style>