/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Layouts from '../../components/Layouts/Layouts';
import style from './About.module.css';

export default function index(){

  const [isData, setIsData] = useState('');
  const { register, handleSubmit } = useForm();
  
  
  const onSubmit =(data)=> {
    setIsData(data)
    console.log(isData)
  };


  return (
    <Layouts>
      <div className={style.container}>
        <div className={style.about}>
          <h1 className={style.title}>about us</h1>
          <p className={style.desc_about}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className={style.comment}>
          <h1 className={style.title_comment}>Contact Us</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className={style.input_email}  placeholder='email'/>
            <textarea className={style.input_comment} placeholder="Type your message" />
            <button className={style.btn_submit} type='submit'>submit</button>
          </form>
        </div>
      </div>
    </Layouts>
  )
}