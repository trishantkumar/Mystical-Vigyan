<template>
    <div>
        <div class="inner-banner">
        <section class="w3l-breadcrumb">
            <div class="container">
                <h4 class="inner-text-title font-weight-bold mb-2">Contact Us</h4>
                <ul class="breadcrumbs-custom-path">
                    <li><a href="index.html">Home</a></li>
                    <li class="active"><span class="fa fa-chevron-right mx-2" aria-hidden="true"></span> Contact Us</li>
                </ul>
            </div>
        </section>
    </div>
    <!-- //inner banner -->

    <!-- contact -->
    <section class="w3l-contact py-5" id="contact">
        <div class="container py-lg-5 py-md-4 py-2">
            <div class="text-center mb-sm-5 mb-4">
                <label class="sub-title mb-2">Get In Touch</label>
                <h3 class="title-big">Contact Us</h3>
            </div>
            <div class="mx-auto pt-lg-4 pt-md-5 pt-4" style="max-width:1000px">
                <div class="row contact-block">
                    <div class="col-md-5 contact-left">
                        <h3 class="font-weight-bold mb-md-5 mb-4">Contact Details</h3>
                        <div class="cont-details">
                            <div class="d-flex contact-grid">
                                <div class="cont-left text-center mr-3">
                                    <span class="fa fa-globe icon-color"></span>
                                </div>
                                <div class="cont-right">
                                    <h6>Address</h6>
                                    <p>
                                        Plot no. 38, Flat no. 001, Siddhivinayak Balaji palace 2, New Subhedar road, Ayodhya nagar, Nagpur - 440024
                                    </p>
                                </div>
                            </div>
                            <!-- <div class="d-flex contact-grid mt-4 pt-lg-2">
                                <div class="cont-left text-center mr-3">
                                    <span class="fa fa-phone icon-color"></span>
                                </div>
                                <div class="cont-right">
                                    <h6>Call Us</h6>
                                    <p><a href="tel:+1(21) 234 4567">+1(21) 112 7368</a></p>
                                </div>
                            </div>
                            <div class="d-flex contact-grid mt-4 pt-lg-2">
                                <div class="cont-left text-center mr-3">
                                    <span class="fa fa-envelope-open icon-color"></span>
                                </div>
                                <div class="cont-right">
                                    <h6>Email Us</h6>
                                    <p><a href="mailto:example@mail.com" class="mail">example@mail.com</a></p>
                                </div>
                            </div>
                            <div class="d-flex contact-grid mt-4 pt-lg-2">
                                <div class="cont-left text-center mr-3">
                                    <span class="fa fa-headphones icon-color"></span>
                                </div>
                                <div class="cont-right">
                                    <h6>Customer Support</h6>
                                    <p><a href="mailto:info@support.com" class="mail">info@support.com</a></p>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-md-7 contact-right mt-md-0 mt-4">
                        <form action="https://sendmail.w3layouts.com/submitForm" method="post" class="signin-form">
                            <div class="input-grids">
                                <input type="text" name="w3lName" id="w3lName" placeholder="Your Name*"
                                    class="contact-input" required="" />
                                <input type="email" name="w3lSender" id="w3lSender" placeholder="Your Email*"
                                    class="contact-input" required="" />
                                <input type="text" name="w3lSubect" id="w3lSubect" placeholder="Subject*"
                                    class="contact-input" required="" />
                                <input type="text" name="w3lWebsite" id="w3lWebsite" placeholder="Website URL*"
                                    class="contact-input" required="" />
                            </div>
                            <div class="form-input">
                                <textarea name="w3lMessage" id="w3lMessage" placeholder="Type your message here*"
                                    required=""></textarea>
                            </div>
                            <button class="btn button-style">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- map -->
    <div class="map-iframe">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.923193427472!2d79.11046301493408!3d21.1156280859514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe592a05d4a250888!2zMjHCsDA2JzU2LjMiTiA3OcKwMDYnNDUuNiJF!5e0!3m2!1sen!2sin!4v1639214461998!5m2!1sen!2sin" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy">
        </iframe>
    </div>
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