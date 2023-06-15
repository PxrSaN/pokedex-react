import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import TestCompoonents from '../components/TestComponents';
import { click } from '@testing-library/user-event/dist/click';



describe('Tests', () => { 


  let article
  let button
  beforeEach(() =>{
    render(<TestCompoonents/>)
     article = screen.getByRole('article', {name:'Pokemon'})
     button = screen.getByRole('button', {name: 'Pulsa para modificar'})
  })

  test('el documento contiene el article', () => { 
    expect(article).toBeInTheDocument
   })
  
  test('el article tiene un color de fondo', () => { 
    expect(article).toHaveStyle({
      backgroundColor: 'indigo'
   

   })
  
  })

  test('al hacer click en el boton cambia el color de fondo del article', () => { 
    fireEvent.click(button);
    expect(article).toHaveStyle({
  backgroundColor: 'tomato'
   })

 })

})