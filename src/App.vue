<template>
    <div id="app">
        <div class="container">
            <router-view></router-view>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-4">
                    <router-view name="ordering-guide"></router-view>
                </div>
                <div class="col-sm-12 col-md-4">
                    <router-view name="delivery"></router-view>
                </div>
                <div class="col-sm-12 col-md-4">
                    <router-view name="history"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  components: {
  },
  created() {
  }
}
</script>

<style>
    header, footer {
        background: #ECEEEF;
        padding: 40px 0;
        font-size: 1.2em;
    }
    .card {
        background: #69AB64;
        margin: 20px 0;
        border-radius: 0;
    }

</style>


