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
  width: 6em;
  margin: 5px;
  cursor: pointer;
  ${({ theme }) => theme.media.sp`
    width: 30%;
  `}
  label {
    cursor: pointer;
  }
  input {
    cursor: pointer;
  }
`