import { connect } from 'react-redux'
import { wrap }    from '@boluome/oto_saas_web_app_component'
import App         from '../components/app'

import { getFedIndex, getKnowledgeIndex, getTopCategory, getSecondCategory, addSecondCategory, updateRepositoryStatus, getQrCode } from '../actions/app'

const mapStateToProps = ({ app }) => ({ ...app })

const mapDispatchToProps = dispatch => ({ dispatch })

const mapFunToComponent  = dispatch => ({
  componentDidMount() {
    dispatch(getFedIndex())
    dispatch(getKnowledgeIndex())
    dispatch(getTopCategory())
    dispatch(getSecondCategory(1))
    dispatch(addSecondCategory(1))
    dispatch(updateRepositoryStatus(1, 1))
    dispatch(getQrCode(3))
  },
})

export default
connect(mapStateToProps, mapDispatchToProps)(
  wrap(mapFunToComponent)(App)
)
