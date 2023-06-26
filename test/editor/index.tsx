
import {
  EditorRender,
  Editor,
} from 'moki-editor';
import React from 'react';
import {useState} from "react"


const EditorPage = () => {
  const [editor, setEditor] = useState<Editor>(null);
  const [content, setcontent] = useState(
    `<h1 data-blockid="cb8c3cc1-cc37-4407-a5a7-34d7f6d30c32"><span contentEditable="false" className="heading-actions "><button
      type="button" className="heading-fold "><svg fill="currentColor" width="12" height="24" viewBox="6 0 12 24"
                                                   xmlns="http://www.w3.org/2000/svg"><path
      d="M8.23823905,10.6097108 L11.207376,14.4695888 L11.207376,14.4695888 C11.54411,14.907343 12.1719566,14.989236 12.6097108,14.652502 C12.6783439,14.5997073 12.7398293,14.538222 12.792624,14.4695888 L15.761761,10.6097108 L15.761761,10.6097108 C16.0984949,10.1719566 16.0166019,9.54410997 15.5788477,9.20737601 C15.4040391,9.07290785 15.1896811,9 14.969137,9 L9.03086304,9 L9.03086304,9 C8.47857829,9 8.03086304,9.44771525 8.03086304,10 C8.03086304,10.2205442 8.10377089,10.4349022 8.23823905,10.6097108 Z"></path></svg></button></span><span
      className="heading-content">标题1🚀</span></h1>
  <div className="flow" data-blockid="8a34c127-ab76-4def-8b79-c4541d666e85" width="100%" height="240"
       svg="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMjFweCIgaGVpZ2h0PSI4MXB4IiB2aWV3Qm94PSItMC41IC0wLjUgMTIxIDgxIj48ZGVmcy8+PGc+PGVsbGlwc2UgY3g9IjYwIiBjeT0iNDAiIHJ4PSI2MCIgcnk9IjQwIiBmaWxsPSIjZmZmMmNjIiBzdHJva2U9IiNkNmI2NTYiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48L2c+PC9zdmc+"
       xml="<mxfile host=&quot;embed.diagrams.net&quot; modified=&quot;2022-10-23T11:48:14.021Z&quot; agent=&quot;5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36&quot; version=&quot;20.5.1&quot; etag=&quot;9fpq5_4ecPRwerqV-3WC&quot; type=&quot;embed&quot;><diagram id=&quot;lCcOjOEXR9O5_LBVFz-6&quot; name=&quot;第 1 页&quot;>jZJNU4QwDIZ/DXegingVd/XiiYPnSgPtWAhTugL+esO25WN2dsYLkzxJSPMmESva6c3wXn6gAB2lsZgi9hqlKUty+i5gdiCLHxxojBIOJRso1S94GHt6UQKGQ6JF1Fb1R1hh10FlD4wbg+MxrUZ97NrzBm5AWXF9Sz+VsNLRPH3a+DuoRobOSfbsIi0PyX6SQXKB4w6xU8QKg2id1U4F6EW7oIurO9+Jrg8z0Nn/FKSu4Ifri5/Nv8vOYVgqIF3JeRmlslD2vFoiI22WmLStJi8hs1ZaF6jRXOtYXddpVREfrMFv2EVE9pU9ZhTxzcFYmO4OkKyy0DkBtmDNTCmhIPNK+lNalR23xSSByd1Scs+4v4Vm/fUmFxleseBum7nGdufNTn8=</diagram></mxfile>"></div>
  <div className="mind" data-blockid="234cad54-5a99-4a0f-ab2c-fdd80eef853b" defaultshowpicker="false" width="100%"
       height="240"
       data="{&quot;root&quot;:{&quot;data&quot;:{&quot;text&quot;:&quot;中心节点&quot;},&quot;children&quot;:[{&quot;data&quot;:{&quot;id&quot;:&quot;cnt71y7zk3c0&quot;,&quot;created&quot;:1666517229599,&quot;text&quot;:&quot;1&quot;},&quot;children&quot;:[]}]},&quot;template&quot;:&quot;default&quot;,&quot;theme&quot;:&quot;fresh-purple&quot;,&quot;version&quot;:&quot;1.4.43&quot;}"
       svg="<svg id=&quot;kity_svg_86&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; xmlns:xlink=&quot;http://www.w3.org/1999/xlink&quot; version=&quot;1.1&quot; width=&quot;320&quot; height=&quot;80&quot; style=&quot;background: rgb(251, 251, 251); visibility: visible;&quot; viewBox=&quot;0 0 320 80&quot;><defs id=&quot;kity_defs_87&quot;><linearGradient id=&quot;kity_linearGradient_97&quot; x1=&quot;0&quot; y1=&quot;0&quot; x2=&quot;0&quot; y2=&quot;1&quot;><stop id=&quot;kity_stop_98&quot; offset=&quot;0&quot; stop-color=&quot;rgb(255, 255, 255)&quot;></stop><stop id=&quot;kity_stop_99&quot; offset=&quot;1&quot; stop-color=&quot;rgb(204, 204, 204)&quot;></stop></linearGradient><marker id=&quot;kity_marker_2&quot; orient=&quot;auto&quot; refX=&quot;6&quot; refY=&quot;0&quot; viewBox=&quot;-7 -7 14 14&quot; markerWidth=&quot;7&quot; markerHeight=&quot;7&quot; markerUnits=&quot;userSpaceOnUse&quot;><path id=&quot;kity_path_3&quot; fill=&quot;rgb(123, 115, 191)&quot; stroke=&quot;none&quot; d=&quot;M6,0A6,6,0,1,1,-6,0A6,6,0,1,1,6,0&quot;></path></marker></defs><g id=&quot;kity_g_88&quot;><g id=&quot;minder5&quot; text-rendering=&quot;optimize-speed&quot;><g id=&quot;minder_connect_group5&quot;><path id=&quot;kity_path_105&quot; fill=&quot;none&quot; stroke=&quot;rgb(123, 115, 191)&quot; stroke-width=&quot;1&quot; d=&quot;M76.5,40.5A174,0,0,0,1,250.5,40.5&quot;></path></g><g id=&quot;minder_node6&quot;><path id=&quot;node_outline6&quot; fill=&quot;rgb(123, 115, 191)&quot; stroke=&quot;rgb(61, 57, 96)&quot; d=&quot;M25.5,20.5h102a5,5,0,0,1,5,5v30a5,5,0,0,1,-5,5h-102a5,5,0,0,1,-5,-5v-30a5,5,0,0,1,5,-5z&quot; stroke-width=&quot;3&quot;></path><g id=&quot;node_text6&quot; fill=&quot;white&quot;><text id=&quot;kity_text_102&quot; text-rendering=&quot;inherit&quot; font-size=&quot;16&quot; dy=&quot;.8em&quot; y=&quot;32.5&quot; x=&quot;44.5&quot;>中心节点</text></g></g><g id=&quot;kity_g_92&quot;><path id=&quot;kity_path_93&quot; fill=&quot;none&quot; stroke=&quot;none&quot; d=&quot;M44.5,40.5h0v0h0z&quot;></path></g><g id=&quot;kity_g_94&quot;><path id=&quot;kity_path_95&quot; fill=&quot;none&quot; stroke=&quot;none&quot; d=&quot;M44.5,40.5h0v0h0z&quot;></path><path id=&quot;kity_path_96&quot; fill=&quot;none&quot; stroke=&quot;none&quot;></path></g><g id=&quot;minder_node7&quot;><g id=&quot;node_expander2&quot; display=&quot;none&quot; style=&quot;cursor: pointer;&quot;><path id=&quot;kity_path_110&quot; fill=&quot;white&quot; stroke=&quot;gray&quot; d=&quot;M251.5,40.5A6,6,0,1,1,239.5,40.5A6,6,0,1,1,251.5,40.5&quot;></path><path id=&quot;kity_path_111&quot; fill=&quot;none&quot; stroke=&quot;gray&quot;></path></g><path id=&quot;node_outline7&quot; fill=&quot;rgb(239, 238, 246)&quot; stroke=&quot;rgb(123, 115, 191)&quot; d=&quot;M255.5,27.5h42a3,3,0,0,1,3,3v20a3,3,0,0,1,-3,3h-42a3,3,0,0,1,-3,-3v-20a3,3,0,0,1,3,-3z&quot; stroke-width=&quot;1&quot;></path><g id=&quot;node_text7&quot; fill=&quot;black&quot;><text id=&quot;kity_text_107&quot; text-rendering=&quot;inherit&quot; font-size=&quot;14&quot; dy=&quot;.8em&quot; y=&quot;33.5&quot; x=&quot;272.5&quot;>1</text></g></g></g></g></svg>"></div>
  <div className="excalidraw" showpickeroncreate="false" width="100%" height="240"
       data="{&quot;elements&quot;:[{&quot;id&quot;:&quot;wLExlpfUIRmBY5FY6DLmk&quot;,&quot;type&quot;:&quot;ellipse&quot;,&quot;x&quot;:285.6328125,&quot;y&quot;:186.6171875,&quot;width&quot;:56.73828125,&quot;height&quot;:41.15625,&quot;angle&quot;:0,&quot;strokeColor&quot;:&quot;#000000&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fillStyle&quot;:&quot;hachure&quot;,&quot;strokeWidth&quot;:1,&quot;strokeStyle&quot;:&quot;solid&quot;,&quot;roughness&quot;:1,&quot;opacity&quot;:100,&quot;groupIds&quot;:[],&quot;strokeSharpness&quot;:&quot;sharp&quot;,&quot;seed&quot;:386122769,&quot;version&quot;:23,&quot;versionNonce&quot;:611750065,&quot;isDeleted&quot;:false,&quot;boundElements&quot;:null,&quot;updated&quot;:1666503631811,&quot;link&quot;:null,&quot;locked&quot;:false},{&quot;id&quot;:&quot;o0Yd7FHhGvIvihpV9rKwC&quot;,&quot;type&quot;:&quot;text&quot;,&quot;x&quot;:464.51171875,&quot;y&quot;:209.28515625,&quot;width&quot;:105,&quot;height&quot;:25,&quot;angle&quot;:0,&quot;strokeColor&quot;:&quot;#000000&quot;,&quot;backgroundColor&quot;:&quot;transparent&quot;,&quot;fillStyle&quot;:&quot;hachure&quot;,&quot;strokeWidth&quot;:1,&quot;strokeStyle&quot;:&quot;solid&quot;,&quot;roughness&quot;:1,&quot;opacity&quot;:100,&quot;groupIds&quot;:[],&quot;strokeSharpness&quot;:&quot;sharp&quot;,&quot;seed&quot;:1887227615,&quot;version&quot;:13,&quot;versionNonce&quot;:1398922143,&quot;isDeleted&quot;:false,&quot;boundElements&quot;:null,&quot;updated&quot;:1666503638202,&quot;link&quot;:null,&quot;locked&quot;:false,&quot;text&quot;:&quot;hello Wrold&quot;,&quot;fontSize&quot;:20,&quot;fontFamily&quot;:1,&quot;textAlign&quot;:&quot;left&quot;,&quot;verticalAlign&quot;:&quot;top&quot;,&quot;baseline&quot;:18,&quot;containerId&quot;:null,&quot;originalText&quot;:&quot;hello Wrold&quot;}],&quot;appState&quot;:{&quot;isLoading&quot;:false},&quot;files&quot;:{}}"></div>
  <p data-blockid="8e1f49e6-0b96-4f3e-821c-4cad4e2dc87d">我是段落</p>
  <iframe className="iframe" data-blockid="1926fa5a-1fe5-4cd3-a595-a43a3306f057" width="837" height="418"
          url="https://player.bilibili.com/player.html?aid=901027901&amp;bvid=BV1YN4y1P7Vq&amp;cid=848652357&amp;page=1"></iframe>
  <img src="https://wipi.oss-cn-shanghai.aliyuncs.com/2022-07-20/photo-1629461461750-ef5b81781bc2.avif" alt="文章封面"
       width="440" height="293" aspectratio="1.5" align="left">
    <blockquote data-blockid="61bf2c49-e7fd-4865-a438-d92d9cbf7ecf"><p
      data-blockid="e87daaf5-a75a-4318-bc34-f17caa592a13">引用</p></blockquote>
    <ul data-blockid="c2bb80ab-8648-4f8c-8ac3-1bd33e26dba1">
      <li><p data-blockid="09db80c2-c93b-4309-b716-94a6a0efda0d">列表1</p></li>
      <li><p data-blockid="796a0de6-4993-4680-83fa-a3ae108dd5f1">列表2</p></li>
    </ul>
    <ol data-blockid="87a7dc0f-4159-4c7d-9e11-90f202ead17e">
      <li><p data-blockid="4008f16f-c65d-4e4b-9881-50dce902c7c6">列表1</p></li>
      <li><p data-blockid="a57a11ce-435c-46e7-be8b-6d0a67b1f403">列表2</p></li>
    </ol>
    <p data-blockid="f02b760b-7aa7-40d7-a204-5cb931e0dd4d"><strong>加粗</strong>
      <em>斜体 </em><u>下划线 </u><s>删除线 </s>X<sub>2 </sub>X<sup>2 </sup><code>行内代码</code></p>
    <pre data-blockid="f3e03c37-bf9d-4481-b674-a13a5228ae79"><code>echo hello world!</code></pre>
    <p data-blockid="95386564-c0e3-498d-96a5-e5d99017b611">
    <span className="status"
       data-blockid="68e11277-95a1-45de-958c-9324a2a9d272"
       createuserid="mock-user" showpickeroncreate="false"
       color="#42526E" bgcolor="#DFE1E6"
       bordercolor="rgb(80, 95, 121)" text="状态良好"></span>
    </p>
`)


  return (
    <EditorRender
      ref={setEditor}
      content={content}
    />
  )
}
export default EditorPage;
