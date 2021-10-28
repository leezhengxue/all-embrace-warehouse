<template>
  <div>
    <header>
      <div class="header-wrapper">
        <div class="logo">
          <a>LOGO</a>
        </div>
        <nav>
          <ul>
            <li><a>About Us</a></li>
            <li><a>Pricing</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <div class="hero-section">
      <h1>HERO CONTENT</h1>
      <div class="scrolldown-container">
        <div class="chevron"></div>
        <div class="chevron"></div>
        <div class="chevron"></div>

        <span class="scrolldown-text">Scroll down</span>
      </div>
    </div>
    <div class="section-1">
      <div class="section-1-wrapper">
        <h2>Content Area</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>

    <div class="section-2">
      <div class="section-2-wrapper">
        <h2>Content Area</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
.header-wrapper {
  width: 100%;
  margin: 0 auto;
}
header {
  height: 100px;
  background: grey;
  width: 100%;
  position: fixed;
  z-index: 99;
}
.logo {
  float: left;
  line-height: 100px;
  margin-left: 50px;
}
.logo a {
  text-decoration: none;
  font-size: 30px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  letter-spacing: 5px;
}
nav {
  float: right;
  line-height: 100px;
}
nav ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  margin-right: 30px;
}
nav ul li a {
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  letter-spacing: 2px;
  font-size: 10px;
  margin: 0 20px;
  color: #fff;
}
nav ul li a:hover {
  color: red;
  cursor: pointer;
}
.hero-section {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 100px;
  background-color: pink;
}
.hero-section h1 {
  padding-top: 8%;
  font-size: 50px;
  font-family: "Roboto", sans-serif;
  color: #fff;
}
.scrolldown-container {
  position: relative;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  margin-top: 40vh;
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
  min-height: 80vh;
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
  width: 100%;
  margin: 0 auto;
}
.section-2 {
  width: 100%;
  position: relative;
  top: 100vh;
  background: #fff;
  min-height: 80vh;
  width: 100%;
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
}
.section-2-wrapper {
  width: 100%;
  margin: 0 auto;
}
</style>
