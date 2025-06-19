
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './styles.css'

function Accordion({ items }) {
    const [showItem, setShowItem] = useState(null)
    const handleItem = (index) => {
        setShowItem(showItem === index ? null : index)
    }
    return (
        <>
            <div className="accordion">
                {items?.map((item, index) => (
                    < div key={index} className="accordion-item">

                        <button className="accordion-title" onClick={() => handleItem(index)}>{item.title}  
                              <span style={{
                                float: "right"
                              }}>{showItem === index ? <FaChevronDown /> : <FaChevronUp />}</span></button>


                        {showItem === index && < div className="accordion-content">{item.content}</div>}
                    </div>
                ))}
                {items?.length === 0 && <div>No items available</div>}
            </div>
        </>
    );
}

export default Accordion;