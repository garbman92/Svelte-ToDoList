import {
    writable
 } from "svelte/store"

export let todos = writable([
    " work on cool assigment ",
    " water my flower",
])