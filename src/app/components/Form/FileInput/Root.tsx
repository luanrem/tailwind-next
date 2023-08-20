'use client'

import { ComponentProps, createContext, useContext, useId, useState } from 'react'

export type RootProps = ComponentProps<'div'>

type FileInputContexType = {
  id: string
  files: File[]
  onFileSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as FileInputContexType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ id, files, onFileSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)