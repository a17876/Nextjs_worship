
import { FloatingLabelInput } from '@/components/FloatingLabelInput'
import { UploadButton } from '@/components/UploadButton'
import React from 'react'

export default function page() {
  return (
    <>
    
    <FloatingLabelInput />
    <FloatingLabelInput />
    <FloatingLabelInput />
    <div className='flex w-1/2 justify-center items-center'><UploadButton /></div>
    </>
  )
}
