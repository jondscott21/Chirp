import React, { useState } from 'react'


const Home = () => {
    const [colors, setColors] = useState([
        // row 1
        '#CBC376',
        '#919B7E',
        '#284E5E',
        "#2B433A",
        '#93A48C',
        // row 2
        '#DD2931',
        '#F6931B',
        '#F6D632',
        '#50BBA2',
        '#3E6D86',
        // row 3
        '#CD3D3F',
        '#F6294E',
        '#ECD95D',
        '#25B995',
        '#0D404E',
        // row 4
        '#C4AE7C',
        '#BB7A3C',
        '#A98B95',
        '#73627A',
        '#271837',
        // row 5
        '#444F4F',
        '#9AB3A8',
        '#F2F5F6',
        '#B8AF94',
        '#785B4E'
    ])
    return (
        <div style={{maxWidth: '550px', display: 'flex', flexWrap: 'wrap', margin: '25% auto'}}>
            {/* <div style={{height: '100px', width: "100px", background: 'black'}}></div> */}
            {colors && colors.map(el => <div style={{height: '100px', width: "100px", background: el, margin: '10px 5px'}}></div>)}
        </div>
    )
}

export default Home