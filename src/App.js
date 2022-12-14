import { Download, Features, SectionWrapper} from './components'
import assets from './assets';
import styles from './styles/Global';


const App = () => {
  return (
    <>
      <SectionWrapper 
        title="You own bro of Nifty NFTs.
        start Selling and Growing"

        description="Buy, store, collect NTF 
        exchange and give regadles off the situation
        that is nifgto neft crazy"

        showBtn

        mockupImg={assets.homeHero}
        banner="banner"
    
      />
      <SectionWrapper 
        title="Smart user market interface"

        description="Experience a buttery UI of proNef NFT marketplate. 
        Smooth constant colors of a fluent UI design. "

        mockupImg={assets.homeCards}
        reverse    
      />
      <Features />
      <SectionWrapper 
        title="Deployment"

        description="ProNef is built using expo, which runs natively on all users' devices
        . You can easily get your app into people's hands"

        mockupImg={assets.feature}
        reverse    
      />
      <SectionWrapper 
        title="Creative way to showcase the store"

        description="The app contains two screens. The first screen lists all NFTs
        while the second one shows the details of a specific NFT."

        mockupImg={assets.mockup}
        banner="banner02"    
      />
      <Download />
      <div className='px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04'>
        <p className={`${styles.pText} ${styles.whiteText}`}>
          Made with love by {" "}
          <span className='bold'>Vikram Narra</span>
        </p>
      </div>
    </>
  );
}

export default App;
