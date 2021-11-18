<template>
  <div>
    <headernav />
    <div class="content">
      <div class="section-2">
        <div class="section-2-wrapper">
          <h1>Pricing</h1>
          <div class="card-container-wrapper">
            <div class="card-container">
              <div class="card">
                <div class="card-wrapper">
                  <h2>Inbound Rates</h2>
                  <h4>From RM 0.30 / Item</h4>
                  <p>
                    Exceed customer expectations through the most extensive and
                    efficient networks with the best performance to achieve the
                    speed and reliability of the services.
                  </p>
                  <div class="box-button">
                    <span
                      ><router-link to="/contact"><a></a></router-link
                    ></span>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-wrapper">
                  <h2>Outbound Rates</h2>
                  <h4>From RM 0.80 / Item</h4>
                  <p>
                    Create innovative warehouse solutions for customers by
                    offering the services according to customer requirements.
                  </p>
                  <div class="box-button">
                    <span
                      ><router-link to="/contact"><a></a></router-link
                    ></span>
                  </div>
                </div>
              </div>

              <div class="card-container-wrapper">
                <div class="card">
                  <div class="card-wrapper">
                    <h2>Storage Fees</h2>
                    <h4>As low as RM 16.50 / CBM</h4>
                    <p>
                      Minimum charge of RM 80/ month, or 1 CBM a month. Rates in
                      Cubic Meter.
                    </p>
                    <div class="box-button">
                      <span
                        ><router-link to="/contact"><a></a></router-link
                      ></span>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-wrapper">
                    <h2>Others</h2>
                    <h4>From RM 0.10 onwards</h4>
                    <p>
                      Additional material such as Cardboard box, Card Printing,
                      Flyer Printing, Bubble Wrapping, Airway bills, Shrink
                      Wrap, Freight Wrap and many more.
                    </p>
                    <div class="box-button">
                      <span
                        ><router-link to="/contact"><a></a></router-link
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section-1">
        <div class="section-1-wrapper">
          <h2>Pricing Calculator</h2>
          <p>
            Try out this cool calculator below to get an estimation of how much
            you would be charged per month. Please do note that this is a
            simplified calculator and actual charges will differ based on
            various factors such as item size, weight, courier charges and
            required packing procedures, etc. Moreover, the estimation
            calculator is here to give you a rough idea of how much you could be
            charged based on items moving in and stored here at the warehouse.
          </p>
          <pricecalculator />
        </div>
      </div>
    </div>
    <footernav />
  </div>
</template>

<script>
import headernav from "../components/header.vue";
import pricecalculator from "../components/pricecalculator.vue";
import footernav from "../components/footer.vue";
export default {
  components: { headernav, pricecalculator, footernav },
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
  font-family: "Open Sans", sans-serif;
  letter-spacing: 3px;
  padding-top: 10px;
  margin: 0;
}
.section-1 p {
  font-family: "Open Sans", sans-serif;
  line-height: 30px;
  padding-top: 2% 0;
}
.section-1-wrapper {
  width: 80%;
  margin: 0 auto;
}

.section-2 {
  background-image: url("../assets/pricing_background.png");
  background-repeat: no-repeat;

  background-size: cover;
  background-position: 60%;
  /* filter: brightness(50%); */
  display: block;
  width: 100%;
  position: relative;

  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section-2 h1 {
  font-size: 50px;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 3px;
  padding-top: 10px;
  margin: 40px auto;
  color: #f7d083;
}
.section-2 h2 {
  font-size: 40px;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 3px;
  padding-top: 10px;
  margin: 40px auto;
}
.section-2 p {
  font-family: "Open Sans", sans-serif;
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
/* .section-2-wrapper h2 {
  
} */
.card-container-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card-container {
  /* modify how the card should be aligned here */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  /* flex-direction: row;
  justify-content: center;
  align-items: center; */
}
.card {
  /* min-height: 250px; */

  max-width: 350px;
  margin: 10px;
  background: white;
  border-radius: 10px;
  /* color: white; */
  /* box-shadow: 2px 2px 2px 2px grey; */
  /* box-shadow: 0px 0px 12px #eef0f5; white background put this shadow*/
}
.card-wrapper {
  padding: 30px;
  display: flex;
  flex-direction: column;
}
.card-wrapper h2 {
  padding: 10px;
  font-size: 30px;
  letter-spacing: 2px;
  margin-bottom: 10px;
}
.card-wrapper h4 {
  padding: 10px;
  margin-bottom: 5px;
  color: #f7d083;
}
.card-wrapper p {
  text-align: center;
  margin: auto;
  min-height: 150px;
}

/* Contact us button */
.box-button {
  margin: 20px;
}
.box-button span {
  position: relative;
  display: inline-flex;
  width: 180px;
  height: 55px;
  margin: 0 15px;
  perspective: 1000px;
}
.box-button span a {
  font-size: 19px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform 0.25s;
  font-family: "Open Sans", sans-serif;
}
.box-button span a:before,
.box-button span a:after {
  position: absolute;
  content: "Contact Us";
  height: 55px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
  box-sizing: border-box;
  border-radius: 5px;
}
.box-button span a:before {
  color: #fff;
  background: #000;
  transform: rotateY(0deg) translateZ(25px);
}
.box-button span a:after {
  color: #000;
  transform: rotateX(90deg) translateZ(25px);
}
.box-button span a:hover {
  transform: translateZ(-25px) rotateX(-90deg);
}
/* Contact us button */
</style>
