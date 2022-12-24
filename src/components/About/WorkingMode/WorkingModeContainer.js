import { connect } from "react-redux";
import WorkingMode from "./WorkingMode";

const mapStateToProps = state => ({ workingMode: state.aboutPage.workingMode });

export const WorkingModeContainer = connect(mapStateToProps)(WorkingMode);