import styled from 'styled-components'
import {useEffect, useState} from "react";
import Select from 'react-select';

import DELETE_ICON from 'icons/close.svg'

const StyledPriceItem = styled.div`
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
    
    &-delete {
      background: #ff2d55;
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 5px;
      cursor: pointer;
      
      img {
        width: 14px;
        height: 14px;
      }
    }
  }
`

const PriceItem = ({ amount, onChange, id, master, masters }) => {
    const [value, setValue] = useState(amount)
    const [selectedOption, setSelectedOption] = useState(11);

    const options = masters.map((master) => {
        return {
            value: master.id,
            label: master.attributes.name,
        }
    })

    const changeHandler = (event) => {
        const price = Number(event.target.value);
        setValue(price)
        onChange({
            id: id,
            amount: price,
            action: 'update'
        })
    }

    const selectHandler = (value) => {
        setSelectedOption(value)
        onChange({
            id: id,
            master: value.value,
            action: 'update'
        })
    }

    const deleteHandler = () => {
        onChange({
            id: id,
            action: 'delete'
        })
    }

    useEffect(() => {
        setSelectedOption(options.filter(option => option.value === master)[0])
    }, [masters]);

    return (
        <StyledPriceItem className="price-item">
            <Select
                value={selectedOption}
                onChange={selectHandler}
                options={options}
                placeholder="Майстер"
            />
            <input onChange={changeHandler} value={value} type="number" className="price-item-amount" placeholder="Ціна"/>
            <button type="button" onClick={deleteHandler} className="price-item-delete">
                <img src={DELETE_ICON} alt="delete"/>
            </button>
        </StyledPriceItem>
    );
};

export default PriceItem;