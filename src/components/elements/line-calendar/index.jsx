import React from "react"
import { Datepicker } from "@meinefinsternis/react-horizontal-date-picker"
import { uk } from "date-fns/locale"
import styled from 'styled-components'

const StyledLineCalendar = styled.div`
  padding: 0 12px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;

  // Month Label
  .Er .jb {
    font-size: 15px;
    font-weight: 400;
    color: rgb(128, 128, 128);
    margin-left: 0;
  }

  // Week label
  .Lx {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    color: rgb(128, 128, 128);
    margin-bottom: 0;
  }

  // On Active
  .FC {
    background: transparent;
  }

  .FC ._1g {
    background: #FFCB46;
    color: #000;
  }

  ._3n:not(.FC):hover ._1g {
    background: #c4c4c4;
  }

  // Wrapper on days
  .Tx {
    margin-top: 16px;
  }

  // Day Number
  ._1g {
    height: 32px;
    width: 32px;
    margin-top: 12px;
    border-radius: 50%;
    transition: all .2s;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // Cancel default hover
  ._3n:not(.FC):hover {
    background: transparent;
  }

  // Arrows
  .dM {
    position: relative;
    padding: 15px 0;

    button.Kq {
      transform: translateY(-50%);
      height: 20px;
      width: 40px;
      z-index: 9;
      background: #fff;
      margin-top: 20px !important;

      &::after {
        content: none;
      }

      svg {
        width: 16px;
        height: 16px;
      }

      &:first-child {
        position: absolute;
        top: 0;
        right: 30px;
        z-index: 9;
      }

      &:last-child {
        position: absolute;
        top: 0;
        right: 0;
        justify-content: flex-end;
      }
    }
  }
`

const LineCalendar = ({ date, onSelect, busyDays = [] }) => {
    const handleChange = (d) => {
        onSelect(d[0])
        console.log(d)
    };

    const disabledDates = busyDays.map(day => {
        if (day) {
            return new Date(day);
        }
    })

    return (
        <StyledLineCalendar>
            <Datepicker
                onChange={handleChange}
                locale={uk}
                startValue={date}
                endValue={date}
                disabledDates={disabledDates}
            />
        </StyledLineCalendar>
    );
};

export default LineCalendar