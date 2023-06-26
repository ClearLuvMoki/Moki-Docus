---
title: Preview
order: 1
group:
  title: Moki Editor
demo:
  cols: 1
---

# 预览

目前内置的插件已全局展示，可不必传入<code>extenisons</code>

<code src="../../test/editor/index.tsx"></code>

| 属性                         | 描述       | 类型                                   | 默认值              |
|----------------------------|----------|--------------------------------------|------------------|
| ref                        | Editor   | `Editor/null`                        | /                |
| content                    | 编辑器内容    | `string/null`                        | null             |
| editable                   | 是否可以编辑   | `Boolean`                            | true             |
| extensions                 | 插件配置     | `Array<AnyExtension/AnyExtension[]>` | []    |
| isToolBar                | 是否展示工具栏  | `Boolean`                            | true             |
| autofocus                  | 是否聚焦     | `Boolean`                            | true             |
| children                      | 自定义工具栏内容 | `React.ReactNode`                    | /                |

