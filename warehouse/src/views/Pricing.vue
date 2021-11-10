<template>
  <headernav />
  <div class="content">
    <div class="section-1">
      <div class="section-1-wrapper">
        <h2>Pricing</h2>
        <div class="card-container">
          <div class="card">
            <div class="card-wrapper">
              <h2>Inbound Rates</h2>
              <p>
                To exceed customers expectations through the most extensive and
                efficient of networks with best performance to attain speed and
                reliability of services.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-wrapper">
              <h2>OutBound Rates</h2>
              <p>
                Create innovative warehouse solutions to customers by offering
                the services as per customers requirements.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-wrapper">
              <h2>Storage Fees</h2>
              <p>
                Create innovative warehouse solutions to customers by offering
                the services as per customers requirements.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-wrapper">
              <h2>Others</h2>
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
  </div>
</template>

<script>
import headernav from "../components/header.vue";
import pricecalculator from "../components/pricecalculator.vue";
export default {
  components: { headernav, pricecalculator },
  name: "Pricing",
  props: {},
};
</script>

<style scoped>
.content {
  height: 100%;
  width: 100%;
  padding-top: 100px;
}
.section-1 {
  width: 100%;
  background: #fff;
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
  position: relative;
  background: #f7d083;
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
  margin: 40px auto;
}
.section-2 p {
  font-family: "Niveau Grotesk Regular";
  line-height: 30px;
  padding-top: 2% 0;
  text-align: center;
  max-width: 1000px;
  margin: auto;
}
.section-2-wrapper {
  width: 80%;
  margin: auto;
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
.card {
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
.card-wrapper {
  padding: 30px;
}
.card-wrapper h2 {
  padding: 10px;
}
.card-wrapper p {
  text-align: left;
}
</style>
