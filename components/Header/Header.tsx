'use client'

import Image from 'next/image'

const Header = () => {
  return (
    <div className="flex justify-between fixed top-0 left-0 w-screen z-[100] p-4">
      <div className="font-nounish text-4xl">myco.wtf</div>
      <a href="https://github.com/SweetmanTech/lora-profile" target="_blank">
        <div className="flex items-center gap-3">
          ⌐◨-◨
          <Image src="/images/zorb.png" height={50} width={50} alt="zorb" />
        </div>
      </a>
    </div>
  )
}

export default Header
