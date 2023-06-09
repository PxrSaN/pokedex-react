import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { useForm } from "../hook/useForm";

export const PokemonProvider = ({children}) => {

        //Estados

         const [allPokemons, setAllPokemons] = useState([])
         const [globalPokemons, setGlobalPokemons] = useState([])
         const [offset, setOffset] = useState(0)


         //Hook
         const {valueSearch, onInputChange, onResetForm} = useForm({
            valueSearch: ''
         })


         //Estados simples
        const [loading, setLoading] = useState(true)
        const [active, setActive] = useState(false)
        


        //Lamar 50 pokemon a la API    
        const getAllPokemons = async(limit = 50) => {

        const baseURL = 'https://pokeapi.co/api/v2'
        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json()

        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)

        setAllPokemons([...allPokemons, ...results])
        setLoading(false)
    }

    //Global Pokemon (call all pokemon)
    const getGlobalPokemons = async() =>{

        const baseURL = 'https://pokeapi.co/api/v2'
        const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`)
        const data = await res.json()

        const promises = data.results.map(async(pokemon) => {
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)

        setGlobalPokemons(results)
        setLoading(false)

    }


    //Call pokemon for ID   
    const getPokemonByID = async(id) =>{
        const baseURL = 'https://pokeapi.co/api/v2'

        const res = await fetch(`${baseURL}pokemon/${id}`)
        const data = await res.json
        return data 
    }



    useEffect(() => {
        getAllPokemons()
    }, [])

    useEffect(() => {
        getGlobalPokemons()
    }, [])


  return(
    <PokemonContext.Provider value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        getPokemonByID,
    }}>
         {children}
    </PokemonContext.Provider>
  ) ;
}