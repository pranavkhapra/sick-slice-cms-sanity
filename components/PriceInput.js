/* eslint-disable import/no-unresolved */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import PatchEvent, { set, unset } from 'part:@sanity/form-builder/patch-event';

function createPatchFrom(value) {
  return PatchEvent.from(value === '' ? unset() : set(Number(value)));
}
const formatMoney = Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'USD',
}).format;

function PriceInput(props) {
  return (
    <>
      <h2>
        {props.type.title} - {formatMoney(props.value / 100)}
      </h2>
      <p>{props.type.description}</p>
      <input
        type={props.type.type.name}
        value={props.value}
        onChange={(event) =>
          props.onChange(createPatchFrom(event.target.value))
        }
      />
    </>
  );
}

export default PriceInput;
