var h = (tag = 'div', props = {}, childs = []) => {
  return {
    tag: tag,
    props: props,
    childs: childs
  }
}

var node = h('p', {}, [h('span1', {}, ['adfas']), h('span2', {}, [h('i', {}, ['ghahhh']), h('i', {}, ['ghahhh2'])])])

console.log(node)
