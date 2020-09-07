import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
//import { Table, Button } from "react-bootstrap";
//import { makeStyles } from "@material-ui/core/styles";
import { useMediaPredicate } from "react-media-hook";

// const useStyles = makeStyles((theme) => ({
//   margin: {
//     margin: theme.spacing(1),
//     backgroundColor: '#be43d89e',
//     color: 'white'
//   },
//   extendedIcon: {
//     marginRight: theme.spacing(1),
//   },
// }));

export default ({ user, toFavs, modalStatus }) => {
  //const classes = useStyles();
  const biggerThan500 = useMediaPredicate("(min-width: 500px)");

  return (
    <>
      {biggerThan500 ?
        <div className="row justify-content-center">
          <section className="sidebar">
            <section className="text-center">
              {user.id ? (
                <Button
                  //variant="contained"
                  size="sm"
                  className='buttonLogout'
                  onClick={()=>modalStatus(false)}
                >
                  LOGOUT
                </Button>
              ) : null}
            </section>
            {!user.id ? (
              <div>
                <section onClick={()=>modalStatus(true, "login")}>
                  <h4 className="menu-item active">
                    {" "}
                    <Link to="">LOGIN</Link>{" "}
                  </h4>
                </section>
                <section onClick={()=>modalStatus(true, "register")}>
                  <h4 className="menu-item active">
                    {" "}
                    <Link to="">REGISTER</Link>{" "}
                  </h4>
                </section>
              </div>
            ) : null}
            {user.id ? (
              <div>
                <section>
                  <h4 className="menu-item active">
                    <Link to="/users">USERs</Link>
                  </h4>
                </section>
                <section>
                  <h4 className="menu-item active">
                    <Link to="/favs" onClick={() => toFavs(user.id)}>
                      FAVs
                    </Link>
                  </h4>
                </section>
              </div>
            ) : null}
            <hr />
          </section>
        </div>
        :null
      }
    </>
  );
};
