
export function sidebarGolang() {
    return [{
        text: 'Golang 简介',
        link: '/golang/',
        items: []
    }, {
        text: 'Golang 基础',
        collapsed: true,
        items: [
            { text: '思维导图', link: '/golang/golang-basic-mind' },
            {
                text: '基本语法', collapsed: true, items: [
                    { text: '基本构成', link: '/golang/golang-basics' },
                    { text: '关键字(Keyword)', link: '/golang/golang-basic-keyword' },
                    { text: '标识符(Identifier)', link: '/golang/golang-basic-identifier' },
                    { text: '变量(Variable)', link: '/golang/golang-basic-variable' },
                    { text: '常量(Constant)', link: '/golang/golang-basic-constant' },
                ]
            },
            { text: '数据类型', collapsed: true, items: [
                { text: '数据类型(Types)', link: '/golang/golang-types' },
                { text: '字符串(String)', link: '/golang/golang-type-string' },
                { text: '数组(Array)', link: '/golang/golang-type-array' },
                { text: '切片(Slice)', link: '/golang/golang-type-slice' },
                { text: '键值对(Map)', link: '/golang/golang-type-map' },
            ]},
            { text: '流程控制', collapsed: true, items: [
                { text: '数据类型(Types)', link: '/golang/golang-types' },
                { text: '字符串(String)', link: '/golang/golang-type-string' },
                { text: '数组(Array)', link: '/golang/golang-type-array' },
                { text: '切片(Slice)', link: '/golang/golang-type-slice' },
                { text: '键值对(Map)', link: '/golang/golang-type-map' },
            ]},
            { text: '函数', link: '/golang/golang-function' },
            { text: '结构体', link: '/golang/golang-struct' },
            { text: '接口', link: '/golang/golang-interface' },
            { text: '闭包', link: '/golang/golang-closure' },
            { text: '反射', link: '/golang/golang-reflect' },
            { text: '泛型', link: '/golang/golang-generics' },
            { text: '文件操作', link: '/golang/golang-file' },
            { text: '网络编程', link: '/golang/golang-network' },
            { text: '并发编程', link: '/golang/golang-concurrent' },
            { text: '常用包', link: '/golang/golang-package' },
            { text: '工具链', link: '/golang/golang-tools' },
        ]
    }, {
        text: 'Golang 进阶',
        collapsed: true,
        items: [
            { text: 'Index', link: '/golang/golang-mind-advanced' },
        ]
    }, {
        text: 'Golang 高级',
        collapsed: true,
        items: [
            { text: 'Index', link: '/golang/golang-mind-advanced' },
        ]
    }, {
        text: 'Golang 实战',
        collapsed: true,
        items: [
            { text: 'Index', link: '/golang/golang-mind-action' },
        ]
    }]
}