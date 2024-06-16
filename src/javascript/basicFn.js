export const $ = (el, parent = document) => parent.querySelector(el)
export const $A = (el, parent = document) => [...parent.querySelectorAll(el)]