import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from "axios";
// component
import { CheckBoxList } from 'src/components/organisms/CheckBoxList';
// type
import { AxiosType, PrefData } from 'src/types';
type Styling = {}
type Props = {
  className?: string
}
const FCIndex: React.FC<Props & Styling> = ({ className }) => {
  const [prefData, setPrefData] = useState<PrefData[]>();
  useEffect(() => {
    axios
      .get <AxiosType>("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
        headers: { "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY },
      })
      .then((res) => {
        const prefArr = res.data.result;
        setPrefData(prefArr);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  return (
    <div className={className}>
      <CheckBoxList prefData={prefData} />
    </div>
  );
}

export const Index = styled(FCIndex)`
`

export default Index;
