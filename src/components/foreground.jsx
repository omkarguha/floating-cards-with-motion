import React from "react";
import Cards from "./Cards";
import {useRef} from "react";

function foreground() {
  // const data=[
  //     desc, filesize, closeOrDownload, tagdetails
  // ];
  
  const ref=useRef(null);
  const data = [
    {
      desc: "Parcel works great for building single or multi-page React applications.",
      fileSize: "0.9mb",
      close: false,
      tag: { isOpen: true,tagTitle: "Download Now", tagColor: "green"},
      },
    {
        desc: "Parcel works great for building single or multi-page React applications.",
        fileSize: "0.9mb",
        close: true,
        tag: { isOpen: true,tagTitle: "Upload", tagColor: "red"},
      },
      {
        desc: "Parcel works great for building single or multi-page React applications.",
        fileSize: "0.9mb",
        close: false,
        tag: { isOpen: true,tagTitle: "Download Now", tagColor: "green"},
      },
      {
        desc: "Parcel works great for building single or multi-page React applications.",
        fileSize: "0.9mb",
        close: false,
        tag: { isOpen: false,tagTitle: "Download Now", tagColor: "green"},
      },
      {
        desc: "Parcel works great for building single or multi-page React applications.",
        fileSize: "0.9mb",
        close: false,
        tag: { isOpen: true,tagTitle: "Download Now", tagColor: "orange"},
      },
      {
        desc: "Parcel works great for building single or multi-page React applications.",
        fileSize: "0.9mb",
        close: true,
        tag: { isOpen: false,tagTitle: "Download Now", tagColor: "green"},
      },
  ];
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full bg-sky-800/20 flex gap-10 flex-wrap p-5">
        {data.map((item,index)=>(
            <Cards data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default foreground;
