/**
 * html替换
 * @param text
 */
function htmlEscape(text){
    return text.replace(/[<>&/g,function(match,pos,originalText){
        switch (match){
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
        }
    })
}