<template>
  <div id="contact">
    <h1>聯繫</h1>
    <div id="link_gmail">
      <a href="mailto: zed2786328@gmail.com" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon icon="envelope-square" size="3x" />
        <p>zed2786328@gmail.com</p>
      </a>
    </div>

    <div id="link">
      <a
        href="https://www.facebook.com/profile.php?id=100001001825337"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'facebook-square']" size="3x" />
      </a>
      <a href="https://twitter.com/throuz1" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon :icon="['fab', 'twitter-square']" size="3x" />
      </a>
      <a href="https://github.com/throuz" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon :icon="['fab', 'github-square']" size="3x" />
      </a>
      <a
        href="https://www.linkedin.com/in/%E5%8F%A1%E9%99%9E-%E5%BE%90-059b041aa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'linkedin']" size="3x" />
      </a>
      <a
        href="https://stackoverflow.com/users/13624245/throuz?tab=profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <font-awesome-icon :icon="['fab', 'stack-overflow']" size="3x" />
      </a>
    </div>
    <div id="link_pages">
      <router-link to="/">關於我</router-link>
      <router-link to="/portfolio">看作品</router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#contact {
  padding: 30px 0;
  h1 {
    text-align: center;
    font-size: 30px;
  }
  #link {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    a {
      color: black;
      padding: 0 10px;
      transition-duration: 0.3s;
      &:hover {
        color: #42b983;
        font-size: 20px;
      }
    }
  }
  #link_gmail {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    a {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      color: black;
      // padding: 0 20px;
      transition-duration: 0.3s;
      text-decoration: none;
      &:hover {
        color: #42b983;
        font-size: 20px;
      }
      p {
        padding-left: 10px;
        font-size: 20px;
        margin: 0;
      }
    }
  }
  #link_pages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px 0;
    a {
      color: #fff;
      text-decoration: none;
      padding: 10px 30px;
      background-color: #4a8a98;
      font-size: 20px;
      margin: 0 20px;
      transition-duration: 0.3s;
      &:hover {
        background-color: #929cbd;
      }
    }
  }
}
</style>