import GamesPage from '../GamesPage';
import styles from'./App.module.css';

const App = () => {
  return (
    <div>
      <h1 className={styles.header}>All games:</h1>
      <GamesPage />
    </div>   
  )
}

export default App;
