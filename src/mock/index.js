import Mock from 'mockjs'


 Mock.mock('/businessClassify',{
    
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'tableData|100': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      'businessID': 1,
      'businessName|1' :['adidas球鞋','nike篮球鞋','newblance跑鞋'],
      'price|1-1000': 10,
      'category|1': ['鞋子','衣服'],
      'createDate':Mock.Random.now('day', 'yyyy-MM-dd'),
  }]


})


