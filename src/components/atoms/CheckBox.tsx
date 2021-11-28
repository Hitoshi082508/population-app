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
      <label htmlFor={prefData.prefName}>{prefData.prefName}</label>
      <input
        type="checkbox"
        onChange={(e) => onChange(prefData.prefName, prefData.prefCode, e.target.checked)}
        id={prefData.prefName}
      />
    </div>
  )
}
export const CheckBox = styled(FCCheckBox)`
  margin-right: 10px;
`