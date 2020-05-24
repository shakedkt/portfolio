<template>
  <section class="porject-section-wrapper" id="portfolio"> 
    <h2>&lt; MY RECENT PROJECTS &gt;</h2>

    <div class="projects-container">
  <a href="https://shakedkt.github.io/appsus/#/" target="_blank">
      <div class="image-container">
        <img src="../images/appsus.png" class="image" />
        <div class="middle">
          <h4>APPSUS</h4>
          <p>Single page application with a set of mini apps: misterEmail, missKeep, missBooks</p>

          <div class="tags">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>VUE</span>
          </div>
        </div>
      </div>
      </a>
  
      <a href="https://shakedinsta.herokuapp.com/#/" target="_blank">
        <div class="image-container">
          <img src="../images/instagram.jpg" class="image" />
          <div class="middle">
            <h4>Instagram clone</h4>
            <p>My finals project, End to End Instagram clone from scratch using the latest technologies</p>

            <div id="instagram" class="tags">
              <span>HTML5</span>
              <span>SASS</span>
              <span>ES6</span>
              <span>VUE</span>
              <span>VUEX</span>
              <span>NODE.JS</span>
              <span>MONGODB</span>
            </div>
          </div>
        </div>
      </a>

  <a href="https://shakedkt.github.io/Mister-BITCoin-react-new/" target="_blank">
      <div class="image-container">
        <img src="../images/misterbitcoin.png" class="image" />
        <div class="middle">
          <h4>MISTER BITCOIN</h4>
          <p>React project, digital bitcoin wallet, transfer bitcoin to contacts</p>

          <div class="tags">
            <span>HTML5</span>
            <span>SASS</span>
            <span>REACT</span>
            <span>REDUX</span>
            <span>ES6</span>
          </div>
        </div>
      </div>
      </a>


<a href="https://shakedkt.github.io/my-team/" target="_blank" class="myteam">
      <div class="image-container">
        <img src="../images/myteam.jpg" class="image" />
        <div class="middle">
          <h4>MYTEAM</h4>
          <p>small layout project using react</p>

          <div class="tags">
            <span>HTML5</span>
            <span>SASS</span>
            <span>REACT</span>
            <span>ES6</span>
          </div>
        </div>
      </div>
      </a>
      <a href="https://shakedkt.github.io/mine-sweeper-2020/" target="_blank" class="minesweeper">
      <div class="image-container">
        <img src="../images/minesweeper.png" class="image" />
        <div class="middle">
          <h4>MINE SWEEPER</h4>
          <p>Mine sweeper with few extra features including extra lives and hints, using vanila JavaScript</p>

          <div class="tags">
            <span>HTML5</span>
            <span>CSS3</span>
            <span>ES6</span>
          </div>
        </div>
      </div>
      </a>
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

<style>
</style>