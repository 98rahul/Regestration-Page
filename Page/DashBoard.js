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
