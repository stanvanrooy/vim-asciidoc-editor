/*! For license information please see 5593.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_project_template=self.webpackChunkweb_project_template||[]).push([[5593],{35593:(e,t,n)=>{n.r(t),n.d(t,{conf:()=>i,language:()=>r});var i={wordPattern:/(#?-?\d*\.\d\w*%?)|([@#!.:]?[\w-?]+%?)|[@#!.]/g,comments:{blockComment:["/*","*/"],lineComment:"//"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string","comment"]},{open:"'",close:"'",notIn:["string","comment"]}],surroundingPairs:[{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"},{open:'"',close:'"'},{open:"'",close:"'"}],folding:{markers:{start:new RegExp("^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/"),end:new RegExp("^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/")}}},r={defaultToken:"",tokenPostfix:".less",identifier:"-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",identifierPlus:"-?-?([a-zA-Z:.]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-:.]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",brackets:[{open:"{",close:"}",token:"delimiter.curly"},{open:"[",close:"]",token:"delimiter.bracket"},{open:"(",close:")",token:"delimiter.parenthesis"},{open:"<",close:">",token:"delimiter.angle"}],tokenizer:{root:[{include:"@nestedJSBegin"},["[ \\t\\r\\n]+",""],{include:"@comments"},{include:"@keyword"},{include:"@strings"},{include:"@numbers"},["[*_]?[a-zA-Z\\-\\s]+(?=:.*(;|(\\\\$)))","attribute.name","@attribute"],["url(\\-prefix)?\\(",{token:"tag",next:"@urldeclaration"}],["[{}()\\[\\]]","@brackets"],["[,:;]","delimiter"],["#@identifierPlus","tag.id"],["&","tag"],["\\.@identifierPlus(?=\\()","tag.class","@attribute"],["\\.@identifierPlus","tag.class"],["@identifierPlus","tag"],{include:"@operators"},["@(@identifier(?=[:,\\)]))","variable","@attribute"],["@(@identifier)","variable"],["@","key","@atRules"]],nestedJSBegin:[["``","delimiter.backtick"],["`",{token:"delimiter.backtick",next:"@nestedJSEnd",nextEmbedded:"text/javascript"}]],nestedJSEnd:[["`",{token:"delimiter.backtick",next:"@pop",nextEmbedded:"@pop"}]],operators:[["[<>=\\+\\-\\*\\/\\^\\|\\~]","operator"]],keyword:[["(@[\\s]*import|![\\s]*important|true|false|when|iscolor|isnumber|isstring|iskeyword|isurl|ispixel|ispercentage|isem|hue|saturation|lightness|alpha|lighten|darken|saturate|desaturate|fadein|fadeout|fade|spin|mix|round|ceil|floor|percentage)\\b","keyword"]],urldeclaration:[{include:"@strings"},["[^)\r\n]+","string"],["\\)",{token:"tag",next:"@pop"}]],attribute:[{include:"@nestedJSBegin"},{include:"@comments"},{include:"@strings"},{include:"@numbers"},{include:"@keyword"},["[a-zA-Z\\-]+(?=\\()","attribute.value","@attribute"],[">","operator","@pop"],["@identifier","attribute.value"],{include:"@operators"},["@(@identifier)","variable"],["[)\\}]","@brackets","@pop"],["[{}()\\[\\]>]","@brackets"],["[;]","delimiter","@pop"],["[,=:]","delimiter"],["\\s",""],[".","attribute.value"]],comments:[["\\/\\*","comment","@comment"],["\\/\\/+.*","comment"]],comment:[["\\*\\/","comment","@pop"],[".","comment"]],numbers:[["(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?",{token:"attribute.value.number",next:"@units"}],["#[0-9a-fA-F_]+(?!\\w)","attribute.value.hex"]],units:[["(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?","attribute.value.unit","@pop"]],strings:[['~?"',{token:"string.delimiter",next:"@stringsEndDoubleQuote"}],["~?'",{token:"string.delimiter",next:"@stringsEndQuote"}]],stringsEndDoubleQuote:[['\\\\"',"string"],['"',{token:"string.delimiter",next:"@popall"}],[".","string"]],stringsEndQuote:[["\\\\'","string"],["'",{token:"string.delimiter",next:"@popall"}],[".","string"]],atRules:[{include:"@comments"},{include:"@strings"},["[()]","delimiter"],["[\\{;]","delimiter","@pop"],[".","key"]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLFFBQ3JCLENBQUMsUUFBUyxhQUNWLENBQUMsTUFBTyxJQUNSLENBQUMsSUFBSyxvQkFFUnRCLFNBQVUsQ0FDUixDQUFDLFNBQVUsVUFBVyxZQUN0QixDQUFDLFlBQWEsWUFFaEIrQixRQUFTLENBQ1AsQ0FBQyxTQUFVLFVBQVcsUUFDdEIsQ0FBQyxJQUFLLFlBRVJDLFFBQVMsQ0FDUCxDQUFDLG1DQUFvQyxDQUFFYixNQUFPLHlCQUEwQkksS0FBTSxXQUM5RSxDQUFDLHdCQUF5Qix3QkFFNUJVLE1BQU8sQ0FDTCxDQUNFLHVGQUNBLHVCQUNBLFNBR0pDLFFBQVMsQ0FDUCxDQUFDLE1BQU8sQ0FBRWYsTUFBTyxtQkFBb0JJLEtBQU0sMkJBQzNDLENBQUMsTUFBTyxDQUFFSixNQUFPLG1CQUFvQkksS0FBTSxzQkFFN0NZLHNCQUF1QixDQUNyQixDQUFDLFFBQVMsVUFDVixDQUFDLElBQUssQ0FBRWhCLE1BQU8sbUJBQW9CSSxLQUFNLFlBQ3pDLENBQUMsSUFBSyxXQUVSYSxnQkFBaUIsQ0FDZixDQUFDLFFBQVMsVUFDVixDQUFDLElBQUssQ0FBRWpCLE1BQU8sbUJBQW9CSSxLQUFNLFlBQ3pDLENBQUMsSUFBSyxXQUVSYyxRQUFTLENBQ1AsQ0FBRWYsUUFBUyxhQUNYLENBQUVBLFFBQVMsWUFDWCxDQUFDLE9BQVEsYUFDVCxDQUFDLFNBQVUsWUFBYSxRQUN4QixDQUFDLElBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvbGVzcy9sZXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBDb3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFZlcnNpb246IDAuMzEuMSgzMzc1ODc4NTliMWMxNzEzMTRiNDA1MDMxNzExODhiNmNlYTZhMzJhKVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWljcm9zb2Z0L21vbmFjby1lZGl0b3IvYmxvYi9tYWluL0xJQ0VOU0UudHh0XG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLy8gc3JjL2Jhc2ljLWxhbmd1YWdlcy9sZXNzL2xlc3MudHNcbnZhciBjb25mID0ge1xuICB3b3JkUGF0dGVybjogLygjPy0/XFxkKlxcLlxcZFxcdyolPyl8KFtAIyEuOl0/W1xcdy0/XSslPyl8W0AjIS5dL2csXG4gIGNvbW1lbnRzOiB7XG4gICAgYmxvY2tDb21tZW50OiBbXCIvKlwiLCBcIiovXCJdLFxuICAgIGxpbmVDb21tZW50OiBcIi8vXCJcbiAgfSxcbiAgYnJhY2tldHM6IFtcbiAgICBbXCJ7XCIsIFwifVwiXSxcbiAgICBbXCJbXCIsIFwiXVwiXSxcbiAgICBbXCIoXCIsIFwiKVwiXVxuICBdLFxuICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgeyBvcGVuOiBcIntcIiwgY2xvc2U6IFwifVwiLCBub3RJbjogW1wic3RyaW5nXCIsIFwiY29tbWVudFwiXSB9LFxuICAgIHsgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiwgbm90SW46IFtcInN0cmluZ1wiLCBcImNvbW1lbnRcIl0gfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIsIG5vdEluOiBbXCJzdHJpbmdcIiwgXCJjb21tZW50XCJdIH0sXG4gICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFtcInN0cmluZ1wiLCBcImNvbW1lbnRcIl0gfSxcbiAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIsIG5vdEluOiBbXCJzdHJpbmdcIiwgXCJjb21tZW50XCJdIH1cbiAgXSxcbiAgc3Vycm91bmRpbmdQYWlyczogW1xuICAgIHsgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiB9LFxuICAgIHsgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiB9LFxuICAgIHsgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9LFxuICAgIHsgb3BlbjogJ1wiJywgY2xvc2U6ICdcIicgfSxcbiAgICB7IG9wZW46IFwiJ1wiLCBjbG9zZTogXCInXCIgfVxuICBdLFxuICBmb2xkaW5nOiB7XG4gICAgbWFya2Vyczoge1xuICAgICAgc3RhcnQ6IG5ldyBSZWdFeHAoXCJeXFxcXHMqXFxcXC9cXFxcKlxcXFxzKiNyZWdpb25cXFxcYlxcXFxzKiguKj8pXFxcXHMqXFxcXCpcXFxcL1wiKSxcbiAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccypcXFxcL1xcXFwqXFxcXHMqI2VuZHJlZ2lvblxcXFxiLipcXFxcKlxcXFwvXCIpXG4gICAgfVxuICB9XG59O1xudmFyIGxhbmd1YWdlID0ge1xuICBkZWZhdWx0VG9rZW46IFwiXCIsXG4gIHRva2VuUG9zdGZpeDogXCIubGVzc1wiLFxuICBpZGVudGlmaWVyOiBcIi0/LT8oW2EtekEtWl18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKFtcXFxcd1xcXFwtXXwoXFxcXFxcXFwoKFswLTlhLWZBLUZdezEsNn1cXFxccz8pfFteWzAtOWEtZkEtRl0pKSkqXCIsXG4gIGlkZW50aWZpZXJQbHVzOiBcIi0/LT8oW2EtekEtWjouXXwoXFxcXFxcXFwoKFswLTlhLWZBLUZdezEsNn1cXFxccz8pfFteWzAtOWEtZkEtRl0pKSkoW1xcXFx3XFxcXC06Ll18KFxcXFxcXFxcKChbMC05YS1mQS1GXXsxLDZ9XFxcXHM/KXxbXlswLTlhLWZBLUZdKSkpKlwiLFxuICBicmFja2V0czogW1xuICAgIHsgb3BlbjogXCJ7XCIsIGNsb3NlOiBcIn1cIiwgdG9rZW46IFwiZGVsaW1pdGVyLmN1cmx5XCIgfSxcbiAgICB7IG9wZW46IFwiW1wiLCBjbG9zZTogXCJdXCIsIHRva2VuOiBcImRlbGltaXRlci5icmFja2V0XCIgfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIsIHRva2VuOiBcImRlbGltaXRlci5wYXJlbnRoZXNpc1wiIH0sXG4gICAgeyBvcGVuOiBcIjxcIiwgY2xvc2U6IFwiPlwiLCB0b2tlbjogXCJkZWxpbWl0ZXIuYW5nbGVcIiB9XG4gIF0sXG4gIHRva2VuaXplcjoge1xuICAgIHJvb3Q6IFtcbiAgICAgIHsgaW5jbHVkZTogXCJAbmVzdGVkSlNCZWdpblwiIH0sXG4gICAgICBbXCJbIFxcXFx0XFxcXHJcXFxcbl0rXCIsIFwiXCJdLFxuICAgICAgeyBpbmNsdWRlOiBcIkBjb21tZW50c1wiIH0sXG4gICAgICB7IGluY2x1ZGU6IFwiQGtleXdvcmRcIiB9LFxuICAgICAgeyBpbmNsdWRlOiBcIkBzdHJpbmdzXCIgfSxcbiAgICAgIHsgaW5jbHVkZTogXCJAbnVtYmVyc1wiIH0sXG4gICAgICBbXCJbKl9dP1thLXpBLVpcXFxcLVxcXFxzXSsoPz06LiooO3woXFxcXFxcXFwkKSkpXCIsIFwiYXR0cmlidXRlLm5hbWVcIiwgXCJAYXR0cmlidXRlXCJdLFxuICAgICAgW1widXJsKFxcXFwtcHJlZml4KT9cXFxcKFwiLCB7IHRva2VuOiBcInRhZ1wiLCBuZXh0OiBcIkB1cmxkZWNsYXJhdGlvblwiIH1dLFxuICAgICAgW1wiW3t9KClcXFxcW1xcXFxdXVwiLCBcIkBicmFja2V0c1wiXSxcbiAgICAgIFtcIlssOjtdXCIsIFwiZGVsaW1pdGVyXCJdLFxuICAgICAgW1wiI0BpZGVudGlmaWVyUGx1c1wiLCBcInRhZy5pZFwiXSxcbiAgICAgIFtcIiZcIiwgXCJ0YWdcIl0sXG4gICAgICBbXCJcXFxcLkBpZGVudGlmaWVyUGx1cyg/PVxcXFwoKVwiLCBcInRhZy5jbGFzc1wiLCBcIkBhdHRyaWJ1dGVcIl0sXG4gICAgICBbXCJcXFxcLkBpZGVudGlmaWVyUGx1c1wiLCBcInRhZy5jbGFzc1wiXSxcbiAgICAgIFtcIkBpZGVudGlmaWVyUGx1c1wiLCBcInRhZ1wiXSxcbiAgICAgIHsgaW5jbHVkZTogXCJAb3BlcmF0b3JzXCIgfSxcbiAgICAgIFtcIkAoQGlkZW50aWZpZXIoPz1bOixcXFxcKV0pKVwiLCBcInZhcmlhYmxlXCIsIFwiQGF0dHJpYnV0ZVwiXSxcbiAgICAgIFtcIkAoQGlkZW50aWZpZXIpXCIsIFwidmFyaWFibGVcIl0sXG4gICAgICBbXCJAXCIsIFwia2V5XCIsIFwiQGF0UnVsZXNcIl1cbiAgICBdLFxuICAgIG5lc3RlZEpTQmVnaW46IFtcbiAgICAgIFtcImBgXCIsIFwiZGVsaW1pdGVyLmJhY2t0aWNrXCJdLFxuICAgICAgW1xuICAgICAgICBcImBcIixcbiAgICAgICAge1xuICAgICAgICAgIHRva2VuOiBcImRlbGltaXRlci5iYWNrdGlja1wiLFxuICAgICAgICAgIG5leHQ6IFwiQG5lc3RlZEpTRW5kXCIsXG4gICAgICAgICAgbmV4dEVtYmVkZGVkOiBcInRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICBdLFxuICAgIG5lc3RlZEpTRW5kOiBbXG4gICAgICBbXG4gICAgICAgIFwiYFwiLFxuICAgICAgICB7XG4gICAgICAgICAgdG9rZW46IFwiZGVsaW1pdGVyLmJhY2t0aWNrXCIsXG4gICAgICAgICAgbmV4dDogXCJAcG9wXCIsXG4gICAgICAgICAgbmV4dEVtYmVkZGVkOiBcIkBwb3BcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgXSxcbiAgICBvcGVyYXRvcnM6IFtbXCJbPD49XFxcXCtcXFxcLVxcXFwqXFxcXC9cXFxcXlxcXFx8XFxcXH5dXCIsIFwib3BlcmF0b3JcIl1dLFxuICAgIGtleXdvcmQ6IFtcbiAgICAgIFtcbiAgICAgICAgXCIoQFtcXFxcc10qaW1wb3J0fCFbXFxcXHNdKmltcG9ydGFudHx0cnVlfGZhbHNlfHdoZW58aXNjb2xvcnxpc251bWJlcnxpc3N0cmluZ3xpc2tleXdvcmR8aXN1cmx8aXNwaXhlbHxpc3BlcmNlbnRhZ2V8aXNlbXxodWV8c2F0dXJhdGlvbnxsaWdodG5lc3N8YWxwaGF8bGlnaHRlbnxkYXJrZW58c2F0dXJhdGV8ZGVzYXR1cmF0ZXxmYWRlaW58ZmFkZW91dHxmYWRlfHNwaW58bWl4fHJvdW5kfGNlaWx8Zmxvb3J8cGVyY2VudGFnZSlcXFxcYlwiLFxuICAgICAgICBcImtleXdvcmRcIlxuICAgICAgXVxuICAgIF0sXG4gICAgdXJsZGVjbGFyYXRpb246IFtcbiAgICAgIHsgaW5jbHVkZTogXCJAc3RyaW5nc1wiIH0sXG4gICAgICBbXCJbXilcXHJcXG5dK1wiLCBcInN0cmluZ1wiXSxcbiAgICAgIFtcIlxcXFwpXCIsIHsgdG9rZW46IFwidGFnXCIsIG5leHQ6IFwiQHBvcFwiIH1dXG4gICAgXSxcbiAgICBhdHRyaWJ1dGU6IFtcbiAgICAgIHsgaW5jbHVkZTogXCJAbmVzdGVkSlNCZWdpblwiIH0sXG4gICAgICB7IGluY2x1ZGU6IFwiQGNvbW1lbnRzXCIgfSxcbiAgICAgIHsgaW5jbHVkZTogXCJAc3RyaW5nc1wiIH0sXG4gICAgICB7IGluY2x1ZGU6IFwiQG51bWJlcnNcIiB9LFxuICAgICAgeyBpbmNsdWRlOiBcIkBrZXl3b3JkXCIgfSxcbiAgICAgIFtcIlthLXpBLVpcXFxcLV0rKD89XFxcXCgpXCIsIFwiYXR0cmlidXRlLnZhbHVlXCIsIFwiQGF0dHJpYnV0ZVwiXSxcbiAgICAgIFtcIj5cIiwgXCJvcGVyYXRvclwiLCBcIkBwb3BcIl0sXG4gICAgICBbXCJAaWRlbnRpZmllclwiLCBcImF0dHJpYnV0ZS52YWx1ZVwiXSxcbiAgICAgIHsgaW5jbHVkZTogXCJAb3BlcmF0b3JzXCIgfSxcbiAgICAgIFtcIkAoQGlkZW50aWZpZXIpXCIsIFwidmFyaWFibGVcIl0sXG4gICAgICBbXCJbKVxcXFx9XVwiLCBcIkBicmFja2V0c1wiLCBcIkBwb3BcIl0sXG4gICAgICBbXCJbe30oKVxcXFxbXFxcXF0+XVwiLCBcIkBicmFja2V0c1wiXSxcbiAgICAgIFtcIls7XVwiLCBcImRlbGltaXRlclwiLCBcIkBwb3BcIl0sXG4gICAgICBbXCJbLD06XVwiLCBcImRlbGltaXRlclwiXSxcbiAgICAgIFtcIlxcXFxzXCIsIFwiXCJdLFxuICAgICAgW1wiLlwiLCBcImF0dHJpYnV0ZS52YWx1ZVwiXVxuICAgIF0sXG4gICAgY29tbWVudHM6IFtcbiAgICAgIFtcIlxcXFwvXFxcXCpcIiwgXCJjb21tZW50XCIsIFwiQGNvbW1lbnRcIl0sXG4gICAgICBbXCJcXFxcL1xcXFwvKy4qXCIsIFwiY29tbWVudFwiXVxuICAgIF0sXG4gICAgY29tbWVudDogW1xuICAgICAgW1wiXFxcXCpcXFxcL1wiLCBcImNvbW1lbnRcIiwgXCJAcG9wXCJdLFxuICAgICAgW1wiLlwiLCBcImNvbW1lbnRcIl1cbiAgICBdLFxuICAgIG51bWJlcnM6IFtcbiAgICAgIFtcIihcXFxcZCpcXFxcLik/XFxcXGQrKFtlRV1bXFxcXC0rXT9cXFxcZCspP1wiLCB7IHRva2VuOiBcImF0dHJpYnV0ZS52YWx1ZS5udW1iZXJcIiwgbmV4dDogXCJAdW5pdHNcIiB9XSxcbiAgICAgIFtcIiNbMC05YS1mQS1GX10rKD8hXFxcXHcpXCIsIFwiYXR0cmlidXRlLnZhbHVlLmhleFwiXVxuICAgIF0sXG4gICAgdW5pdHM6IFtcbiAgICAgIFtcbiAgICAgICAgXCIoZW18ZXh8Y2h8cmVtfHZtaW58dm1heHx2d3x2aHx2bXxjbXxtbXxpbnxweHxwdHxwY3xkZWd8Z3JhZHxyYWR8dHVybnxzfG1zfEh6fGtIenwlKT9cIixcbiAgICAgICAgXCJhdHRyaWJ1dGUudmFsdWUudW5pdFwiLFxuICAgICAgICBcIkBwb3BcIlxuICAgICAgXVxuICAgIF0sXG4gICAgc3RyaW5nczogW1xuICAgICAgWyd+P1wiJywgeyB0b2tlbjogXCJzdHJpbmcuZGVsaW1pdGVyXCIsIG5leHQ6IFwiQHN0cmluZ3NFbmREb3VibGVRdW90ZVwiIH1dLFxuICAgICAgW1wifj8nXCIsIHsgdG9rZW46IFwic3RyaW5nLmRlbGltaXRlclwiLCBuZXh0OiBcIkBzdHJpbmdzRW5kUXVvdGVcIiB9XVxuICAgIF0sXG4gICAgc3RyaW5nc0VuZERvdWJsZVF1b3RlOiBbXG4gICAgICBbJ1xcXFxcXFxcXCInLCBcInN0cmluZ1wiXSxcbiAgICAgIFsnXCInLCB7IHRva2VuOiBcInN0cmluZy5kZWxpbWl0ZXJcIiwgbmV4dDogXCJAcG9wYWxsXCIgfV0sXG4gICAgICBbXCIuXCIsIFwic3RyaW5nXCJdXG4gICAgXSxcbiAgICBzdHJpbmdzRW5kUXVvdGU6IFtcbiAgICAgIFtcIlxcXFxcXFxcJ1wiLCBcInN0cmluZ1wiXSxcbiAgICAgIFtcIidcIiwgeyB0b2tlbjogXCJzdHJpbmcuZGVsaW1pdGVyXCIsIG5leHQ6IFwiQHBvcGFsbFwiIH1dLFxuICAgICAgW1wiLlwiLCBcInN0cmluZ1wiXVxuICAgIF0sXG4gICAgYXRSdWxlczogW1xuICAgICAgeyBpbmNsdWRlOiBcIkBjb21tZW50c1wiIH0sXG4gICAgICB7IGluY2x1ZGU6IFwiQHN0cmluZ3NcIiB9LFxuICAgICAgW1wiWygpXVwiLCBcImRlbGltaXRlclwiXSxcbiAgICAgIFtcIltcXFxceztdXCIsIFwiZGVsaW1pdGVyXCIsIFwiQHBvcFwiXSxcbiAgICAgIFtcIi5cIiwgXCJrZXlcIl1cbiAgICBdXG4gIH1cbn07XG5leHBvcnQge1xuICBjb25mLFxuICBsYW5ndWFnZVxufTtcbiJdLCJuYW1lcyI6WyJjb25mIiwid29yZFBhdHRlcm4iLCJjb21tZW50cyIsImJsb2NrQ29tbWVudCIsImxpbmVDb21tZW50IiwiYnJhY2tldHMiLCJhdXRvQ2xvc2luZ1BhaXJzIiwib3BlbiIsImNsb3NlIiwibm90SW4iLCJzdXJyb3VuZGluZ1BhaXJzIiwiZm9sZGluZyIsIm1hcmtlcnMiLCJzdGFydCIsIlJlZ0V4cCIsImVuZCIsImxhbmd1YWdlIiwiZGVmYXVsdFRva2VuIiwidG9rZW5Qb3N0Zml4IiwiaWRlbnRpZmllciIsImlkZW50aWZpZXJQbHVzIiwidG9rZW4iLCJ0b2tlbml6ZXIiLCJyb290IiwiaW5jbHVkZSIsIm5leHQiLCJuZXN0ZWRKU0JlZ2luIiwibmV4dEVtYmVkZGVkIiwibmVzdGVkSlNFbmQiLCJvcGVyYXRvcnMiLCJrZXl3b3JkIiwidXJsZGVjbGFyYXRpb24iLCJhdHRyaWJ1dGUiLCJjb21tZW50IiwibnVtYmVycyIsInVuaXRzIiwic3RyaW5ncyIsInN0cmluZ3NFbmREb3VibGVRdW90ZSIsInN0cmluZ3NFbmRRdW90ZSIsImF0UnVsZXMiXSwic291cmNlUm9vdCI6IiJ9