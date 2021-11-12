<template>
  <header>
    <div class="header-wrapper">
      <div class="logo">
        <router-link to="/">
          <img class="logo" src="../assets/AE_logo_name_white.png"
        /></router-link>
      </div>

      <nav>
        <div class="burger"><a @click="openmenu">open</a></div>
        <div class="nav-links" id="navLinks">
          <ul>
            <div class="burger-close" @click="closemenu">X</div>
            <li>
              <router-link to="/">Home</router-link>
            </li>
            <li>
              <router-link to="/fulfillment"
                >Fulfillment & Warehouse</router-link
              >
            </li>
            <li>
              <router-link to="/pricing">Pricing</router-link>
            </li>
            <li>
              <router-link to="/contact">Contact Us</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "header",
  props: {},
  setup() {
    function closemenu() {
      var navLinks = document.getElementById("navLinks");
      navLinks.style.right = "-350px";
      console.log("clicked close");
    }
    function openmenu() {
      var navLinks = document.getElementById("navLinks");
      navLinks.style.right = "0px";
      console.log("clicked open");
    }
    return {
      closemenu,
      openmenu,
    };
  },
};
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
header {
  height: 100px;
  background: #598794;
  width: 100%;
  position: fixed;
  z-index: 99;
}
.logo {
  float: left;
  margin-left: 50px;
}
.logo img {
  height: 100px;
  width: auto;
}
.logo a {
  text-decoration: none;
  font-size: 30px;
  font-family: "Sofia Pro", sans-serif;
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
  position: relative;
}
nav ul li a {
  text-decoration: none;
  font-family: "Sofia Pro", sans-serif;
  font-weight: 250;
  letter-spacing: 2px;
  font-size: 20px;
  margin: 0 30px;
  color: #fff;
}
nav ul li a:hover {
  color: #ffd008;
  cursor: pointer;
}
.burger {
  margin: 0 150px 0 0;
  display: none;
}
.burger-close {
  display: none;
}
@media (max-width: 1024px) {
  nav ul li a {
    letter-spacing: 1px;
    font-size: 18px;
  }
}
@media (max-width: 768px) {
  .burger {
    display: block;
  }
  .burger-close {
    display: block;
  }
  nav ul {
    flex-direction: column;
  }
  .nav-links {
    background: #598794;
    display: block;
    position: absolute;
    right: -350px;
    top: 0;
    height: 100vh;
    width: 280px;
    /* transform: translateX(100%);
    transition: transform 0.5s ease-in; */
  }
  .nav-links ul {
    margin: 0 auto;
  }

  nav ul li a {
    letter-spacing: 1px;
    font-size: 15px;
  }
  /* .nav-active {
    transform: translateX(0%);
  } */
}
</style>
