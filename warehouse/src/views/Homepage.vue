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
        <div class="card-container">
          <div class="solution-card">
            <div class="solution-card-wrapper">
              <img src="../assets/storage_service.png" />
              <p>Storage Service</p>
            </div>
          </div>
          <div class="solution-card">
            <div class="solution-card-wrapper">
              <img src="../assets/packaging_service.png" />
              <p>Packaging Service</p>
            </div>
          </div>
          <div class="solution-card">
            <div class="solution-card-wrapper">
              <img src="../assets/transportation_service.png" />
              <p>Transportation Service</p>
            </div>
          </div>
          <div class="solution-card">
            <div class="solution-card-wrapper">
              <img src="../assets/ecommerce_service_center.png" />
              <p>E-commerce fulfillment center</p>
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
        <p>
          Operations should be lean and hassle-free. We all-embrace warehouse
          offers a set of packaging services that enable customers to focus on
          their core products and processes to grow their business. Packing,
          kitting, warehousing, just-in-time delivery, and containerization are
          examples of services that we custom build to meet specific
          requirements of our customers.
        </p>
        <p>
          We All-Embrace warehouse performs functions related to the receiving
          and processing of incoming goods and materials. Our responsibilities
          may include packing and shipping orders or managing, organizing and
          retrieving stock. We are also responsible for maintaining a clean and
          safe working environment, keeping shelves, the workstation and the
          pallet area clean and neat and complying with all rules and
          regulations regarding cleanliness and safety.
        </p>
        <div>
          <h4>
            Some of the specific duties All-Embrace warehouse may include:
          </h4>
          <p>
            Picking merchandise from the distribution center and transporting it
            to the shipping by for loading.
          </p>
          <p>
            Receiving goods for return or delivery and verifying its contents
            against the purchase order to ensure it is accurate and free from
            damage
          </p>
          <p>
            Identifying lost, damaged or missing merchandise and notifying the
            supplier/ client
          </p>
          <p>
            Training new employees on the company’s and department’s processes
            and procedures for rapid onboarding
          </p>
          <p>
            Packing orders in an orderly manner so they are prepared for
            shipping
          </p>
        </div>

        <p>
          A fulfillment warehouse handles only the storage, packing, and
          shipping of goods from the warehouse to customers. In many cases,
          businesses that contract with fulfillment warehouses still need to
          drop off inventory at the warehouse. Fulfillment warehouses offer
          great flexibility for eCommerce businesses that are growing or
          experiencing unpredictable order volume. This type of warehouse is
          also increasingly accessible, making it simple to get started. More
          business owners are also turning to warehouse management systems to
          simplify this side of their business.
        </p>
      </div>
    </div>

    <div class="section-1">
      <div class="section-1-wrapper">
        <h2>Pricing Calculator</h2>
        <p>
          All-Embrace Warehouse is a premium fulfillment service provider in
          South East Asia that offers professional fulfillment service for both
          online & offline retail businesses. Our fulfillment services are
          enabled by technologies to meet the fast changing requirements of the
          retail industry revolution.
        </p>
        <pricecalculator />
      </div>
    </div>
    <!-- <div class="section-2">
      <div class="section-2-wrapper">
        <h2>Review???</h2>
        <p>
          All-Embrace Warehouse is a premium fulfillment service provider in
          South East Asia that offers professional fulfillment service for both
          online & offline retail businesses. Our fulfillment services are
          enabled by technologies to meet the fast changing requirements of the
          retail industry revolution.
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
import headernav from "../components/header.vue";
import pricecalculator from "../components/pricecalculator.vue";
export default {
  components: { headernav, pricecalculator },
  name: "Homepage",
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("http://fonts.cdnfonts.com/css/sofia-pro");
@import url("//db.onlinewebfonts.com/c/255b4be50d9bc6456a90b84b88c6c31d?family=Niveau+Grotesk+Regular");
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
  background: #f7d083;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-1 h2 {
  font-size: 40px;
  font-family: "Niveau Grotesk Regular";
  letter-spacing: 3px;
  padding-top: 10px;
  margin: 0;
}
.section-1 p {
  font-family: "Niveau Grotesk Regular";
  line-height: 30px;
  padding-top: 2% 0;
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
  background: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-2 h2 {
  font-size: 40px;
  font-family: "Niveau Grotesk Regular";
  letter-spacing: 3px;
  padding-top: 10px;
  margin: 0;
}
.section-2 p {
  font-family: "Niveau Grotesk Regular";
  line-height: 30px;
  padding-top: 2% 0;
  text-align: justify;
  max-width: 1000px;
  margin: auto;
}
.section-2-wrapper {
  width: 80%;
  margin: auto;
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
  height: 300px;
  width: 250px;
  background: white;
  color: black;
  border-radius: 20px;
  /* box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.5); closer */
  box-shadow: 0px 5px 20px 0 rgba(0, 0, 0, 0.5); /* further */
}
.solution-card-wrapper p {
  padding: 25px 0 20px 0;
}
.solution-card-wrapper {
  padding: 20px 0 0 0;
}
img {
  border-radius: 50%;
  width: 190px;
  height: auto;
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
}
</style>
