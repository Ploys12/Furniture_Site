import React from 'react'
import Header from './Copmonents/Header'
import Footer from './Copmonents/Footer'
import Items from './Copmonents/Items'
import Categories from './Copmonents/Categories'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {id: 1, title: "Серый стул", img: "grey_chair.jpg", desc: "Стул серый", category: "chairs", price: "49.00"},
             {id: 2, title: "Стол", img: "table.jpg", desc: "Стол белый", category: "tables", price: "149.00"},
              {id: 3, title: "Шкаф", img: "wardrobe.jpg", desc: "Шкаф тёмный", category: "wardrobes", price: "199.00"},
               {id: 4, title: "Плита", img: "stove.jpg", desc: "Плита кухонная", category: "stoves", price: "120.00"},
                {id: 5, title: "Холодильник", img: "fridge.jpg", desc: "Холодильник белый", category: "fridges", price: "170.00"}
            ]
        }

        this.state.currentItems = this.state.items

        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
    }


    render(){
    return (<div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
         <Footer />
         </div>)}


    deleteOrder(id){
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})


    }

    chooseCategory(category){

        

        if(category === 'all'){
            this.setState({
                currentItems: this.state.items
            })
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })

    }

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