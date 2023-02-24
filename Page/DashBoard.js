import { useHistory } from "react-router-dom";
import styles from "./DashBoard.module.css";
const DashBoard = () => {
  let history = useHistory();
  console.log("hello")
  const handleClick = () => {
    history.goBack();
  };
  return (
    <div className={styles.dashbord}>
    
      <h1>successfully submitted the form</h1>
      <button onClick={handleClick}>Go Back</button>
    </div>
  );
};
export default DashBoard;


// how to load different component
const usersMap ={
    ADMIN:Admin,
    USER:User,
    NOT_FOUND:NotFound
}

export default function App(props){

/*    switch(props.userType) {
        case 'ADMIN':{
            return <Admin />
        }
        case 'USER':{
            return <User />
        }
        case 'NOT_FOUND':{
            return <NotFound />
        }
    } bad way 
    */

    const Component = usersMap[props.userType];
    return <Component />
}
