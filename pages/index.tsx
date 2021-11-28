import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from "axios";
// component
import { CheckBoxList } from 'src/components/organisms/CheckBoxList';
import { Graph } from 'src/components/organisms/Graph';
// type
import { AxiosType, PrefData, PrefPopulationData, ReturnPopulationData } from 'src/types';
import { Title } from 'src/components/atoms/Title';
type Styling = {}
type Props = {
  className?: string
}
const FCIndex: React.FC<Props & Styling> = ({ className }) => {
  const [prefData, setPrefData] = useState<PrefData[]>();
  const [masterPrefPopulationData, setMasterPrefPopulationData] = useState<PrefPopulationData[]>([]);
  const [prefPopulationData, setPrefPopulationData] = useState<PrefPopulationData[]>([]);
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

  const handleClick = async(prefName: string, prefCode: number, checked: boolean) => {
    if (checked) {
      try {
        if (masterPrefPopulationData.map((item) => item.name).includes(prefName)) {
          const masterData = masterPrefPopulationData.filter((value) => {
            return value.name === prefName;
          });
          setPrefPopulationData([...prefPopulationData, {data: masterData[0].data, name: masterData[0].name}]);
        } else {
          const res = await axios
          .get <ReturnPopulationData>(
            "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=" +
            prefCode,
            {
              headers: { "X-API-KEY": process.env.NEXT_PUBLIC_RESAS_API_KEY },
            }
          )
          const prefPopulation = res.data;
          setMasterPrefPopulationData([
            ...prefPopulationData,
            {
              data: prefPopulation.result.data[0].data.map((item) => item.value),
              name: prefName
            }
          ]);
          setPrefPopulationData([
            ...prefPopulationData,
            {
              data: prefPopulation.result.data[0].data.map((item) => item.value),
              name: prefName
            }
          ]);
        }
      } catch (error) {
        alert(error);
      }
    } else {
      const deletePrefPopulation = prefPopulationData.filter((value) => {
        return value.name !== prefName;
      })
      setPrefPopulationData(deletePrefPopulation);
    }
  }

  return (
    <div className={className}>
      <Title text="都道府県別 総人口推移グラフ" />
      <CheckBoxList prefData={prefData} onChange={handleClick} />
      <Graph data={prefPopulationData} />
    </div>
  );
}

export const Index = styled(FCIndex)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Index;
