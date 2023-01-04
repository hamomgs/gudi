import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Select from 'react-select'

export default function SelectState({ setSelectedState, selectedState, border }) {
  const [states, setStates] = useState([])

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
    .then(res => 
      setStates(res.data.map(({ nome }) => ({
        label: nome, value: nome
      })))
    )
  }, [])

  const styles = {
    control: () => ({
      display: 'flex',
      borderRadius: "5vw",
      padding: '0 0.5vw',
      cursor: 'text',
      border: border,
      backgroundColor: '#fff'
    }),
    container: (baseStyles) => ({
      ...baseStyles,
      width: '100%',
      fontSize: 'clamp(12px, 0.97vw, 800px)'
    }),
    indicatorsContainer: (baseStyles) => ({
      ...baseStyles,
      cursor: 'pointer'
    }),
    option: (baseStyles) => ({
      ...baseStyles,
      cursor: 'pointer'
    }),

  }

  return (
    <>
      <Select placeholder='Pesquisar' options={states} onChange={e => setSelectedState(e.value)} styles={styles} />
    </>
  )
}