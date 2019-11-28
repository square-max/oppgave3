import React from 'react';
import Oppmuntring from './documents/Oppmuntring'
import Bird from './documents/Bird'
import './App.css';
import Gud from './documents/Gud';

function App() {
  const birds = ["seagull", "hummingbird", "blackbird", "parakeet"]

const guder = [
  {navn: "Balder", besk: "Ås, gud for lys, skjønnhet, kjærlighet og lykke"},
  {navn: "Brage", besk: "Ås, gud for diktning, veltalenhet og skaldekunst"},
  {navn: "Eir", besk: "Gudinne for legekunsten, en av Menglads Frøyas?) ni møyer"},
  {navn: "Frøya", besk: "Vane, fruktbarhetsgudinne"}
]
  return (
  <div className="App">    
    <Oppmuntring navn="Rick Astley" emne="Kunsten å synge rent" />
   
    {
      birds.map(bird => <Bird bird={bird}/>)
      }
       <h1>Norønne Guder</h1>
    {
      guder.map(gud => <Gud gud={gud}/>)
      }
  </div>
)
}


export default App;
