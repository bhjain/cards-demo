import React, {useMemo} from 'react';
import {useDropzone} from 'react-dropzone';
import Mint from '../Buttons/Mint';
import './Nft.css';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '2%',
  paddingBottom: "10%",
  borderWidth: 2,
  borderRadius: 30,
  borderColor: '#000000',
  borderStyle: 'dashed',
  backgroundColor: '#C2C2C2',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2874f0'
};

const acceptStyle = {
  borderColor: '#2874f0',
  backgroundColor: "#FFF"
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function CreateNft(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone();

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isDragActive,
    isDragReject,
    isDragAccept
  ]);

  return (
      <div className="my-14">
        <div className="w-4/5 mx-auto p-2" style={{backgroundColor: "#C2C2C2"}}>
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                <img style={{width: "20%"}} src="drop_box.png" alt="" />
                <p className="w-1/3 md:w-full text-center" style={{color: "#000000", fontSize: "2rem"}}>Drag & Drop Your Creation</p>
            </div>
        </div>

        <div className="data w-4/5 mx-auto mt-14">
            <form className="flex-col" action="">
                <input className="img_input w-full mb-4 py-2 px-4" type="text" placeholder="Title" />
                <textarea className="w-full mt-4 px-4 py-2" id="w3review" name="w3review" rows="5" cols="50" placeholder="Description"></textarea>
            </form>
        </div>
        <div className="flex justify-center mt-8 md:flex-col">
            <div className="text-center mr-4 md:mx-auto md:m-0">
                <div className="price_btn flex w-56 justify-center items-center bg-white p-4 mb-2 md:p-3">
                    <h4 className="w-3/6 text-center font-bold" style={{borderRight: "1px solid #C2C2C2"}}>Price</h4>
                    <input className="w-3/6 pl-4" type="text" placeholder="Rs 0" />
                </div>
                <p style={{fontSize: "8px"}}>Price you would like your NFT to be listed at.</p>
            </div>
            <div className="text-center mr-4 md:mx-auto md:mt-4">
                <div className="price_btn flex w-56 justify-center items-center bg-white p-4 mb-2 md:p-3">
                    <h4 className="w-4/6 text-center font-bold" style={{borderRight: "1px solid #C2C2C2"}}>Royalty %</h4>
                    <input className="w-2/6 pl-4" type="text" placeholder="0%" />
                </div>
                <p style={{fontSize: "8px"}}>Price you would like your NFT to be listed at.</p>
            </div>
        </div>

        <div className="my-20 pb-40">
            <h4 className="text-2xl w-2/6 mx-auto md:w-5/6 md:text-center md:text-xl">Service fee <span className="font-bold">0% <br></br></span>You will receive <span className="font-bold">0.0 NFC <span className="text-sm">0 Rs </span></span></h4>
            <div className="flex justify-center mt-10">
                <Mint back={'#FFFF0A'} color={'#000000'} />
            </div>
        </div>
      </div>
  );
}

export default CreateNft;