import { useDispatch, useStore } from "../global-state";
import { disableNotification } from "../global-state/action";

function Notification(){
  const state = useStore();
  const dispatch = useDispatch();

  function handleClick(e){
     dispatch(disableNotification());
  }

  if(!state.gps_status.available){
    return(
      <div className="noti">
        <div className="notification is-warning">
          <button onClick={handleClick} className="delete"></button>
          {state.gps_status.message }
        </div>
      </div>)
  }else{
    return null;
  }


}

export default Notification;
