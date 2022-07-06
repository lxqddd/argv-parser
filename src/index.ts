#! /usr/bin/env node

// import { Option } from './core/option'
import { cac } from 'cac'

const cli = cac()
cli.option('--help', '帮助')
cli.parse()

// const option = new Option()

// export function argv (argv: string[]) {
//   console.log(argv)
//   option.setOption('--help', '帮助').setOption('--version', '这是版本号，巴拉巴拉一大堆')
//   return {
//     args: [],
//     options: {}
//   }
// }

// console.log(argv(process.argv))
