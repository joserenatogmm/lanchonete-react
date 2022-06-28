import { useCarrinhoContext } from '../shared/contexts/CarrinhoContext'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import NavBar from "../components/NavBar"
import logo from '../images/ham-ico.png'
import ProductLine from '../components/ProductLine'
import styleProperties from '../shared/styleProperties.json'
import { useContext } from 'react'
import {UsuarioContext} from "../shared/contexts/UsuarioContext";

//import items from '../shared/mock/shoppingcart.json'

const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 60vw;
    padding: 10px;
    & h1 {
        text-align: center;
        color: ${styleProperties.primaryDarkColor};
    }
`

const Sumary = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${styleProperties.lightColor};
    border: 2px solid ${styleProperties.primaryDarkColor};
    border-radius: 10px;
    padding: 5px;
    color: ${styleProperties.primaryDarkColor};
    font-weight: bolder;
    & span {
        margin-left: auto;
    }
`

const ButtonFinish = styled.button`
  margin-top: 5px;
  background-color: green;
  color: whitesmoke;
  font-weight: bolder;
  border-radius: 20px;
  padding: 10px;
  font-size: 25px;
  cursor: pointer;
`

const Carrinho = () => {
    const {carrinho, checkout} = useCarrinhoContext()
    const {saldo, setSaldo} = useContext(UsuarioContext)


    let sum = 0
    carrinho.forEach(product => {
        sum += product.price * product.qtd
    })

    return (
        <>
        <NavBar title="Larika" logo={logo}>
                <Link to="/">Início</Link>
                <Link to="/cardapio">Cardápio</Link>
        </NavBar>
        <MainContainer>
            <h1>Carrinho de Compras</h1>

            {carrinho.map(product => (
                <ProductLine {...product} key={product.id} />
            ))}

            <Sumary>
                Total
                <span>R$ {Number.parseFloat(sum).toFixed(2)}</span>
            </Sumary>
            <ButtonFinish onClick={() => {
                if (sum === 0) {
                    alert("Adicione itens no carrinho antes de realizar a compra.")
                    return
                }

                if(checkout(saldo, sum, setSaldo)) {
                    alert("Compra concluída.")
                } else {
                    alert("Não foi possível finalizar a compra, saldo insuficiente.")
                }
            }}>Finalizar Compra</ButtonFinish>
        </MainContainer>
        </>
    )
}

export default Carrinho