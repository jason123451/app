<template>
  <div class="container">
    <button @click="reduce">-</button>
    {{count}}
    <button @click="add">+</button>
    <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

    <el-dialog title="信息" :visible.sync="dialogFormVisible">
    <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="职业" :label-width="formLabelWidth">
        <el-input v-model="job" autocomplete="off"></el-input>
        <!-- <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
        </el-select> -->
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px'
    };
  },

  computed: {
    // count () {
    //     return this.$store.state.count
    // },
    // msg () {
    //     return this.$store.state.msg
    // },
    // job () {
    //     return this.$store.state.job
    // }

    ...mapState(["count", "name",'job'])
  },
  methods: {
    // add() {
    //     this.$store.commit('add')
    // },
    // reduce() {
    //     this.$store.commit('reduce')
    // }
    // ...mapMutations(['add','reduce'])
    ...mapActions(["add", "reduce"])
  }
};
</script>
<style scoped>
</style>