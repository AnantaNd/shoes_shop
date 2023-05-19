import Head from "next/head";
import Section from "../../components/Section/Section";
import { TableSize } from "../../components/TableSize/TableSize";
import style from './SizeChart.module.css';

export const size=[
  {
    id: 1, 
    us: 6,
    uk: 5.5,
    ue: 38.5,
    cm: 24,
  },
  {
    id: 2, 
    us: 6.5,
    uk: 6,
    ue: 39,
    cm: 24.5,
  },
]

export default function index(){
  return (
    <>
      <Head>
        <title>Shoes Shop | size-chart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <>
        <div className={style.container}>
          <Section>
            <h1>FIND YOUR SIZE</h1>
            <p>Use your measurements and the chart below to determine your shoe size</p>
          </Section>
          <Section>
            <TableSize dataSize={size} />
          </Section>
        </div>
      </>
    </>
  )
}