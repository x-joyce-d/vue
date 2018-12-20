<template>
<div class="la-optioned">
  <!-- 已选条件：普通搜索/高级搜索 合并显示 -->
  <div class="optioned main" v-if="Object.keys(storeState.putong).length || storeState.gaoji.words">
    <span class="label iconfont">&#xe615;</span>
    <!-- 普通搜索 -->
    <span v-for="(option, key, index) in storeState.putong" :key="index" class="show-options pt-option">
<span class="option-logic">AND</span>
    <span class="btn option">
<span class="tj">{{resetMainPinyin(key)+' : '+option}}</span>
    <span class="el-icon-close" @click="handlePutongCloseClick(key)"></span>
    </span>
    </span>
    <!-- 高级搜索 -->
    <span v-if="option.value instanceof String ? Boolean(option.value) : Boolean(option.value.length)" v-for="(option, index) in storeState.conditions" :key="index" class="show-options gj-option">
<span class="option-logic">{{advancedOptionedLogic(option.logic)}}</span>
    <span class="btn option">
<span class="tj">{{resetMainPinyin(option.name, option.accurate)+' : '+option.value}}</span>
    <span class="el-icon-close" @click="handleGaojiCloseClick(option)"></span>
    </span>
    </span>
  </div>
  <!-- 条件筛选 -->
  <div class="optioned screen" v-if="storeState.shaixuan.filter_condition">
    <span class="label iconfont">&#xe636;</span>
    <span class="btn option" v-for="(option, index) in getShaixuan(storeState.shaixuan.filter_condition)" :key="index">
<span class="tj">{{resetScreenPinyin(option.name)+' : '+option.value}}</span>
    <span class="el-icon-close" @click="handleShaixuanCloseClick(option.name)"></span>
    </span>
  </div>
  <!-- 保存 & 清空 -->
  <div class="wrap-add-del" v-if="Object.keys(storeState.putong).length || storeState.gaoji.words || storeState.shaixuan.filter_condition">
    <span class="btn save-options"><i class="el-icon-star-off pr5"></i> 保存</span>
    <span class="btn clear-options" @click="handleAllCloseClick"><i class="el-icon-delete pr5"></i> 清空</span>
  </div>
</div>
</template>

<script>
import Qs from 'qs'
import Store from '@/store'
import { mapState,mapGetters } from 'vuex'
export default {
name:"optioned",
data () {
return {
	// 点击 × 符号：处理普通搜索条件的单个清除
	handlePutongCloseClick (option) {
	console.log(option)
	this.storeState.putong = Qs.stringify(_.omit(this.storeState.putong, option))
	_.remove(this.storeState.query, n => {
	let bol = option.indexOf(n.name) !== -1 // 兼顾name和name_eq的特殊情况，用这种判断
	return bol
	})
	Store.dispatch('FdaDrug/nomalSearch')

	this.$emit("clearTheLeft", option)
	},
	// 点击 × 符号：处理高级搜索条件的单个清除
	handleGaojiCloseClick (option) {
	// console.log(option)
	_.remove(this.storeState.conditions, n => {
	return n.name == option.name && n.value == option.value
	})
	console.log(this.route)
	Store.dispatch('FdaDrug/nomalSearch')
	},
	// 点击 × 符号：处理筛选条件的单个清除
	handleShaixuanCloseClick (option) {
	// console.log(option)
	_.set(Store.state.FdaDrug.groups, option, [])
	console.log(this.route)
	Store.dispatch('FdaDrug/nomalSearch')
	},
