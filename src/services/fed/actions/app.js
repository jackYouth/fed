import { get } from '@boluome/common-lib'
import { Loading } from '@boluome/oto_saas_web_app_component'
import axios from 'axios'

export const getFedIndex = () => {
  const closeLoading = Loading()
  get('/index').then(({ code, data, msg }) => {
    if (code === 200) {
      console.log('fedData', data)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}

export const getKnowledgeIndex = () => {
  const closeLoading = Loading()
  get('/repository').then(({ code, data, msg }) => {
    if (code === 200) {
      console.log('getKnowledgeIndex', data)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}

export const getTopCategory = callback => {
  const closeLoading = Loading()
  get('/topCategoryList').then(({ code, data, msg }) => {
    if (code === 200) {
      console.log('getTopCategory', data)
      callback(data)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}

export const getSecondCategory = (id, callback) => {
  const closeLoading = Loading()
  axios.post('http://aapi.ddlass.com/setSecondCategory', { id }).then(({ code, data, msg }) => {
    console.log('msg', msg)
    if (code === 200) {
      callback(data)
      console.log('getSecondCategory', data)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}


export const addSecondCategory = id => {
  const closeLoading = Loading()
  axios.post('http://aapi.ddlass.com/addSecondCategory', { id }).then(({ code, data, msg }) => {
    if (code === 200) {
      console.log('addSecondCategory', data)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}

export const updateRepositoryStatus = (id, status) => {
  const closeLoading = Loading()
  axios.post('http://aapi.ddlass.com/updateRepositoryStatus', { id, status }).then(({ code, data, msg }) => {
    if (code === 200) {
      console.log('updateRepositoryStatus', data)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}


export const getQrCode = id => {
  const closeLoading = Loading()
  axios.post('http://aapi.ddlass.com/getQrCode', { id }).then(({ code, data, msg }) => {
    if (code === 200) {
      console.log('getQrCode', data)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}
