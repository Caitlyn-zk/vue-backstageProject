// 封装axios请求 promise

import axios from 'axios'
import {api} from './api'
import qs from 'qs'

axios.defaults.baseURL = api

// 直接是post请求 get请求都能发送  一起写的
let request = function(url,method='GET',data={}) {
    return new Promise((resolve, reject) => {
        axios({
            url: '',
            method: '',
            // post
            data: qs.stringify(data),
            // get
            params: data
        }).then((res) => {
            // 请求成功返回后台数据
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

// 分开写get post

let get = function() {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            // 请求成功返回数据
            params:data
        }).then((res) => {
            resolve(res.data)
        }).catch((error) => {
            reject(error)
        })
    })
}

let post = function(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(data)).then((res) => {
            resolve(res, data)
        }).catch((error) => {
            reject(error)
        })
    })
}

export {
    request,
    get,
    post
}