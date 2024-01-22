import React, { useState } from 'react';
import './dm.scss';
import 'bootstrap/dist/css/bootstrap.min.css'



const Form = () => {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        tel: "",
        type: "",
        email: "",
    })

    const { name, address, type, email, tel } = formData;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        setFormData({
            ...formData,
            [id]: value,
        });
    }

    const splitParagraph = () => {
        const text = "잘먹을까? 잘맞을까? 고민이시라면? | 무료 체험 사료로 시작해보세요!";
        const splitText = text.split(' | ');

        return splitText.map((part, index) => (
            <p className="mb-0" key={index}>{part}</p>
        ));
    }

    return (
        <>
            <section id="form" className="">
                <div id="sectionForm" className="px-4"  >
                    <form action="" className="d-md-flex flex-wrap  container" >
                        <div className="col-md-12 d-md-flex justify-content-center  ">
                            <div id="formhd" className="w-100 p-0  mb-4  position-rel">
                                <h2>맞춤영양 무료 체험 프로그램</h2>
                                {splitParagraph()}
                            </div>

                        </div>
                        <div className='col-lg-8 ms-auto'>

                            <fieldset className="box  d-md-flex ">
                                <div className="list_wrap row mx-0">
                                    <div className="col-md-6 " >

                                        <ul className='px-0 mb-0'>
                                            <li className="item my-2">
                                                <div className="input_box1">
                                                    <label htmlFor="name" className="p-0"></label>
                                                    <input type="text" className='w-100' name="name" id="name" defaultValue={name} onChange={onChange} placeholder="이름" />

                                                </div>
                                            </li>
                                            <li className="item my-2">
                                                <div className="input_box1">
                                                    <label htmlFor="address" className="p-0"></label>
                                                    <input type="text" name="address" className='w-100' id="address" address="" defaultValue={address} onChange={onChange} placeholder="주소" />
                                                </div>
                                            </li>
                                            <li className="item my-2">
                                                <div className="input_box align-items-center"> 종류:
                                                    <label htmlFor="department">강아지:</label>
                                                    <input type="radio" name="department" id="department" defaultValue="" defaultChecked />
                                                    <label htmlFor="chk2">고양이:</label>
                                                    <input type="radio" name="department" id="chk2" defaultValue="" />
                                                </div>
                                            </li>
                                            <li className="item my-2 ">
                                                <div className="input_box align-items-center ib">연령:
                                                    <label htmlFor="chk3">이유기:</label>
                                                    <input type="radio" name="departmen" id="chk3" defaultValue="" defaultChecked />
                                                    <label htmlFor="chk4">성장기:</label>
                                                    <input type="radio" name="departmen" id="chk4" defaultValue="" />
                                                    <label htmlFor="chk5">성년기:</label>
                                                    <input type="radio" name="departmen" id="chk5" defaultValue="" />
                                                </div>
                                            </li>
                                            <li className="item my-2">
                                                <div className="input_box  align-items-center "> 유형:
                                                    <label htmlFor="chk6">건식:</label>
                                                    <input type="radio" name="departme" id="chk6" defaultValue="" defaultChecked />
                                                    <label htmlFor="chk7">냉동:</label>
                                                    <input type="radio" name="departme" id="chk7" defaultValue="" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 ">
                                        <ul className='px-0 mb-0'>
                                            <li className="item my-2">
                                                <div className="input_box1">
                                                    <label htmlFor="tel" className="p-0"></label>
                                                    <input type="text" name="tel" id="tel" defaultValue={tel} className='w-100' onChange={onChange} placeholder="연락처" />
                                                </div>
                                            </li>
                                            <li className="item my-2">
                                                <div className="input_box1">
                                                    <label htmlFor="email" className="p-0"></label>
                                                    <input type="text" name="email" id="email" defaultValue={email} onChange={onChange} className="input_tel w-100" placeholder="이메일" />
                                                </div>
                                            </li>
                                        </ul>
                                        <textarea name="" className="text position-rel my-3 col-md-6 col-sm-6 d-block w-100" id="tx" cols="36" rows="5"
                                            placeholder="반려동물의 특이사항을 적어주세요."></textarea>
                                    </div>
                                    <div className="check_box col-md-12">
                                        <div className="item d-flex my-3">
                                            <div className="d-flex col-sm-12">
                                                <input type="checkbox" className="d-flex align-items-center" name="agree" defaultValue="Y" id="c1" />
                                                <label htmlFor="c1"><span>마케팅 목적으로 개인정보 수집 및 이용하는 것에 동의합니다.
                                                    <a href="/kr/guide/privacy" target="_blank" className="btn_privacy">개인정보처리방침 보기</a></span></label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn ml-3 col-sm-1">전송</button>

                                </div>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </section >

        </>
    );
};

export default Form;
