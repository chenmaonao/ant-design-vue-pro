const dataList = {
  gun: [
    { userName: '610502199803079774', passWord: '079774', describe: '省级管理-省厅' },
    { userName: '120101199003071219', passWord: '071219', describe: '省级警保-省厅' },
    { userName: '50221019851112071X', passWord: '12071X', describe: '纪检督察-省厅' },
    { userName: '150202200103073636', passWord: '073636', describe: '单位政工-省厅' },
    { userName: '230102199003071552', passWord: '071552', describe: '单位领导-省厅' },
    { userName: '350102199003078751', passWord: '078751', describe: '治安部门领导-省厅' },
    { userName: '11010120010307439X', passWord: '07439X', describe: '内勤人员-省厅' },
    { userName: '21010219900807365X', passWord: '07365X', describe: '部门政工-省厅jmx部门' },
    { userName: '320102199003071941', passWord: '071941', describe: '部门管理-省厅jmx部门' },
    { userName: '120101199003075316', passWord: '075316', describe: '部门主要领导-省厅jmx部门' },
    { userName: '110101199003073263', passWord: '073263', describe: '单元领导-省厅jmx部门' },
    { userName: '110101199003073554', passWord: '073554', describe: '枪管员-省厅jmx部门' },
    { userName: '320102199003070746', passWord: '070746', describe: '仓管员-省厅治安&jmx部门' },
    { userName: '23012119821112019X', passWord: '12019X', describe: '公安民警-省厅jmx部门' },
    { userName: '210102199008075639', passWord: '075639', describe: '市级管理-佛山' },
    { userName: '320102199003078545', passWord: '078545', describe: '市级警保-佛山' },
    { userName: '320102199003077403', passWord: '077403', describe: '单位政工-佛山' },
    { userName: '460105198203071351', passWord: '071351', describe: '单位领导-佛山' },
    { userName: '460105198203079353', passWord: '079353', describe: '治安部门领导-佛山' },
    { userName: '460105198203074093', passWord: '074093', describe: '内勤人员-佛山' },
    { userName: '460105198203079433', passWord: '079433', describe: '部门政工-佛山特警' },
    { userName: '460105198203075758', passWord: '075758', describe: '部门管理-佛山特警' },
    { userName: '460105198203072872', passWord: '072872', describe: '部门主要领导-佛山特警' },
    { userName: '460105198203077075', passWord: '077075', describe: '单元领导-佛山特警' },
    { userName: '460105198203072397', passWord: '072397', describe: '枪管员-佛山特警' },
    { userName: '210102199008072710', passWord: '072710', describe: '仓管员-治安&特警部门' },
    { userName: '460105198203071677', passWord: '071677', describe: '公安民警-佛山特警' },
    { userName: '210102199008072171', passWord: '072171', describe: '县级管理-南海' },
    { userName: '460105198203070391', passWord: '070391', describe: '县级警保-南海' },
    { userName: '460105198203072119', passWord: '072119', describe: '单位政工-南海' },
    { userName: '460105198203072514', passWord: '072514', describe: '单位领导-南海' },
    { userName: '46010519820307267X', passWord: '07267X', describe: '治安部门领导-南海' },
    { userName: '110101198508142530', passWord: '142530', describe: '部门政工-南海九江派出所' },
    { userName: '210102199008076017', passWord: '076017', describe: '部门管理-南海九江派出所' },
    { userName: '110101199006241234', passWord: '241234', describe: '部门主要领导-南海九江派出所' },
    { userName: '110101199007161535', passWord: '161535', describe: '单元领导-南海九江派出所' },
    { userName: '46010519820307339X', passWord: '07339X', describe: '枪管员-南海九江派出所' },
    { userName: '460105198203079732', passWord: '079732', describe: '仓管员-治安&九江派出所' },
    { userName: '110101198508147454', passWord: '147454', describe: '公安民警-南海九江派出所' }
  ],

  gunLocal: [
    { userName: '610502199803079774', passWord: '079774', describe: '省级管理-省厅' },
    { userName: '120101199003071219', passWord: '071219', describe: '省级警保-省厅' },
    { userName: '50221019851112071X', passWord: '12071X', describe: '纪检督察-省厅' },
    { userName: '150202200103073636', passWord: '073636', describe: '单位政工-省厅' },
    { userName: '230102199003071552', passWord: '071552', describe: '单位领导-省厅' },
    { userName: '350102199003078751', passWord: '078751', describe: '治安部门领导-省厅' },
    { userName: '11010120010307439X', passWord: '07439X', describe: '内勤人员-省厅' },
    { userName: '21010219900807365X', passWord: '07365X', describe: '部门政工-省厅jmx部门' },
    { userName: '320102199003071941', passWord: '071941', describe: '部门管理-省厅jmx部门' },
    { userName: '120101199003075316', passWord: '075316', describe: '部门主要领导-省厅jmx部门' },
    { userName: '110101199003073263', passWord: '073263', describe: '单元领导-省厅jmx部门' },
    { userName: '110101199003073554', passWord: '073554', describe: '枪管员-省厅jmx部门' },
    { userName: '320102199003070746', passWord: '070746', describe: '仓管员-省厅治安&jmx部门' },
    { userName: '23012119821112019X', passWord: '12019X', describe: '公安民警-省厅jmx部门' },
    { userName: '210102199008075639', passWord: '075639', describe: '市级管理-佛山' },
    { userName: '320102199003078545', passWord: '078545', describe: '市级警保-佛山' },
    { userName: '320102199003077403', passWord: '077403', describe: '单位政工-佛山' },
    { userName: '460105198203071351', passWord: '071351', describe: '单位领导-佛山' },
    { userName: '460105198203079353', passWord: '079353', describe: '治安部门领导-佛山' },
    { userName: '460105198203074093', passWord: '074093', describe: '内勤人员-佛山' },
    { userName: '460105198203079433', passWord: '079433', describe: '部门政工-佛山特警' },
    { userName: '460105198203075758', passWord: '075758', describe: '部门管理-佛山特警' },
    { userName: '460105198203072872', passWord: '072872', describe: '部门主要领导-佛山特警' },
    { userName: '460105198203077075', passWord: '077075', describe: '单元领导-佛山特警' },
    { userName: '460105198203072397', passWord: '072397', describe: '枪管员-佛山特警' },
    { userName: '210102199008072710', passWord: '072710', describe: '仓管员-治安&特警部门' },
    { userName: '460105198203071677', passWord: '071677', describe: '公安民警-佛山特警' },
    { userName: '210102199008072171', passWord: '072171', describe: '县级管理-南海' },
    { userName: '460105198203070391', passWord: '070391', describe: '县级警保-南海' },
    { userName: '460105198203072119', passWord: '072119', describe: '单位政工-南海' },
    { userName: '460105198203072514', passWord: '072514', describe: '单位领导-南海' },
    { userName: '46010519820307267X', passWord: '07267X', describe: '治安部门领导-南海' },
    { userName: '110101198508142530', passWord: '142530', describe: '部门政工-南海九江派出所' },
    { userName: '210102199008076017', passWord: '076017', describe: '部门管理-南海九江派出所' },
    { userName: '110101199006241234', passWord: '241234', describe: '部门主要领导-南海九江派出所' },
    { userName: '110101199007161535', passWord: '161535', describe: '单元领导-南海九江派出所' },
    { userName: '46010519820307339X', passWord: '07339X', describe: '枪管员-南海九江派出所' },
    { userName: '460105198203079732', passWord: '079732', describe: '仓管员-治安&九江派出所' },
    { userName: '110101198508147454', passWord: '147454', describe: '公安民警-南海九江派出所' }
  ]
}

const sysData = [
  {
    id: 'gun',
    href: 'http://gun-admin.d3.yilisafe.com/#/user/login',
    describe: '枪管开发环境'
  },
  {
    id: 'gunLocal',
    href: 'http://localhost:8000/#/user/login',
    describe: '枪管本地开发环境'
  }
]

export { dataList, sysData }