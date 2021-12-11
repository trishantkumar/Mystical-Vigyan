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

    <section class="w3l-content-11-main">
        <div class="content-design-11 py-5">
            <div class="container">
                <div class="mx-auto text-center mb-sm-5 mb-4" style="max-width:800px">
                    <!-- <h3 class="title-main-2 text-center mx-auto mb-sm-4 mb-2" style="max-width:600px">
                    </h3> -->
                    <p class="sub-para-style">
                         I am sharing my introduction to Numerology with all of you. I always had thought that I had some connection with numbers, numbers played with me, they played a huge rile in my life. Then one day, I was talking to a friend of mine and he told me that he was going to pursue Numerology. It just fascinated me. Though knowing nothing about Numerology, not even knowing what Numerology is, being completely unknown to this thing called ' Numerology ', I exclaimed, " I also want to learn Numerology. " He said, " Why not ? " Ans being totally null in my head, I went to learn Numerology and got all the answers to the questions I had regarding numbers.
                    </p>
                    <br>
                    <p class="sub-para-style">
                        Occult sciences are the mysterious sciences. Hence, the name ' Mystical Vigyan'. Many names I had thought of, but this is the only name which caught my mind.
                    </p>
                    <br>
                    <p class="sub-para-style">
                        Here at 'Mystical Vigyan', I don't do anything, I just play with your numbers and numbers play their magic, sprinkle their magical powers and Hence, we see the ' POWER OF NUMBERS '.
                    </p>
                    <br>
                    <p class="sub-para-style">
                        Life is in Numbers. Numbers are significant in life. Hence, settling numbers is settiling ' Materialistic Aspect of your Life'.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <h2 class="title-main-2 font-weight-bold" style="text-align: center;">Fee Structure</h2>
    <br><br>
    <table>
    <tr>
        <td>Numerology Report</td>
        <td>Rs. 2500/-</td>
    </tr>
    <tr>
        <td>Name'ology i.e. Name change</td>
        <td>Rs. 1000/-</td>
    </tr>
    <tr>
        <td>Numerology Remedy ( Materialistic life )</td>
        <td>Rs. 1000/-</td>
    </tr>
    <tr>
        <td>Numerology Remedy ( Body, Mind & Soul Level )</td>
        <td>Rs. 2000/-</td>
    </tr>
    <tr>
        <td>Overall Numerology i.e. Life Solution</td>
        <td>Rs. 6000/-</td>
    </tr>
    <tr>
        <td>Personal year reading</td>
        <td>Rs. 1000/- ( Includes Bonus Year reading as well )</td>
    </tr>
    <tr>
        <td>Personal month reading</td>
        <td>Rs. 200/-</td>
    </tr>
    <tr>
        <td>Mobile number / Enail ID / Username / Vehicle number / Plot number / Flat number / House number compatibility recommendation</td>
        <td>Rs. 500 for any one solution</td>
    </tr>
    </table>

    <section class="w3l-content-11-main">
        <div class="content-design-11 py-5">
            <div class="container">
                <div class="mx-auto text-center mb-sm-5 mb-4" style="max-width:800px">
                    <h3 class="title-main-2 text-center mx-auto mb-sm-4 mb-2" style="max-width:600px">
                        Notes
                    </h3>
                    <ul style="text-align: justify;">
                    <li><span class="fas fa-check-circle icon-color" aria-hidden="true"></span>
                        Numerology report includes Numerology study, Name'ology study , Name suggestions ( if required ), Personal year predictions, Business name suggestions ( if required ).
                    </li><br>
                    <li><span class="fas fa-check-circle icon-color" aria-hidden="true"></span>
                        Overall Numerology i.e. Life Solution includes Numerology Report, Name'ology Solutions, Numerology Remedy, Mobile number / Enail ID / Username / Vehicle number / Plot number / Flat number / House number compatibility recommendation ( if required ).
                    </li><br>
                    <li><span class="fas fa-check-circle icon-color" aria-hidden="true"></span>
                        Personal Year / Month is the prediction of how your year / month will be and what pros & cons  your year / month will have , what precautions ir initiatives to be taken in the current year.
                    </li><br>
                    <li><span class="fas fa-check-circle icon-color" aria-hidden="true"></span>
                        " Numerology Remedy Bracelets cost will bary from Bracelet to Bracelet. "
                        <br>
                        These remedies to be given only if required.
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

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
<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 90%;
  margin: auto;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>