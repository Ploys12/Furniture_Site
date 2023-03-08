import React from 'react'
import Header from './Copmonents/Header'
import Footer from './Copmonents/Footer'
import Items from './Copmonents/Items'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            items: [
                {id: 1, title: "Стул серый", img: "grey_chair.jpg", desc: "Серый стул", category: "chairs", price: "49.99"},
             {id: 2, title: "Стол", img: "table.jpg", desc: "Стол", category: "tables", price: "149.00"},
              {id: 3, title: "Шкаф", img: "wardrobe.jpg", desc: "Шкаф", category: "wardrobes", price: "100.00"},
               {id: 4, title: "Плита", img: "stove.jpg", desc: "Плита кухонная", category: "stoves", price: "120.00"},
                {id: 5, title: "Холодильник", img: "fridge.jpg", desc: "Холодильник", category: "fridges", price: "80.00"}
            ]
        }
    }


    render(){
    return (<div className='wrapper'>
        <Header />
        <Items items={this.state.items}/>
         <Footer />
         </div>)}
}
export default App