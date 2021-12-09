<template>
    <div>
        <div class="inner-banner">
        <section class="w3l-breadcrumb">
            <div class="container">
                <h4 class="inner-text-title font-weight-bold mb-2">About Us</h4>
                <ul class="breadcrumbs-custom-path">
                    <li><router-link to="/">Home</router-link></li>
                    <li class="active"><span class="fa fa-chevron-right mx-2" aria-hidden="true"></span>About Us</li>
                </ul>
            </div>
        </section>
    </div>
    <!-- //inner banner -->

    <!-- team with grids section -->
    <section class="w3l-content-11-main">
        <div class="content-design-11 py-5">
            <div class="container py-md-4 py-3">
                <!-- <div class="text-center mb-sm-5 mb-4">
                    <label class="sub-title mb-2">Team</label>
                    <h3 class="title-big">Our Creative Team</h3>
                </div> -->
                <div class="row justify-content-center pt-lg-2">
                    <div class="col-md-4 col-sm-6">
                        <div class="position-relative">
                            <img src="./../assets/images/img1.jpg" class="img-responsive" alt="content-photo">
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 mt-sm-0 mt-4">
                        <div class="position-relative">
                            <img src="./../assets/images/img2.jpg" class="img-responsive" alt="content-photo">
                        </div>
                    </div>
                    <div class="col-md-4 col-sm-6 mt-md-0 mt-4">
                        <div class="position-relative">
                            <img src="./../assets/images/img3.jpg" class="img-responsive" alt="content-photo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- //team with grids section -->

    <!-- content about -->
    <section class="w3l-content-about py-5">
        <div class="container py-md-5 py-4">
            <img src="./../assets/images/main.jpg" alt="" class="img-fluid radius-image-full">
            <div class="row mt-sm-5 mt-4">
                <div class="col-lg-12 about-left-inner pr-lg-5" style="text-align: center;">
                    <h3 class="title-main-2 font-weight-bold">Dhanashryee Bramhankarr</h3>
                </div>
                <!-- <div class="col-lg-6 about-right-inner mt-lg-0 mt-4">
                    <p></p>
                </div> -->
            </div>
        </div>
    </section>
    <!-- content about -->

    <!-- testimonials section -->
    <section class="w3l-clients py-5" id="testimonials">
        <div class="container py-md-5 py-4">
            <div class="text-center mb-sm-5 mb-4">
                <!-- <label class="sub-title mb-2">Testimonials</label>
                <h3 class="title-big">What Clients Says</h3> -->
            </div>
        </div>
    </section>
    </div>
</template>
<script>
export default {
    mounted() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
</script>