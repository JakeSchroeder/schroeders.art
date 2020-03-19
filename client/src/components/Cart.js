import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const UserTitle = styled.h1``;

// const useCapitalize = str => {
//   str = str.split(" ");

//   for (var i = 0, x = str.length; i < x; i++) {
//     str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//   }

//   return str.join(" ");
// };

const Cart = props => {
  const { name } = props.auth.user;

  function capitalizeName(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
      str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
  }

  return (
    <div>
      <UserTitle>
        {name ? `${capitalizeName(name)}'s Cart` : `Guest Cart`}
      </UserTitle>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(withRouter(Cart));
