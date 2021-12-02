<script>
import HeaderBar from './../components/HeaderBar';
import FooterBar from './../components/FooterBar';
export default {
    components: {
        HeaderBar,
        FooterBar
    }
};
</script>
<template>
<div>
     <header-bar/>
     <router-view />
     <footer-bar />
</div>
</template>