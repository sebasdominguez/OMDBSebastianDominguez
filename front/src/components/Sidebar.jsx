import React from "react";
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default ({ user, logout, toFavs }) => {
    console.log("user", user)
    const classes = useStyles();

    return (
    <div className="row justify-content-center">
    <section className="sidebar">
      <section className="text-center">
        { user.id ? <Button variant="contained" color="secondary" size="small" className={classes.margin} onClick={()=>logout()}> 
                      LOGOUT 
                      </Button> 
                      : null }
      </section>
        { !user.id ? 
          (<div>
            <section>
              <h4 className="menu-item active"> <Link to="/login">LOGIN</Link> </h4>
            </section>
            <section> 
              <h4 className="menu-item active"> <Link to="/register">REGISTER</Link> </h4>
            </section>
          </div>)
          : null 
        }  
       { user.id ? 
        (<div>
          <section>
            <h4 className="menu-item active">
              <Link to="/users">USERs</Link>
            </h4>
          </section>
          <section>
            <h4 className="menu-item active">
              <Link to="/favs" onClick={()=>toFavs(user.id)}>FAVs</Link>
            </h4>
          </section>
        </div>)
        : 
        null 
       }
      <hr />
    </section>
  </div>
)
}