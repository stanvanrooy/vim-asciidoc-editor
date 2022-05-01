/*! For license information please see 3632.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_project_template=self.webpackChunkweb_project_template||[]).push([[3632],{53632:(e,t,s)=>{s.r(t),s.d(t,{conf:()=>r,language:()=>o});var r={comments:{lineComment:"#",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"',notIn:["string"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'}]},o={defaultToken:"",tokenPostfix:".hcl",keywords:["var","local","path","for_each","any","string","number","bool","true","false","null","if ","else ","endif ","for ","in","endfor"],operators:["=",">=","<=","==","!=","+","-","*","/","%","&&","||","!","<",">","?","...",":"],symbols:/[=><!~?:&|+\-*\/\^%]+/,escapes:/\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,terraformFunctions:/(abs|ceil|floor|log|max|min|pow|signum|chomp|format|formatlist|indent|join|lower|regex|regexall|replace|split|strrev|substr|title|trimspace|upper|chunklist|coalesce|coalescelist|compact|concat|contains|distinct|element|flatten|index|keys|length|list|lookup|map|matchkeys|merge|range|reverse|setintersection|setproduct|setunion|slice|sort|transpose|values|zipmap|base64decode|base64encode|base64gzip|csvdecode|jsondecode|jsonencode|urlencode|yamldecode|yamlencode|abspath|dirname|pathexpand|basename|file|fileexists|fileset|filebase64|templatefile|formatdate|timeadd|timestamp|base64sha256|base64sha512|bcrypt|filebase64sha256|filebase64sha512|filemd5|filemd1|filesha256|filesha512|md5|rsadecrypt|sha1|sha256|sha512|uuid|uuidv5|cidrhost|cidrnetmask|cidrsubnet|tobool|tolist|tomap|tonumber|toset|tostring)/,terraformMainBlocks:/(module|data|terraform|resource|provider|variable|output|locals)/,tokenizer:{root:[[/^@terraformMainBlocks([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)(\{)/,["type","","string","","string","","@brackets"]],[/(\w+[ \t]+)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)(\{)/,["identifier","","string","","string","","@brackets"]],[/(\w+[ \t]+)([ \t]*)([\w-]+|"[\w-]+"|)([ \t]*)([\w-]+|"[\w-]+"|)(=)(\{)/,["identifier","","string","","operator","","@brackets"]],{include:"@terraform"}],terraform:[[/@terraformFunctions(\()/,["type","@brackets"]],[/[a-zA-Z_]\w*-*/,{cases:{"@keywords":{token:"keyword.$0"},"@default":"variable"}}],{include:"@whitespace"},{include:"@heredoc"},[/[{}()\[\]]/,"@brackets"],[/[<>](?!@symbols)/,"@brackets"],[/@symbols/,{cases:{"@operators":"operator","@default":""}}],[/\d*\d+[eE]([\-+]?\d+)?/,"number.float"],[/\d*\.\d+([eE][\-+]?\d+)?/,"number.float"],[/\d[\d']*/,"number"],[/\d/,"number"],[/[;,.]/,"delimiter"],[/"/,"string","@string"],[/'/,"invalid"]],heredoc:[[/<<[-]*\s*["]?([\w\-]+)["]?/,{token:"string.heredoc.delimiter",next:"@heredocBody.$1"}]],heredocBody:[[/([\w\-]+)$/,{cases:{"$1==$S2":[{token:"string.heredoc.delimiter",next:"@popall"}],"@default":"string.heredoc"}}],[/./,"string.heredoc"]],whitespace:[[/[ \t\r\n]+/,""],[/\/\*/,"comment","@comment"],[/\/\/.*$/,"comment"],[/#.*$/,"comment"]],comment:[[/[^\/*]+/,"comment"],[/\*\//,"comment","@pop"],[/[\/*]/,"comment"]],string:[[/\$\{/,{token:"delimiter",next:"@stringExpression"}],[/[^\\"\$]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@popall"]],stringInsideExpression:[[/[^\\"]+/,"string"],[/@escapes/,"string.escape"],[/\\./,"string.escape.invalid"],[/"/,"string","@pop"]],stringExpression:[[/\}/,{token:"delimiter",next:"@pop"}],[/"/,"string","@stringInsideExpression"],{include:"@terraform"}]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxJQUFLLFNBQVUsMkJBQ2hCLENBQUVMLFFBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvaGNsL2hjbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBWZXJzaW9uOiAwLjMxLjEoMzM3NTg3ODU5YjFjMTcxMzE0YjQwNTAzMTcxMTg4YjZjZWE2YTMyYSlcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL21pY3Jvc29mdC9tb25hY28tZWRpdG9yL2Jsb2IvbWFpbi9MSUNFTlNFLnR4dFxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8vIHNyYy9iYXNpYy1sYW5ndWFnZXMvaGNsL2hjbC50c1xudmFyIGNvbmYgPSB7XG4gIGNvbW1lbnRzOiB7XG4gICAgbGluZUNvbW1lbnQ6IFwiI1wiLFxuICAgIGJsb2NrQ29tbWVudDogW1wiLypcIiwgXCIqL1wiXVxuICB9LFxuICBicmFja2V0czogW1xuICAgIFtcIntcIiwgXCJ9XCJdLFxuICAgIFtcIltcIiwgXCJdXCJdLFxuICAgIFtcIihcIiwgXCIpXCJdXG4gIF0sXG4gIGF1dG9DbG9zaW5nUGFpcnM6IFtcbiAgICB7IG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIgfSxcbiAgICB7IG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIgfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIgfSxcbiAgICB7IG9wZW46ICdcIicsIGNsb3NlOiAnXCInLCBub3RJbjogW1wic3RyaW5nXCJdIH1cbiAgXSxcbiAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgIHsgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiB9LFxuICAgIHsgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiB9LFxuICAgIHsgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9LFxuICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfVxuICBdXG59O1xudmFyIGxhbmd1YWdlID0ge1xuICBkZWZhdWx0VG9rZW46IFwiXCIsXG4gIHRva2VuUG9zdGZpeDogXCIuaGNsXCIsXG4gIGtleXdvcmRzOiBbXG4gICAgXCJ2YXJcIixcbiAgICBcImxvY2FsXCIsXG4gICAgXCJwYXRoXCIsXG4gICAgXCJmb3JfZWFjaFwiLFxuICAgIFwiYW55XCIsXG4gICAgXCJzdHJpbmdcIixcbiAgICBcIm51bWJlclwiLFxuICAgIFwiYm9vbFwiLFxuICAgIFwidHJ1ZVwiLFxuICAgIFwiZmFsc2VcIixcbiAgICBcIm51bGxcIixcbiAgICBcImlmIFwiLFxuICAgIFwiZWxzZSBcIixcbiAgICBcImVuZGlmIFwiLFxuICAgIFwiZm9yIFwiLFxuICAgIFwiaW5cIixcbiAgICBcImVuZGZvclwiXG4gIF0sXG4gIG9wZXJhdG9yczogW1xuICAgIFwiPVwiLFxuICAgIFwiPj1cIixcbiAgICBcIjw9XCIsXG4gICAgXCI9PVwiLFxuICAgIFwiIT1cIixcbiAgICBcIitcIixcbiAgICBcIi1cIixcbiAgICBcIipcIixcbiAgICBcIi9cIixcbiAgICBcIiVcIixcbiAgICBcIiYmXCIsXG4gICAgXCJ8fFwiLFxuICAgIFwiIVwiLFxuICAgIFwiPFwiLFxuICAgIFwiPlwiLFxuICAgIFwiP1wiLFxuICAgIFwiLi4uXCIsXG4gICAgXCI6XCJcbiAgXSxcbiAgc3ltYm9sczogL1s9Pjwhfj86JnwrXFwtKlxcL1xcXiVdKy8sXG4gIGVzY2FwZXM6IC9cXFxcKD86W2FiZm5ydHZcXFxcXCInXXx4WzAtOUEtRmEtZl17MSw0fXx1WzAtOUEtRmEtZl17NH18VVswLTlBLUZhLWZdezh9KS8sXG4gIHRlcnJhZm9ybUZ1bmN0aW9uczogLyhhYnN8Y2VpbHxmbG9vcnxsb2d8bWF4fG1pbnxwb3d8c2lnbnVtfGNob21wfGZvcm1hdHxmb3JtYXRsaXN0fGluZGVudHxqb2lufGxvd2VyfHJlZ2V4fHJlZ2V4YWxsfHJlcGxhY2V8c3BsaXR8c3RycmV2fHN1YnN0cnx0aXRsZXx0cmltc3BhY2V8dXBwZXJ8Y2h1bmtsaXN0fGNvYWxlc2NlfGNvYWxlc2NlbGlzdHxjb21wYWN0fGNvbmNhdHxjb250YWluc3xkaXN0aW5jdHxlbGVtZW50fGZsYXR0ZW58aW5kZXh8a2V5c3xsZW5ndGh8bGlzdHxsb29rdXB8bWFwfG1hdGNoa2V5c3xtZXJnZXxyYW5nZXxyZXZlcnNlfHNldGludGVyc2VjdGlvbnxzZXRwcm9kdWN0fHNldHVuaW9ufHNsaWNlfHNvcnR8dHJhbnNwb3NlfHZhbHVlc3x6aXBtYXB8YmFzZTY0ZGVjb2RlfGJhc2U2NGVuY29kZXxiYXNlNjRnemlwfGNzdmRlY29kZXxqc29uZGVjb2RlfGpzb25lbmNvZGV8dXJsZW5jb2RlfHlhbWxkZWNvZGV8eWFtbGVuY29kZXxhYnNwYXRofGRpcm5hbWV8cGF0aGV4cGFuZHxiYXNlbmFtZXxmaWxlfGZpbGVleGlzdHN8ZmlsZXNldHxmaWxlYmFzZTY0fHRlbXBsYXRlZmlsZXxmb3JtYXRkYXRlfHRpbWVhZGR8dGltZXN0YW1wfGJhc2U2NHNoYTI1NnxiYXNlNjRzaGE1MTJ8YmNyeXB0fGZpbGViYXNlNjRzaGEyNTZ8ZmlsZWJhc2U2NHNoYTUxMnxmaWxlbWQ1fGZpbGVtZDF8ZmlsZXNoYTI1NnxmaWxlc2hhNTEyfG1kNXxyc2FkZWNyeXB0fHNoYTF8c2hhMjU2fHNoYTUxMnx1dWlkfHV1aWR2NXxjaWRyaG9zdHxjaWRybmV0bWFza3xjaWRyc3VibmV0fHRvYm9vbHx0b2xpc3R8dG9tYXB8dG9udW1iZXJ8dG9zZXR8dG9zdHJpbmcpLyxcbiAgdGVycmFmb3JtTWFpbkJsb2NrczogLyhtb2R1bGV8ZGF0YXx0ZXJyYWZvcm18cmVzb3VyY2V8cHJvdmlkZXJ8dmFyaWFibGV8b3V0cHV0fGxvY2FscykvLFxuICB0b2tlbml6ZXI6IHtcbiAgICByb290OiBbXG4gICAgICBbXG4gICAgICAgIC9eQHRlcnJhZm9ybU1haW5CbG9ja3MoWyBcXHRdKikoW1xcdy1dK3xcIltcXHctXStcInwpKFsgXFx0XSopKFtcXHctXSt8XCJbXFx3LV0rXCJ8KShbIFxcdF0qKShcXHspLyxcbiAgICAgICAgW1widHlwZVwiLCBcIlwiLCBcInN0cmluZ1wiLCBcIlwiLCBcInN0cmluZ1wiLCBcIlwiLCBcIkBicmFja2V0c1wiXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgLyhcXHcrWyBcXHRdKykoWyBcXHRdKikoW1xcdy1dK3xcIltcXHctXStcInwpKFsgXFx0XSopKFtcXHctXSt8XCJbXFx3LV0rXCJ8KShbIFxcdF0qKShcXHspLyxcbiAgICAgICAgW1wiaWRlbnRpZmllclwiLCBcIlwiLCBcInN0cmluZ1wiLCBcIlwiLCBcInN0cmluZ1wiLCBcIlwiLCBcIkBicmFja2V0c1wiXVxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgLyhcXHcrWyBcXHRdKykoWyBcXHRdKikoW1xcdy1dK3xcIltcXHctXStcInwpKFsgXFx0XSopKFtcXHctXSt8XCJbXFx3LV0rXCJ8KSg9KShcXHspLyxcbiAgICAgICAgW1wiaWRlbnRpZmllclwiLCBcIlwiLCBcInN0cmluZ1wiLCBcIlwiLCBcIm9wZXJhdG9yXCIsIFwiXCIsIFwiQGJyYWNrZXRzXCJdXG4gICAgICBdLFxuICAgICAgeyBpbmNsdWRlOiBcIkB0ZXJyYWZvcm1cIiB9XG4gICAgXSxcbiAgICB0ZXJyYWZvcm06IFtcbiAgICAgIFsvQHRlcnJhZm9ybUZ1bmN0aW9ucyhcXCgpLywgW1widHlwZVwiLCBcIkBicmFja2V0c1wiXV0sXG4gICAgICBbXG4gICAgICAgIC9bYS16QS1aX11cXHcqLSovLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiQGtleXdvcmRzXCI6IHsgdG9rZW46IFwia2V5d29yZC4kMFwiIH0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwidmFyaWFibGVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHsgaW5jbHVkZTogXCJAd2hpdGVzcGFjZVwiIH0sXG4gICAgICB7IGluY2x1ZGU6IFwiQGhlcmVkb2NcIiB9LFxuICAgICAgWy9be30oKVxcW1xcXV0vLCBcIkBicmFja2V0c1wiXSxcbiAgICAgIFsvWzw+XSg/IUBzeW1ib2xzKS8sIFwiQGJyYWNrZXRzXCJdLFxuICAgICAgW1xuICAgICAgICAvQHN5bWJvbHMvLFxuICAgICAgICB7XG4gICAgICAgICAgY2FzZXM6IHtcbiAgICAgICAgICAgIFwiQG9wZXJhdG9yc1wiOiBcIm9wZXJhdG9yXCIsXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBbL1xcZCpcXGQrW2VFXShbXFwtK10/XFxkKyk/LywgXCJudW1iZXIuZmxvYXRcIl0sXG4gICAgICBbL1xcZCpcXC5cXGQrKFtlRV1bXFwtK10/XFxkKyk/LywgXCJudW1iZXIuZmxvYXRcIl0sXG4gICAgICBbL1xcZFtcXGQnXSovLCBcIm51bWJlclwiXSxcbiAgICAgIFsvXFxkLywgXCJudW1iZXJcIl0sXG4gICAgICBbL1s7LC5dLywgXCJkZWxpbWl0ZXJcIl0sXG4gICAgICBbL1wiLywgXCJzdHJpbmdcIiwgXCJAc3RyaW5nXCJdLFxuICAgICAgWy8nLywgXCJpbnZhbGlkXCJdXG4gICAgXSxcbiAgICBoZXJlZG9jOiBbXG4gICAgICBbLzw8Wy1dKlxccypbXCJdPyhbXFx3XFwtXSspW1wiXT8vLCB7IHRva2VuOiBcInN0cmluZy5oZXJlZG9jLmRlbGltaXRlclwiLCBuZXh0OiBcIkBoZXJlZG9jQm9keS4kMVwiIH1dXG4gICAgXSxcbiAgICBoZXJlZG9jQm9keTogW1xuICAgICAgW1xuICAgICAgICAvKFtcXHdcXC1dKykkLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIiQxPT0kUzJcIjogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdG9rZW46IFwic3RyaW5nLmhlcmVkb2MuZGVsaW1pdGVyXCIsXG4gICAgICAgICAgICAgICAgbmV4dDogXCJAcG9wYWxsXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiQGRlZmF1bHRcIjogXCJzdHJpbmcuaGVyZWRvY1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgWy8uLywgXCJzdHJpbmcuaGVyZWRvY1wiXVxuICAgIF0sXG4gICAgd2hpdGVzcGFjZTogW1xuICAgICAgWy9bIFxcdFxcclxcbl0rLywgXCJcIl0sXG4gICAgICBbL1xcL1xcKi8sIFwiY29tbWVudFwiLCBcIkBjb21tZW50XCJdLFxuICAgICAgWy9cXC9cXC8uKiQvLCBcImNvbW1lbnRcIl0sXG4gICAgICBbLyMuKiQvLCBcImNvbW1lbnRcIl1cbiAgICBdLFxuICAgIGNvbW1lbnQ6IFtcbiAgICAgIFsvW15cXC8qXSsvLCBcImNvbW1lbnRcIl0sXG4gICAgICBbL1xcKlxcLy8sIFwiY29tbWVudFwiLCBcIkBwb3BcIl0sXG4gICAgICBbL1tcXC8qXS8sIFwiY29tbWVudFwiXVxuICAgIF0sXG4gICAgc3RyaW5nOiBbXG4gICAgICBbL1xcJFxcey8sIHsgdG9rZW46IFwiZGVsaW1pdGVyXCIsIG5leHQ6IFwiQHN0cmluZ0V4cHJlc3Npb25cIiB9XSxcbiAgICAgIFsvW15cXFxcXCJcXCRdKy8sIFwic3RyaW5nXCJdLFxuICAgICAgWy9AZXNjYXBlcy8sIFwic3RyaW5nLmVzY2FwZVwiXSxcbiAgICAgIFsvXFxcXC4vLCBcInN0cmluZy5lc2NhcGUuaW52YWxpZFwiXSxcbiAgICAgIFsvXCIvLCBcInN0cmluZ1wiLCBcIkBwb3BhbGxcIl1cbiAgICBdLFxuICAgIHN0cmluZ0luc2lkZUV4cHJlc3Npb246IFtcbiAgICAgIFsvW15cXFxcXCJdKy8sIFwic3RyaW5nXCJdLFxuICAgICAgWy9AZXNjYXBlcy8sIFwic3RyaW5nLmVzY2FwZVwiXSxcbiAgICAgIFsvXFxcXC4vLCBcInN0cmluZy5lc2NhcGUuaW52YWxpZFwiXSxcbiAgICAgIFsvXCIvLCBcInN0cmluZ1wiLCBcIkBwb3BcIl1cbiAgICBdLFxuICAgIHN0cmluZ0V4cHJlc3Npb246IFtcbiAgICAgIFsvXFx9LywgeyB0b2tlbjogXCJkZWxpbWl0ZXJcIiwgbmV4dDogXCJAcG9wXCIgfV0sXG4gICAgICBbL1wiLywgXCJzdHJpbmdcIiwgXCJAc3RyaW5nSW5zaWRlRXhwcmVzc2lvblwiXSxcbiAgICAgIHsgaW5jbHVkZTogXCJAdGVycmFmb3JtXCIgfVxuICAgIF1cbiAgfVxufTtcbmV4cG9ydCB7XG4gIGNvbmYsXG4gIGxhbmd1YWdlXG59O1xuIl0sIm5hbWVzIjpbImNvbmYiLCJjb21tZW50cyIsImxpbmVDb21tZW50IiwiYmxvY2tDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwibm90SW4iLCJzdXJyb3VuZGluZ1BhaXJzIiwibGFuZ3VhZ2UiLCJkZWZhdWx0VG9rZW4iLCJ0b2tlblBvc3RmaXgiLCJrZXl3b3JkcyIsIm9wZXJhdG9ycyIsInN5bWJvbHMiLCJlc2NhcGVzIiwidGVycmFmb3JtRnVuY3Rpb25zIiwidGVycmFmb3JtTWFpbkJsb2NrcyIsInRva2VuaXplciIsInJvb3QiLCJpbmNsdWRlIiwidGVycmFmb3JtIiwiY2FzZXMiLCJ0b2tlbiIsImhlcmVkb2MiLCJuZXh0IiwiaGVyZWRvY0JvZHkiLCJ3aGl0ZXNwYWNlIiwiY29tbWVudCIsInN0cmluZyIsInN0cmluZ0luc2lkZUV4cHJlc3Npb24iLCJzdHJpbmdFeHByZXNzaW9uIl0sInNvdXJjZVJvb3QiOiIifQ==