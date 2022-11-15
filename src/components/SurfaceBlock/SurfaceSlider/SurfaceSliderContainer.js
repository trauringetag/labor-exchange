import { connect } from "react-redux";
import SurfaceSlider from "./SurfaceSlider";
const mapStateToProps = state => ({ sliderElements: state.surfaceBlock.sliderElements });
export const SurfaceSliderContainer = connect(mapStateToProps)(SurfaceSlider);