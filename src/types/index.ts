import { AxiosResponse } from "axios"

export type PrefData = {
  prefCode: number;
  prefName: string;
}
export type AxiosType = AxiosResponse & {
  result: PrefData[]
}