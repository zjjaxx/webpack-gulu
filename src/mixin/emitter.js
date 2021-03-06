export default {
    methods: {
        //获取父组件并调用父组件派发事件
        dispatch(componentName, eventName, params) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.name;
            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;
                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast(componentName, eventName, params) {
            this.$children.forEach(child => {
                let name = child.$options.name;
                if (name === componentName) {
                    child.$emit.apply(child, [eventName].concat(params));
                } else {
                    broadcast.apply(child, [componentName, eventName].concat([params]));
                }
            });
        },
        //获取父组件
        getParent(componentName) {
            let parent = this.$parent || this.$root;
            let name = parent.$options.name;
            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;
                if (parent) {
                    name = parent.$options.name;
                }
            }
            return parent
        },
        getChildren(parent, componentName) {
            let children = []
            parent.$children.forEach(child => {
                let name = child.$options.name;
                if (name == componentName) {
                    children.push(child)
                }
                children.push(...this.getChildren(child, componentName))
            })
            return children
        }
    },

}