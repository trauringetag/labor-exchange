import { connect } from "react-redux";
import AccordionServices from "./AccordionServices";

const mapStateToProps = state => ({ services: state.aboutPage.services });

export const AccordionServicesContainer = connect(mapStateToProps)(AccordionServices);