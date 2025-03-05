import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// 📌 Milestone 1: Recuperare e visualizzare i dati
// Effettua una chiamata API a
// https://boolean-spec-frontend.vercel.app/freetestapi/politicians

// Salva la risposta in uno stato React (useState).

// Mostra i politici in una lista di card, visualizzando almeno le seguenti proprietà:

// Nome (name)
// Immagine (image)
// Posizione (position)
// Breve biografia (biography)

// Obiettivo: Caricare e mostrare i politici in un’interfaccia chiara e leggibile.

function App() {


  const [politici, setPolitici] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://boolean-spec-frontend.vercel.app/freetestapi/politicians')
      .then(res => res.json())
      .then(data => setPolitici(data))
      .catch(error => console.error(error))
  }, [])

  const filtraggio = () => {
    return politici.filter((politico) => politico.name.toLowerCase().includes(search.toLocaleLowerCase())) ||
      politici.filter((politico) => politico.biography.toLowerCase().includes(search.toLocaleLowerCase()))
  }


  return (
    <>
      <main>
        <div>
          <h1>Politici</h1>
          <input
            type="text"
            placeholder='cerca politico'
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
          <ul>
            {filtraggio().map((politico) => (
              <div className="card" key={politico.id}>
                <img src={politico.image} alt={politico.name} />
                <li >
                  <div className='card-content'>
                    <h2 className='card-title'>{politico.name}</h2>
                    <div className='card-text'>
                      <p><strong>{politico.position}</strong></p>
                      <p>{politico.biography}</p>
                    </div>
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default App
