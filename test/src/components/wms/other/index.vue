<template>
<div>
  <ButtonCounter></ButtonCounter>
  <ButtonCounter></ButtonCounter>
  <ButtonCounter></ButtonCounter>
  <ButtonCounter></ButtonCounter>
  <ButtonCounter></ButtonCounter>
  <ButtonCounter></ButtonCounter>
  <!-- <blog-post title="My journey with Vue"></blog-post>
  <blog-post title="Blogging with Vue"></blog-post>
  <blog-post title="Why Vue is so fun"></blog-post> -->
  <ul>
    <li :style="{fontSize:postFontSize + 'em'}">
      <!-- <BlogPost v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title" v-bind:content="post.content"></BlogPost> -->
      <!-- <BlogPost v-for="post in posts" v-bind:key="post.id" v-bind:post="post" v-on:enlarge-text="postFontSize += $event"></BlogPost> -->
      <!-- <BlogPost v-for="post in posts" v-bind:key="post.id" v-bind:post="post" v-on:enlarge-text="onEnlargeText"></BlogPost> -->
    </li>
  </ul>
  <Prop v-for="post in posts" v-bind:title="post.title + ' by ' + post.author.name" v-bind:likes="post.likes" v-bind:is-published="post.isPUblished" v-bind:comment-ids="post.commentIds"></Prop>
</div>
</template>

<script>
import ButtonCounter from './ButtonCounter'
import BlogPost from './BlogPost'
import CustomInput from './CustomInput'
import Prop from './prop'
import Test from './test'

export default {
  components: {
    ButtonCounter,
    BlogPost,
    CustomInput,
    Prop
  },
  created(){
    this.init()
  },
  mounted(){

  },
  data() {
    return {
      posts:[]
    }
  },
  methods: {
    init(){
      this.getList()
    },
    getList(){

    },
    // test: ()=>{
    //
    // },
    onEnlargeText(enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
}
</script>

<style>

</style>
