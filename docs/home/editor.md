---
title: Preview
order: 1
group:
  title: Moki Editor
demo:
  cols: 1
---

```jsx
/**
 * iframe: true 
 */

import { 
    EditorRender, 
    Editor,
} from 'moki-editor';
import {  
    Bold,
    Italic,
    Underline,
    Strike,
    Blockquote,
    InLineCode,
    Subscript,
    Superscript,
    TextAlign,
    BulletList,
    ListItem, 
} from "moki-editor/dist/extensions"

const EditorPage = () => {
    const [editor, setEditor] = useState<Editor | null>(null);
    
    return (
        <EditorRender
            ref={setEditor}
            extensions={[
                Bold,
                Italic,
                Underline,
                Strike,
                Blockquote,
                InLineCode,
                Subscript,
                Superscript,
                TextAlign.configure({
                    types: ['heading', 'paragraph'],
                }),
                ListItem,
                BulletList,
              ]}
        />
    )
}
export default EditorRender;
```
