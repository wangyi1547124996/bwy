// 检验手机号
export const isPhone = (text:any) => {
    let str = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    return str
}