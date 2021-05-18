import {Header} from '../components/Header';
import {Player} from '../components/Player';

import {PlayerContextProvider} from '../contexts/PlayerContext';
import {DarkModeContextProvider} from '../contexts/DarkModeContext';

import '../styles/global.scss';
import styles from '../styles/app.module.scss';


function MyApp({ Component, pageProps }) {
  
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <DarkModeContextProvider>
            <Header />
            <Component {...pageProps} />
          </DarkModeContextProvider>
        </main>
        <Player />
      </div>  
    </PlayerContextProvider>
  );
}

export default MyApp;
