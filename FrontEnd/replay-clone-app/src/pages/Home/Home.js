import React from 'react'
import { useNavigate } from 'react-router';

export default function Home() {
    const navigate = useNavigate();
    const navigateToPayment = ()=>{
        navigate(`/paymentPage`);
    }
    const navigateToTransaction =()=>{
        navigate(`/transactions`);
    }
  return (
    <div>
      <center>
      <h1>Sleeve 2</h1>
      <h2>The ultimate music accessory for your Mac.</h2>
      <pre>
        Sleeve sits on the desktop, displaying and controlling the music you’re <br/>
        currently playing in <img className='img-icon' src="https://replay.software/sleeve/images/AppMusic.png" alt=''></img> Apple Music, <img className='img-icon' src="https://replay.software/sleeve/images/AppSpotify.png" alt=""></img> Spotify, and <img className='img-icon' src="https://replay.software/sleeve/images/AppDoppler.png" alt=""></img> Doppler.
      </pre>
      </center>
      <div className='btn-section'>
        <div>
        </div>
        <button className='mac-app-store-btn'><img className='img-icon-2' src="https://tse3.mm.bing.net/th?id=OIP.847qCXl2CDqca-8gHr_RKQHaHa&pid=Api&P=0&h=180" alt=""></img> Mac App Store</button>
        <button className='buy-btn' onClick={navigateToPayment}>Buy Directly <span className='amount'>$5.99</span></button>
      </div>
      <div className='btn-section'>
        <div>
            
        </div>
        <div>
            
        </div>
        <button className='mac-app-store-btn' onClick={navigateToTransaction}> View Transactions</button>
      </div>
    


    </div>
  )
}
