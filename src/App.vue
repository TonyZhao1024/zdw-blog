<template>
    <div>
        <navigation-left id="left"></navigation-left>
        <router-view id="rout"></router-view>
    </div>
</template>

<!--<template>-->
<!--  <div id="app">-->
<!--        <img alt="Vue logo" src="./assets/logo.png"-->
<!--        <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <router-view></router-view>-->
<!--  </div>-->
<!--</template>-->

<script>
    import NavigationLeft from './components/NavigationLeft'

    export default {
        name: 'App',
        components: {
            NavigationLeft
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-right: 60px;
        float: right;
    }
    #rout {

    }
    #left {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-left: 5px;
        float: left; /*侧边栏居左，改为right可令侧边栏居右*/
        width: 350px;
    }
</style>
