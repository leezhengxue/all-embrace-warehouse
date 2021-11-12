<template>
  <div>
    <headernav />
    <div class="hero-section">
      <div class="hero-title-container">
        <h1>Finest fulfillment service provider</h1>
        <h3>in South East Asia</h3>
        <h2>Simplified, Reliable, Secure</h2>
      </div>

      <div class="scrolldown-container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>

        <span class="scrolldown-text">Scroll down</span>
      </div>
    </div>
    <div class="section-1">
      <div class="section-1-wrapper">
        <h2>Solution</h2>
        <div class="wrap-cards">
          <div class="card-container">
            <div class="solution-card">
              <div class="solution-card-wrapper">
                <img src="../assets/storage_service.png" />
                <h4>Storage Service</h4>
                <a href="/fulfillment/#storage">
                  <p>Go to Storage ➔</p>
                </a>
              </div>
            </div>
            <div class="solution-card">
              <div class="solution-card-wrapper">
                <img src="../assets/packaging_service.png" />
                <h4>Packaging Service</h4>
                <a href="/fulfillment/#packaging">
                  <p>Go to Packaging ➔</p>
                </a>
              </div>
            </div>
          </div>
          <div class="card-container">
            <div class="solution-card">
              <div class="solution-card-wrapper">
                <img src="../assets/transportation_service.png" />
                <h4>Logistic Service</h4>
                <a href="/fulfillment/#logistic">
                  <p>Go to Logistic ➔</p>
                </a>
              </div>
            </div>
            <div class="solution-card">
              <div class="solution-card-wrapper">
                <img src="../assets/ecommerce_service_center.png" />
                <h4>Fulfillment Fervice</h4>
                <a href="/fulfillment/#ecommerce">
                  <p>Go to E-commerce ➔</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-2">
      <div class="section-2-wrapper">
        <h2>What we do??</h2>
        <p>
          We carry out manual and automated order picking and packing tasks on
          your behalf. These include banding, labelling and set assembly. Of
          course, we also stock PoS displays and prepare them for retail.
        </p>
        <h4>Our Operations</h4>
        <p>
          Operations should be lean and hassle-free. We all-embrace warehouse
          offers a set of packaging services that enable customers to focus on
          their core products and processes to grow their business. Packing,
          kitting, warehousing, just-in-time delivery, and containerization are
          examples of services that we custom build to meet specific
          requirements of our customers.
        </p>
        <h4>Our Responsibilities</h4>
        <p>
          We All-Embrace warehouse performs functions related to the receiving
          and processing of incoming goods and materials. Our responsibilities
          may include packing and shipping orders or managing, organizing and
          retrieving stock. We are also responsible for maintaining a clean and
          safe working environment, keeping shelves, the workstation and the
          pallet area clean and neat and complying with all rules and
          regulations regarding cleanliness and safety.
        </p>

        <div class="sub-section-container">
          <div class="sub-section-wrapper">
            <h4>
              Some of the specific duties All-Embrace Warehouse may include:
            </h4>
            <p>
              ✓ Picking merchandise from the distribution center and
              transporting it to the shipping by for loading.
            </p>
            <p>
              ✓ Receiving goods for return or delivery and verifying its
              contents against the purchase order to ensure it is accurate and
              free from damage.
            </p>
            <p>
              ✓ Identifying lost, damaged or missing merchandise and notifying
              the supplier/ client.
            </p>
            <p>
              ✓ Training new employees on the company’s and department’s
              processes and procedures for rapid onboarding.
            </p>
            <p>
              ✓ Packing orders in an orderly manner so they are prepared for
              shipping.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="section-1">
      <div class="section-1-wrapper">
        <div class="sub-section-container">
          <div class="sub-section-wrapper">
            <h4>
              Some of the specific duties All-Embrace Warehouse may include:
            </h4>
            <p>
              ✓ Picking merchandise from the distribution center and
              transporting it to the shipping by for loading.
            </p>
            <p>
              ✓ Receiving goods for return or delivery and verifying its
              contents against the purchase order to ensure it is accurate and
              free from damage.
            </p>
            <p>
              ✓ Identifying lost, damaged or missing merchandise and notifying
              the supplier/ client.
            </p>
            <p>
              ✓ Training new employees on the company’s and department’s
              processes and procedures for rapid onboarding.
            </p>
            <p>
              ✓ Packing orders in an orderly manner so they are prepared for
              shipping.
            </p>
          </div>
        </div>
      </div>
    </div> -->
    <div class="section-1">
      <div class="section-1-wrapper">
        <h2>Pricing Calculator</h2>
        <p>
          Try out this cool calculator below to get an estimation of how much
          you would be charged per month. Please do note that this is a
          simplified calculator and actual charges will differ based on various
          factors such as item size, weight, courier charges and required
          packing procedures, etc. Moreover, the estimation calculator is here
          to give you a rough idea of how much you could be charged based on
          items moving in and stored here at the warehouse.
        </p>
        <pricecalculator />
      </div>
    </div>
    <footernav />
  </div>
</template>

<script>
import headernav from "../components/header.vue";
import footernav from "../components/footer.vue";
import pricecalculator from "../components/pricecalculator.vue";
export default {
  components: { headernav, pricecalculator, footernav },
  name: "Homepage",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  text-align: center;
}
.hero-section {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 100px;
  /* background-color: pink; */
  background-image: url("../assets/hero_img.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: 60%;
}
.hero-title-container {
  text-align: left;
  padding-left: 15vw;
}
.hero-section h1 {
  padding-top: 15%;
  /* width: 800px;
  margin-left: 300px; */
  font-size: 30px;
  font-family: "Sofia Pro", sans-serif;
  color: #fff;
  text-shadow: 0px 1px 10px #000000;
}
.hero-section h3 {
  font-size: 80px;
  font-family: "Sofia Pro", sans-serif;
  color: #fff;
  text-shadow: 0px 1px 10px #000000;
}
.hero-section h2 {
  font-size: 50px;
  font-family: "Sofia Pro", sans-serif;
  color: #fff;
  text-shadow: 0px 1px 10px #000000;
}
.scrolldown-container {
  position: relative;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  margin-top: 15%;
}

.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
}

.chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: " ";
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: #fff;
}

.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}

@keyframes move {
  25% {
    opacity: 1;
  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}

.scrolldown-text {
  display: block;
  margin-top: 75px;
  font-family: "Helvetica Neue", "Helvetica", Arial, sans-serif;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.25;
  animation: pulse 2s linear alternate infinite;
}

@keyframes pulse {
  to {
    opacity: 1;
  }
}

.section-1 {
  width: 100%;
  position: relative;
  top: 100vh;
  background: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-1 h2 {
  font-size: 40px;
  /* font-family: "Niveau Grotesk Regular"; */
  font-family: "Open Sans", sans-serif;
  letter-spacing: 3px;
  padding-top: 10px;
  margin: 0;
}
.section-1 p {
  /* font-family: "Niveau Grotesk Regular"; */
  font-family: "Open Sans", sans-serif;
  line-height: 30px;
  max-width: 1000px;
  margin: auto;
}
.section-1-wrapper {
  width: 80%;
  margin: 0 auto;
}

.section-2 {
  display: block;
  width: 100%;
  position: relative;
  top: 100vh;
  background: #f7d083;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-2 h2 {
  font-size: 40px;
  /* font-family: "Niveau Grotesk Regular"; */
  font-family: "Open Sans", sans-serif;
  letter-spacing: 3px;
  padding-top: 10px;
  margin: 0;
}
.section-2 p {
  /* font-family: "Niveau Grotesk Regular"; */
  font-family: "Open Sans", sans-serif;
  line-height: 30px;
  padding: 10px;
  text-align: justify;
  max-width: 1000px;
  margin: auto;
}
.section-2-wrapper {
  width: 80%;
  margin: auto;
}
.sub-section-container {
  margin: 20px;
}
.sub-section-wrapper {
  max-width: 600px;
  padding: 40px;
  margin: auto;
  background: white;
  border-radius: 10px;
}

.sub-section-wrapper h4 {
  font-family: "Open Sans", sans-serif;
}

.sub-section-wrapper p {
  text-align: left;
}
.wrap-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card-container {
  display: flex;
  /* flex-direction: row;
  justify-content: space-between; */
  flex-wrap: wrap;
  justify-content: center;
}
.solution-card {
  margin: 10px;
  height: 330px;
  width: 270px;
  background: white;
  color: black;
  border-radius: 20px;
  /* box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.5); closer */
  box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.5); /* further */
}
.solution-card-wrapper {
  padding: 20px 0 0 0;
}
.solution-card-wrapper h4 {
  font-family: "Sofia Pro", sans-serif;
  font-size: 18px;
  padding: 35px 0 15px 0;
}
.solution-card-wrapper a {
  text-decoration: none;
  color: #ebad04;
  font-size: 15px;
}
img {
  border-radius: 50%;
  width: 190px;
  height: auto;
}
.footer {
  position: relative;
  top: 100vh;
}

@media (max-width: 1440px) {
  .solution-card {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .hero-title-container {
    padding-left: 10vw;
  }
  .hero-section h1 {
    font-size: 27px;
  }
  .hero-section h3 {
    font-size: 60px;
  }
  .hero-section h2 {
    font-size: 40px;
  }
  .sub-section-wrapper {
    padding: 10px;
  }
}
</style>
