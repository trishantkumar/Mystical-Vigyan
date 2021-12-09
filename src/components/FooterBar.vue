<template>
    <!-- footer -->
    <footer class="w3l-footer-16">
        <div class="w3l-footer-16-main">
            <div class="container">
                <div class="row footer-p">
                    <div class="col-lg-8 mt-lg-0 mt-4 pr-lg-5">
                        <div class="d-sm-flex align-items-center top-footer-content mb-5">
                            <a class="logo d-flex align-items-center" href="/"><i
                                    class="fab fa-accusoft icon-color mr-1"></i>Mystical<span> Vigyan</span></a>
                            <p class="top-p ml-sm-4 pl-sm-4 mt-sm-0 mt-2">
                                Numerology is a science of numbers, which play significant role in our lives.
                            </p>
                        </div>
                        <div class="row footer-grids pt-4">
                            <div class="col-sm-4 col-6 column">
                                <ul class="footer-gd-16">
                                    <li><router-link to="/"><i class="fa fa-angle-right"
                                                aria-hidden="true"></i>Home</router-link></li>
                                    <li><router-link to="/about"><i class="fa fa-angle-right" aria-hidden="true"></i>About
                                            Us</router-link></li>
                                    <!-- <li><router-link to="#blog"><i class="fa fa-angle-right" aria-hidden="true"></i>Blog
                                            Posts</router-link></li> -->
                                    <li><router-link to="/contact"><i class="fa fa-angle-right"
                                                aria-hidden="true"></i>Contact Us</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-7 column mt-lg-0 mt-4">
                        <h3>Social Links </h3>
                        <div class="columns-2 mt-4">
                            <ul class="social">
                                <li><a href="#facebook"><span class="fab fa-facebook-f" aria-hidden="true"></span></a>
                                </li>
                                <li><a href="#twitter"><span class="fab fa-twitter" aria-hidden="true"></span></a>
                                </li>
                                <li><a href="#google-plus"><span class="fab fa-google-plus-g"
                                            aria-hidden="true"></span></a>
                                </li>
                                <li><a href="#instagram"><span class="fab fa-instagram" aria-hidden="true"></span></a>
                                </li>
                                <li><a href="#linkedin"><span class="fab fa-linkedin-in" aria-hidden="true"></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="below-section mt-5 text-center">
                    <p class="copy-text">@ 2021 Setup. All rights reserved. Design by <a href="https://vajratechne.com/"
                            target="_blank">
                            VajraTechne</a>
                    </p>
                </div>
            </div>
        </div>
        <button @click="topFunction()" id="movetop" title="Go to top" v-if="isGoToTop">
            <span class="fas fa-level-up-alt" aria-hidden="true"></span>
        </button>
    </footer>
    <!-- //footer -->
</template>
<script>
export default {
    data() {
        return {
            isGoToTop: false
        }
    },
    mounted(){
        window.addEventListener('scroll', this.scrollFunction);
    },

    destroyed () {
        window.removeEventListener('scroll', this.scrollFunction);
    },

    methods:{
        scrollFunction(){
        if (document.body.scrollTop >= 20 || document.documentElement.scrollTop > 20) {
        //   document.getElementById("movetop").style.display = "block";
            this.isGoToTop = true;
        } else {
        //   document.getElementById("movetop").style.display = "none";
         this.isGoToTop = false;
        }
      },

      // When the user clicks on the button, scroll to the top of the document
      topFunction: function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }
    }
}
</script>