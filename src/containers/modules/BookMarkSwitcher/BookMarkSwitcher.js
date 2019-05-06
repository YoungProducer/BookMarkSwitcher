import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import BookMarkSwitcher from "../../../modules/BookMarkSwitcher/BookMarkSwitcher";

import { addSwitcherToList } from "../../../store/BookMarkSwitcher/actions";

const putStateToProps = state => ({
  switchers: state.bookMarks.switchers,
  activeSwitcher: state.bookMarks.activeSwitcherIndex,
})

const putDispatchToProps = dispatch => ({
  onAddSwitcherToList: bindActionCreators(addSwitcherToList, dispatch)
});

export default connect(
  putStateToProps,
  putDispatchToProps
)(BookMarkSwitcher);
