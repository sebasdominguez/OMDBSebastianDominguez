import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AccessMobile from "../components/AccessMobile";
import { setModalStatus } from "../store/actions/modal";

const mapDispatchToProps = function (dispatch) {
  return {
    setModal: (boolean, type) => dispatch(setModalStatus(boolean, type)),
  };
};

const AccessMobileContainer = ({ setModal }) => {

  const modal = (boolean, type) => {
    setModal(boolean, type);
  };

  return (
    <AccessMobile
      modal={modal}
    />
  );
};

export default withRouter(connect(null, mapDispatchToProps)(AccessMobileContainer));
