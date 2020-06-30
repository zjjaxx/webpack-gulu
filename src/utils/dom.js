//获取最近的滚动的父级容器
export const getScroller = (el, root = window) => {
    //  所有浏览器支持 window 对象的 scroll 事件
    //  所有浏览器都支持普通 DIV 对象的 scroll 事件
    const overflowScrollReg = /scroll|auto/i
    let node = el
    while (
        node &&
        node.tagName !== 'HTML' &&
        node.nodeType === 1 &&
        node !== root
    ) {
        const { overflowY } = window.getComputedStyle(node)
        // 如果html和body都为height:100%;overflow-y:scroll;情况下,只会触发 body 的 scroll 事件，
        if (overflowScrollReg.test(overflowY)) {
            if (node.tagName !== 'BODY') {
                return node
            }
            const { overflowY: htmlOverflowY } = window.getComputedStyle(
                node.parentNode
            )
            if (overflowScrollReg.test(htmlOverflowY)) {
                return node
            }
        }
        node = node.parentNode
    }
    return root
}
