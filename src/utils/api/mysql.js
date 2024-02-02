import axios from '../axios.js'

export default {
  getTreeLevel0(datasourceId) {
    return axios.get('/database/tree0', datasourceId)
  },
  getTreeLevel1(params) {
    return axios.get('/database/tree1', params)
  },
  getTreeLevel2Table(params) {
    return axios.get('/table/tree', params)
  },
  getTreeLevel2View(params) {
    return axios.get('/view/tree', params)
  },
  getCharacterSets(datasourceId) {
    return axios.get('/database/characterSet', datasourceId)
  },
  getCollations(params) {
    return axios.get('/database/collation', params)
  },

  /**
   * 创建数据库
   * @param data
   * @returns {Promise<unknown>}
   */
  createDatabase(data) {
    return axios.post('/database', data)
  },
  // 删除数据库
  dropDatabase(databaseName, params) {
    return axios.delete('/database/' + databaseName, params)
  },

  //对象信息
  databaseInfo(databaseName, params) {
    return axios.get('/database/' + databaseName, params)
  }
}
