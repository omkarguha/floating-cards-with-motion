import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";

function Cards({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={0.5} className='relative flex-shrink-0 w-60 h-72 bg-zinc-900/80 rounded-[30px] text-white py-10 px-8 overflow-hidden'>
        <h4 className='px-1.5'>HOLD AND MOVE ME</h4>
        <br></br>
        <FaFileAlt/>
        <p className='text-sm leading-tight mt-3 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center py-3 px-9 mb-3 justify-between mb-5'>
                <h5>{data.fileSize}</h5>
                <span className='w-7 h-7 bg-sky-200 rounded-full flex items-center justify-center'>
                    {data.close ? <RxCross1 size="1.1em" color='#000'/> : <BsDownload size="1.1em" color='#000'/> }
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor==="green" ? "bg-green-600" : "bg-blue-600"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
            )}
        </div>
    </motion.div>
  )
}
export default Cards
