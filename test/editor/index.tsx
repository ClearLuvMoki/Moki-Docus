import {
  EditorRender,
} from 'moki-editor';
import type {Editor} from "moki-editor"
import React from 'react';
import {useState} from "react"
import {content} from "./content";
import ReactJson from 'react-json-view'


const EditorPage = () => {
  const [editor, setEditor] = useState<Editor>(null);
  const [state, setState] = useState({
    jsonValue: {},
    htmlValue: "",
    textValue: ""
  })

  return (
    <div style={{width: "100%"}}>
      <EditorRender
        ref={setEditor}
        content={content}
        onUpdate={({editor}) => {
          console.log(editor?.getJSON(), 'editor?.getJSON()')
          setState({
            htmlValue: editor?.getHTML(),
            jsonValue: editor?.getJSON(),
            textValue: editor?.getText(),
          })
        }}
      />
      <div>
        <span>输出HTML:</span><span>{JSON.stringify(state?.htmlValue)}</span>
      </div>
      <div>
        <span>输出JSON:</span>
        <ReactJson
          src={state?.jsonValue}
        />
      </div>
      <div>
        <span>输出Text:</span><span>{JSON.stringify(state?.textValue)}</span>
      </div>
    </div>
  )
}
export default EditorPage;
