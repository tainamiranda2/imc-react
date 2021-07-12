import React, {useState} from 'react';

//tive que criar um props para enviar dados 
import './Imc.css';
//tabela
const TabelaImc=()=>{
    return(
    
       <table>
           <thead>
               <tr>
                   <th>Classificação</th>
                   <th>IMC</th>
               </tr>
           </thead>
           <tbody>
               <tr>
                   <td>Abaixo do peso</td>
                   <td>Abaixo de 18,5</td>
               </tr>
               <tr>
                   <td>Peso normal</td>
                   <td>Entre 18,5 24,9</td>
               </tr>
               <tr>
                   <td>Sobrepeso</td>
                   <td>Entre 25 e 29,9</td>
               </tr>
               <tr>
                   <td>Obesidade grau 1</td>
                   <td>Entre 30 e 34,9</td>
               </tr>
               <tr>
                   <td>Obesidade grau 2</td>
                   <td>Entre 35 e 39,9</td>
               </tr>
               <tr>
                   <td>Obesidade grau 3</td>
               </tr>
           </tbody>
       </table>
    )
    }

     //para pegar o peso
const fpeso= (p,sp)=>{
        return(
        <>
  <label> Peso
 <input type="text" value={p}onChange={(e)=>{sp(e.target.value)}}/>
  </label>
        </>
        )  }
//para pegar a altura
 const faltura= (a,ap)=>{
            return(
            <>
            <label>
                Altura
  <input type="text" value={a} onChange={(e)=>{ap(e.target.value)}}/>
            </label>
            </>
            )
            }

            //funçaõ para calcular
  const calcular=(p,a,sr)=>{
const calc=()=>{
     sr(p/(a*a))
            }
  return(
    <div>  <button onClick={calc}>Calcular</button></div>
  )
  }

  //função para o resultado
const fresultado=(r)=>{
    return (
    <div>
        <p>Resultado:{r.toFixed(2)}</p>
    </div>
    )
}


function Tabela(){

const [peso, setPeso]=useState(0)
const [altura, setaltura]=useState(0)
const [resultado, setResultdo]=useState(0)

return (
    <>
    {fpeso(peso,setPeso)}
    {faltura(altura,setaltura)}
    {calcular(peso,altura,setResultdo)}
    {fresultado(resultado)}
    {TabelaImc()}
    </>
)
 }

export default Tabela;


