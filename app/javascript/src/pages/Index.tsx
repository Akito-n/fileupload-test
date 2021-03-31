import { useCurrentUser } from '@/src/hooks/currentUser'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UpdateUserInput, useUpdateUserMutation } from '../graphql'

type Props = {}

// type State = {}

export const Index: React.FC<Props> = () => {
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

  if (!currentUser) return <></>
  return (
    <>
      <Link to="/chat">Go to chat</Link>
      <input
        type="file"
        onChange={(e) => {
          if (e.target.files) {
            console.log(e.target.files[0])
            setInput({ ...input, avatar: e.target.files[0] })
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
      <button
        onClick={() => {
          mutate({
            variables: {
              input,
            },
          })
        }}
      >
        送信
      </button>
    </>
  )
}
