import { connect } from 'react-redux'
import { setStore } from '@boluome/common-lib'
import { wrap }    from '@boluome/oto_saas_web_app_component'
import App         from '../components/app'

import { getFedIndex, getKnowledgeIndex } from '../actions/app'

const mapStateToProps = ({ app }) => ({ ...app })

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  }
}

const mapFunToComponent  = () => ({
  componentWillMount() {
    setStore('business', 'repast', 'session')
    getFedIndex()
    getKnowledgeIndex()
  },
})

export default
connect(mapStateToProps, mapDispatchToProps)(
  wrap(mapFunToComponent)(App)
)
