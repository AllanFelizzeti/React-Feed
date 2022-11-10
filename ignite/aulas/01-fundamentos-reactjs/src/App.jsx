import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar"
import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Allan Felizzeti" 
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. A rem repudiandae numquam assumenda amet vitae 
            minus beatae deleniti incidunt quos voluptate nobis reprehenderit dicta, atque sint earum excepturi! Asperiores, soluta?"
          /> 

          <Post 
            author="Bezaleu Ribeiro" 
            content="Um, poste muito legal"
          />
        </main>
      </div>
    </div>
  )
}

