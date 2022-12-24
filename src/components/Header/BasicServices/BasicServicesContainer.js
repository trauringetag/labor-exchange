import { connect } from "react-redux";
import BasicServices from "./BasicServices";

const mapStateToProps = state => ({ sliderElements: state.surfaceBlock.sliderElements });

export const BasicServicesContainer = connect(mapStateToProps)(BasicServices);