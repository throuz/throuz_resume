<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" @click.native="$scrollToTop">關於</router-link>
      <router-link to="/portfolio" @click.native="$scrollToTop">作品</router-link>
    </div>

    <router-view />

    <div id="footer">
      <div id="link_gmail">
        <a href="mailto: zed2786328@gmail.com" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon icon="envelope-square" size="2x" />
          <p>zed2786328@gmail.com</p>
        </a>
      </div>
      <div id="link">
        <a
          href="https://www.facebook.com/profile.php?id=100001001825337"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" />
        </a>
        <a href="https://twitter.com/throuz1" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'twitter-square']" size="2x" />
        </a>
        <a href="https://github.com/throuz" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'github-square']" size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/%E5%8F%A1%E9%99%9E-%E5%BE%90-059b041aa/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" size="2x" />
        </a>
        <a
          href="https://stackoverflow.com/users/13624245/throuz?tab=profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <font-awesome-icon :icon="['fab', 'stack-overflow']" size="2x" />
        </a>
      </div>
      <p>Copyright © 2020 徐叡陞 版權所有</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  #nav {
    background-color: rgb(0, 0, 0);
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 2;
    a {
      font-size: 25px;
      font-weight: bold;
      color: #ffffff;
      text-decoration: none;
      transition-duration: 0.3s;
      padding: 10px;
      margin: 10px 30px;
      &:hover {
        color: #42b983;
      }
    }
    a.router-link-exact-active {
      color: #42b983;
    }
  }
  #footer {
    background-color: #000;
    margin-top: 50px;
    padding: 20px 0;
    #link_gmail {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      a {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        color: rgb(255, 255, 255);
        // padding: 0 20px;
        transition-duration: 0.3s;
        text-decoration: none;
        &:hover {
          color: #42b983;
          // font-size: 20px;
          p {
            color: #42b983;
          }
        }
        p {
          padding-left: 10px;
          // font-size: 20px;
          margin: 0;
        }
      }
    }
    #link {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      a {
        color: rgb(255, 255, 255);
        padding: 0 10px;
        transition-duration: 0.3s;
        &:hover {
          color: #42b983;
          // font-size: 20px;
        }
      }
    }
    p {
      color: white;
      margin: 0;
      text-align: center;
      padding: 30px 0;
    }
  }
}
</style>
