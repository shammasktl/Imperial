import React from 'react';
import { accreditation } from '../../assets/assets';

const Accreditations = () => {
    return (
        <div className='accreditations flex flex-col justify-center items-center gap-28 bg-white py-10'>
            <h1 className='font-semibold text-4xl mt-9'>Accreditations</h1>
            <div className="creditimage grid grid-cols-1 items-center justify-center sm:grid-cols-2 md:grid-cols-4 gap-14">
                {
                    accreditation.map((item, index) => {
                        return (
                            <div className="images" key={index}>
                                <img src={item.image} className='w-96' alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Accreditations
