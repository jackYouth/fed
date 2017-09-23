import { Loading } from '@boluome/oto_saas_web_app_component'

import { get, send } from './ajax'

export const getFedIndex = callback => {
  const closeLoading = Loading()
  get('http://aapi.ddlass.com/index').then(({ data }) => {
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
  get('http://aapi.ddlass.com/repository').then(({ data }) => {
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
  get('http://aapi.ddlass.com/topCategoryList').then(({ data }) => {
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
  send('http://aapi.ddlass.com/setSecondCategory', { id }).then(({ data }) => {
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
  send('http://aapi.ddlass.com/addSecondCategory', { id }).then(({ data }) => {
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
  send('http://aapi.ddlass.com/updateRepositoryStatus', { id, status }).then(({ data }) => {
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
  send('http://aapi.ddlass.com/getQrCode', { id }).then(({ data }) => {
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
  get('http://aapi.ddlass.com/polling').then(({ data }) => {
    const { code, type, msg, money } = data
    if (code === 200) {
      callback(type, money)
    } else {
      console.log(msg)
    }
    closeLoading()
  })
}

export const getTotalPrice = callback => {
  const closeLoading = Loading()
  get('http://admin.ddlass.com/user').then(({ data }) => {
    const { id, money } = data[0]
    callback(id, money)
    closeLoading()
  })
}


export const updateTotalPrice = (money, callback) => {
  const closeLoading = Loading()
  send('http://admin.ddlass.com/updateUser', { money }).then(({ data }) => {
    console.log('data', data)
    callback(data)
    closeLoading()
  })
}
