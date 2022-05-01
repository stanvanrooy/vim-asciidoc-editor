/*! For license information please see 9907.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkweb_project_template=self.webpackChunkweb_project_template||[]).push([[9907],{39907:(e,n,t)=>{t.r(n),t.d(n,{conf:()=>o,language:()=>r});var o={comments:{lineComment:"'",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"],["(",")"],["<",">"],["addhandler","end addhandler"],["class","end class"],["enum","end enum"],["event","end event"],["function","end function"],["get","end get"],["if","end if"],["interface","end interface"],["module","end module"],["namespace","end namespace"],["operator","end operator"],["property","end property"],["raiseevent","end raiseevent"],["removehandler","end removehandler"],["select","end select"],["set","end set"],["structure","end structure"],["sub","end sub"],["synclock","end synclock"],["try","end try"],["while","end while"],["with","end with"],["using","end using"],["do","loop"],["for","next"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string","comment"]},{open:"[",close:"]",notIn:["string","comment"]},{open:"(",close:")",notIn:["string","comment"]},{open:'"',close:'"',notIn:["string","comment"]},{open:"<",close:">",notIn:["string","comment"]}],folding:{markers:{start:new RegExp("^\\s*#Region\\b"),end:new RegExp("^\\s*#End Region\\b")}}},r={defaultToken:"",tokenPostfix:".vb",ignoreCase:!0,brackets:[{token:"delimiter.bracket",open:"{",close:"}"},{token:"delimiter.array",open:"[",close:"]"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.angle",open:"<",close:">"},{token:"keyword.tag-addhandler",open:"addhandler",close:"end addhandler"},{token:"keyword.tag-class",open:"class",close:"end class"},{token:"keyword.tag-enum",open:"enum",close:"end enum"},{token:"keyword.tag-event",open:"event",close:"end event"},{token:"keyword.tag-function",open:"function",close:"end function"},{token:"keyword.tag-get",open:"get",close:"end get"},{token:"keyword.tag-if",open:"if",close:"end if"},{token:"keyword.tag-interface",open:"interface",close:"end interface"},{token:"keyword.tag-module",open:"module",close:"end module"},{token:"keyword.tag-namespace",open:"namespace",close:"end namespace"},{token:"keyword.tag-operator",open:"operator",close:"end operator"},{token:"keyword.tag-property",open:"property",close:"end property"},{token:"keyword.tag-raiseevent",open:"raiseevent",close:"end raiseevent"},{token:"keyword.tag-removehandler",open:"removehandler",close:"end removehandler"},{token:"keyword.tag-select",open:"select",close:"end select"},{token:"keyword.tag-set",open:"set",close:"end set"},{token:"keyword.tag-structure",open:"structure",close:"end structure"},{token:"keyword.tag-sub",open:"sub",close:"end sub"},{token:"keyword.tag-synclock",open:"synclock",close:"end synclock"},{token:"keyword.tag-try",open:"try",close:"end try"},{token:"keyword.tag-while",open:"while",close:"end while"},{token:"keyword.tag-with",open:"with",close:"end with"},{token:"keyword.tag-using",open:"using",close:"end using"},{token:"keyword.tag-do",open:"do",close:"loop"},{token:"keyword.tag-for",open:"for",close:"next"}],keywords:["AddHandler","AddressOf","Alias","And","AndAlso","As","Async","Boolean","ByRef","Byte","ByVal","Call","Case","Catch","CBool","CByte","CChar","CDate","CDbl","CDec","Char","CInt","Class","CLng","CObj","Const","Continue","CSByte","CShort","CSng","CStr","CType","CUInt","CULng","CUShort","Date","Decimal","Declare","Default","Delegate","Dim","DirectCast","Do","Double","Each","Else","ElseIf","End","EndIf","Enum","Erase","Error","Event","Exit","False","Finally","For","Friend","Function","Get","GetType","GetXMLNamespace","Global","GoSub","GoTo","Handles","If","Implements","Imports","In","Inherits","Integer","Interface","Is","IsNot","Let","Lib","Like","Long","Loop","Me","Mod","Module","MustInherit","MustOverride","MyBase","MyClass","NameOf","Namespace","Narrowing","New","Next","Not","Nothing","NotInheritable","NotOverridable","Object","Of","On","Operator","Option","Optional","Or","OrElse","Out","Overloads","Overridable","Overrides","ParamArray","Partial","Private","Property","Protected","Public","RaiseEvent","ReadOnly","ReDim","RemoveHandler","Resume","Return","SByte","Select","Set","Shadows","Shared","Short","Single","Static","Step","Stop","String","Structure","Sub","SyncLock","Then","Throw","To","True","Try","TryCast","TypeOf","UInteger","ULong","UShort","Using","Variant","Wend","When","While","Widening","With","WithEvents","WriteOnly","Xor"],tagwords:["If","Sub","Select","Try","Class","Enum","Function","Get","Interface","Module","Namespace","Operator","Set","Structure","Using","While","With","Do","Loop","For","Next","Property","Continue","AddHandler","RemoveHandler","Event","RaiseEvent","SyncLock"],symbols:/[=><!~?;\.,:&|+\-*\/\^%]+/,integersuffix:/U?[DI%L&S@]?/,floatsuffix:/[R#F!]?/,tokenizer:{root:[{include:"@whitespace"},[/next(?!\w)/,{token:"keyword.tag-for"}],[/loop(?!\w)/,{token:"keyword.tag-do"}],[/end\s+(?!for|do)(addhandler|class|enum|event|function|get|if|interface|module|namespace|operator|property|raiseevent|removehandler|select|set|structure|sub|synclock|try|while|with|using)/,{token:"keyword.tag-$1"}],[/[a-zA-Z_]\w*/,{cases:{"@tagwords":{token:"keyword.tag-$0"},"@keywords":{token:"keyword.$0"},"@default":"identifier"}}],[/^\s*#\w+/,"keyword"],[/\d*\d+e([\-+]?\d+)?(@floatsuffix)/,"number.float"],[/\d*\.\d+(e[\-+]?\d+)?(@floatsuffix)/,"number.float"],[/&H[0-9a-f]+(@integersuffix)/,"number.hex"],[/&0[0-7]+(@integersuffix)/,"number.octal"],[/\d+(@integersuffix)/,"number"],[/#.*#/,"number"],[/[{}()\[\]]/,"@brackets"],[/@symbols/,"delimiter"],[/["\u201c\u201d]/,{token:"string.quote",next:"@string"}]],whitespace:[[/[ \t\r\n]+/,""],[/(\'|REM(?!\w)).*$/,"comment"]],string:[[/[^"\u201c\u201d]+/,"string"],[/["\u201c\u201d]{2}/,"string.escape"],[/["\u201c\u201d]C?/,{token:"string.quote",next:"@pop"}]]}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOTkwNy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijt1S0FRQSxJQUFJQSxFQUFPLENBQ1RDLFNBQVUsQ0FDUkMsWUFBYSxJQUNiQyxhQUFjLENBQUMsS0FBTSxPQUV2QkMsU0FBVSxDQUNSLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsSUFBSyxLQUNOLENBQUMsYUFBYyxrQkFDZixDQUFDLFFBQVMsYUFDVixDQUFDLE9BQVEsWUFDVCxDQUFDLFFBQVMsYUFDVixDQUFDLFdBQVksZ0JBQ2IsQ0FBQyxNQUFPLFdBQ1IsQ0FBQyxLQUFNLFVBQ1AsQ0FBQyxZQUFhLGlCQUNkLENBQUMsU0FBVSxjQUNYLENBQUMsWUFBYSxpQkFDZCxDQUFDLFdBQVksZ0JBQ2IsQ0FBQyxXQUFZLGdCQUNiLENBQUMsYUFBYyxrQkFDZixDQUFDLGdCQUFpQixxQkFDbEIsQ0FBQyxTQUFVLGNBQ1gsQ0FBQyxNQUFPLFdBQ1IsQ0FBQyxZQUFhLGlCQUNkLENBQUMsTUFBTyxXQUNSLENBQUMsV0FBWSxnQkFDYixDQUFDLE1BQU8sV0FDUixDQUFDLFFBQVMsYUFDVixDQUFDLE9BQVEsWUFDVCxDQUFDLFFBQVMsYUFDVixDQUFDLEtBQU0sUUFDUCxDQUFDLE1BQU8sU0FFVkMsaUJBQWtCLENBQ2hCLENBQUVDLEtBQU0sSUFBS0MsTUFBTyxJQUFLQyxNQUFPLENBQUMsU0FBVSxZQUMzQyxDQUFFRixLQUFNLElBQUtDLE1BQU8sSUFBS0MsTUFBTyxDQUFDLFNBQVUsWUFDM0MsQ0FBRUYsS0FBTSxJQUFLQyxNQUFPLElBQUtDLE1BQU8sQ0FBQyxTQUFVLFlBQzNDLENBQUVGLEtBQU0sSUFBS0MsTUFBTyxJQUFLQyxNQUFPLENBQUMsU0FBVSxZQUMzQyxDQUFFRixLQUFNLElBQUtDLE1BQU8sSUFBS0MsTUFBTyxDQUFDLFNBQVUsYUFFN0NDLFFBQVMsQ0FDUEMsUUFBUyxDQUNQQyxNQUFPLElBQUlDLE9BQU8sbUJBQ2xCQyxJQUFLLElBQUlELE9BQU8sMEJBSWxCRSxFQUFXLENBQ2JDLGFBQWMsR0FDZEMsYUFBYyxNQUNkQyxZQUFZLEVBQ1piLFNBQVUsQ0FDUixDQUFFYyxNQUFPLG9CQUFxQlosS0FBTSxJQUFLQyxNQUFPLEtBQ2hELENBQUVXLE1BQU8sa0JBQW1CWixLQUFNLElBQUtDLE1BQU8sS0FDOUMsQ0FBRVcsTUFBTyx3QkFBeUJaLEtBQU0sSUFBS0MsTUFBTyxLQUNwRCxDQUFFVyxNQUFPLGtCQUFtQlosS0FBTSxJQUFLQyxNQUFPLEtBQzlDLENBQ0VXLE1BQU8seUJBQ1BaLEtBQU0sYUFDTkMsTUFBTyxrQkFFVCxDQUFFVyxNQUFPLG9CQUFxQlosS0FBTSxRQUFTQyxNQUFPLGFBQ3BELENBQUVXLE1BQU8sbUJBQW9CWixLQUFNLE9BQVFDLE1BQU8sWUFDbEQsQ0FBRVcsTUFBTyxvQkFBcUJaLEtBQU0sUUFBU0MsTUFBTyxhQUNwRCxDQUNFVyxNQUFPLHVCQUNQWixLQUFNLFdBQ05DLE1BQU8sZ0JBRVQsQ0FBRVcsTUFBTyxrQkFBbUJaLEtBQU0sTUFBT0MsTUFBTyxXQUNoRCxDQUFFVyxNQUFPLGlCQUFrQlosS0FBTSxLQUFNQyxNQUFPLFVBQzlDLENBQ0VXLE1BQU8sd0JBQ1BaLEtBQU0sWUFDTkMsTUFBTyxpQkFFVCxDQUFFVyxNQUFPLHFCQUFzQlosS0FBTSxTQUFVQyxNQUFPLGNBQ3RELENBQ0VXLE1BQU8sd0JBQ1BaLEtBQU0sWUFDTkMsTUFBTyxpQkFFVCxDQUNFVyxNQUFPLHVCQUNQWixLQUFNLFdBQ05DLE1BQU8sZ0JBRVQsQ0FDRVcsTUFBTyx1QkFDUFosS0FBTSxXQUNOQyxNQUFPLGdCQUVULENBQ0VXLE1BQU8seUJBQ1BaLEtBQU0sYUFDTkMsTUFBTyxrQkFFVCxDQUNFVyxNQUFPLDRCQUNQWixLQUFNLGdCQUNOQyxNQUFPLHFCQUVULENBQUVXLE1BQU8scUJBQXNCWixLQUFNLFNBQVVDLE1BQU8sY0FDdEQsQ0FBRVcsTUFBTyxrQkFBbUJaLEtBQU0sTUFBT0MsTUFBTyxXQUNoRCxDQUNFVyxNQUFPLHdCQUNQWixLQUFNLFlBQ05DLE1BQU8saUJBRVQsQ0FBRVcsTUFBTyxrQkFBbUJaLEtBQU0sTUFBT0MsTUFBTyxXQUNoRCxDQUNFVyxNQUFPLHVCQUNQWixLQUFNLFdBQ05DLE1BQU8sZ0JBRVQsQ0FBRVcsTUFBTyxrQkFBbUJaLEtBQU0sTUFBT0MsTUFBTyxXQUNoRCxDQUFFVyxNQUFPLG9CQUFxQlosS0FBTSxRQUFTQyxNQUFPLGFBQ3BELENBQUVXLE1BQU8sbUJBQW9CWixLQUFNLE9BQVFDLE1BQU8sWUFDbEQsQ0FBRVcsTUFBTyxvQkFBcUJaLEtBQU0sUUFBU0MsTUFBTyxhQUNwRCxDQUFFVyxNQUFPLGlCQUFrQlosS0FBTSxLQUFNQyxNQUFPLFFBQzlDLENBQUVXLE1BQU8sa0JBQW1CWixLQUFNLE1BQU9DLE1BQU8sU0FFbERZLFNBQVUsQ0FDUixhQUNBLFlBQ0EsUUFDQSxNQUNBLFVBQ0EsS0FDQSxRQUNBLFVBQ0EsUUFDQSxPQUNBLFFBQ0EsT0FDQSxPQUNBLFFBQ0EsUUFDQSxRQUNBLFFBQ0EsUUFDQSxPQUNBLE9BQ0EsT0FDQSxPQUNBLFFBQ0EsT0FDQSxPQUNBLFFBQ0EsV0FDQSxTQUNBLFNBQ0EsT0FDQSxPQUNBLFFBQ0EsUUFDQSxRQUNBLFVBQ0EsT0FDQSxVQUNBLFVBQ0EsVUFDQSxXQUNBLE1BQ0EsYUFDQSxLQUNBLFNBQ0EsT0FDQSxPQUNBLFNBQ0EsTUFDQSxRQUNBLE9BQ0EsUUFDQSxRQUNBLFFBQ0EsT0FDQSxRQUNBLFVBQ0EsTUFDQSxTQUNBLFdBQ0EsTUFDQSxVQUNBLGtCQUNBLFNBQ0EsUUFDQSxPQUNBLFVBQ0EsS0FDQSxhQUNBLFVBQ0EsS0FDQSxXQUNBLFVBQ0EsWUFDQSxLQUNBLFFBQ0EsTUFDQSxNQUNBLE9BQ0EsT0FDQSxPQUNBLEtBQ0EsTUFDQSxTQUNBLGNBQ0EsZUFDQSxTQUNBLFVBQ0EsU0FDQSxZQUNBLFlBQ0EsTUFDQSxPQUNBLE1BQ0EsVUFDQSxpQkFDQSxpQkFDQSxTQUNBLEtBQ0EsS0FDQSxXQUNBLFNBQ0EsV0FDQSxLQUNBLFNBQ0EsTUFDQSxZQUNBLGNBQ0EsWUFDQSxhQUNBLFVBQ0EsVUFDQSxXQUNBLFlBQ0EsU0FDQSxhQUNBLFdBQ0EsUUFDQSxnQkFDQSxTQUNBLFNBQ0EsUUFDQSxTQUNBLE1BQ0EsVUFDQSxTQUNBLFFBQ0EsU0FDQSxTQUNBLE9BQ0EsT0FDQSxTQUNBLFlBQ0EsTUFDQSxXQUNBLE9BQ0EsUUFDQSxLQUNBLE9BQ0EsTUFDQSxVQUNBLFNBQ0EsV0FDQSxRQUNBLFNBQ0EsUUFDQSxVQUNBLE9BQ0EsT0FDQSxRQUNBLFdBQ0EsT0FDQSxhQUNBLFlBQ0EsT0FFRkMsU0FBVSxDQUNSLEtBQ0EsTUFDQSxTQUNBLE1BQ0EsUUFDQSxPQUNBLFdBQ0EsTUFDQSxZQUNBLFNBQ0EsWUFDQSxXQUNBLE1BQ0EsWUFDQSxRQUNBLFFBQ0EsT0FDQSxLQUNBLE9BQ0EsTUFDQSxPQUNBLFdBQ0EsV0FDQSxhQUNBLGdCQUNBLFFBQ0EsYUFDQSxZQUVGQyxRQUFTLDRCQUNUQyxjQUFlLGVBQ2ZDLFlBQWEsVUFDYkMsVUFBVyxDQUNUQyxLQUFNLENBQ0osQ0FBRUMsUUFBUyxlQUNYLENBQUMsYUFBYyxDQUFFUixNQUFPLG9CQUN4QixDQUFDLGFBQWMsQ0FBRUEsTUFBTyxtQkFDeEIsQ0FDRSw2TEFDQSxDQUFFQSxNQUFPLG1CQUVYLENBQ0UsZUFDQSxDQUNFUyxNQUFPLENBQ0wsWUFBYSxDQUFFVCxNQUFPLGtCQUN0QixZQUFhLENBQUVBLE1BQU8sY0FDdEIsV0FBWSxnQkFJbEIsQ0FBQyxXQUFZLFdBQ2IsQ0FBQyxvQ0FBcUMsZ0JBQ3RDLENBQUMsc0NBQXVDLGdCQUN4QyxDQUFDLDhCQUErQixjQUNoQyxDQUFDLDJCQUE0QixnQkFDN0IsQ0FBQyxzQkFBdUIsVUFDeEIsQ0FBQyxPQUFRLFVBQ1QsQ0FBQyxhQUFjLGFBQ2YsQ0FBQyxXQUFZLGFBQ2IsQ0FBQyxrQkFBbUIsQ0FBRUEsTUFBTyxlQUFnQlUsS0FBTSxhQUVyREMsV0FBWSxDQUNWLENBQUMsYUFBYyxJQUNmLENBQUMsb0JBQXFCLFlBRXhCQyxPQUFRLENBQ04sQ0FBQyxvQkFBcUIsVUFDdEIsQ0FBQyxxQkFBc0IsaUJBQ3ZCLENBQUMsb0JBQXFCLENBQUVaLE1BQU8sZUFBZ0JVLEtBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWItcHJvamVjdC10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9tb25hY28tZWRpdG9yL2VzbS92cy9iYXNpYy1sYW5ndWFnZXMvdmIvdmIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIENvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVmVyc2lvbjogMC4zMS4xKDMzNzU4Nzg1OWIxYzE3MTMxNGI0MDUwMzE3MTE4OGI2Y2VhNmEzMmEpXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9taWNyb3NvZnQvbW9uYWNvLWVkaXRvci9ibG9iL21haW4vTElDRU5TRS50eHRcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4vLyBzcmMvYmFzaWMtbGFuZ3VhZ2VzL3ZiL3ZiLnRzXG52YXIgY29uZiA9IHtcbiAgY29tbWVudHM6IHtcbiAgICBsaW5lQ29tbWVudDogXCInXCIsXG4gICAgYmxvY2tDb21tZW50OiBbXCIvKlwiLCBcIiovXCJdXG4gIH0sXG4gIGJyYWNrZXRzOiBbXG4gICAgW1wie1wiLCBcIn1cIl0sXG4gICAgW1wiW1wiLCBcIl1cIl0sXG4gICAgW1wiKFwiLCBcIilcIl0sXG4gICAgW1wiPFwiLCBcIj5cIl0sXG4gICAgW1wiYWRkaGFuZGxlclwiLCBcImVuZCBhZGRoYW5kbGVyXCJdLFxuICAgIFtcImNsYXNzXCIsIFwiZW5kIGNsYXNzXCJdLFxuICAgIFtcImVudW1cIiwgXCJlbmQgZW51bVwiXSxcbiAgICBbXCJldmVudFwiLCBcImVuZCBldmVudFwiXSxcbiAgICBbXCJmdW5jdGlvblwiLCBcImVuZCBmdW5jdGlvblwiXSxcbiAgICBbXCJnZXRcIiwgXCJlbmQgZ2V0XCJdLFxuICAgIFtcImlmXCIsIFwiZW5kIGlmXCJdLFxuICAgIFtcImludGVyZmFjZVwiLCBcImVuZCBpbnRlcmZhY2VcIl0sXG4gICAgW1wibW9kdWxlXCIsIFwiZW5kIG1vZHVsZVwiXSxcbiAgICBbXCJuYW1lc3BhY2VcIiwgXCJlbmQgbmFtZXNwYWNlXCJdLFxuICAgIFtcIm9wZXJhdG9yXCIsIFwiZW5kIG9wZXJhdG9yXCJdLFxuICAgIFtcInByb3BlcnR5XCIsIFwiZW5kIHByb3BlcnR5XCJdLFxuICAgIFtcInJhaXNlZXZlbnRcIiwgXCJlbmQgcmFpc2VldmVudFwiXSxcbiAgICBbXCJyZW1vdmVoYW5kbGVyXCIsIFwiZW5kIHJlbW92ZWhhbmRsZXJcIl0sXG4gICAgW1wic2VsZWN0XCIsIFwiZW5kIHNlbGVjdFwiXSxcbiAgICBbXCJzZXRcIiwgXCJlbmQgc2V0XCJdLFxuICAgIFtcInN0cnVjdHVyZVwiLCBcImVuZCBzdHJ1Y3R1cmVcIl0sXG4gICAgW1wic3ViXCIsIFwiZW5kIHN1YlwiXSxcbiAgICBbXCJzeW5jbG9ja1wiLCBcImVuZCBzeW5jbG9ja1wiXSxcbiAgICBbXCJ0cnlcIiwgXCJlbmQgdHJ5XCJdLFxuICAgIFtcIndoaWxlXCIsIFwiZW5kIHdoaWxlXCJdLFxuICAgIFtcIndpdGhcIiwgXCJlbmQgd2l0aFwiXSxcbiAgICBbXCJ1c2luZ1wiLCBcImVuZCB1c2luZ1wiXSxcbiAgICBbXCJkb1wiLCBcImxvb3BcIl0sXG4gICAgW1wiZm9yXCIsIFwibmV4dFwiXVxuICBdLFxuICBhdXRvQ2xvc2luZ1BhaXJzOiBbXG4gICAgeyBvcGVuOiBcIntcIiwgY2xvc2U6IFwifVwiLCBub3RJbjogW1wic3RyaW5nXCIsIFwiY29tbWVudFwiXSB9LFxuICAgIHsgb3BlbjogXCJbXCIsIGNsb3NlOiBcIl1cIiwgbm90SW46IFtcInN0cmluZ1wiLCBcImNvbW1lbnRcIl0gfSxcbiAgICB7IG9wZW46IFwiKFwiLCBjbG9zZTogXCIpXCIsIG5vdEluOiBbXCJzdHJpbmdcIiwgXCJjb21tZW50XCJdIH0sXG4gICAgeyBvcGVuOiAnXCInLCBjbG9zZTogJ1wiJywgbm90SW46IFtcInN0cmluZ1wiLCBcImNvbW1lbnRcIl0gfSxcbiAgICB7IG9wZW46IFwiPFwiLCBjbG9zZTogXCI+XCIsIG5vdEluOiBbXCJzdHJpbmdcIiwgXCJjb21tZW50XCJdIH1cbiAgXSxcbiAgZm9sZGluZzoge1xuICAgIG1hcmtlcnM6IHtcbiAgICAgIHN0YXJ0OiBuZXcgUmVnRXhwKFwiXlxcXFxzKiNSZWdpb25cXFxcYlwiKSxcbiAgICAgIGVuZDogbmV3IFJlZ0V4cChcIl5cXFxccyojRW5kIFJlZ2lvblxcXFxiXCIpXG4gICAgfVxuICB9XG59O1xudmFyIGxhbmd1YWdlID0ge1xuICBkZWZhdWx0VG9rZW46IFwiXCIsXG4gIHRva2VuUG9zdGZpeDogXCIudmJcIixcbiAgaWdub3JlQ2FzZTogdHJ1ZSxcbiAgYnJhY2tldHM6IFtcbiAgICB7IHRva2VuOiBcImRlbGltaXRlci5icmFja2V0XCIsIG9wZW46IFwie1wiLCBjbG9zZTogXCJ9XCIgfSxcbiAgICB7IHRva2VuOiBcImRlbGltaXRlci5hcnJheVwiLCBvcGVuOiBcIltcIiwgY2xvc2U6IFwiXVwiIH0sXG4gICAgeyB0b2tlbjogXCJkZWxpbWl0ZXIucGFyZW50aGVzaXNcIiwgb3BlbjogXCIoXCIsIGNsb3NlOiBcIilcIiB9LFxuICAgIHsgdG9rZW46IFwiZGVsaW1pdGVyLmFuZ2xlXCIsIG9wZW46IFwiPFwiLCBjbG9zZTogXCI+XCIgfSxcbiAgICB7XG4gICAgICB0b2tlbjogXCJrZXl3b3JkLnRhZy1hZGRoYW5kbGVyXCIsXG4gICAgICBvcGVuOiBcImFkZGhhbmRsZXJcIixcbiAgICAgIGNsb3NlOiBcImVuZCBhZGRoYW5kbGVyXCJcbiAgICB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctY2xhc3NcIiwgb3BlbjogXCJjbGFzc1wiLCBjbG9zZTogXCJlbmQgY2xhc3NcIiB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctZW51bVwiLCBvcGVuOiBcImVudW1cIiwgY2xvc2U6IFwiZW5kIGVudW1cIiB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctZXZlbnRcIiwgb3BlbjogXCJldmVudFwiLCBjbG9zZTogXCJlbmQgZXZlbnRcIiB9LFxuICAgIHtcbiAgICAgIHRva2VuOiBcImtleXdvcmQudGFnLWZ1bmN0aW9uXCIsXG4gICAgICBvcGVuOiBcImZ1bmN0aW9uXCIsXG4gICAgICBjbG9zZTogXCJlbmQgZnVuY3Rpb25cIlxuICAgIH0sXG4gICAgeyB0b2tlbjogXCJrZXl3b3JkLnRhZy1nZXRcIiwgb3BlbjogXCJnZXRcIiwgY2xvc2U6IFwiZW5kIGdldFwiIH0sXG4gICAgeyB0b2tlbjogXCJrZXl3b3JkLnRhZy1pZlwiLCBvcGVuOiBcImlmXCIsIGNsb3NlOiBcImVuZCBpZlwiIH0sXG4gICAge1xuICAgICAgdG9rZW46IFwia2V5d29yZC50YWctaW50ZXJmYWNlXCIsXG4gICAgICBvcGVuOiBcImludGVyZmFjZVwiLFxuICAgICAgY2xvc2U6IFwiZW5kIGludGVyZmFjZVwiXG4gICAgfSxcbiAgICB7IHRva2VuOiBcImtleXdvcmQudGFnLW1vZHVsZVwiLCBvcGVuOiBcIm1vZHVsZVwiLCBjbG9zZTogXCJlbmQgbW9kdWxlXCIgfSxcbiAgICB7XG4gICAgICB0b2tlbjogXCJrZXl3b3JkLnRhZy1uYW1lc3BhY2VcIixcbiAgICAgIG9wZW46IFwibmFtZXNwYWNlXCIsXG4gICAgICBjbG9zZTogXCJlbmQgbmFtZXNwYWNlXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRva2VuOiBcImtleXdvcmQudGFnLW9wZXJhdG9yXCIsXG4gICAgICBvcGVuOiBcIm9wZXJhdG9yXCIsXG4gICAgICBjbG9zZTogXCJlbmQgb3BlcmF0b3JcIlxuICAgIH0sXG4gICAge1xuICAgICAgdG9rZW46IFwia2V5d29yZC50YWctcHJvcGVydHlcIixcbiAgICAgIG9wZW46IFwicHJvcGVydHlcIixcbiAgICAgIGNsb3NlOiBcImVuZCBwcm9wZXJ0eVwiXG4gICAgfSxcbiAgICB7XG4gICAgICB0b2tlbjogXCJrZXl3b3JkLnRhZy1yYWlzZWV2ZW50XCIsXG4gICAgICBvcGVuOiBcInJhaXNlZXZlbnRcIixcbiAgICAgIGNsb3NlOiBcImVuZCByYWlzZWV2ZW50XCJcbiAgICB9LFxuICAgIHtcbiAgICAgIHRva2VuOiBcImtleXdvcmQudGFnLXJlbW92ZWhhbmRsZXJcIixcbiAgICAgIG9wZW46IFwicmVtb3ZlaGFuZGxlclwiLFxuICAgICAgY2xvc2U6IFwiZW5kIHJlbW92ZWhhbmRsZXJcIlxuICAgIH0sXG4gICAgeyB0b2tlbjogXCJrZXl3b3JkLnRhZy1zZWxlY3RcIiwgb3BlbjogXCJzZWxlY3RcIiwgY2xvc2U6IFwiZW5kIHNlbGVjdFwiIH0sXG4gICAgeyB0b2tlbjogXCJrZXl3b3JkLnRhZy1zZXRcIiwgb3BlbjogXCJzZXRcIiwgY2xvc2U6IFwiZW5kIHNldFwiIH0sXG4gICAge1xuICAgICAgdG9rZW46IFwia2V5d29yZC50YWctc3RydWN0dXJlXCIsXG4gICAgICBvcGVuOiBcInN0cnVjdHVyZVwiLFxuICAgICAgY2xvc2U6IFwiZW5kIHN0cnVjdHVyZVwiXG4gICAgfSxcbiAgICB7IHRva2VuOiBcImtleXdvcmQudGFnLXN1YlwiLCBvcGVuOiBcInN1YlwiLCBjbG9zZTogXCJlbmQgc3ViXCIgfSxcbiAgICB7XG4gICAgICB0b2tlbjogXCJrZXl3b3JkLnRhZy1zeW5jbG9ja1wiLFxuICAgICAgb3BlbjogXCJzeW5jbG9ja1wiLFxuICAgICAgY2xvc2U6IFwiZW5kIHN5bmNsb2NrXCJcbiAgICB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctdHJ5XCIsIG9wZW46IFwidHJ5XCIsIGNsb3NlOiBcImVuZCB0cnlcIiB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctd2hpbGVcIiwgb3BlbjogXCJ3aGlsZVwiLCBjbG9zZTogXCJlbmQgd2hpbGVcIiB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctd2l0aFwiLCBvcGVuOiBcIndpdGhcIiwgY2xvc2U6IFwiZW5kIHdpdGhcIiB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctdXNpbmdcIiwgb3BlbjogXCJ1c2luZ1wiLCBjbG9zZTogXCJlbmQgdXNpbmdcIiB9LFxuICAgIHsgdG9rZW46IFwia2V5d29yZC50YWctZG9cIiwgb3BlbjogXCJkb1wiLCBjbG9zZTogXCJsb29wXCIgfSxcbiAgICB7IHRva2VuOiBcImtleXdvcmQudGFnLWZvclwiLCBvcGVuOiBcImZvclwiLCBjbG9zZTogXCJuZXh0XCIgfVxuICBdLFxuICBrZXl3b3JkczogW1xuICAgIFwiQWRkSGFuZGxlclwiLFxuICAgIFwiQWRkcmVzc09mXCIsXG4gICAgXCJBbGlhc1wiLFxuICAgIFwiQW5kXCIsXG4gICAgXCJBbmRBbHNvXCIsXG4gICAgXCJBc1wiLFxuICAgIFwiQXN5bmNcIixcbiAgICBcIkJvb2xlYW5cIixcbiAgICBcIkJ5UmVmXCIsXG4gICAgXCJCeXRlXCIsXG4gICAgXCJCeVZhbFwiLFxuICAgIFwiQ2FsbFwiLFxuICAgIFwiQ2FzZVwiLFxuICAgIFwiQ2F0Y2hcIixcbiAgICBcIkNCb29sXCIsXG4gICAgXCJDQnl0ZVwiLFxuICAgIFwiQ0NoYXJcIixcbiAgICBcIkNEYXRlXCIsXG4gICAgXCJDRGJsXCIsXG4gICAgXCJDRGVjXCIsXG4gICAgXCJDaGFyXCIsXG4gICAgXCJDSW50XCIsXG4gICAgXCJDbGFzc1wiLFxuICAgIFwiQ0xuZ1wiLFxuICAgIFwiQ09ialwiLFxuICAgIFwiQ29uc3RcIixcbiAgICBcIkNvbnRpbnVlXCIsXG4gICAgXCJDU0J5dGVcIixcbiAgICBcIkNTaG9ydFwiLFxuICAgIFwiQ1NuZ1wiLFxuICAgIFwiQ1N0clwiLFxuICAgIFwiQ1R5cGVcIixcbiAgICBcIkNVSW50XCIsXG4gICAgXCJDVUxuZ1wiLFxuICAgIFwiQ1VTaG9ydFwiLFxuICAgIFwiRGF0ZVwiLFxuICAgIFwiRGVjaW1hbFwiLFxuICAgIFwiRGVjbGFyZVwiLFxuICAgIFwiRGVmYXVsdFwiLFxuICAgIFwiRGVsZWdhdGVcIixcbiAgICBcIkRpbVwiLFxuICAgIFwiRGlyZWN0Q2FzdFwiLFxuICAgIFwiRG9cIixcbiAgICBcIkRvdWJsZVwiLFxuICAgIFwiRWFjaFwiLFxuICAgIFwiRWxzZVwiLFxuICAgIFwiRWxzZUlmXCIsXG4gICAgXCJFbmRcIixcbiAgICBcIkVuZElmXCIsXG4gICAgXCJFbnVtXCIsXG4gICAgXCJFcmFzZVwiLFxuICAgIFwiRXJyb3JcIixcbiAgICBcIkV2ZW50XCIsXG4gICAgXCJFeGl0XCIsXG4gICAgXCJGYWxzZVwiLFxuICAgIFwiRmluYWxseVwiLFxuICAgIFwiRm9yXCIsXG4gICAgXCJGcmllbmRcIixcbiAgICBcIkZ1bmN0aW9uXCIsXG4gICAgXCJHZXRcIixcbiAgICBcIkdldFR5cGVcIixcbiAgICBcIkdldFhNTE5hbWVzcGFjZVwiLFxuICAgIFwiR2xvYmFsXCIsXG4gICAgXCJHb1N1YlwiLFxuICAgIFwiR29Ub1wiLFxuICAgIFwiSGFuZGxlc1wiLFxuICAgIFwiSWZcIixcbiAgICBcIkltcGxlbWVudHNcIixcbiAgICBcIkltcG9ydHNcIixcbiAgICBcIkluXCIsXG4gICAgXCJJbmhlcml0c1wiLFxuICAgIFwiSW50ZWdlclwiLFxuICAgIFwiSW50ZXJmYWNlXCIsXG4gICAgXCJJc1wiLFxuICAgIFwiSXNOb3RcIixcbiAgICBcIkxldFwiLFxuICAgIFwiTGliXCIsXG4gICAgXCJMaWtlXCIsXG4gICAgXCJMb25nXCIsXG4gICAgXCJMb29wXCIsXG4gICAgXCJNZVwiLFxuICAgIFwiTW9kXCIsXG4gICAgXCJNb2R1bGVcIixcbiAgICBcIk11c3RJbmhlcml0XCIsXG4gICAgXCJNdXN0T3ZlcnJpZGVcIixcbiAgICBcIk15QmFzZVwiLFxuICAgIFwiTXlDbGFzc1wiLFxuICAgIFwiTmFtZU9mXCIsXG4gICAgXCJOYW1lc3BhY2VcIixcbiAgICBcIk5hcnJvd2luZ1wiLFxuICAgIFwiTmV3XCIsXG4gICAgXCJOZXh0XCIsXG4gICAgXCJOb3RcIixcbiAgICBcIk5vdGhpbmdcIixcbiAgICBcIk5vdEluaGVyaXRhYmxlXCIsXG4gICAgXCJOb3RPdmVycmlkYWJsZVwiLFxuICAgIFwiT2JqZWN0XCIsXG4gICAgXCJPZlwiLFxuICAgIFwiT25cIixcbiAgICBcIk9wZXJhdG9yXCIsXG4gICAgXCJPcHRpb25cIixcbiAgICBcIk9wdGlvbmFsXCIsXG4gICAgXCJPclwiLFxuICAgIFwiT3JFbHNlXCIsXG4gICAgXCJPdXRcIixcbiAgICBcIk92ZXJsb2Fkc1wiLFxuICAgIFwiT3ZlcnJpZGFibGVcIixcbiAgICBcIk92ZXJyaWRlc1wiLFxuICAgIFwiUGFyYW1BcnJheVwiLFxuICAgIFwiUGFydGlhbFwiLFxuICAgIFwiUHJpdmF0ZVwiLFxuICAgIFwiUHJvcGVydHlcIixcbiAgICBcIlByb3RlY3RlZFwiLFxuICAgIFwiUHVibGljXCIsXG4gICAgXCJSYWlzZUV2ZW50XCIsXG4gICAgXCJSZWFkT25seVwiLFxuICAgIFwiUmVEaW1cIixcbiAgICBcIlJlbW92ZUhhbmRsZXJcIixcbiAgICBcIlJlc3VtZVwiLFxuICAgIFwiUmV0dXJuXCIsXG4gICAgXCJTQnl0ZVwiLFxuICAgIFwiU2VsZWN0XCIsXG4gICAgXCJTZXRcIixcbiAgICBcIlNoYWRvd3NcIixcbiAgICBcIlNoYXJlZFwiLFxuICAgIFwiU2hvcnRcIixcbiAgICBcIlNpbmdsZVwiLFxuICAgIFwiU3RhdGljXCIsXG4gICAgXCJTdGVwXCIsXG4gICAgXCJTdG9wXCIsXG4gICAgXCJTdHJpbmdcIixcbiAgICBcIlN0cnVjdHVyZVwiLFxuICAgIFwiU3ViXCIsXG4gICAgXCJTeW5jTG9ja1wiLFxuICAgIFwiVGhlblwiLFxuICAgIFwiVGhyb3dcIixcbiAgICBcIlRvXCIsXG4gICAgXCJUcnVlXCIsXG4gICAgXCJUcnlcIixcbiAgICBcIlRyeUNhc3RcIixcbiAgICBcIlR5cGVPZlwiLFxuICAgIFwiVUludGVnZXJcIixcbiAgICBcIlVMb25nXCIsXG4gICAgXCJVU2hvcnRcIixcbiAgICBcIlVzaW5nXCIsXG4gICAgXCJWYXJpYW50XCIsXG4gICAgXCJXZW5kXCIsXG4gICAgXCJXaGVuXCIsXG4gICAgXCJXaGlsZVwiLFxuICAgIFwiV2lkZW5pbmdcIixcbiAgICBcIldpdGhcIixcbiAgICBcIldpdGhFdmVudHNcIixcbiAgICBcIldyaXRlT25seVwiLFxuICAgIFwiWG9yXCJcbiAgXSxcbiAgdGFnd29yZHM6IFtcbiAgICBcIklmXCIsXG4gICAgXCJTdWJcIixcbiAgICBcIlNlbGVjdFwiLFxuICAgIFwiVHJ5XCIsXG4gICAgXCJDbGFzc1wiLFxuICAgIFwiRW51bVwiLFxuICAgIFwiRnVuY3Rpb25cIixcbiAgICBcIkdldFwiLFxuICAgIFwiSW50ZXJmYWNlXCIsXG4gICAgXCJNb2R1bGVcIixcbiAgICBcIk5hbWVzcGFjZVwiLFxuICAgIFwiT3BlcmF0b3JcIixcbiAgICBcIlNldFwiLFxuICAgIFwiU3RydWN0dXJlXCIsXG4gICAgXCJVc2luZ1wiLFxuICAgIFwiV2hpbGVcIixcbiAgICBcIldpdGhcIixcbiAgICBcIkRvXCIsXG4gICAgXCJMb29wXCIsXG4gICAgXCJGb3JcIixcbiAgICBcIk5leHRcIixcbiAgICBcIlByb3BlcnR5XCIsXG4gICAgXCJDb250aW51ZVwiLFxuICAgIFwiQWRkSGFuZGxlclwiLFxuICAgIFwiUmVtb3ZlSGFuZGxlclwiLFxuICAgIFwiRXZlbnRcIixcbiAgICBcIlJhaXNlRXZlbnRcIixcbiAgICBcIlN5bmNMb2NrXCJcbiAgXSxcbiAgc3ltYm9sczogL1s9Pjwhfj87XFwuLDomfCtcXC0qXFwvXFxeJV0rLyxcbiAgaW50ZWdlcnN1ZmZpeDogL1U/W0RJJUwmU0BdPy8sXG4gIGZsb2F0c3VmZml4OiAvW1IjRiFdPy8sXG4gIHRva2VuaXplcjoge1xuICAgIHJvb3Q6IFtcbiAgICAgIHsgaW5jbHVkZTogXCJAd2hpdGVzcGFjZVwiIH0sXG4gICAgICBbL25leHQoPyFcXHcpLywgeyB0b2tlbjogXCJrZXl3b3JkLnRhZy1mb3JcIiB9XSxcbiAgICAgIFsvbG9vcCg/IVxcdykvLCB7IHRva2VuOiBcImtleXdvcmQudGFnLWRvXCIgfV0sXG4gICAgICBbXG4gICAgICAgIC9lbmRcXHMrKD8hZm9yfGRvKShhZGRoYW5kbGVyfGNsYXNzfGVudW18ZXZlbnR8ZnVuY3Rpb258Z2V0fGlmfGludGVyZmFjZXxtb2R1bGV8bmFtZXNwYWNlfG9wZXJhdG9yfHByb3BlcnR5fHJhaXNlZXZlbnR8cmVtb3ZlaGFuZGxlcnxzZWxlY3R8c2V0fHN0cnVjdHVyZXxzdWJ8c3luY2xvY2t8dHJ5fHdoaWxlfHdpdGh8dXNpbmcpLyxcbiAgICAgICAgeyB0b2tlbjogXCJrZXl3b3JkLnRhZy0kMVwiIH1cbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIC9bYS16QS1aX11cXHcqLyxcbiAgICAgICAge1xuICAgICAgICAgIGNhc2VzOiB7XG4gICAgICAgICAgICBcIkB0YWd3b3Jkc1wiOiB7IHRva2VuOiBcImtleXdvcmQudGFnLSQwXCIgfSxcbiAgICAgICAgICAgIFwiQGtleXdvcmRzXCI6IHsgdG9rZW46IFwia2V5d29yZC4kMFwiIH0sXG4gICAgICAgICAgICBcIkBkZWZhdWx0XCI6IFwiaWRlbnRpZmllclwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgWy9eXFxzKiNcXHcrLywgXCJrZXl3b3JkXCJdLFxuICAgICAgWy9cXGQqXFxkK2UoW1xcLStdP1xcZCspPyhAZmxvYXRzdWZmaXgpLywgXCJudW1iZXIuZmxvYXRcIl0sXG4gICAgICBbL1xcZCpcXC5cXGQrKGVbXFwtK10/XFxkKyk/KEBmbG9hdHN1ZmZpeCkvLCBcIm51bWJlci5mbG9hdFwiXSxcbiAgICAgIFsvJkhbMC05YS1mXSsoQGludGVnZXJzdWZmaXgpLywgXCJudW1iZXIuaGV4XCJdLFxuICAgICAgWy8mMFswLTddKyhAaW50ZWdlcnN1ZmZpeCkvLCBcIm51bWJlci5vY3RhbFwiXSxcbiAgICAgIFsvXFxkKyhAaW50ZWdlcnN1ZmZpeCkvLCBcIm51bWJlclwiXSxcbiAgICAgIFsvIy4qIy8sIFwibnVtYmVyXCJdLFxuICAgICAgWy9be30oKVxcW1xcXV0vLCBcIkBicmFja2V0c1wiXSxcbiAgICAgIFsvQHN5bWJvbHMvLCBcImRlbGltaXRlclwiXSxcbiAgICAgIFsvW1wiXFx1MjAxY1xcdTIwMWRdLywgeyB0b2tlbjogXCJzdHJpbmcucXVvdGVcIiwgbmV4dDogXCJAc3RyaW5nXCIgfV1cbiAgICBdLFxuICAgIHdoaXRlc3BhY2U6IFtcbiAgICAgIFsvWyBcXHRcXHJcXG5dKy8sIFwiXCJdLFxuICAgICAgWy8oXFwnfFJFTSg/IVxcdykpLiokLywgXCJjb21tZW50XCJdXG4gICAgXSxcbiAgICBzdHJpbmc6IFtcbiAgICAgIFsvW15cIlxcdTIwMWNcXHUyMDFkXSsvLCBcInN0cmluZ1wiXSxcbiAgICAgIFsvW1wiXFx1MjAxY1xcdTIwMWRdezJ9LywgXCJzdHJpbmcuZXNjYXBlXCJdLFxuICAgICAgWy9bXCJcXHUyMDFjXFx1MjAxZF1DPy8sIHsgdG9rZW46IFwic3RyaW5nLnF1b3RlXCIsIG5leHQ6IFwiQHBvcFwiIH1dXG4gICAgXVxuICB9XG59O1xuZXhwb3J0IHtcbiAgY29uZixcbiAgbGFuZ3VhZ2Vcbn07XG4iXSwibmFtZXMiOlsiY29uZiIsImNvbW1lbnRzIiwibGluZUNvbW1lbnQiLCJibG9ja0NvbW1lbnQiLCJicmFja2V0cyIsImF1dG9DbG9zaW5nUGFpcnMiLCJvcGVuIiwiY2xvc2UiLCJub3RJbiIsImZvbGRpbmciLCJtYXJrZXJzIiwic3RhcnQiLCJSZWdFeHAiLCJlbmQiLCJsYW5ndWFnZSIsImRlZmF1bHRUb2tlbiIsInRva2VuUG9zdGZpeCIsImlnbm9yZUNhc2UiLCJ0b2tlbiIsImtleXdvcmRzIiwidGFnd29yZHMiLCJzeW1ib2xzIiwiaW50ZWdlcnN1ZmZpeCIsImZsb2F0c3VmZml4IiwidG9rZW5pemVyIiwicm9vdCIsImluY2x1ZGUiLCJjYXNlcyIsIm5leHQiLCJ3aGl0ZXNwYWNlIiwic3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==