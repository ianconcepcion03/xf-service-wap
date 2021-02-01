<template>
  <div class="vip-page-container">
    <div class="vip-header">
      <div class="container" >
        <div class="vip-menu">
          <ul>
            <li><router-link to="/mine/vip">VIP特权</router-link></li>
            <li><router-link to="/mine/vip-details">VIP详情</router-link></li>
          </ul>
        </div>

      </div>
    </div>
    <div class="vip-content">
      <div class="container">

        <el-table :data="tableData" border style="width: 100%">
          <el-table-column
            prop="等级"
            label="等级">
          </el-table-column>
          <el-table-column
            prop="升级要求"
            label="升级要求">
          </el-table-column>
          <el-table-column
            prop="保级要求"
            label="保级要求">
          </el-table-column>
          <el-table-column
            prop="生日礼金"
            label="生日礼金">
          </el-table-column>
          <el-table-column
            prop="每日红包"
            label="每日红包">
          </el-table-column>
          <el-table-column
            prop="日提款额度"
            label="日提款额度">
          </el-table-column>
        </el-table>

      </div>
    </div>
    <Navigation></Navigation>
  </div>
</template>

<script>
var Mock = require('mockjs');
const Random = Mock.Random

import Navigation from '../../components/Navigation/Navigation.vue'
export default {
  name: 'VipDetails',
  components: {
    Navigation
  },
  data() {
    return {
      tableData: []
    }
  },
  created() {
      var creatTableData = Mock.mock({
        'data|10': [
          {
            '等级|+1': 1 ,
            '升级要求': '有一笔存款',
            '保级要求': '无',
            '生日礼金': '无',
            '每日红包': '无',
            '日提款额度': '10万'
          }
        ]
      })
      console.log(creatTableData)
      this.tableData = creatTableData.data
    }
}
</script>

<style rel="stylesheet/scss" scoped lang="scss">
  .vip-menu {
    display: block;
    margin: .2rem 0 0 0;
  }
  
  
</style>
