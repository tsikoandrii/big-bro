import styled from 'styled-components'
import { useState } from "react";

const StyledNewPriceItem = styled.div`
  border-radius: 6px;
  border: 1px solid #AEAEAE;
  background: #FBFBFB;
  display: flex;
  align-items: center;
  padding: 16px;
  
  .price-item {
    
    &-master {
      font-size: 16px;
      font-weight: 500;
    }
  
    &-amount {
      font-size: 16px;
      border: 1px solid #c4c4c4;
      max-width: 100px;
      text-align: center;
      padding: 5px;
      margin-left: auto;
    }
  }
`

const NewPriceItem = ({ onChange, id, masterName }) => {
    const [value, setValue] = useState(amount)

    const changeHandler = (event) => {
        const price = event.target.value;
        setValue(price)
        onChange({
            id: id,
            value: price,
            action: 'update'
        })
    }

    return (
        <StyledPriceItem className="price-item">
            <div className="price-item-master">{masterName}</div>
            <input onChange={changeHandler} value={value} type="text" className="price-item-amount" placeholder="Ціна"/>
        </StyledPriceItem>
    );
};

export default NewPriceItem;