import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {CardDeck} from "./components/CardDeck.tsx";
import {LayerTesting} from "./components/layer/LayerTesting.tsx";
import {AnimeApp} from "./components/jotai/JotaiTesting.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <CardDeck/>
      <br/>
      <br/>
      <br/>
      <LayerTesting/>
      <br/>
      <br/>
      <br/>
      <AnimeApp/>
    </React.StrictMode>,
)
