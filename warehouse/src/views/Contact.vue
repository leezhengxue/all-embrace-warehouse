<template>
  <div>
    <headernav />
    <div class="content">
      <div class="contact-section">
        <div class="contact-section-wrapper">
          <div class="title-container">
            <h2>Contact Us</h2>
          </div>
          <p>
            Do you have a question about it? Are you looking for help? Want to
            share your thoughts? Feel free to <b>contact us</b>, we have all
            kinds of ways to assist you to solve it.
          </p>
          <p>Feel free to <b>contact us</b> in our customer service :)</p>
          <p>
            If you are looking at this page, you are in "the final stages of the
            B2B journey". <b>HIT US UP!</b>
          </p>
        </div>
        <div class="contact-section-wrapper-2">
          <div class="image-wrapper">
            <!-- <p>
              Do you have a question about it? Are you looking for help? Want to
              share your thoughts? Feel free to <b>contact us</b>, we have all
              kinds of ways to assist you to solve it.
            </p>
            <p>Feel free to <b>contact us</b> in our customer service :)</p>
            <p>
              If you are looking at this page, you are in "the final stages of
              the B2B journey". <b>HIT US UP!</b>
            </p> -->
            <a
              href="https://www.google.com/maps/place/All-Embrace+Trading/@3.022309,101.6135567,17z/data=!3m1!4b1!4m5!3m4!1s0x31cdb3cc3a2946f5:0x2607b23f414c78ca!8m2!3d3.0223448!4d101.6157517"
              target="_blank"
            >
              <img class="map-image" src="../assets/AE_map.png"
            /></a>
          </div>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <div class="information-container">
            <div class="information-wrapper">
              <div class="icon-details-wrapper">
                <a href="https://wa.link/buffw6" target="_blank">
                  <div class="fa fa-whatsapp"></div
                ></a>
                <p>
                  Whatsapp:
                  <a href="https://wa.link/buffw6" target="_blank"
                    >+60 14 660 1574</a
                  >
                </p>
              </div>
              <div class="icon-details-wrapper">
                <div class="fa fa-at"></div>
                <p>allembrace.trading@gmail.com</p>
              </div>
              <div class="icon-details-wrapper">
                <div class="fa fa-truck"></div>
                <div class="text-wrapper">
                  <p>All-Embrace Warehouse SDN BHD</p>
                  <p>
                    13-2B, Jalan Puteri 2/3,<br />
                    Bandar Puteri, 47100 Puchong,<br />
                    Selangor, Malaysia
                  </p>
                  <p>Monday - Friday | 10am - 6pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footernav />
  </div>
</template>

<script>
import headernav from "../components/header.vue";
import footernav from "../components/footer.vue";
export default {
  components: { headernav, footernav },
  name: "Contact",
  props: {},
};
</script>

<style scoped>
.content {
  height: 100%;
  width: 100%;
  padding-top: 100px;
}
/* .hero-section {
  width: 100%;
  height: 500px;
  position: fixed;
  top: 100px;
  background-color: pink;
}
.hero-section h1 {
  padding-top: 8%;
  font-size: 40px;
  font-family: "Roboto", sans-serif;
  color: #fff;

  text-align: left;
  padding: 50px 10vw 0 10vw;
}
.section-1 {
  width: 100%;
  background: #ddd;
  min-height: 80vh;
  display: flex;

  justify-content: center;
  align-items: center;
}

.section-1 h2 {
  font-size: 40px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 3px;
  padding-top: 10px;
  margin: 0;
}
.section-1 p {
  font-family: "Roboto", sans-serif;
  line-height: 30px;
  padding-top: 2% 0;
}
.section-1-wrapper {
  width: 80%;
  margin: 0 auto;
}

.section-2 {
  display: block;
  width: 100%;
  background: #fff;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-2 h2 {
  font-size: 40px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 3px;
  padding-top: 10px;
  margin: 0;
}
.section-2 p {
  font-family: "Roboto", sans-serif;
  line-height: 30px;
  padding-top: 2% 0;
  text-align: justify;
}
.section-2-wrapper {
  width: 80%;
  margin: auto;
} */
.card-container {
  /* modify how the card should be aligned here */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
/* .solution-card {
  min-height: 250px;
  width: 250px;
  background: blue;
  border-radius: 20px;
}
.solution-card-wrapper {
  padding: 10px;
} */

.contact-section {
  width: 100%;
  background: white;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: center;
  align-items: center;
}

.contact-section h2 {
  font-size: 40px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 3px;
  padding: 10px 0 10px 0;
  margin: 0;
}
.contact-section p {
  font-family: "Roboto", sans-serif;
  line-height: 30px;
  padding-top: 2% 0;
}
.contact-section-wrapper {
  width: 80%;
  margin: 0 auto;
}
.contact-section-wrapper-2 {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* flex-direction: row;
  justify-content: space-between; */
}
.title-container {
  /* background: #f7d083; */
  margin: 20px auto;
}
.title-container h2 {
  font-family: "Sofia Pro", sans-serif;
}
.image-wrapper {
  max-width: 800px;
  margin: 50px 0;
}
.image-wrapper p {
  font-family: "Open Sans", sans-serif;
  text-align: left;
  margin: 20px 0;
}

.map-image {
  height: auto;
  max-width: 100%;
}
.information-container {
  margin: 50px 0 50px 0;
  /* background: #f7d083; */
}
.information-wrapper {
  text-align: left;
  padding: 10px;
}
.information-wrapper p {
  font-family: "Open Sans", sans-serif;
  margin: 0 20px;
}

.icon-details-wrapper {
  display: flex;
  flex-wrap: wrap;
  font-family: "Open Sans", sans-serif;

  align-items: center;
}
.information-wrapper a {
  text-decoration: none;
  color: #25d366;
}
.text-wrapper p {
  padding: 5px 0;
}
/* icons */
.fa {
  padding: 20px;
  text-align: center;
  margin: 10px;
  font-size: 25px;
  width: 25px;
  height: 100%;
  border-radius: 50%;
}
.fa-truck {
  background: #ffd008;
  color: white;
}
.fa-whatsapp {
  background: #25d366;
  color: white;
}
.fa-at {
  background: #2553d3;
  color: white;
}
.fa-warehouse {
  background: #2553d3;
  color: white;
}
</style>
