/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useCurrentUser } from '@/src/hooks/currentUser'
import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Link } from 'react-router-dom'
import {
  UpdateUserInput,
  UpdateUserOnlyNameInput,
  useUpdateUserMutation,
  useUpdateUserOnlyNameMutation,
} from '../graphql'

type Props = {}

// type State = {}

export const Index: React.FC<Props> = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone()
  const { currentUser } = useCurrentUser()
  const [mutate] = useUpdateUserMutation()
  const [otherMutate] = useUpdateUserOnlyNameMutation()
  const [otherInput, setOtherInput] = useState<UpdateUserOnlyNameInput>({
    userId: currentUser?.id || '',
    example: '',
  })
  const [input, setInput] = useState<UpdateUserInput>({
    userId: '',
    avatar: null,
    example: '',
  })

  console.log(currentUser?.imageUrl)

  useEffect(() => {
    if (!currentUser) return
    setInput({ ...input, userId: currentUser.id })
  }, [currentUser])

  // const files = acceptedFiles.map((file, i) => {
  //   file?.path && <li key={i}>{file.path}</li>
  // })

  useEffect(() => {
    console.log(acceptedFiles)
  }, [acceptedFiles])

  if (!currentUser) return <></>
  return (
    <>
      <div>
        {currentUser.imageUrl ? <img src={currentUser.imageUrl} /> : <></>}
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <p>Drag drop some files here, or click to select files</p>
        </div>
        {/* <ul>{files}</ul> */}
        <form
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
          <button>??????</button>
        </form>
      </div>
      <div>
        <label>????????????</label>
        <input
          type="text"
          onChange={({ target }) => {
            setOtherInput({ ...otherInput, example: target.value })
          }}
        />
        <button
          onClick={() => {
            otherMutate({
              variables: {
                input: otherInput,
              },
            })
          }}
        >
          ????????????
        </button>
      </div>
    </>
  )
}
