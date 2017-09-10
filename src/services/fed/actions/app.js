import { Loading } from '@boluome/oto_saas_web_app_component'

import { get, send } from './ajax'

export const getFedIndex = callback => {
  const closeLoading = Loading()
  get('/index').then(({ data }) => {
    const { code, msg } = data
    if (code === 200) {
      callback(data.data)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}

export const getKnowledgeIndex = callback => {
  const closeLoading = Loading()
  get('/repository').then(({ data }) => {
    const { code, msg } = data
    if (code === 200) {
      callback(data.data)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}

export const getTopCategory = callback => {
  const closeLoading = Loading()
  get('/topCategoryList').then(({ data }) => {
    const { code, msg } = data
    if (code === 200) {
      console.log('getTopCategory', data)
      callback(data.data)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}

export const getSecondCategory = (id, callback) => {
  const closeLoading = Loading()
  id = Number(id)
  send('/setSecondCategory', { id }).then(({ data }) => {
    const { code, msg } = data
    if (code === 200) {
      callback(data.data)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}


export const addSecondCategory = id => {
  const closeLoading = Loading()
  send('/addSecondCategory', { id }).then(({ data }) => {
    const { code, msg } = data
    if (code === 200) {
      console.log('addSecondCategory', data.data)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}

export const updateRepositoryStatus = (id, status) => {
  const closeLoading = Loading()
  send('/updateRepositoryStatus', { id, status }).then(({ data }) => {
    const { code, msg } = data
    if (code === 200) {
      console.log('updateRepositoryStatus', data.data)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}


export const getQrCode = (id, callback) => {
  const closeLoading = Loading()
  send('/getQrCode', { id }).then(({ data }) => {
    const { code, url, msg } = data
    if (code === 200) {
      callback(url)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}


export const getResult = callback => {
  const closeLoading = Loading()
  get('/polling').then(({ data }) => {
    const { code, type, msg } = data
    if (code === 200) {
      callback(type)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}
