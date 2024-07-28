// ==UserScript==
// @name        New script youtube.com
// @namespace   Violentmonkey Scripts
// @match       https://www.youtube.com/watch?v=*&list=WL*
// @grant       none
// @version     1.0
// @author      -
// @description 7/28/2024, 6:42:02 AM
// @run-at      document-start
// ==/UserScript==

url = window.location.href
url_nova = url.substring(0,43)
console.log(url_nova)
window.location.replace(url_nova)
