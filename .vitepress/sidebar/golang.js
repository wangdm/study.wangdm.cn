
export function sidebarGolang() {
    return [{
        text: 'Golang 简介',
        link: '/golang/',
        items: []
    }, {
        text: 'Golang 基础',
        collapsed: true,
        items: [
            { text: 'Golang基础知识思维导图', link: '/golang/golang-mind-basic' },
            { text: 'Golang基本语法', link: '/golang/golang-syntax' },
            { text: 'Golang数据类型', link: '/golang/golang-types' },
            { text: 'Golang流程控制', link: '/golang/golang-flow' },
            { text: 'Golang函数', link: '/golang/golang-function' },
            { text: 'Golang结构体', link: '/golang/golang-struct' },
            { text: 'Golang接口', link: '/golang/golang-interface' },
            { text: 'Golang常用包', link: '/golang/golang-package' },
            { text: 'Golang文件操作', link: '/golang/golang-file' },
            { text: 'Golang网络编程', link: '/golang/golang-network' },
            { text: 'Golang并发编程', link: '/golang/golang-concurrent' },
            { text: 'Golang闭包', link: '/golang/golang-closure' },
            { text: 'Golang反射', link: '/golang/golang-reflect' },
            { text: 'Golang泛型', link: '/golang/golang-generics' },
            { text: 'Golang工具链', link: '/golang/golang-tools' },
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