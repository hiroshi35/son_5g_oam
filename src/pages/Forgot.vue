<template>
  <div class="padding-10">
    <div class="login-wrapper forgot-size">
      <div class="login-header">
        <h1>Forgot your password?</h1>
      </div>
      <div class="login-body">
        <form action="#" class="login-form">
          <div class="form-group" :class="{ 'not-empty': email}">
            <input type="text" class="form-control" name="email" id="email" v-model="email"/>
            <label for="email" class="animated-label"> Email</label>
          </div>
          <div class="submit">
            <button type="button" class="btn rounded btn-block">Reset Password</button>
          </div>
        </form>
        <div class="col-md-12">
          <div class="social-buttons center-block">
            <small>or sign in with</small>
            <div class="btn-group" role="group" aria-label="...">
              <button type="button" class="btn btn-default gplus-icon"><i class="fa fa-google-plus"
                                                                          aria-hidden="true"></i></button>
              <button type="button" class="btn btn-default fb-icon"><i class="fa fa-facebook" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 login-footer">
        <router-link :to="{ name: 'login' }" class="pull-left">
          Login
        </router-link>
        <router-link :to="{ name: 'register' }" class="pull-right">
          Create a New Account
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        email: ''
      }
    }
  }
</script>