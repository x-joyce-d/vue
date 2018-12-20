<template lang="html">
  <div class="">
    <i>{{ title }}</i>
    <h3>{{likes}}</h3>
    <h3>{{isPublished}}</h3>
  </div>
</template>

<script>
export default {
   props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
}
</script>

<style lang="css">
</style>
