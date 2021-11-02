<template>
  <headernav />
  <div class="content">
    <div class="contact-section">
      <div class="contact-section-wrapper">
        <div class="title-container">
          <h2>Contact Us</h2>
        </div>
      </div>
      <div class="contact-section-wrapper-2">
        <div>
          <p>feel free to contact us</p>
          <img src="../assets/logo.png" />
        </div>
        <div class="information-container">
          <div class="information-wrapper">
            <p>All-Embrace Warehouse SDN BHD</p>
            <p>
              13-2B, Jalan Puteri 2/3,<br />
              Bandar Puteri, 47100 Puchong,<br />
              Selangor, Malaysia
            </p>
            <p>allembrace.trading@gmail.com</p>
            <p>Whatsapp: +60 14 660 1574</p>
            <p>Monday - Friday | 10am - 6pm</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer">
    <div class="footer-wrapper">
      <section>
        <div class="scroll text1">
          <div class="font">
            - Contact Us <span>- Contact Us </span>- Contact Us
            <span>- Contact Us </span>- Contact Us <span>- Contact Us </span>-
            Contact Us <span>- Contact Us </span> - Contact Us
            <span>- Contact Us </span>
          </div>
        </div>
      </section>
      <div class="footer-content">
        <div class="footer-content-slot-1">
          <div>LOGO</div>
          <div>
            <h3>About us</h3>
            <p>Simplified, Reliable, Secure</p>
          </div>
        </div>
        <div class="footer-content-slot-2">
          <p>LinkedIn</p>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
        <div class="footer-content-slot-3">
          <h3>Office address</h3>
          <p>
            13-2B, Jalan Puteri 2/3,<br />
            Bandar Puteri, 47100 Puchong,<br />
            Selangor, Malaysia
          </p>
        </div>
        <div class="footer-content-slot-4">
          <p>
            All-Embrace Warehouse<br />
            allembrace.trading@gmail.com<br />
            +60 14 660 1574
          </p>
        </div>

        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
import headernav from "../components/header.vue";
export default {
  components: { headernav },
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
  width: 90%;
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
  background: #f7d083;
}
.information-container {
  margin: 50px 0 50px 0;
  background: #f7d083;
}
.information-wrapper {
  text-align: left;
  padding: 50px;
}
.information-wrapper p {
  padding-bottom: 20px;
}

.footer {
  display: block;
  width: 100%;
  background: #598794;
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.footer h2 {
  font-size: 40px;
  font-family: "Sofia Pro", sans-serif;
  letter-spacing: 3px;
  padding-top: 10px;
  margin: 0;
}
.footer p {
  font-family: "Sofia Pro", sans-serif;
  line-height: 30px;
  padding-top: 2% 0;
  text-align: justify;
}
.footer-wrapper {
  width: 100%;
  margin: auto;
}
section {
  position: relative;
  width: 100%;
  height: 100px;
  overflow: hidden;
}
.font {
  font-family: "Sofia Pro", sans-serif;
  color: #fff;
  font-size: 60px;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: black;
}
section .scroll {
  width: 100%;
  display: flex;
}
section .scroll div {
  white-space: nowrap;
  font-weight: 900;
  text-transform: uppercase;
  animation: animate 5s linear infinite;
}
section.scroll div:nth-child(2) {
  animation: animate2 5s linear infinite;
}
@keyframes animate {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-10%);
  }
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.footer-content-slot-1 {
  font-size: 15px;
  text-align: left;
  padding: 20px;
  width: 200px;
}
.footer-content-slot-1 p {
  text-align: left;
}
.footer-content-slot-2 {
  font-size: 15px;
  width: 200px;
  padding: 20px;
}
.footer-content-slot-3 {
  font-size: 15px;
  text-align: left;
  padding: 20px;
}
.footer-content-slot-3 p {
  width: 200px;
  text-align: left;
}
.footer-content-slot-4 {
  font-size: 15px;
  text-align: left;
  padding: 20px;
}
.line {
  background: white;
  height: 1.5px;
  width: 90%;
  margin: 30px 0 30px 0;
}
</style>
