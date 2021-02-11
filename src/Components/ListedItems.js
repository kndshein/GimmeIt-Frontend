import React from "react"
import '../css/Item.css'
import Item from './Item'

const ListedItems = (props) =>{

    const loaded = () => {
        return(
            <div >
            {props.listedItems.data.map((item) =>{
                    console.log(item)
                    return(
                        <Item itemData={item}/>
                    )         
                })}
        </div>
        )
    }

    const loading = () =>{
        return <h1>LOADING...</h1>
    }
    console.log(props.listedItems)
    
    return props.listedItems ? loaded() : loading()
}

export default ListedItems