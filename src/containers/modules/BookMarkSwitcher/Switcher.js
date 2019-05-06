import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Switcher from '../../../modules/BookMarkSwitcher/Switcher'

import { changeActiveSwitcher } from '../../../store/BookMarkSwitcher/actions'

const putDispatchToProps = dispatch => ({
    onChangeActiveSwitcher: bindActionCreators(changeActiveSwitcher, dispatch)
})

export default connect(
    null,
    putDispatchToProps
)(Switcher)
