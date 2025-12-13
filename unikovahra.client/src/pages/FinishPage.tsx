import { useState } from 'react'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'

const FinishPage = () => {
  const navigate = useNavigate();
  const [handleClick, setHandleClick] = useState(false)
  
  const getScore = () => {
    const savedScore = localStorage.getItem('playerScore');
    return savedScore ? parseInt(savedScore, 10) : 0;
  };
  
  const score = getScore();

  const pricePerRohlik = 5; 
  const rohlikyCount = Math.floor(score / pricePerRohlik);

  return (
    <div>
      {!handleClick ? (
        <div>
          <h1>Výhra!</h1>
          <h2>Povedlo se ti utéct z banky!</h2>
          <p>Dokázal jsi zadat správný čtyřmístný PIN a displej potvrdil tvou identitu. Hlavní dveře banky se otevřely a cesta k úniku je volná. Gratulujeme, tímto jsi úspěšně dokončil všechny úkoly a vyhrál. Gratulujeme!
            Teď se můžeš podívat, kolik peněz jsi během mise získal a co si za ně můžeš koupit. </p>
          <Button text="Kolik jsem získal?" onClick={() => setHandleClick(true)} color="blue"></Button>
        </div>
      ) : (
        <div>
          <h2>Za ${score}</h2>
          <p>Si můžeš koupit</p>
          <p>{rohlikyCount} Rohlíků</p>

          <Button text="Hrát znovu" onClick={() => navigate('/')} color="blue"></Button>
        </div>
      )}
    </div>
  )
}

export default FinishPage