<template>
  <section class="porject-section-wrapper" id="portfolio">
    <h2 v-scrollAnimation>&lt; MY RECENT PROJECTS &gt;</h2>

    <div class="projects-container" v-scrollAnimation>
      <div class="image-container">
        <img src="../images/instagram.jpg" class="image" />
        <div class="middle">
          <h4>Instagram clone</h4>
          <p>My finals project. A fully working end-to-end Instagram clone</p>
          <div id="instagram" class="tags">
            <span>SASS</span>
            <span>ES6</span>
            <span>VUEX</span>
            <span>NODE.JS</span>
            <span>MONGODB</span>
          </div>

          <a href="https://shakedinsta.herokuapp.com/#/" target="_blank" class="link-btn">
            <button>visit website</button>
          </a>
        </div>
      </div>

      <div class="image-container">
        <img src="../images/clothes-and-brands.jpg" class="image" />
        <div class="middle">
          <h4>Clothes store market</h4>
          <p>End to end website for buying clothes and other wearable items. using React Node.js and </p>
          <div id="instagram" class="tags">
            <span>SASS</span>
            <span>ES6</span>
            <span>React</span>
            <span>NODE.JS</span>
            <span>MONGODB</span>
          </div>

          <a href="https://shakedinsta.herokuapp.com/#/" target="_blank" class="link-btn">
            <button>visit website</button>
          </a>
        </div>
      </div>


  <div class="image-container">
        <img src="../images/misterbitcoin.png" class="image" />
        <div class="middle">
          <h4>MISTER BITCOIN</h4>
          <p>React project, imitating a digital bitcoin wallet, including transfers, contacts, price graphs and more</p>

          <div class="tags">
            <span>HTML5</span>
            <span>SASS</span>
            <span>REACT</span>
            <span>REDUX</span>
            <span>ES6</span>
          </div>

          <a
            href="https://shakedkt.github.io/mister-bitcoin-new/"
            target="_blank"
            class="link-btn"
          >
            <button>visit website</button>
          </a>
        </div>
      </div>


      <div class="image-container">
        <img src="../images/appsus.png" class="image" />
        <div class="middle">
          <h4>APPSUS</h4>
          <p>Single page application with a set of mini apps: in-app email, notes & book e-shop</p>

          <div class="tags">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>VUE</span>
          </div>

          <a href="https://shakedkt.github.io/appsus/#/" target="_blank" class="link-btn">
            <button>visit website</button>
          </a>
        </div>
      </div>

      <div class="image-container">
        <img src="../images/memegen.png" class="image" />
        <div class="middle">
          <h4>MEME GENERATOR</h4>
          <p>Meme generator site using vanilla JavaScript, HTML & CSS</p>

          <div class="tags">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>ES6</span>
          </div>

          <a
            href="https://shakedkt.github.io/proj2-meme-generator/#social"
            target="_blank"
            class="link-btn"
          >
            <button>visit website</button>
          </a>
        </div>
      </div>

      <!-- class="myteam"> -->
      <!-- <div class="image-container">
        <img src="../images/myteam.jpg" class="image" />
        <div class="middle">
          <h4>MYTEAM</h4>
          <p>Small mockup using React</p>

          <div class="tags">
            <span>HTML5</span>
            <span>SASS</span>
            <span>REACT</span>
            <span>ES6</span>
          </div>

          <a href="https://shakedkt.github.io/my-team/" target="_blank" class="link-btn">
            <button>visit website</button>
          </a>
        </div>
      </div> -->

      <!-- class="minesweeper"> -->
      <div class="image-container">
        <img src="../images/minesweeper.png" class="image" />
        <div class="middle">
          <h4>MINE SWEEPER</h4>
          <p>Mine sweeper using only vanilla JS, with a few extra features including extra lives and hints</p>

          <div class="tags">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>ES6</span>
          </div>

          <a href="https://shakedkt.github.io/mine-sweeper-2020/" target="_blank" class="link-btn">
            <button>visit website</button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    lunchWebsite(link) {
      console.log("link", link);

      window.open(link, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
.before-enter {
  opacity: 0.2;
  transform: translateY(100px);
  transition: all 1s ease-in-out;
}

.enter {
  opacity: 1;
  transform: translateY(0px);
}
</style>
