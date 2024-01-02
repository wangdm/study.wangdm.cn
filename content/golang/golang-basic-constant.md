---
title: Golang常量(Constant)
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
	//
	// var name type = value
	const con, con2 = 10, 20                      // 常量必须初始化，类型可以省略
	fmt.Printf("type:%T, value:%v\n", con, con)   // 输出:type:uint, value:10
	fmt.Printf("type:%T, value:%v\n", con2, con2) // 输出:type:uint, value:10

	const (
		a = 4
		b = "aaa"
		c
		_
		d        = iota * 2
		e uint16 = 20
	)
	fmt.Printf("type:%T, value:%v\n", a, a) // 输出:type:int, value:4
	fmt.Printf("type:%T, value:%v\n", b, b) // 输出:type:string, value:aaa
	fmt.Printf("type:%T, value:%v\n", c, c) // 输出:type:int, value:2
	fmt.Printf("type:%T, value:%v\n", d, d) // 输出:type:int, value:6
	fmt.Printf("type:%T, value:%v\n", e, e) // 输出:type:uint16, value:20

	const (
		_   = 0
		Mon = iota
		Tues
		Wed
		Thur
		Fri
		Sat
		Sun
	)
	fmt.Printf("type:%T, value:%v\n", Mon, Mon)   // 输出:type:int, value:1
	fmt.Printf("type:%T, value:%v\n", Tues, Tues) // 输出:type:int, value:2
	fmt.Printf("type:%T, value:%v\n", Wed, Wed)   // 输出:type:int, value:3
	fmt.Printf("type:%T, value:%v\n", Thur, Thur) // 输出:type:int, value:4
	fmt.Printf("type:%T, value:%v\n", Fri, Fri)   // 输出:type:int, value:5
	fmt.Printf("type:%T, value:%v\n", Sat, Sat)   // 输出:type:int, value:6
	fmt.Printf("type:%T, value:%v\n", Sun, Sun)   // 输出:type:int, value:7

	const (
		_         = iota
		KB uint64 = 1 << (10 * iota)
		MB
		GB
		TB
	)
	fmt.Printf("type:%T, value:%v\n", KB, KB) // 输出:type:uint64, value:1024
	fmt.Printf("type:%T, value:%v\n", MB, MB) // 输出:type:uint64, value:1048576
	fmt.Printf("type:%T, value:%v\n", GB, GB) // 输出:type:uint64, value:1073741824
	fmt.Printf("type:%T, value:%v\n", TB, TB) // 输出:type:uint64, value:1099511627776
}
```