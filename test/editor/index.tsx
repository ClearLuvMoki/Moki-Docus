import "./index.less"
import {
  EditorRender,
} from 'moki-editor';
import type {Editor} from "moki-editor"
import React, {useEffect, useTransition} from 'react';
import {useState} from "react"
import {content} from "./content";
import ReactJson from 'react-json-view'


const EditorPage = () => {
  const [isPending, startTransition] = useTransition()
  const [editor, setEditor] = useState<Editor>(null);
  const [state, setState] = useState({
    jsonValue: {},
    htmlValue: content,
  })

  return (
    <div className={"EditorPage"}>
      <EditorRender
        ref={setEditor}
        content={content}
        onUpdate={({editor}) => {
          startTransition(() => {
            setState({
              htmlValue: editor?.getHTML(),
              jsonValue: editor?.getJSON(),
            })
          })
        }}
      />
      <div className={"EditorPage-Segment"}/>
      <div style={{display: "flex", gap: 10}}>
        <div className={"EditorPage-ResWrapper"} style={{background: "rgba(230, 247,255, .7)"}}>
          <h3>Output HTML:</h3>
          <span>{JSON.stringify(state?.htmlValue)}</span>
        </div>
        <div className={"EditorPage-ResWrapper"} style={{background: "rgba(18, 161,130, .2)"}}>
          <h3>Output JSON:</h3>
          <ReactJson
            collapsed={false}
            src={JSON.parse(JSON.stringify(state?.jsonValue || {}))}
          />
        </div>
      </div>
    </div>
  )
}
export default EditorPage;
