import React from 'react';
import styled from 'styled-components';
//component
import { CheckBox } from 'src/components/atoms/CheckBox';
//type
import { PrefData } from 'src/types';

type Props = {
  className?: string;
  prefData: PrefData[];
  onChange: (prefName: string, prefCode: number, checked: boolean) => void;
}
export const FCCheckBoxList: React.FC<Props> = ({
  className,
  prefData,
  onChange
}) => {
  return (
    <div className={className}>
      {prefData?.map((prefData, index) => {
        return (
          <CheckBox prefData={prefData} key={index} onChange={onChange}/>
        );
      })}
    </div>
  )
}
export const CheckBoxList = styled(FCCheckBoxList)`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`