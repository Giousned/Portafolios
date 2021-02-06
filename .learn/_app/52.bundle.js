(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{539:function(e,t,n){"use strict";n.r(t);var r,i,o,a,u,s,c,f,d,l,g,h,m,p,v,b=monaco.Promise,k=function(){function e(e){var t=this;this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval((function(){return t._checkIfIdle()}),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((function(){return t._stopWorker()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()},e.prototype._checkIfIdle=function(){this._worker&&(Date.now()-this._lastUsedTime>12e4&&this._stopWorker())},e.prototype._getClient=function(){return this._lastUsedTime=Date.now(),this._client||(this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/json/jsonWorker",label:this._defaults.languageId,createData:{languageSettings:this._defaults.diagnosticsOptions,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return y(this._getClient().then((function(t){e=t})).then((function(e){return t._worker.withSyncedResources(n)})).then((function(t){return e})))},e}();function y(e){var t,n,r=new b((function(e,r){t=e,n=r}),(function(){}));return e.then(t,n),r}!function(e){e.create=function(e,t){return{line:e,character:t}},e.is=function(e){var t=e;return $.objectLiteral(t)&&$.number(t.line)&&$.number(t.character)}}(r||(r={})),function(e){e.create=function(e,t,n,i){if($.number(e)&&$.number(t)&&$.number(n)&&$.number(i))return{start:r.create(e,t),end:r.create(n,i)};if(r.is(e)&&r.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+i+"]")},e.is=function(e){var t=e;return $.objectLiteral(t)&&r.is(t.start)&&r.is(t.end)}}(i||(i={})),function(e){e.create=function(e,t){return{uri:e,range:t}},e.is=function(e){var t=e;return $.defined(t)&&i.is(t.range)&&($.string(t.uri)||$.undefined(t.uri))}}(o||(o={})),function(e){e.create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},e.is=function(e){var t=e;return $.number(t.red)&&$.number(t.green)&&$.number(t.blue)&&$.number(t.alpha)}}(a||(a={})),function(e){e.create=function(e,t){return{range:e,color:t}},e.is=function(e){var t=e;return i.is(t.range)&&a.is(t.color)}}(u||(u={})),function(e){e.create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},e.is=function(e){var t=e;return $.string(t.label)&&($.undefined(t.textEdit)||m.is(t))&&($.undefined(t.additionalTextEdits)||$.typedArray(t.additionalTextEdits,m.is))}}(s||(s={})),function(e){e.Comment="comment",e.Imports="imports",e.Region="region"}(c||(c={})),function(e){e.create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return $.defined(n)&&(o.startCharacter=n),$.defined(r)&&(o.endCharacter=r),$.defined(i)&&(o.kind=i),o},e.is=function(e){var t=e;return $.number(t.startLine)&&$.number(t.startLine)&&($.undefined(t.startCharacter)||$.number(t.startCharacter))&&($.undefined(t.endCharacter)||$.number(t.endCharacter))&&($.undefined(t.kind)||$.string(t.kind))}}(f||(f={})),function(e){e.create=function(e,t){return{location:e,message:t}},e.is=function(e){var t=e;return $.defined(t)&&o.is(t.location)&&$.string(t.message)}}(d||(d={})),function(e){e.Error=1,e.Warning=2,e.Information=3,e.Hint=4}(l||(l={})),function(e){e.create=function(e,t,n,r,i,o){var a={range:e,message:t};return $.defined(n)&&(a.severity=n),$.defined(r)&&(a.code=r),$.defined(i)&&(a.source=i),$.defined(o)&&(a.relatedInformation=o),a},e.is=function(e){var t=e;return $.defined(t)&&i.is(t.range)&&$.string(t.message)&&($.number(t.severity)||$.undefined(t.severity))&&($.number(t.code)||$.string(t.code)||$.undefined(t.code))&&($.string(t.source)||$.undefined(t.source))&&($.undefined(t.relatedInformation)||$.typedArray(t.relatedInformation,d.is))}}(g||(g={})),function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return $.defined(n)&&n.length>0&&(i.arguments=n),i},e.is=function(e){var t=e;return $.defined(t)&&$.string(t.title)&&$.string(t.command)}}(h||(h={})),function(e){e.replace=function(e,t){return{range:e,newText:t}},e.insert=function(e,t){return{range:{start:e,end:e},newText:t}},e.del=function(e){return{range:e,newText:""}},e.is=function(e){var t=e;return $.objectLiteral(t)&&$.string(t.newText)&&i.is(t.range)}}(m||(m={})),function(e){e.create=function(e,t){return{textDocument:e,edits:t}},e.is=function(e){var t=e;return $.defined(t)&&_.is(t.textDocument)&&Array.isArray(t.edits)}}(p||(p={})),function(e){e.is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||$.typedArray(t.documentChanges,p.is))}}(v||(v={}));var C,_,w,x,E,S,I,A,T,M,P,j,F,L,O,R,D,W=function(){function e(e){this.edits=e}return e.prototype.insert=function(e,t){this.edits.push(m.insert(e,t))},e.prototype.replace=function(e,t){this.edits.push(m.replace(e,t))},e.prototype.delete=function(e){this.edits.push(m.del(e))},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),e&&(this._workspaceEdit=e,e.documentChanges?e.documentChanges.forEach((function(e){var n=new W(e.edits);t._textEditChanges[e.textDocument.uri]=n})):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new W(e.changes[n]);t._textEditChanges[n]=r})))}Object.defineProperty(e.prototype,"edit",{get:function(){return this._workspaceEdit},enumerable:!0,configurable:!0}),e.prototype.getTextEditChange=function(e){if(_.is(e)){if(this._workspaceEdit||(this._workspaceEdit={documentChanges:[]}),!this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for versioned document changes.");var t=e;if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new W(i),this._textEditChanges[t.uri]=r}return r}if(this._workspaceEdit||(this._workspaceEdit={changes:Object.create(null)}),!this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new W(i),this._textEditChanges[e]=r}return r}}();!function(e){e.create=function(e){return{uri:e}},e.is=function(e){var t=e;return $.defined(t)&&$.string(t.uri)}}(C||(C={})),function(e){e.create=function(e,t){return{uri:e,version:t}},e.is=function(e){var t=e;return $.defined(t)&&$.string(t.uri)&&$.number(t.version)}}(_||(_={})),function(e){e.create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},e.is=function(e){var t=e;return $.defined(t)&&$.string(t.uri)&&$.string(t.languageId)&&$.number(t.version)&&$.string(t.text)}}(w||(w={})),function(e){e.PlainText="plaintext",e.Markdown="markdown"}(x||(x={})),function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(x||(x={})),function(e){e.is=function(e){var t=e;return $.objectLiteral(e)&&x.is(t.kind)&&$.string(t.value)}}(E||(E={})),function(e){e.Text=1,e.Method=2,e.Function=3,e.Constructor=4,e.Field=5,e.Variable=6,e.Class=7,e.Interface=8,e.Module=9,e.Property=10,e.Unit=11,e.Value=12,e.Enum=13,e.Keyword=14,e.Snippet=15,e.Color=16,e.File=17,e.Reference=18,e.Folder=19,e.EnumMember=20,e.Constant=21,e.Struct=22,e.Event=23,e.Operator=24,e.TypeParameter=25}(S||(S={})),function(e){e.PlainText=1,e.Snippet=2}(I||(I={})),function(e){e.create=function(e){return{label:e}}}(A||(A={})),function(e){e.create=function(e,t){return{items:e||[],isIncomplete:!!t}}}(T||(T={})),function(e){e.fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},e.is=function(e){var t=e;return $.string(t)||$.objectLiteral(t)&&$.string(t.language)&&$.string(t.value)}}(M||(M={})),function(e){e.is=function(e){var t=e;return $.objectLiteral(t)&&(E.is(t.contents)||M.is(t.contents)||$.typedArray(t.contents,M.is))&&(void 0===e.range||i.is(e.range))}}(P||(P={})),function(e){e.create=function(e,t){return t?{label:e,documentation:t}:{label:e}}}(j||(j={})),function(e){e.create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return $.defined(t)&&(i.documentation=t),$.defined(n)?i.parameters=n:i.parameters=[],i}}(F||(F={})),function(e){e.Text=1,e.Read=2,e.Write=3}(L||(L={})),function(e){e.create=function(e,t){var n={range:e};return $.number(t)&&(n.kind=t),n}}(O||(O={})),function(e){e.File=1,e.Module=2,e.Namespace=3,e.Package=4,e.Class=5,e.Method=6,e.Property=7,e.Field=8,e.Constructor=9,e.Enum=10,e.Interface=11,e.Function=12,e.Variable=13,e.Constant=14,e.String=15,e.Number=16,e.Boolean=17,e.Array=18,e.Object=19,e.Key=20,e.Null=21,e.EnumMember=22,e.Struct=23,e.Event=24,e.Operator=25,e.TypeParameter=26}(R||(R={})),function(e){e.create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o}}(D||(D={}));var N,V,K,U,z,H=function(){};!function(e){e.create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},e.is=function(e){var t=e;return t&&$.string(t.name)&&$.string(t.detail)&&$.number(t.kind)&&i.is(t.range)&&i.is(t.selectionRange)&&(void 0===t.deprecated||$.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))}}(H||(H={})),function(e){e.QuickFix="quickfix",e.Refactor="refactor",e.RefactorExtract="refactor.extract",e.RefactorInline="refactor.inline",e.RefactorRewrite="refactor.rewrite",e.Source="source",e.SourceOrganizeImports="source.organizeImports"}(N||(N={})),function(e){e.create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},e.is=function(e){var t=e;return $.defined(t)&&$.typedArray(t.diagnostics,g.is)&&(void 0===t.only||$.typedArray(t.only,$.string))}}(V||(V={})),function(e){e.create=function(e,t,n){var r={title:e};return h.is(t)?r.command=t:r.edit=t,void 0!==n&&(r.kind=n),r},e.is=function(e){var t=e;return t&&$.string(t.title)&&(void 0===t.diagnostics||$.typedArray(t.diagnostics,g.is))&&(void 0===t.kind||$.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||h.is(t.command))&&(void 0===t.edit||v.is(t.edit))}}(K||(K={})),function(e){e.create=function(e,t){var n={range:e};return $.defined(t)&&(n.data=t),n},e.is=function(e){var t=e;return $.defined(t)&&i.is(t.range)&&($.undefined(t.command)||h.is(t.command))}}(U||(U={})),function(e){e.create=function(e,t){return{tabSize:e,insertSpaces:t}},e.is=function(e){var t=e;return $.defined(t)&&$.number(t.tabSize)&&$.boolean(t.insertSpaces)}}(z||(z={}));var q=function(){};!function(e){e.create=function(e,t,n){return{range:e,target:t,data:n}},e.is=function(e){var t=e;return $.defined(t)&&i.is(t.range)&&($.undefined(t.target)||$.string(t.target))}}(q||(q={}));var B,J;!function(e){e.create=function(e,t,n,r){return new Q(e,t,n,r)},e.is=function(e){var t=e;return!!($.defined(t)&&$.string(t.uri)&&($.undefined(t.languageId)||$.string(t.languageId))&&$.number(t.lineCount)&&$.func(t.getText)&&$.func(t.positionAt)&&$.func(t.offsetAt))},e.applyEdits=function(e,t){for(var n=e.getText(),r=function e(t,n){if(t.length<=1)return t;var r=t.length/2|0,i=t.slice(0,r),o=t.slice(r);e(i,n),e(o,n);var a=0,u=0,s=0;for(;a<i.length&&u<o.length;){var c=n(i[a],o[u]);t[s++]=c<=0?i[a++]:o[u++]}for(;a<i.length;)t[s++]=i[a++];for(;u<o.length;)t[s++]=o[u++];return t}(t,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),i=n.length,o=r.length-1;o>=0;o--){var a=r[o],u=e.offsetAt(a.range.start),s=e.offsetAt(a.range.end);if(!(s<=i))throw new Error("Ovelapping edit");n=n.substring(0,u)+a.newText+n.substring(s,n.length),i=u}return n}}(B||(B={})),function(e){e.Manual=1,e.AfterDelay=2,e.FocusOut=3}(J||(J={}));var $,Q=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=null}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!0,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=null},e.prototype.getLineOffsets=function(){if(null===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,i=t.length;if(0===i)return r.create(0,e);for(;n<i;){var o=Math.floor((n+i)/2);t[o]>e?i=o:n=o+1}var a=n-1;return r.create(a,e-t[a])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!0,configurable:!0}),e}();!function(e){var t=Object.prototype.toString;e.defined=function(e){return void 0!==e},e.undefined=function(e){return void 0===e},e.boolean=function(e){return!0===e||!1===e},e.string=function(e){return"[object String]"===t.call(e)},e.number=function(e){return"[object Number]"===t.call(e)},e.func=function(e){return"[object Function]"===t.call(e)},e.objectLiteral=function(e){return null!==e&&"object"==typeof e},e.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)}}($||($={}));monaco.Uri;var G=monaco.Range,X=function(){function e(e,t,n){var r=this;this._languageId=e,this._worker=t,this._disposables=[],this._listener=Object.create(null);var i=function(e){var t,n=e.getModeId();n===r._languageId&&(r._listener[e.uri.toString()]=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout((function(){return r._doValidate(e.uri,n)}),500)})),r._doValidate(e.uri,n))},o=function(e){monaco.editor.setModelMarkers(e,r._languageId,[]);var t=e.uri.toString(),n=r._listener[t];n&&(n.dispose(),delete r._listener[t])};this._disposables.push(monaco.editor.onDidCreateModel(i)),this._disposables.push(monaco.editor.onWillDisposeModel((function(e){o(e),r._resetSchema(e.uri)}))),this._disposables.push(monaco.editor.onDidChangeModelLanguage((function(e){o(e.model),i(e.model),r._resetSchema(e.model.uri)}))),this._disposables.push(n.onDidChange((function(e){monaco.editor.getModels().forEach((function(e){e.getModeId()===r._languageId&&(o(e),i(e))}))}))),this._disposables.push({dispose:function(){for(var e in monaco.editor.getModels().forEach(o),r._listener)r._listener[e].dispose()}}),monaco.editor.getModels().forEach(i)}return e.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},e.prototype._resetSchema=function(e){this._worker().then((function(t){t.resetSchema(e.toString())}))},e.prototype._doValidate=function(e,t){this._worker(e).then((function(n){return n.doValidation(e.toString()).then((function(n){var r=n.map((function(e){return n="number"==typeof(t=e).code?String(t.code):t.code,{severity:Y(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source};var t,n})),i=monaco.editor.getModel(e);i.getModeId()===t&&monaco.editor.setModelMarkers(i,t,r)}))})).then(void 0,(function(e){console.error(e)}))},e}();function Y(e){switch(e){case l.Error:return monaco.MarkerSeverity.Error;case l.Warning:return monaco.MarkerSeverity.Warning;case l.Information:return monaco.MarkerSeverity.Info;case l.Hint:return monaco.MarkerSeverity.Hint;default:return monaco.MarkerSeverity.Info}}function Z(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function ee(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function te(e){if(e)return new G(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function ne(e){var t=monaco.languages.CompletionItemKind;switch(e){case S.Text:return t.Text;case S.Method:return t.Method;case S.Function:return t.Function;case S.Constructor:return t.Constructor;case S.Field:return t.Field;case S.Variable:return t.Variable;case S.Class:return t.Class;case S.Interface:return t.Interface;case S.Module:return t.Module;case S.Property:return t.Property;case S.Unit:return t.Unit;case S.Value:return t.Value;case S.Enum:return t.Enum;case S.Keyword:return t.Keyword;case S.Snippet:return t.Snippet;case S.Color:return t.Color;case S.File:return t.File;case S.Reference:return t.Reference}return t.Property}function re(e){if(e)return{range:te(e.range),text:e.newText}}var ie=function(){function e(e){this._worker=e}return Object.defineProperty(e.prototype,"triggerCharacters",{get:function(){return[" ",":"]},enumerable:!0,configurable:!0}),e.prototype.provideCompletionItems=function(e,t,n){e.getWordUntilPosition(t);var r=e.uri;return me(n,this._worker(r).then((function(e){return e.doComplete(r.toString(),Z(t))})).then((function(e){if(e){var t=e.items.map((function(e){var t={label:e.label,insertText:e.insertText,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,kind:ne(e.kind)};return e.textEdit&&(t.range=te(e.textEdit.range),t.insertText=e.textEdit.newText),e.insertTextFormat===I.Snippet&&(t.insertText={value:t.insertText}),t}));return{isIncomplete:e.isIncomplete,items:t}}})))},e}();function oe(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function ae(e){if(e)return Array.isArray(e)?e.map(oe):[oe(e)]}var ue=function(){function e(e){this._worker=e}return e.prototype.provideHover=function(e,t,n){var r=e.uri;return me(n,this._worker(r).then((function(e){return e.doHover(r.toString(),Z(t))})).then((function(e){if(e)return{range:te(e.range),contents:ae(e.contents)}})))},e}();function se(e){var t=monaco.languages.SymbolKind;switch(e){case R.File:return t.Array;case R.Module:return t.Module;case R.Namespace:return t.Namespace;case R.Package:return t.Package;case R.Class:return t.Class;case R.Method:return t.Method;case R.Property:return t.Property;case R.Field:return t.Field;case R.Constructor:return t.Constructor;case R.Enum:return t.Enum;case R.Interface:return t.Interface;case R.Function:return t.Function;case R.Variable:return t.Variable;case R.Constant:return t.Constant;case R.String:return t.String;case R.Number:return t.Number;case R.Boolean:return t.Boolean;case R.Array:return t.Array}return t.Function}var ce=function(){function e(e){this._worker=e}return e.prototype.provideDocumentSymbols=function(e,t){var n=e.uri;return me(t,this._worker(n).then((function(e){return e.findDocumentSymbols(n.toString())})).then((function(e){if(e)return e.map((function(e){return{name:e.name,detail:"",containerName:e.containerName,kind:se(e.kind),range:te(e.location.range),selectionRange:te(e.location.range)}}))})))},e}();function fe(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var de=function(){function e(e){this._worker=e}return e.prototype.provideDocumentFormattingEdits=function(e,t,n){var r=e.uri;return me(n,this._worker(r).then((function(e){return e.format(r.toString(),null,fe(t)).then((function(e){if(e&&0!==e.length)return e.map(re)}))})))},e}(),le=function(){function e(e){this._worker=e}return e.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var i=e.uri;return me(r,this._worker(i).then((function(e){return e.format(i.toString(),ee(t),fe(n)).then((function(e){if(e&&0!==e.length)return e.map(re)}))})))},e}(),ge=function(){function e(e){this._worker=e}return e.prototype.provideDocumentColors=function(e,t){var n=e.uri;return me(t,this._worker(n).then((function(e){return e.findDocumentColors(n.toString())})).then((function(e){if(e)return e.map((function(e){return{color:e.color,range:te(e.range)}}))})))},e.prototype.provideColorPresentations=function(e,t,n){var r=e.uri;return me(n,this._worker(r).then((function(e){return e.getColorPresentations(r.toString(),t.color,ee(t.range))})).then((function(e){if(e)return e.map((function(e){var t={label:e.label};return e.textEdit&&(t.textEdit=re(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(re)),t}))})))},e}(),he=function(){function e(e){this._worker=e}return e.prototype.provideFoldingRanges=function(e,t,n){var r=e.uri;return me(n,this._worker(r).then((function(e){return e.provideFoldingRanges(r.toString(),t)})).then((function(e){if(e)return e.map((function(e){var t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case c.Comment:return monaco.languages.FoldingRangeKind.Comment;case c.Imports:return monaco.languages.FoldingRangeKind.Imports;case c.Region:return monaco.languages.FoldingRangeKind.Region}return}(e.kind)),t}))})))},e}();function me(e,t){return t.cancel&&e.onCancellationRequested((function(){return t.cancel()})),t}function pe(e,t){void 0===t&&(t=!1);var n=0,r=e.length,i="",o=0,a=16,u=0;function s(t,r){for(var i=0,o=0;i<t||!r;){var a=e.charCodeAt(n);if(a>=48&&a<=57)o=16*o+a-48;else if(a>=65&&a<=70)o=16*o+a-65+10;else{if(!(a>=97&&a<=102))break;o=16*o+a-97+10}n++,i++}return i<t&&(o=-1),o}function c(){if(i="",u=0,o=n,n>=r)return o=r,a=17;var t=e.charCodeAt(n);if(ve(t)){do{n++,i+=String.fromCharCode(t),t=e.charCodeAt(n)}while(ve(t));return a=15}if(be(t))return n++,i+=String.fromCharCode(t),13===t&&10===e.charCodeAt(n)&&(n++,i+="\n"),a=14;switch(t){case 123:return n++,a=1;case 125:return n++,a=2;case 91:return n++,a=3;case 93:return n++,a=4;case 58:return n++,a=6;case 44:return n++,a=5;case 34:return n++,i=function(){for(var t="",i=n;;){if(n>=r){t+=e.substring(i,n),u=2;break}var o=e.charCodeAt(n);if(34===o){t+=e.substring(i,n),n++;break}if(92!==o){if(o>=0&&o<=31){if(be(o)){t+=e.substring(i,n),u=2;break}u=6}n++}else{if(t+=e.substring(i,n),++n>=r){u=2;break}switch(o=e.charCodeAt(n++)){case 34:t+='"';break;case 92:t+="\\";break;case 47:t+="/";break;case 98:t+="\b";break;case 102:t+="\f";break;case 110:t+="\n";break;case 114:t+="\r";break;case 116:t+="\t";break;case 117:var a=s(4,!0);a>=0?t+=String.fromCharCode(a):u=4;break;default:u=5}i=n}}return t}(),a=10;case 47:var c=n-1;if(47===e.charCodeAt(n+1)){for(n+=2;n<r&&!be(e.charCodeAt(n));)n++;return i=e.substring(c,n),a=12}if(42===e.charCodeAt(n+1)){n+=2;for(var d=!1;n<r;){if(42===e.charCodeAt(n)&&n+1<r&&47===e.charCodeAt(n+1)){n+=2,d=!0;break}n++}return d||(n++,u=1),i=e.substring(c,n),a=13}return i+=String.fromCharCode(t),n++,a=16;case 45:if(i+=String.fromCharCode(t),++n===r||!ke(e.charCodeAt(n)))return a=16;case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return i+=function(){var t=n;if(48===e.charCodeAt(n))n++;else for(n++;n<e.length&&ke(e.charCodeAt(n));)n++;if(n<e.length&&46===e.charCodeAt(n)){if(!(++n<e.length&&ke(e.charCodeAt(n))))return u=3,e.substring(t,n);for(n++;n<e.length&&ke(e.charCodeAt(n));)n++}var r=n;if(n<e.length&&(69===e.charCodeAt(n)||101===e.charCodeAt(n)))if((++n<e.length&&43===e.charCodeAt(n)||45===e.charCodeAt(n))&&n++,n<e.length&&ke(e.charCodeAt(n))){for(n++;n<e.length&&ke(e.charCodeAt(n));)n++;r=n}else u=3;return e.substring(t,r)}(),a=11;default:for(;n<r&&f(t);)n++,t=e.charCodeAt(n);if(o!==n){switch(i=e.substring(o,n)){case"true":return a=8;case"false":return a=9;case"null":return a=7}return a=16}return i+=String.fromCharCode(t),n++,a=16}}function f(e){if(ve(e)||be(e))return!1;switch(e){case 125:case 93:case 123:case 91:case 34:case 58:case 44:case 47:return!1}return!0}return{setPosition:function(e){n=e,i="",o=0,a=16,u=0},getPosition:function(){return n},scan:t?function(){var e;do{e=c()}while(e>=12&&e<=15);return e}:c,getToken:function(){return a},getTokenValue:function(){return i},getTokenOffset:function(){return o},getTokenLength:function(){return n-o},getTokenError:function(){return u}}}function ve(e){return 32===e||9===e||11===e||12===e||160===e||5760===e||e>=8192&&e<=8203||8239===e||8287===e||12288===e||65279===e}function be(e){return 10===e||13===e||8232===e||8233===e}function ke(e){return e>=48&&e<=57}var ye=pe;function Ce(e){return{getInitialState:function(){return new _e(null,null,!1)},tokenize:function(t,n,r,i){return function(e,t,n,r,i){void 0===r&&(r=0);var o=0,a=!1;switch(n.scanError){case 2:t='"'+t,o=1;break;case 1:t="/*"+t,o=2}var u,s,c=ye(t),f=n.lastWasColon;s={tokens:[],endState:n.clone()};for(;;){var d=r+c.getPosition(),l="";if(17===(u=c.scan()))break;if(d===r+c.getPosition())throw new Error("Scanner did not advance, next 3 characters are: "+t.substr(c.getPosition(),3));switch(a&&(d-=o),a=o>0,u){case 1:case 2:l="delimiter.bracket.json",f=!1;break;case 3:case 4:l="delimiter.array.json",f=!1;break;case 6:l="delimiter.colon.json",f=!0;break;case 5:l="delimiter.comma.json",f=!1;break;case 8:case 9:case 7:l="keyword.json",f=!1;break;case 10:l=f?"string.value.json":"string.key.json",f=!1;break;case 11:l="number.json",f=!1}if(e)switch(u){case 12:l="comment.line.json";break;case 13:l="comment.block.json"}s.endState=new _e(n.getStateData(),c.getTokenError(),f),s.tokens.push({startIndex:d,scopes:l})}return s}(e,t,n,r)}}}var _e=function(){function e(e,t,n){this._state=e,this.scanError=t,this.lastWasColon=n}return e.prototype.clone=function(){return new e(this._state,this.scanError,this.lastWasColon)},e.prototype.equals=function(t){return t===this||!!(t&&t instanceof e)&&(this.scanError===t.scanError&&this.lastWasColon===t.lastWasColon)},e.prototype.getStateData=function(){return this._state},e.prototype.setStateData=function(e){this._state=e},e}();function we(e){var t=[],n=new k(e);t.push(n);var r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)},i=e.languageId;t.push(monaco.languages.registerCompletionItemProvider(i,new ie(r))),t.push(monaco.languages.registerHoverProvider(i,new ue(r))),t.push(monaco.languages.registerDocumentSymbolProvider(i,new ce(r))),t.push(monaco.languages.registerDocumentFormattingEditProvider(i,new de(r))),t.push(monaco.languages.registerDocumentRangeFormattingEditProvider(i,new le(r))),t.push(new X(i,r,e)),t.push(monaco.languages.setTokensProvider(i,Ce(!0))),t.push(monaco.languages.setLanguageConfiguration(i,xe)),t.push(monaco.languages.registerColorProvider(i,new ge(r))),t.push(monaco.languages.registerFoldingRangeProvider(i,new he(r)))}n.d(t,"setupMode",(function(){return we}));var xe={wordPattern:/(-?\d*\.\d\w*)|([^\[\{\]\}\:\"\,\s]+)/g,comments:{lineComment:"//",blockComment:["/*","*/"]},brackets:[["{","}"],["[","]"]],autoClosingPairs:[{open:"{",close:"}",notIn:["string"]},{open:"[",close:"]",notIn:["string"]},{open:'"',close:'"',notIn:["string"]}]}}}]);
//# sourceMappingURL=52.bundle.js.map