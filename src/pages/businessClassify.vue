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
  <el-form-item>
    <el-input v-model="formInline.busID" placeholder='输入查询的内容'></el-input>
  </el-form-item>
  <!-- <el-form-item label="查询方式">
    <el-select v-model="formInline.busID" placeholder="查询方式">
      <el-option label="商品名称" value="商品名称"></el-option>
      <el-option label="商品ID" value="商品ID"></el-option>
    </el-select>
  </el-form-item> -->
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
    :data="tableData"
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
            layout="total, sizes, prev, pager, next, jumper"
            @size-change='handleSizeChange'
            @current-change="handleCurrentChange"
            :current-page="pageIndex"
            :page-size="pageSize"
            :page-sizes="[10,20,50,100]"
            :total="totalPage">
            </el-pagination>

        </div>
        <!-- 弹框 -->
              <el-dialog
              title="新增"
              :visible.sync="dialogVisible"
              width="60%"
              >
              <!-- 弹框主体 内容部分 -->

              

                <el-form ref="form" :model="form" label-width="80px">

                 <el-form-item label="商品类别">
                  <el-select v-model="form.category" placeholder="请选择商品类别">
                    <el-option label="鞋子" value="鞋子"></el-option>
                    <el-option label="衣服" value="衣服"></el-option>
                  </el-select>
                </el-form-item>    

                <el-form-item label="商品名称">
                  <el-input v-model="form.businessName"></el-input>
                </el-form-item>
           

            <!-- <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item> -->

            <el-form-item label="价格">
              <el-input v-model="form.price"></el-input>
            </el-form-item>
          <!-- <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item> -->
    <!-- <el-form-item label="特殊资源">
      <el-radio-group v-model="form.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item> -->
    <!-- <el-form-item label="活动形式">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item> -->
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>


              <span slot="footer" class="dialog-footer">
                  <el-button @click="dialogVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
              </el-dialog>
     </div>
</template>
<script>
import  '../mock/index';
import axios from 'axios'
import dialog from '../components/add-or-updata-dialog'
export default {
        data() {
      return {
        formInline: {
          busName: '',
          busID: ''
        },
         tableData: [],
        value1:'',
       dialogVisible:false,

       form: {
          businessNamename: '',
          category: '',
          price:'',
          // resource: '',
          // desc: ''
          createDate:''
        },

        pageIndex:1,
        pageSize:10,
        totalPage:0


      }
    },
    created () {
      this.getDataList()
    },
    methods: {
      //查询
      onQuery() {

        // this.tableData = data
        // console.log(data);


      },
      // 新增
      onAdd() {

       this.dialogVisible = true

      },
      onRemove(){},
      // 创建
      onSubmit() {
        console.log('submit!');
        this.form.createDate = new Date().toDateString();
        this.tableData.push(this.form)
      },

      //获取数据 

      getDataList() {
                axios.post('/businessClassify').then(response => {
        if(response.data) {
  
           console.log(response.data.tableData)

          self.tableData = response.data.tableData;

          console.log(self.tableData);
         this.tableData = self.tableData
         this.totalPage = response.data.tableData.length;
         console.log('Totalpage===================',this.totalPage);
        }
      })
        
      console.log(' this.tableData======',this.tableData);
      },

        // 分页
       handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.pageSize=val;
            this.pageIndex=1;
            this.getDataList()

          },
          handleCurrentChange(val) {
            this.pageIndex=val;
            this.getDataList()
            console.log(`当前页: ${val}`);
          }
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