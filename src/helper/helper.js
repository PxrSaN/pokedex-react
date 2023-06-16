/*Con esta funcion haremos que la primer letra de los pokemon se convierta en mayuscula
ya que la API los devuelve en minuscula*/
export const primerMayuscula = (word) => {
return word[0].toUpperCase() + word.substring(1)
}