---
title: Golang变量(Variable)
layout: doc
editLink: true
head:
  - - meta
    - name: description
      content: Golang study tutorial
  - - meta
    - name: keywords
      content: wangdm,Golang
---

```go
package main

import (
	"fmt"
)

func main() {
	// 1.声明变量
	// var name type
	var a int                               // 编译器会给未初始化的变量赋默认值，对整形为 0
	fmt.Printf("type:%T, value:%v\n", a, a) // 输出:type:int, value:0

	// 2.声明多个变量
	var p, q *int                           // 注意这里p和q都是*int都是类型
	fmt.Printf("type:%T, value:%v\n", p, p) // 输出:type:*int, value:<nil>
	fmt.Printf("type:%T, value:%v\n", q, q) // 输出:type:*int, value:<nil>

	// 3.声明和初始化变量
	// var name type = value
	var b int = 2
	fmt.Printf("type:%T, value:%v\n", b, b) // 输出:type:int, value:2
	var c = 3                               // 编译器会根据初始化值自动推到为int类型
	fmt.Printf("type:%T, value:%v\n", c, c) // 输出:type:int, value:3
	d := 4.2                                // 编译器会根据初始化值自动推到为float64类型
	fmt.Printf("type:%T, value:%v\n", d, d) // 输出:type:float64, value:4.2

	// 4.初始化多个不同类型的变量
	l, m, n := uint32(10), "hello", true
	fmt.Printf("type:%T, value:%v\n", l, l) // 输出:type:uint32, value:10
	fmt.Printf("type:%T, value:%v\n", m, m) // 输出:type:string, value:hello
	fmt.Printf("type:%T, value:%v\n", n, n) // 输出:bool, value:true

	// 5.声明初始化多个不同类型的变量
	var (
		num = 10
		str = "Good"
		arr [5]int
	)
	fmt.Printf("type:%T, value:%v\n", num, num) // 输出:type:int, value:10
	fmt.Printf("type:%T, value:%v\n", str, str) // 输出:type:float64, value:4.2
	fmt.Printf("type:%T, value:%v\n", arr, arr) // 输出:type:float64, value:4.2
}
```