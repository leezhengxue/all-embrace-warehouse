<template>
  <div class="pricing-card-container">
    <div class="pricing-card-wrapper">
      <!--  <form>
                <input type="range" value="0" max="29999" class="slider" onChange="calculate()" id="myRange">
                <output class="bubble"></output>
              </form> -->
      <form>
        <div class="range-wrap">
          <input
            type="range"
            class="range"
            value="0"
            max="29999"
            @change="calculate()"
            id="myRange"
          />
          <output class="bubble"><span>RM</span></output>
        </div>
      </form>

      <div class="content-container" id="partone">
        <div class="content-wrapper">
          <label>Amount of Item</label>
          <input
            type="number"
            class="cbm-input"
            @change="calculate()"
            id="myInput"
            min="0"
          />
          <label>Weight per item</label>
          <SELECT NAME="weight" @change="calculate()" id="itemweight">
            <OPTION value="0.80">0kg - 3kg</OPTION>
            <OPTION value="1.20">3kg - 5kg</OPTION>
          </SELECT>
          <button type="button" class="button-design" @click="next">
            Next
          </button>
        </div>
      </div>

      <!--   <div class="content-container">
                <div class="content-wrapper">
                  <label>Inbound amount</label>
                  <input type="number" class="cbm-input" id="myOutput" disabled>
              
                  <label>weight charges per item</label>
                  <input type="number" class="cbm-input" id="myWeightOutput" disabled>
                </div>
              </div> -->

      <div class="content-container" id="parttwo">
        <div class="content-wrapper">
          <form>
            <input
              type="range"
              value="0"
              min="0"
              max="300"
              class="slider"
              @input="calculate()"
              id="myCBMRange"
            />
          </form>
          <label>CBM</label>
          <input
            type="number"
            value="0"
            min="0"
            max="300"
            class="cbm-input"
            @change="ranger()"
            id="myCBM"
          />

          <!--  <label>total amount CBM</label>
              <input type="number" class="cbm-input" id="myCBMoutput" disabled> -->
          <div class="button-container">
            <button type="button" class="button-design" @click="back()">
              back
            </button>
            <button type="button" class="button-design" @click="done()">
              done
            </button>
          </div>
        </div>
      </div>

      <div class="estimated-container" id="finalsummary">
        <div class="estimated-wrapper">
          <h2>Estimated Price</h2>
          <p>The final estimated price is :</p>
          <div class="estimated-amount-wrapper">
            <span>RM </span><span id="estimatedtotal"></span>
          </div>
          <p>
            Thank you for using our calculator to estimate your pricing. Please
            do note that the prices given are not final and actual monthly
            charges may be higher or lower than calculated. Final monthly
            charges are dependent on various factors such as size of items,
            required amount of bubble wrap layers, when items leave and come
            into the warehouse, etc.
          </p>
          <p @click="next" class="estimated-container-back-button">
            back to calculator
          </p>
        </div>
      </div>

      <!--   <div class="content-container">
              <div class="content-wrapper">
                <label>total</label>
                <input type="number" id="noCBM" onChange="calculate()" disabled>
                <input type="number" id="total" onChange="calculate()" disabled>
              </div>
                  </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "pricecalculator",
  props: {},
  setup() {
    function calculate() {
      var input = document.getElementById(`myInput`);
      var totalinbound = input.value * 0.45;
      console.log("value" + totalinbound);

      var elt = document.getElementById("itemweight");
      var weight = elt.options[elt.selectedIndex].value;
      weight = parseFloat(weight);
      var weighttotal = input.value * weight;
      console.log("weight" + weighttotal);

      var noCBMtotal = "";
      var slider = document.getElementById(`myRange`);
      var CBM = document.getElementById(`myCBM`);
      var CBMrange = document.getElementById(`myCBMRange`);
      noCBMtotal = weighttotal + totalinbound;
      slider.value = noCBMtotal;
      console.log("noCBM" + slider.value);
      CBM.value = CBMrange.value;
      var CBMamount = CBMrange.value * 70;
      console.log("cbm amount" + CBMamount);

      var total = CBMamount + weighttotal + totalinbound;
      console.log(total);
      slider.value = total;

      console.log("total" + slider.value);
      document.getElementById(`estimatedtotal`).innerText = total;

      const allRanges = document.querySelectorAll(".range-wrap");
      allRanges.forEach((wrap) => {
        const range = wrap.querySelector(".range");
        const bubble = wrap.querySelector(".bubble");

        range.addEventListener("input", () => {
          setBubble(range, bubble);
        });

        // setting bubble on DOM load
        setBubble(range, bubble);
      });
    }

    function ranger() {
      var noCBMtotal = "";
      var slider = document.getElementById(`myRange`);
      var CBM = document.getElementById(`myCBM`);
      var CBMrange = document.getElementById(`myCBMRange`);
      CBMrange.value = CBM.value;
      var CBMamount = CBM.value * 70;

      var total = CBMamount + noCBMtotal;
      console.log(total);
      slider.value = total;
      calculate();
    }

    function setBubble(range, bubble) {
      const val = range.value;

      const min = range.min || 0;
      const max = range.max || 100;

      const offset = Number(((val - min) * 100) / (max - min));

      bubble.textContent = val;

      // yes, 14px is a magic number
      bubble.style.left = `calc(${offset}% - 14px)`;
    }

    function next() {
      var partone = document.getElementById(`partone`);
      var parttwo = document.getElementById(`parttwo`);
      var finalsummary = document.getElementById(`finalsummary`);
      partone.style.display = "none";
      parttwo.style.display = "block";
      finalsummary.style.display = "none";
    }
    function back() {
      var partone = document.getElementById(`partone`);
      var parttwo = document.getElementById(`parttwo`);
      var finalsummary = document.getElementById(`finalsummary`);
      partone.style.display = "block";
      parttwo.style.display = "none";
      finalsummary.style.display = "none";
    }

    function done() {
      var partone = document.getElementById(`partone`);
      var parttwo = document.getElementById(`parttwo`);
      var finalsummary = document.getElementById(`finalsummary`);
      partone.style.display = "none";
      parttwo.style.display = "none";
      finalsummary.style.display = "flex";
    }
    return {
      calculate,
      setBubble,
      ranger,
      next,
      back,
      done,
    };
  },
};
</script>
<style scoped>
.pricing-card-container {
  max-width: 700px;
  background: white;
  display: flex;
  border-radius: 20px;
  margin: 30px auto;
  justify-content: center;
  box-shadow: 0px 5px 50px 0 rgba(0, 0, 0, 0.5); /* further */
}
.pricing-card-wrapper {
  width: 80%;
}
.content-container {
  margin: 30px auto;
  background: #f7d083;
  justify-content: center;
  max-width: 400px;
  border-radius: 20px;
  /* box-shadow: 0px 0px 12px #eef0f5; */
  box-shadow: 0px 5px 5px 0 rgba(0, 0, 0, 0.5);
}
.content-wrapper {
  max-width: 200px;
  margin: 30px auto;
  padding: 20px 20px 5px 20px;
  display: flex;
  flex-direction: column;
}
.estimated-container {
  display: flex;
  margin-bottom: 30px;
  justify-content: center;
}
.estimated-container p {
  text-align: center;
  padding: 10px;
}
.estimated-container-back-button {
  color: #ffd008;
  cursor: pointer;
}
.estimated-wrapper {
  width: 80%;
}
.estimated-amount-wrapper {
  padding: 20px;
  font-size: 30px;
  color: #ffd008;
  font-weight: 600;
}
.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
/* .pricing-card-container{
  display:flex;
  justify-content:center;
} */
.range-wrap {
  position: relative;
  width: 100%;
  margin: auto;
  padding: 50px 0; /*  Giving more room for hover  */
  min-width: 100px;
  max-width: 300px;
}

/* Custom Bar */
.range-wrap::before {
  content: "";
  /*  background: linear-gradient(to right, #0145b8, #00e5e0, #00f25e); */
  background: linear-gradient(
    90deg,
    rgba(28, 5, 163, 1) 0%,
    rgba(0, 209, 255, 1) 50%,
    rgba(91, 162, 178, 1) 100%
  );
  width: 100%;
  height: 8px;
  display: block;
  position: absolute;
  border-radius: 4px;
  top: 50%;
  transform: translateY(-50%);
  transition: height 100ms ease;
}

/* .range-wrap:hover::before {
  height: 10px;
} */

/*  Hide Original */
.range {
  width: 100%;
  cursor: pointer;
  opacity: 0;
}

.bubble {
  font-size: 12px;
  background: white;
  border: 3px solid #cbd2da;
  position: absolute;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* Remove pointer events on Bubble so user can click on the actual thumb beaneath it!  */
  color: transparent;
  display: grid;
  place-items: center; /*  Place the number on the center  */
  font-weight: bold;
  transition: color 100ms ease, transform 100ms ease;
  user-select: none; /*  Prevent Accidentally highlighting the number while sliding the cursor  */
}

.range-wrap .bubble {
  color: black;
  transform: translateY(-50%) scale(1.5);
  padding: 0.1em;
}

.button-design {
  border-radius: 10px;
  background: #5ba2b2;
  height: 30px;
  border: 0;
  width: 70px;
  margin: 10px auto;
}
/* .slider {
  margin: auto;
  min-width: 100px;
  min-width: 300px;
} */
.slider {
  position: relative;
  width: 100%;
  margin: auto;
  padding: 20px 0; /*  Giving more room for hover  */
  min-width: 100px;
  max-width: 300px;
}
#partone {
  display: block;
}
#parttwo {
  display: none;
}
#finalsummary {
  display: none;
}
</style>
