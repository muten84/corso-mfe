import React, { useState, useEffect } from 'react';
import HomeCard from '../HomeCard'

const HomeCardRow= (props) => {

    const [items, setItems] = useState(props.items);

    const rowList = (list) => {
        return list.map(e => {
            return (<><HomeCard {...e}></HomeCard></>)
        });
    }

    return (
        <>
            <div className="col-12">
            
                <div className="row mt-1">
                    {rowList(items)}
                </div>
            </div>
        </>
    );
}

export default HomeCardRow;