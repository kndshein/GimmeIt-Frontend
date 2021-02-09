import React from "react"

const ListedItems = (props) =>{

    const loaded = () => {
        return(
            <div >
            {props.listedItems.data.map((item) =>{
                    console.log(item)
                    return(
                        <div className="image-container">
                        <img
                          className="image"
                          src={item.img}
                          alt="desk"
                        />
                        <div className="image-text">
                          <h2 className="item-cardname">{item.name}</h2>
                        </div>
                      </div>
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