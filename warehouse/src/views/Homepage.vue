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
              <img src="../assets/logo.png" />
              <p>Solution Service</p>
            </div>
          </div>
          <div class="solution-card">
            <div class="solution-card-wrapper">
              <img src="../assets/logo.png" />
              <p>Packaging Service</p>
            </div>
          </div>
          <div class="solution-card">
            <div class="solution-card-wrapper">
              <img src="../assets/logo.png" />
              <p>Transportation Service</p>
            </div>
          </div>
          <div class="solution-card">
            <div class="solution-card-wrapper">
              <img src="../assets/logo.png" />
              <p>E-commerce fulfillment center</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-2">
      <div class="section-2-wrapper">
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

    <div class="section-1">
      <div class="section-1-wrapper">
        <h2>Pricing :)</h2>
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
        <h2>FAQ</h2>
        <p>
          All-Embrace Warehouse is a premium fulfillment service provider in
          South East Asia that offers professional fulfillment service for both
          online & offline retail businesses. Our fulfillment services are
          enabled by technologies to meet the fast changing requirements of the
          retail industry revolution.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import headernav from "../components/header.vue";
export default {
  components: { headernav },
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
  background-color: pink;
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
}
.hero-section h3 {
  font-size: 80px;
  font-family: "Sofia Pro", sans-serif;
  color: #fff;
}
.hero-section h2 {
  font-size: 50px;
  font-family: "Sofia Pro", sans-serif;
  color: #fff;
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
  background: #ddd;
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
  background: grey;
  color: white;
  border-radius: 20px;
}
img {
  border-radius: 50%;
}
</style>
