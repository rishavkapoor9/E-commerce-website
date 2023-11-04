import React, { useState } from 'react'

const Filters = (props) => {
    const searchFilter=(product)=>{
        return props.search===""?true:product.name.toLowerCase().includes(props.search.toLowerCase())
    }
    const categoryFilter = (product)=>{
        var f=0;
        if(props.categories[0]===true){if(product.category==="Mobile"){f=1;}}
        if(props.categories[1]===true){if(product.category==="Computer"){f=1;}}
        if(props.categories[2]===true){if(product.category==="Watch"){f=1;}}
        if(props.categories[3]===true){if(product.category==="Accessories"){f=1;}}
        return f
    }
    const changeSearch = async (event) => {
        await props.setSearch(event.target.value);
        props.setProducts(props.allp.filter(searchFilter))
    }
    const changeCategories = async (event) =>{
        const name= event.target.name
        const temp=props.categories
        if(name==="Mobile"){temp[0]=!temp[0]}
        else if(name==="Computer"){temp[1]=!temp[1]}
        else if(name==="Watch"){temp[2]=!temp[2]}
        else if(name==="Accessories"){temp[3]=!temp[3]}
        await props.setCategories(temp);
        props.setProducts(props.allp.filter(categoryFilter))

    }
    return (

        <div>
            <label for="exampleFormControlInput1" class="form-label">Search Here</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" onChange={changeSearch}></input>
            <br />
            
            <div>
                Categories
            </div>
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="Mobile" onChange={changeCategories}/>
            <label class="form-check-label" for="flexCheckDefault">
                Mobile
            </label>
            <br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="Computer" onChange={changeCategories}/>
            <label class="form-check-label" for="flexCheckDefault">
                Computer
            </label>
            <br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="Watch" onChange={changeCategories}/>
            <label class="form-check-label" for="flexCheckDefault">
                Watch
            </label>
            <br />
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="Accessories" onChange={changeCategories}/>
            <label class="form-check-label" for="flexCheckDefault">
                Accessories
            </label>

        </div>
    )
}

export default Filters