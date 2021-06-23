<template>
  <footer class="footer-mv">
    <div class="container container-footer">
      <div class="brand-content">
        <a href="/" class="logo">
          <span class="txt-bold logo-top">World</span>
          <span class="txt-reg logo-bottom">Movies</span>
        </a>
        <p class="txt-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          fuga nobis ullam eveniet et. Explicabo, nihil! Voluptate
        </p>
      </div>
      <div class="content-links">
        <div class="link-lists">
          <p class="title-link">Quick Access</p>
          <ul class="list-contact">
            <li class="contact-item">
              <router-link to="#">Most Watched</router-link>
            </li>
            <li class="contact-item">
              <router-link to="#">Last Movies</router-link>
            </li>
            <li class="contact-item">
              <router-link to="#">Old Movies</router-link>
            </li>
            <li class="contact-item">
              <router-link to="#">Best 10 Movie</router-link>
            </li>
          </ul>
        </div>
        <div class="link-lists">
          <p class="title-link">Best Site</p>
          <ul class="list-contact">
            <li class="contact-item">
              <router-link to="#">IMDB</router-link>
            </li>
            <li class="contact-item">
              <router-link to="#">Netflix</router-link>
            </li>
            <li class="contact-item">
              <router-link to="#">Egybest</router-link>
            </li>
            <li class="contact-item">
              <router-link to="#">Fake Movie</router-link>
            </li>
          </ul>
        </div>
        <div class="link-lists">
          <p class="title-link">Contact us</p>
          <ul class="list-contact">
            <li class="contact-item">
              <router-link to="#">@World Movie</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright">created by Sami Frontend Developer {{ new Date().getFullYear() }}</div>
  </footer>
</template>

<script>
export default {
  name: "footer-component",
};
</script>

<style lang="scss" scoped>
@import "@/scss/abstract/variable.scss";

.logo {
  font-size: 30px;
}

.footer-mv {
  background-color: $thirdColor;
}

.container-footer {
  display: flex;
  padding: 2rem 0 ;
}

.brand-content {
  width: 260px;
  .txt-sm {
    color: $txt-second;
    margin: 1rem 0;
    text-align: left;
  }
}

.content-links {
  padding-left: 3rem;
  margin-left: 2rem;
  border-left: 1px solid rgb(44, 44, 44);
  display: flex;
  justify-content: space-between;
  width: 45%;
}

.copyright {
  text-align: center;
  background-color: white;
  color: black;
  font-size: 13px;
  padding: 10px;
}

.link-lists {
  display: inline-block;
  .title-link {
    font-size: $para - 1;
    font-weight: 400;
    margin-bottom: 10px;
  }

  .list-contact {
    .contact-item {
      margin-bottom: 10px;
      a {
        color: $txt-second;
        font-weight: 300;
        font-size: $para - 2;
        transition: color 0.2s ease;
        letter-spacing: 0.5px;
        &:hover {
          color: white;
        }
      }
    }
  }
}
</style>