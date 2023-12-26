'use client'

import Image from 'next/image'
import React, { useState } from 'react'

type Faq_divProps = {
    question: string,
    answer: string,
    index: number
}

function Faq_div({question, answer, index}: Faq_divProps) {
    const [isCollapsed, collapse] = useState(true);

  return (
    <div className='grid gap-5 max-w-[600px]'>
        { index!=0 && <hr className='border-[1px]'/>}
        <div className='flex items-center justify-between'>
            <h2 className='font-heavy text-lg max-w-[80%] hover:text-grayish_purple cursor-pointer'>
                { question }
            </h2>
            <div onClick={(e) => {collapse(!isCollapsed)}}>
                {isCollapsed? 
                <Image src="/icon-plus.svg" height={30} width={30} alt=''/>
                :
                <Image src="/icon-minus.svg" height={30} width={30} alt=''/>
                }
            </div>
        </div>
        <p className={`${isCollapsed? 'hidden':'block'} transition-all`}>
            { answer }
        </p>
    </div>
  )
}

export default Faq_div