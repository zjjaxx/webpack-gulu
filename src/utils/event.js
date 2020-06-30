
//节流
export const throttle=(eventOnName,eventEmitName,obj=window)=>{
    let running=false
    let func=()=>{
        if(running){
            return
        }
        running=true
        requestAnimationFrame(()=>{
            obj.dispatchEvent(new CustomEvent(eventEmitName))
            running=false
        })
    }
    obj.addEventListener(eventOnName,func)
    return ()=>{
        obj.removeEventListener(eventOnName,func)
    }
}