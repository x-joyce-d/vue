<template>
  <div class="blog-post">
    <h3>{{post.title}}</h3>
    <button v-on:click="$emit('enlarge-text',0.1)">enlarge</button>
     <div v-html="post.content"></div>
  </div>
</template>

<script>
export default {
  // props:['title','content'],
  props:['post'],
}

</script>


<style lang="stylus">

</style>
