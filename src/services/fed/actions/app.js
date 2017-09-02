import { get, send } from '@boluome/common-lib'
import { Loading } from '@boluome/oto_saas_web_app_component'
import { Toast } from 'antd-mobile'

export const getFedIndex = () => () => {
  const closeLoading = Loading()
  get('/index').then(({ code, data, message }) => {
    if (code === 0) {
      console.log('fedData', data)
    } else {
      Toast.fail(message)
    }
    closeLoading()
  })
}

export const getKnowledgeIndex = () => () => {
  const closeLoading = Loading()
  get('/repository').then(({ code, data, message }) => {
    if (code === 0) {
      console.log('getKnowledgeIndex', data)
    } else {
      Toast.fail(message)
    }
    closeLoading()
  })
}

export const getTopCategory = () => () => {
  const closeLoading = Loading()
  get('/topCategoryList').then(({ code, data, message }) => {
    if (code === 0) {
      console.log('getTopCategory', data)
    } else {
      Toast.fail(message)
    }
    closeLoading()
  })
}

export const getSecondCategory = id => () => {
  const closeLoading = Loading()
  send('/setSecondCategory', { id }).then(({ code, data, message }) => {
    if (code === 0) {
      console.log('getSecondCategory', data)
    } else {
      Toast.fail(message)
    }
    closeLoading()
  })
}


export const addSecondCategory = id => () => {
  const closeLoading = Loading()
  send('/addSecondCategory', { id }).then(({ code, data, message }) => {
    if (code === 0) {
      console.log('addSecondCategory', data)
    } else {
      Toast.fail(message)
    }
    closeLoading()
  })
}

export const updateRepositoryStatus = (id, status) => () => {
  const closeLoading = Loading()
  send('/updateRepositoryStatus', { id, status }).then(({ code, data, message }) => {
    if (code === 0) {
      console.log('updateRepositoryStatus', data)
    } else {
      Toast.fail(message)
    }
    closeLoading()
  })
}


export const getQrCode = id => () => {
  const closeLoading = Loading()
  send('/getQrCode', { id }).then(({ code, data, message }) => {
    if (code === 0) {
      console.log('getQrCode', data)
    } else {
      Toast.fail(message)
    }
    closeLoading()
  })
}
