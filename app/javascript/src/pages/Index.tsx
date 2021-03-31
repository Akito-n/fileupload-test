/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useCurrentUser } from '@/src/hooks/currentUser'
import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Link } from 'react-router-dom'
import { UpdateUserInput, useUpdateUserMutation } from '../graphql'

type Props = {}

// type State = {}

export const Index: React.FC<Props> = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
  const { currentUser } = useCurrentUser()
  const [mutate] = useUpdateUserMutation()
  const [input, setInput] = useState<UpdateUserInput>({
    userId: '720b95f3-4ec2-4eee-9801-b4ca3802e3b8',
    avatar: null,
    example: '',
  })

  useEffect(() => {
    console.log(input)
  }, [input])

  // const files = acceptedFiles.map((file, i) => {
  //   file?.path && <li key={i}>{file.path}</li>
  // })

  useEffect(() => {
    console.log(acceptedFiles)
  }, [acceptedFiles])

  if (!currentUser) return <></>
  return (
    <>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag drop some files here, or click to select files</p>
      </div>
      {/* <ul>{files}</ul> */}
      <form
        encType="multipart/form-data"
        onSubmit={(e) => {
          e.preventDefault()
          mutate({
            variables: {
              input,
            },
          })
        }}
      >
        <input
          type="file"
          multiple
          onChange={(e) => {
            if (e.target.files) {
              console.log(e.target.files[0])
              setInput({ ...input, avatar: e.target.files })
            }
          }}
        />
        <label>example</label>
        <input
          type="text"
          onChange={(e) => {
            setInput({ ...input, example: e.target.value })
          }}
        />
        <button>送信</button>
      </form>
    </>
  )
}
