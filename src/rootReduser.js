import { combineReducers } from "redux";
import AppRedusers from "./AppData/AppRedusers";
import UserRedusers from "./UserData/UserRedusers";

const rootReduser = combineReducers({ AppRedusers, UserRedusers });

export default rootReduser;
