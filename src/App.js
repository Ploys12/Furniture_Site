import React from 'react'
import Header from './Copmonents/Header'
import Footer from './Copmonents/Footer'
import Items from './Copmonents/Items'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            orders: [],
            items: [
                {id: 1, title: "Стул серый", img: "grey_chair.jpg", desc: "Серый стул", category: "chairs", price: "49.00"},
             {id: 2, title: "Стол", img: "table.jpg", desc: "Стол", category: "tables", price: "149.00"},
              {id: 3, title: "Шкаф", img: "wardrobe.jpg", desc: "Шкаф", category: "wardrobes", price: "199.00"},
               {id: 4, title: "Плита", img: "stove.jpg", desc: "Плита кухонная", category: "stoves", price: "120.00"},
                {id: 5, title: "Холодильник", img: "fridge.jpg", desc: "Холодильник", category: "fridges", price: "170.00"}
            ]
        }

        this.addToOrder = this.addToOrder.bind(this)
    }


    render(){
    return (<div className='wrapper'>
        <Header orders={this.state.orders}/>
        <Items items={this.state.items} onAdd={this.addToOrder}/>
         <Footer />
         </div>)}

    addToOrder(item){
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id){
                isInArray = true
            }
        })

        if(isInArray === false){
            this.setState({orders: [...this.state.orders, item]})
        }


        


    }
}
export default App