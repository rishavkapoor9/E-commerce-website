import React, { useState } from 'react'

const Filters = () => {
    const [search, setSearch] = useState("")
    return (
        
        <div>
            <label for="exampleFormControlInput1" class="form-label">Search Here</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" value={search} onChange={changeSearch(()=>{setSearch(value)})}></input>
        </div>
    )
}

export default Filters;