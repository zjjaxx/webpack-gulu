let id = 0
export const scrollToLeft = (scroller, to_scrollLeft, duration = 1000) => {
    if (id) {
        window.cancelAnimationFrame(id)
        id = 0
    }
    let frames = duration / 32
    let partDistance = to_scrollLeft / frames
    let count = 0
    function step() {
        if (count++ < frames) {
            scroller.scrollLeft += partDistance
            id = window.requestAnimationFrame(step)
        }
        else {
            window.cancelAnimationFrame(id)
            id = 0
        }

    }
    step()
}