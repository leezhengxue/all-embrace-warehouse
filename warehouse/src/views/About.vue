<template>
  <headernav />
  <div class="content">
    <div class="section-1">
      <div class="section-1-wrapper">
        <h2>About All-Embrace Warehouse</h2>
        <p>
          All-Embrace Warehouse is a premium fulfillment service provider in
          South East Asia that offers professional fulfillment service for both
          online & offline retail businesses. Our fulfillment services are
          enabled by technologies to meet the fast changing requirements of the
          retail industry revolution.
        </p>
      </div>
    </div>

    <div class="section-2">
      <div class="section-2-wrapper">
        <div class="card-container">
          <div class="solution-card">
            <div class="solution-card-wrapper">
              <h2>Mission</h2>
              <p>
                To exceed customers expectations through the most extensive and
                efficient of networks with best performance to attain speed and
                reliability of services.
              </p>
            </div>
          </div>
          <div class="solution-card">
            <div class="solution-card-wrapper">
              <h2>Vision</h2>
              <p>
                Create innovative warehouse solutions to customers by offering
                the services as per customers requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-2">
      <div class="section-2-wrapper">
        <h2>We Guarantee YOU</h2>
        <div class="card-container">
          <div class="solution-card">
            <div class="solution-card-wrapper">
              <h2>Freedom</h2>
              <p>
                • Flexible Storage Capacity <br />• Long/Short Term Storage
                Services <br />• Multiple Sales Channels <br />• Multiple last
                mile delivery channel
              </p>
            </div>
          </div>
          <div class="solution-card">
            <div class="solution-card-wrapper">
              <h2>Security</h2>
              <p>
                • Warehouse Insurance Service <br />• 24/7 High Security
                Monitoring <br />• Alarm System, Fingerprint System <br />• CCTV
                System • Door Access System <br />• 24 Hours Armed Security
              </p>
            </div>
          </div>
        </div>
        <div class="card-container">
          <div class="solution-card">
            <div class="solution-card-wrapper">
              <h2>Innovative</h2>
              <p>
                • Cost Effective & Efficient Service <br />• Customers require
                to specific tailored solutions to meet their needs <br />• The
                comprehensive service allow All-Embrace to customize solution
                for customer needs & wants
              </p>
            </div>
          </div>
          <div class="solution-card">
            <div class="solution-card-wrapper">
              <h2>Services</h2>
              <p>
                • Loading & Unloading Container <br />• Packaging Cargo <br />•
                Stock Recording Inventory <br />• Long/Short Term Storage
                Services <br />• Loading dry/bulk cargo <br />• Local/Outstation
                Lorry Transportation <br />• Warehouse Management System
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-2">
      <div class="section-2-wrapper">
        <h2 class="section-title">Supported logistic</h2>
        <div class="image-wrapper">
          <img src="../assets/Jnt_logo.png" />
          <img src="../assets/postlaju_logo.png" />
          <img src="../assets/posmy_logo.png" />
          <img src="../assets/dhl_logo.png" />
          <img src="../assets/ninjavan_logo.png" />
          <img src="../assets/dropoff_logo.png" />
          <img src="../assets/citylink_logo.png" />
          <img src="../assets/cj_logo.png" />
          <img src="../assets/lineclear_logo.png" />
          <img src="../assets/flick_logo.png" />
          <img src="../assets/aramex_logo.png" />
          <img src="../assets/postco_logo.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headernav from "../components/header.vue";
export default {
  components: { headernav },
  name: "About",
  props: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  text-align: center;
}
.content {
  height: 100%;
  width: 100%;
  padding-top: 100px;
}
.hero-section {
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
  min-height: 90vh;
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
  min-height: 90vh;
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
}
.section-title {
  padding: 50px 0 50px 0;
}
.card-container {
  /* modify how the card should be aligned here */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* flex-direction: row;
  justify-content: center;
  align-items: center; */
  padding: 10px;
}
.solution-card {
  /* min-height: 250px; */
  min-width: 250px;
  width: 350px;
  margin: 10px;
  background: white;
  border-radius: 10px;
  /* color: white; */
  /* box-shadow: 2px 2px 2px 2px grey; */
  box-shadow: 0px 0px 12px #eef0f5;
}
.solution-card-wrapper {
  padding: 30px;
}
.solution-card-wrapper h2 {
  padding: 10px;
}
.solution-card-wrapper p {
  text-align: left;
}
.image-wrapper {
  max-width: 1000px;
  margin: auto;
}

@media (max-width: 320px) {
  img {
    width: 250px;
  }
}
</style>
