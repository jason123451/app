<template>
     <div id="businessClassify">
<el-form :inline="true" :model="formInline" class="demo-form-inline">
  <div class="date">
    <el-date-picker
      v-model="value1"
      type="daterange"
      align="left"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
  <el-form-item :label="formInline.busID">
    <el-input v-model="formInline.busID" placeholder=''></el-input>
  </el-form-item>
  <el-form-item label="查询方式">
    <el-select v-model="formInline.busID" placeholder="查询方式">
      <el-option label="商品名称" value="商品名称"></el-option>
      <el-option label="商品ID" value="商品ID"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onQuery">查询</el-button>
  </el-form-item>
    <el-form-item>
    <el-button type="primary" @click="onAdd">新增</el-button>
  </el-form-item>
    <el-form-item>
    <el-button type="danger" @click="onRemove">批量删除</el-button>
  </el-form-item>
</el-form>
<el-table
    :data="data"
    stripe
    border
    style="width: 100%">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      prop="businessID"
      label="商品ID">
    </el-table-column>
    <el-table-column
      prop="createDate"
      label="创建日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="category"
      label="商品类别"
      width="180">
    </el-table-column>
    <el-table-column
      prop="businessName"
      label="商品名称">
    </el-table-column>

    <el-table-column
      prop="price"
      label="价格(元)">
    </el-table-column>
    <el-table-column
      prop="operation"
      label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
        <div class="block">

            <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
        </div>
     </div>
</template>
<script>
import  '../mock/index';
import axios from 'axios'
export default {
        data() {
      return {
        formInline: {
          busName: '',
          busID: ''
        },

         tableData: [{
          createDate: '2016-05-02',
          businessID: 0,
          businessName: '上海市普陀区金沙江路 1518 弄',
          price:100,
          category:'女装'
        }, {
          createDate: '2016-05-04',
          businessID: 1,
          businessName: '上海市普陀区金沙江路 1517 弄',
          price:100,
          category:'女装'
        }, {
          createDate: '2016-05-01',
          businessID: 2,
          businessName: '上海市普陀区金沙江路 1519 弄',
          price:100,
          category:'女装'
        }, {
          createDate: '2016-05-03',
          businessID: 3,
          businessName: '上海市普陀区金沙江路 1516 弄',
          price:100,
          category:'女装'
        }],
        value1:'',
        mockdata:{},
        data:[]
      }
    },
    created () {
      axios.post('/businessClassify').then(response => {
        if(response.data) {
           console.log(response.data);

          //  this.mockdata = response.data
          // this.data = response.data;
        }
      })
    },
    methods: {
      //查询
      onQuery() {

        // this.tableData = data
        // console.log(data);
        
      },
      // 新增
      onAdd() {

      },
      onRemove(){}
    }
}
</script>
<style scoped>
    .block {
        text-align: right;
        margin-top: 20px;
    }

    .date {
        margin-bottom: 10px;
    }
</style>s