import { combineReducers, createStore, applyMiddleware } from "redux";
import { Dishes } from "./dishes";
import { Leaders} from "./leaders";
import { Promotions } from "./promotions";
import { Comments } from "./comments";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigurStore = () => {
  const store = createStore(
       combineReducers({
         dishes: Dishes,
         comments: Comments,
         leaders: Leaders,
         promotions: Promotions
       }),
       applyMiddleware(thunk, logger)
    );

  return store;

};
