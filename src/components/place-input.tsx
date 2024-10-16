import React, { useRef } from 'react'

import { Card } from '~/components/ui/card'
import Input from '~/components/ui/input'

interface LocationInputProps {
  inputs: string[]
  onChange: (index: number, event: React.ChangeEvent<HTMLInputElement>) => void
  icon: React.ReactNode
}

export default function PlaceInput({
  inputs,
  onChange,
  icon,
}: LocationInputProps) {
  const inputRefs = useRef<string[]>(inputs)

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    inputRefs.current[index] = event.target.value
    onChange(index, event)
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <span className="text-center text-large font-semibold text-gray-400">
          어디를 산책할까요?
        </span>
      </div>
      <Card className="m-5 w-full">
        <Input
          value={inputs[0]}
          icon={icon}
          onChange={(e) => handleInputChange(0, e)}
        />
        <hr className="my-4 border-dashed border-gray-400" />
        <Input value={inputs[1]} onChange={(e) => handleInputChange(1, e)} />
      </Card>
    </>
  )
}
