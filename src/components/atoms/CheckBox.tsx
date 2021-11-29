import React from 'react';
import styled from 'styled-components';
// type
import { PrefData } from 'src/types';

type Props = {
  className?: string;
  prefData: PrefData;
  onChange: (prefName: string, prefCode: number, checked: boolean) => void;
}

export const FCCheckBox: React.FC<Props> = ({
  className,
  prefData,
  onChange
}) => {
  return (
    <div className={className}>
      <input
        type="checkbox"
        onChange={(e) => onChange(prefData.prefName, prefData.prefCode, e.target.checked)}
        id={prefData.prefName}
      />
      <label htmlFor={prefData.prefName}>{prefData.prefName}</label>
    </div>
  )
}
export const CheckBox = styled(FCCheckBox)`
  margin: 5px;
  background-color: #F2F3F6;
  cursor: pointer;
  label {
    color: #333;
    cursor: pointer;
  }
  input {
    cursor: pointer;
  }
`