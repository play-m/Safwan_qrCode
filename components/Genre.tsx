"use client"
import { useState } from "react"
import QRCode from "qrcode";
import { Buffer } from "buffer";
import Image from "next/image";

const Genre = () => {
    const [text, setText] = useState('')
    const [info, setinfo] = useState(null)

    const genretQr = async () => {
        try{
            const data = await QRCode.toDataURL(text, { width: 256, height: 256});
            const imageData = data.replace(/^data:image\/png;base64,/, '');
            const buffer = Buffer.from(imageData, 'base64');
            setinfo(buffer)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="flex flex-col justify-between items-center mt-16">
      <div>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onClick={genretQr}
          className="border border-slate-800 bg-slate-900 py-5 px-24 rounded-md text-white font-[20px] text-start"
          required
        />
      </div>
      <div className="mt-16">
        {info &&
        <Image
          alt="qr code"
          width={256}
          height={40}
          src={`data:image/png;base64,${info.toString("base64")}`}
          className="rounded-md"
        />
        }
      </div>
    </div>
  );
}

export default Genre