import { connect } from "react-redux";
import Information from "./Information";

const mapStateToProps = state => ({ information: state.aboutPage.information });

export const InformationContainer = connect(mapStateToProps)(Information);