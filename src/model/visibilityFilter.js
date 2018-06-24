import { pipe } from 'rxjs'
import { map } from 'rxjs/operators' 
 
const model = {
    namespace: 'visibilityFilter',
    state: 'show_all',
    epics:{
      // loadCopon: (action$, store) => {
      //   return action$.ofType('coupon/loadCoupon')
      //     .map((action) => {
      //       return {type: 'coupon/showLoading'}
      //     });
      // },
    },
    reducers: {
        setVisibilityFilter(state, action) {
            return action.payload.filterText
        },
        // handle high order reducer
        default(state, action){
            return state;
        }
    }
  };
  
  export default model;