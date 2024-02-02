import axios from '../axios.js'

export default {
  doSearch(data) {
    return axios.get('/datasource', data)
  },
  getDatasource(datasourceId) {
    return axios.get('/datasource/' + datasourceId)
  },
  updateDatasource(data) {
    return axios.put('/datasource', data)
  },
  addDatasource(data) {
    return axios.post('/datasource', data)
  },
  testConnection(data) {
    return axios.post('/datasource/testConnection', data)
  },
  deleteDatasource(datasourceId) {
    return axios.delete('/datasource/' + datasourceId)
  }
}
