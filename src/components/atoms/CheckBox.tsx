import React from 'react';
import styled from 'styled-components';
// type
import { PrefData } from 'src/types';

type Props = {
  className?: string;
  prefData: PrefData;
}

export const FCCheckBox: React.FC<Props> = ({
  className,
  prefData
}) => {
  return (
    <div className={className}>
      <label htmlFor={prefData.prefName}>{prefData.prefName}</label>
      <input
        type="checkbox"
        id={prefData.prefName}
      />
    </div>
  )
}
export const CheckBox = styled(FCCheckBox)`
  margin-right: 10px;
`