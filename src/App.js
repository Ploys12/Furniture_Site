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
                {id: 5, title: "Холодильник", img: "fridge.jpg", desc: "Холодильник белый", category: "fridges", price: "170.00"},
                {id: 6, title: "Лампа", img: "lamp.jpg", desc: "Лампа настольная", category: "lights", price: "170.00"},
                {id: 7, title: "Кровать", img: "bad.jpg", desc: "Кровать спальная", category: "bads", price: "219.00"},
                {id: 8, title: "Обувная полка", img: "shoes.jpg", desc: "Полка обувная", category: "shoes", price: "99.00"},
                {id: 9, title: "Холодильник", img: "second_fridge.jpg", desc: "Холодильник чёрный", category: "fridges", price: "249.00"},
                {id: 10, title: "Кровать", img: "second_bad.jpg", desc: "Кровать миниатюрная", category: "bads", price: "390.00"},
                {id: 11, title: "Плита", img: "second_stove.jpg", desc: "Плита кухонная", category: "stoves", price: "299.00"},
                {id: 12, title: "Шкаф", img: "Beauty_Wardrobe.jpg", desc: "Шкаф эстетичный", category: "wardrobes", price: "269.00"},
                {id: 13, title: "Стол", img: "Black_table.jpg", desc: "Стол чёрный", category: "tables", price: "99.00"},
                {id: 14, title: "Стул", img: "black_chair.jpg", desc: "Стул чёрный", category: "chairs", price: "29.00"},
                {id: 15, title: "Стул-кресло", img: "chair-sofa.jpg", desc: "Стул-кресло", category: "chairs", price: "79.00"},
                {id: 16, title: "Шкаф", img: "third_wardrobe.jpg", desc: "Шкаф большой", category: "wardrobes", price: "249.00"},
                {id: 17, title: "Холодильник", img: "third_fridge.jpg", desc: "Холодильник большой", category: "fridges", price: "249.00"},
                {id: 18, title: "Плита", img: "third_stove.jpg", desc: "Плита кухонная", category: "stoves", price: "149.00"},
                {id: 19, title: "Стол", img: "third_table.jpg", desc: "Стол для конференций", category: "tables", price: "209.00"},
                {id: 20, title: "Кровать", img: "third_bad.jpg", desc: "Кровать шикарная", category: "bads", price: "349.00"},
                {id: 21, title: "Диван", img: "sofa.jpg", desc: "Диван обычный", category: "sofas", price: "189.00"}
                
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