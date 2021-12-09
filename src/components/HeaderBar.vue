<template>
    <!--header-->
    <header id="site-header" :class="navBarFixed ? 'fixed-top nav-fixed'  : 'fixed-top'">
        <div class="container">
            <nav class="navbar navbar-expand-lg stroke px-0">
                <h1>
                    <router-link class="navbar-brand" to="/">
                        <i class="fab fa-accusoft icon-color mr-1"></i>Mystical<span> Vigyan</span>
                    </router-link>
                </h1>
                <button :class="isMenuExpand ? 'navbar-toggler  bg-gradient' :  'navbar-toggler  bg-gradient collapsed'" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" :aria-expanded="isMenuExpand"
                    aria-label="Toggle navigation"
                    @click="navBarExpand">
                    <span class="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span class="navbar-toggler-icon fa icon-close fa-times"></span>
                </button>

                <div :class="isMenuExpand ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'" id="navbarTogglerDemo02">
                    <ul class="navbar-nav ml-lg-auto">
                        <li class="nav-item">
                            <router-link :class="$route.path == '/' ? 'nav-link active' : 'nav-link'" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :class="$route.path == '/about' ? 'nav-link active' : 'nav-link'" to="/about">About Us</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :class="$route.path == '/numerology' ? 'nav-link active' : 'nav-link'" to="/numerology">Numerology</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :class="$route.path == '/nameology' ? 'nav-link active' : 'nav-link'" to="/nameology">Nameology</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :class="$route.path == '/contact' ? 'nav-link active' : 'nav-link'" to="/contact">Contact Us</router-link>
                        </li>
                    </ul>
                </div>
                <!-- //search button -->
                <!-- toggle switch for light and dark theme -->
                <div class="cont-ser-position">
                    <nav class="navigation">
                        <div class="theme-switch-wrapper">
                            <label class="theme-switch" for="checkbox" @click="switchTheme($event)">
                                <input type="checkbox" id="checkbox">
                                <div class="mode-container">
                                    <i class="gg-sun"></i>
                                    <i class="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                    </nav>
                </div>
                <!-- //toggle switch for light and dark theme -->
            </nav>
        </div>
    </header>
    <!--//header-->
</template>
<script>
export default {
    data() {
        return {
            isMenuExpand: false,
            navBarFixed: false,
        }
    },
    mounted() {
        this.themeChange();
        window.addEventListener('scroll', this.navBarWhileScroll);
    },
    methods: {
        navBarExpand() {
            if(this.isMenuExpand) {
                this.isMenuExpand = false;
            } else {
                this.isMenuExpand = true;
            }
        },
        themeChange() {
            const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
            const currentTheme = localStorage.getItem('theme');

            if (currentTheme) {
                document.documentElement.setAttribute('data-theme', currentTheme);
                if (currentTheme === 'dark') {
                    toggleSwitch.checked = true;
                }
            }
        },
        switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
            else {        document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        },
        navBarWhileScroll() {
            if (document.body.scrollTop >= 10 || document.documentElement.scrollTop > 10) {
                this.navBarFixed = true;
            } else {
                this.navBarFixed = false;
            }
      }
    },
    destroyed () {
        window.removeEventListener('scroll', this.navBarWhileScroll);
    },
    // watch:{
    //     $route (){
    //         console.log('route change..')
    //         console.log("route", this.$route.path)
    //     }
    // }
}
</script>