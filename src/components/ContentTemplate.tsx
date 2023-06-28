'use client'
import { MdPreview } from 'md-editor-rt'

export function ContentTemplate({ content }: { content: string }) {
  return (
    <MdPreview
      editorId='preview-only'
      modelValue={content}
      theme='dark'
      language='en-US'
      codeTheme='github'
    />
  )
}
