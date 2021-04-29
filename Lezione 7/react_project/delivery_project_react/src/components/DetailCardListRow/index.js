
import React, { useState, useEffect } from 'react';
import DetailCard from '../DetailCard'

const DetailCardListRow = (props) => {

    return (
        <>
             <div class="col-12">
            <div class="row mt-1">
                {props.items.map(e => {
                    return (<DetailCard {...e}></DetailCard>)
                })}
            </div>
          </div>
        </>
    );
};


export default DetailCardListRow;