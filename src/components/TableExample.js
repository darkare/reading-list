import React, { useState } from 'react';
import './tableExample.css';
const TableExample = () => {

    const [selectedIndex, setIndex] = useState ({idx: 1});

    const selectMyDiv = (idx) => {
      console.log(idx);
      setIndex({idx});
    };

    return (  
        <div>
                <div className='div-container'>
                    <div className='div-header'>
                        <div>header1</div>
                        <div>header3</div>
                        <div>header4</div>
                    </div>
                    <div />
                </div>
                <div className='div-container'>
                    <div>
                        <div className={`div-row${selectedIndex.idx === 1?"-selected":""}`} 
                             onClick={()=>selectMyDiv(1)}>
                            <div>row 1 1</div>
                            <div>row 1 2</div>
                            <div>row 1 3</div>
                        </div>
                        <div className={`div-row${selectedIndex.idx === 2?"-selected":""}`} 
                             onClick={()=>selectMyDiv(2)}>
                            <div>row 2 1</div>
                            <div>row 2 2</div>
                            <div>row 2 3</div>
                        </div>
                        <div className={`div-row${selectedIndex.idx === 3?"-selected":""}`} 
                             onClick={()=>selectMyDiv(3)}>
                            <div>row 3 1</div>
                            <div>row 3 2</div>
                            <div>row 3 3</div>
                        </div>
                    </div>
                    <div className='div-details'>details text blah asdfh asdjkf asf  jkadhjkf ajkdfjk hajk dfjk jk</div>
                </div>
            </div>
    );
}


export default TableExample;